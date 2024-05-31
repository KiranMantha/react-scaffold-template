import { PATHS } from '@routes';
import { Navigate } from 'react-router-dom';
import { AuthGaurd } from 'src/routes';

type WithAuthenticateType = {
  WrappedComponent: React.ComponentType;
  permissions?: string[];
};

export function withPageGuard({ WrappedComponent, permissions = [] }: WithAuthenticateType) {
  return function PageGuard() {
    const checkAuthorization = () => {
      return localStorage.getItem('isLoggedIn') === 'true';
    };

    const navigateToDefaultRoute = () => {
      return <Navigate to={{ pathname: PATHS.HOME }} />;
    };

    const displayWrappedComponent = () => {
      if (permissions.length) {
        return (
          <AuthGaurd permissions={permissions} fallback={<div>You don't have permission to view this page.</div>}>
            <WrappedComponent />
          </AuthGaurd>
        );
      } else {
        return <WrappedComponent />;
      }
    };

    if (checkAuthorization()) {
      return displayWrappedComponent();
    } else {
      return navigateToDefaultRoute();
    }
  };
}
