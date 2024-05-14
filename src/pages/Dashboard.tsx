import { DashboardContainer } from '@components/dashboard';
import { ErrorBoundary } from '@shared';

const DashboardPage = () => {
  return (
    <ErrorBoundary>
      <DashboardContainer />
    </ErrorBoundary>
  );
};

export default DashboardPage;
