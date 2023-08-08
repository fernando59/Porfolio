import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './en.json'
import translationES from './es.json'

export const resources = {
  en: {
    translation: translationEN,
  },
  es: {
    translation: translationES,
  },
};

let currentLanguage = navigator.language.substring(0, 2) ?? 'es'

i18n
  .use(initReactI18next)
  .init({
    resources,
    debug: false,
    lng: currentLanguage,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });


export default i18n;