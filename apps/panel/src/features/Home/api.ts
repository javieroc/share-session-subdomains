import { api } from '../../utils';
import { Product } from './types';

async function getProducts(): Promise<Product[]> {
  const { data } = await api.get<Product[]>('/products');
  return data;
}

export const HomeApi = {
  getProducts,
};
