import { ReactElement, lazy } from 'react';

type Route = {
  path: string;
  page: React.LazyExoticComponent<() => ReactElement>;
};

enum PATHS {
  HOME = '/',
  DASHBOARD = '/dashboard'
}

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
    page: Login
  }
];

export { PATHS, layoutRoutes, nonLayoutRoutes };
