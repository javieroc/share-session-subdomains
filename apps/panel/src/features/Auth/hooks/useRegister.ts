import { useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useNotification } from '../../../hooks';
import { AuthApi } from '../api';
import { RegisterPayload } from '../types';

function useRegister(
  options?: UseMutationOptions<void, unknown, RegisterPayload, unknown>,
): UseMutationResult<void, unknown, RegisterPayload, unknown> {
  const navigate = useNavigate();
  const notification = useNotification();

  return useMutation((body: RegisterPayload) => AuthApi.register(body), {
    onSuccess: () => {
      notification({
        title: 'Registration successful',
        description: 'Your user account was registered.',
        status: 'success',
      });
      navigate('/auth/login', { replace: true });
    },
    ...options,
  });
}

export { useRegister };
