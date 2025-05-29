import type { RouteObject } from 'react-router-dom';
import './App.css'
import Dashboard from './components/Dashboard/dashboard';
import SignInPage from './components/Signin/sign-in';
import { Navigate } from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: '/',
    element: <SignInPage />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  // Catch-all route for any wrong URL
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
];

export default routes;