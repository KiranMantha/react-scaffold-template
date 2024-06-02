import { Icon, Textbox } from '@atoms';
import { env } from '@env';
import { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';

const DashboardContainer = () => {
  const { t } = useTranslation();
  const [iconName, setIconName] = useState('arrow-head-outline');
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setIconName(e.target.value);
  };

  return (
    <>
      <p dangerouslySetInnerHTML={{ __html: t('edit') }}></p>
      <p>{t('buildMode', { mode: env.NODE_ENV })}</p>
      <a
        style={{ '--color': 'red' } as React.CSSProperties}
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t('learnReact')}
      </a>
      <Textbox placeholder="i'm texbox atom imported from @atoms" />
      <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center', gap: '30px' }}>
        <select name="changeIcn" id="changeIcn" onChange={handleChange}>
          <option value="arrow-head-outline">arrow-head-outline</option>
          <option value="arrow-head-solid">arrow-head-solid</option>
          <option value="check">check</option>
          <option value="check-circle">check-circle</option>
          <option value="cross">cross</option>
          <option value="cross-circle">cross-circle</option>
          <option value="gear">gear</option>
          <option value="info">info</option>
          <option value="chevron-left">chevron-left</option>
          <option value="chevron-right">chevron-right</option>
          <option value="new-window">new-window</option>
        </select>
        <Icon name={iconName} />
      </div>
    </>
  );
};

export { DashboardContainer };
