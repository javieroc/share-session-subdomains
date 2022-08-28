import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import { QUERY_KEYS } from '../constants';
import { GlobalApi } from '../api';
import { User } from '../types';

function useUsersMe(
  options?: UseQueryOptions<User, unknown, User>,
): UseQueryResult<User, unknown> {
  return useQuery<User>([QUERY_KEYS.USERS, 'me'], () => GlobalApi.validate(), { ...options });
}

export { useUsersMe };
