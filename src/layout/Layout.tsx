import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';
import { StyledLayout } from './Layout.styles';

const Layout = () => {
  const { t, i18n } = useTranslation();
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
            <li>Dashboard</li>
            <li>
              <button onClick={handleChangeLanguage}>
                {t('changeLanguage', { changeLanguage: t(changeLanguage) })}
              </button>
            </li>
            <li>Logout</li>
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
