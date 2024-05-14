import { ReactElement, lazy } from 'react';

type Route = {
  path: string;
  page: React.LazyExoticComponent<() => ReactElement>;
};

enum PATHS {
  HOME = '/',
  LOGIN = '/login',
  DASHBOARD = '/dashboard'
}

const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));
const Dashboard = lazy(() => import('../pages/Dashboard'));

const layoutRoutes: Route[] = [
  {
    path: PATHS.DASHBOARD,
    page: Dashboard
  }
];

const nonLayoutRoutes: Route[] = [
  {
    path: PATHS.HOME,
    page: Home
  },
  {
    path: PATHS.LOGIN,
    page: Login
  }
];

export { layoutRoutes, nonLayoutRoutes };
