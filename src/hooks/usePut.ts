// usePut.ts
import { useApi, ApiConfig, UseApiOptions } from './useApi';

export const usePut = <T = any>(
  url: string,
  config: Omit<ApiConfig, 'method'> = {},
  options: UseApiOptions = {}
) => {
  return useApi<T>(url, { ...config, method: 'PUT' }, options);
};