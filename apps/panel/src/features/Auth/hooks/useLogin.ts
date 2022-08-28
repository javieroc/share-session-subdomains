import { useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { AuthApi } from '../api';
import { LoginPayload } from '../types';

function useLogin(
  options: UseMutationOptions<void, unknown, LoginPayload> = {},
): UseMutationResult<void, unknown, LoginPayload> {
  const navigate = useNavigate();
  return useMutation((body: LoginPayload) => AuthApi.login(body), {
    onSuccess: () => {
      navigate('/', { replace: true });
    },
    ...options,
  });
}

export { useLogin };
