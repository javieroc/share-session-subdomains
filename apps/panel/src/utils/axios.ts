import axios, { AxiosError } from 'axios';
import { history } from '../history';

const api = axios.create({
  baseURL: `${process.env['NX_API_URL']}/api`,
  withCredentials: true,
});

api.defaults.headers.common['Content-Type'] = 'application/json';
api.defaults.headers.common['Accept'] = 'application/json';

const redirects: Record<number, string> = {
  401: '/auth/login',
  402: '/payment-required',
  403: '/forbidden',
  404: '/not-found',
};

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const originalRequest = error.config;
    console.log('original request', originalRequest)
    if (originalRequest.method === 'get' && error.response?.status && error.response.status / 100 !== 2) {
      history.push(redirects[error.response.status]);
    }
    return Promise.reject(error);
  },
);

// const setAuthHeader = (token: string): void => {
//   api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
// };

// const removeAuthHeader = (): void => {
//   delete api.defaults.headers.common['Authorization'];
// };

export {
  api, // setAuthHeader, removeAuthHeader,
};
