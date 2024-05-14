import { Textbox } from '@atoms';
import { env } from '@env';
import { useTranslation } from 'react-i18next';

const DashboardContainer = () => {
  const { t } = useTranslation();
  return (
    <>
      <p dangerouslySetInnerHTML={{ __html: t('edit') }}></p>
      <p>{t('buildMode', { mode: env.NODE_ENV })}</p>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        {t('learnReact')}
      </a>
      <Textbox placeholder="i'm texbox atom imported from @atoms" />
    </>
  );
};

export { DashboardContainer };
