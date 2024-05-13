import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en, es } from './locales';

const options = {
  lng: 'en',
  resources: {
    es: {
      translation: es
    },
    en: {
      translation: en
    }
  },
  fallbackLng: 'en'
};

const i18n = i18next.createInstance().use(initReactI18next);
i18n.use(initReactI18next).init(options);
export { i18n };
