import { useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query';
import { AuthApi } from '../api';

function useLogout(
  options: UseMutationOptions<void, unknown, void> = {},
): UseMutationResult<void, unknown, void> {
  return useMutation(() => AuthApi.logout(), options);
}

export { useLogout };
