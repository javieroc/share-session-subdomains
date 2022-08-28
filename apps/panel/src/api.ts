import { api } from './utils';
import { User } from './types';

async function validate(): Promise<User> {
  const { data } = await api.get<User>('/auth/profile');
  return data;
}

export const GlobalApi = {
  validate,
};
