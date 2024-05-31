import { PATHS } from '@routes';
import { ErrorBoundary } from '@shared';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const isAdmin = useRef(false);
  return (
    <ErrorBoundary>
      <section className="main-card">
        <p>This is Login page.</p>
        <label htmlFor="isAdmin">
          <input
            type="checkbox"
            id="isAdmin"
            onChange={() => {
              isAdmin.current = !isAdmin.current;
            }}
          />
          Login as admin
        </label>
        <div>
          <button
            onClick={() => {
              localStorage.setItem('isLoggedIn', 'true');
              localStorage.setItem('permissions', JSON.stringify(isAdmin.current ? ['admin'] : []));
              navigate(PATHS.DASHBOARD);
            }}
          >
            Login
          </button>
        </div>
      </section>
    </ErrorBoundary>
  );
};

export default LoginPage;
