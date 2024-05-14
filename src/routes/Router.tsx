import { ReactNode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const Router = ({ children }: { children: ReactNode | ReactNode[] }) => {
  const router = createBrowserRouter([
    {
      path: '/*',
      element: children
    }
  ]);
  return <RouterProvider router={router} />;
};
export { Router };
