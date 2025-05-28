import type { RouteObject } from 'react-router-dom';
import App from './App';
import SignInPage from './routes/sign-in';
import Dashboard from './routes/dashboard';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <SignInPage />,
  },

  {
    path: '/dashboard',
    element: <Dashboard />,
  },
];

export default routes;