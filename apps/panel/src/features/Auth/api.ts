import { api } from '../../utils';
import { LoginPayload, RegisterPayload } from './types';

async function login(body: LoginPayload): Promise<void> {
  const { data } = await api.post<void>('/auth/login', body);
  return data;
}

async function logout(): Promise<void> {
  const { data } = await api.post<void>('/auth/logout');
  return data;
}

async function register(body: RegisterPayload): Promise<void> {
  const { data } = await api.post<void>('/auth/register', body);
  return data;
}

export const AuthApi = {
  login,
  logout,
  register,
};
