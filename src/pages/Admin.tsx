import { AdminContainer } from '@components/admin';
import { withPageGuard } from '@hoc';
import { ErrorBoundary } from '@shared';

const AdminPage = () => {
  return (
    <ErrorBoundary>
      <AdminContainer />
    </ErrorBoundary>
  );
};

export default withPageGuard({ WrappedComponent: AdminPage, permissions: ['admin'] });
