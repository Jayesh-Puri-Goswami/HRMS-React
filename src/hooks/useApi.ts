import { useState, useCallback, useRef, useEffect } from 'react';

// Types for API responses
export interface ApiResponse<T = any> {
  data: T | null;
  loading: boolean;
  error: string | null;
  success: boolean;
}

export interface ApiError {
  message: string;
  status?: number;
  code?: string;
}

export interface ApiConfig {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  headers?: Record<string, string>;
  body?: any;
  params?: Record<string, string>;
  timeout?: number;
  retryCount?: number;
  retryDelay?: number;
}

export interface UseApiOptions {
  immediate?: boolean;
  onSuccess?: (data: any) => void;
  onError?: (error: ApiError) => void;
  transform?: (data: any) => any;
}

// Main API Hook
export const useApi = <T = any>(
  url: string,
  config: ApiConfig = {},
  options: UseApiOptions = {}
) => {
  const [state, setState] = useState<ApiResponse<T>>({
    data: null,
    loading: false,
    error: null,
    success: false
  });

  const abortControllerRef = useRef<AbortController | null>(null);

  const {
    immediate = false,
    onSuccess,
    onError,
    transform
  } = options;

  // Build query params
  const buildQueryString = useCallback((params: Record<string, string>) => {
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        searchParams.append(key, value.toString());
      }
    });
    return searchParams.toString();
  }, []);

  // Get auth token (customize based on your auth implementation)
  const getAuthToken = useCallback(() => {
    return localStorage.getItem('token') || sessionStorage.getItem('token');
  }, []);

  // Build request headers
  const buildHeaders = useCallback((customHeaders: Record<string, string> = {}) => {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...customHeaders
    };

    const token = getAuthToken();
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    return headers;
  }, [getAuthToken]);

  // Retry logic
  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const executeRequest = useCallback(async (
    requestUrl: string,
    requestConfig: ApiConfig,
    retryCount = 0
  ): Promise<T> => {
    const {
      method = 'GET',
      headers = {},
      body,
      params,
      timeout = 10000,
      retryCount: maxRetries = 3,
      retryDelay = 1000
    } = requestConfig;

    // Build full URL with query params
    let fullUrl = requestUrl;
    if (params && Object.keys(params).length > 0) {
      const queryString = buildQueryString(params);
      fullUrl = `${requestUrl}${requestUrl.includes('?') ? '&' : '?'}${queryString}`;
    }

    // Create abort controller
    abortControllerRef.current = new AbortController();

    // Set up timeout
    const timeoutId = setTimeout(() => {
      abortControllerRef.current?.abort();
    }, timeout);

    try {
      const response = await fetch(fullUrl, {
        method,
        headers: buildHeaders(headers),
        body: body ? JSON.stringify(body) : undefined,
        signal: abortControllerRef.current.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw {
          message: errorData.message || `HTTP ${response.status}: ${response.statusText}`,
          status: response.status,
          code: errorData.code || 'HTTP_ERROR'
        };
      }

      const data = await response.json();
      return transform ? transform(data) : data;

    } catch (error: any) {
      clearTimeout(timeoutId);

      // Handle abort
      if (error.name === 'AbortError') {
        throw {
          message: 'Request timeout',
          code: 'TIMEOUT'
        };
      }

      // Retry logic for network errors
      if (retryCount < maxRetries && (
        error.code === 'TIMEOUT' ||
        error.status >= 500 ||
        error.message.includes('Failed to fetch')
      )) {
        await sleep(retryDelay * Math.pow(2, retryCount)); // Exponential backoff
        return executeRequest(requestUrl, requestConfig, retryCount + 1);
      }

      throw error;
    }
  }, [buildHeaders, buildQueryString, transform]);

  // Execute API call
  const execute = useCallback(async (
    overrideUrl?: string,
    overrideConfig?: ApiConfig
  ) => {
    const requestUrl = overrideUrl || url;
    const requestConfig = { ...config, ...overrideConfig };

    setState(prev => ({
      ...prev,
      loading: true,
      error: null,
      success: false
    }));

    try {
      const data = await executeRequest(requestUrl, requestConfig);
      
      setState({
        data,
        loading: false,
        error: null,
        success: true
      });

      onSuccess?.(data);
      return data;

    } catch (error: any) {
      const apiError: ApiError = {
        message: error.message || 'An error occurred',
        status: error.status,
        code: error.code || 'UNKNOWN_ERROR'
      };

      setState({
        data: null,
        loading: false,
        error: apiError.message,
        success: false
      });

      onError?.(apiError);
      throw apiError;
    }
  }, [url, config, executeRequest, onSuccess, onError]);

  // Cancel request
  const cancel = useCallback(() => {
    abortControllerRef.current?.abort();
    setState(prev => ({ ...prev, loading: false }));
  }, []);

  // Reset state
  const reset = useCallback(() => {
    setState({
      data: null,
      loading: false,
      error: null,
      success: false
    });
  }, []);

  // Execute immediately if requested
  useEffect(() => {
    if (immediate) {
      execute();
    }
    
    // Cleanup on unmount
    return () => {
      abortControllerRef.current?.abort();
    };
  }, [immediate, execute]);

  return {
    ...state,
    execute,
    cancel,
    reset,
    isLoading: state.loading
  };
};
