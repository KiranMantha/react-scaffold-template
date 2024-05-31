import { PATHS } from '@routes';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { StyledLayout } from './Layout.styles';

const Layout = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [lang, setLang] = useState<string>(i18n.language);
  const changeLanguage = lang === 'en' ? 'es' : 'en';

  const handleChangeLanguage = () => {
    const language = lang === 'en' ? 'es' : 'en';
    i18n.changeLanguage(language);
    setLang(language);
  };

  return (
    <StyledLayout>
      <header>
        <nav>
          <ul>
            <li>
              <Link to={PATHS.DASHBOARD}>Dashboard</Link>
            </li>
            <li>
              <Link to={PATHS.ADMIN}>Admin Console</Link>
            </li>
            <li>
              <button className="primary" onClick={handleChangeLanguage}>
                {t('changeLanguage', { changeLanguage: t(changeLanguage) })}
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  localStorage.clear();
                  navigate(PATHS.HOME);
                }}
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <section className="container">
        <Outlet />
      </section>
      <footer>This is footer</footer>
    </StyledLayout>
  );
};

export { Layout };
