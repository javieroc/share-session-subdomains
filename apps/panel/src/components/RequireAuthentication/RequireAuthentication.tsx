import { Navigate } from 'react-router-dom';
import { useUsersMe } from '../../hooks';

interface Props {
  children: React.ReactElement;
}

function RequireAuthentication({ children }: Props): JSX.Element {
  const { data: me, isLoading } = useUsersMe();

  if (isLoading) {
    return <div>...Loading</div>
  }

  return me
    ? children
    : <Navigate to="/auth/login" />;
}

export { RequireAuthentication };
