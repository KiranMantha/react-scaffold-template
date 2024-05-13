import { Textbox } from '@atoms';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';
import { env } from './env';

function App() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState<string>(i18n.language);
  const changeLanguage = lang === 'en' ? 'es' : 'en';

  const handleChangeLanguage = () => {
    const language = lang === 'en' ? 'es' : 'en';
    i18n.changeLanguage(language);
    setLang(language);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <button onClick={handleChangeLanguage}>{t('changeLanguage', { changeLanguage: t(changeLanguage) })}</button>
        </div>
        <p dangerouslySetInnerHTML={{ __html: t('edit') }}></p>
        <p>{t('buildMode', { mode: env.NODE_ENV })}</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          {t('learnReact')}
        </a>
        <Textbox placeholder="i'm texbox atom imported from @atoms" />
      </header>
    </div>
  );
}

export default App;
