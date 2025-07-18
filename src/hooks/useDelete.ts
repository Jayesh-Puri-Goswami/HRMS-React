
// useDelete.ts
import { useApi, ApiConfig, UseApiOptions } from './useApi';

export const useDelete = <T = any>(
  url: string,
  config: Omit<ApiConfig, 'method'> = {},
  options: UseApiOptions = {}
) => {
  return useApi<T>(url, { ...config, method: 'DELETE' }, options);
};
