import { Fragment, ReactElement } from 'react';

type AuthGaurdType = {
  children: ReactElement | ReactElement[];
  permissions: string[];
  fallback?: ReactElement;
};

export const AuthGaurd = ({ children, permissions, fallback }: AuthGaurdType): ReactElement | null => {
  // this array should be populated from JWT tokens
  const allowedPermissions: string[] = JSON.parse(localStorage.getItem('permissions') || '') || [];

  const isAuthorized = () => {
    return permissions.every(permission => {
      return allowedPermissions.includes(permission);
    });
  };

  if (isAuthorized()) {
    return <Fragment>{children}</Fragment>;
  }

  if (fallback) {
    return fallback;
  }

  return null;
};
