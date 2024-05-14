import { ComponentType, Suspense } from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import { Layout } from '../layout';
import { layoutRoutes, nonLayoutRoutes } from './Routes.config';

const withSuspense = (Component: ComponentType) => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Component />
    </Suspense>
  );
};

const Routes = () => {
  return (
    <Switch>
      {nonLayoutRoutes.map(({ path, page }) => (
        <Route key={path} path={path} element={withSuspense(page)} />
      ))}

      {/* Routes with Layout */}
      <Route element={<Layout />}>
        {layoutRoutes.map(({ path, page }) => (
          <Route key={path} path={path} element={withSuspense(page)} />
        ))}
      </Route>
    </Switch>
  );
};

export { Routes };
