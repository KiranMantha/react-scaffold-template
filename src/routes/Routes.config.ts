import { ReactElement, lazy } from 'react';

type Route = {
  path: string;
  page: React.LazyExoticComponent<() => ReactElement>;
};

enum PATHS {
  HOME = '/',
  DASHBOARD = '/dashboard',
  ADMIN = '/admin'
}

const Login = lazy(() => import('../pages/Login'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const Admin = lazy(() => import('../pages/Admin'));

const layoutRoutes: Route[] = [
  {
    path: PATHS.DASHBOARD,
    page: Dashboard
  },
  {
    path: PATHS.ADMIN,
    page: Admin
  }
];

const nonLayoutRoutes: Route[] = [
  {
    path: PATHS.HOME,
    page: Login
  }
];

export { PATHS, layoutRoutes, nonLayoutRoutes };
