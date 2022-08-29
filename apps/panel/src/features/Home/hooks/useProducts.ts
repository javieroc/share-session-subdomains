import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import { QUERY_KEYS } from '../../../constants';
import { HomeApi } from '../api';
import { Product } from '../types';

function useProducts(
  options?: UseQueryOptions<Product[], unknown, Product[]>,
): UseQueryResult<Product[], unknown> {
  return useQuery<Product[]>(
    [QUERY_KEYS.PRODUCTS],
    () => HomeApi.getProducts(),
    { ...options },
  );
}

export { useProducts };
