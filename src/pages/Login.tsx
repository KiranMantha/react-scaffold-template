import { PATHS } from '@routes';
import { ErrorBoundary } from '@shared';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <ErrorBoundary>
      <section className="main-card">
        <p>This is Login page.</p>
        <button
          onClick={() => {
            navigate(PATHS.DASHBOARD);
          }}
        >
          Login
        </button>
      </section>
    </ErrorBoundary>
  );
};

export default LoginPage;
