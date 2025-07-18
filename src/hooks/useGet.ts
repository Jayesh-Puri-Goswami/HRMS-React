// useGet.ts
import { useApi, ApiConfig, UseApiOptions } from './useApi';

export const useGet = <T = any>(
  url: string,
  config: Omit<ApiConfig, 'method'> = {},
  options: UseApiOptions = {}
) => {
  return useApi<T>(url, { ...config, method: 'GET' }, options);
};
