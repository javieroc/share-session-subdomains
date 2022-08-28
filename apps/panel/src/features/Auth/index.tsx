import { Routes, Route } from 'react-router-dom';
import { Login, Register } from './views';

function Auth(): JSX.Element {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Routes>
  );
}

export { Auth };
