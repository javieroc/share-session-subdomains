import {
  unstable_HistoryRouter as BrowserHistory,
  Routes,
  Route,
} from 'react-router-dom';
import {
  NotFound,
  Forbidden,
  Home,
} from './features';
import { history } from './history';
import { useUsersMe } from './hooks';

function App() {
  const { isLoading } = useUsersMe({
    retry: 0,
  });

  if (isLoading) {
    return <div>...Loading</div>
  }

  return (
    <BrowserHistory history={history}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forbidden" element={<Forbidden />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserHistory>
  );
}

export { App };
