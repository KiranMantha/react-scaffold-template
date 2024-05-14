import { ErrorBoundary } from '@shared';

const HomePage = () => {
  return (
    <ErrorBoundary>
      <p>This is Home page.</p>
    </ErrorBoundary>
  );
};

export default HomePage;
