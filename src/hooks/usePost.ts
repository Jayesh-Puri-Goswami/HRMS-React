// usePost.ts
import { useApi, ApiConfig, UseApiOptions } from './useApi';

export const usePost = <T = any>(
  url: string,
  config: Omit<ApiConfig, 'method'> = {},
  options: UseApiOptions = {}
) => {
  return useApi<T>(url, { ...config, method: 'POST' }, options);
};
