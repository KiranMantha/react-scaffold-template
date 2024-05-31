import { DashboardContainer } from '@components/dashboard';
import { withPageGuard } from '@hoc';
import { ErrorBoundary } from '@shared';

const DashboardPage = () => {
  return (
    <ErrorBoundary>
      <DashboardContainer />
    </ErrorBoundary>
  );
};

export default withPageGuard({ WrappedComponent: DashboardPage });
