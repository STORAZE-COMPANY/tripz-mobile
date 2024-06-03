import i18n from 'i18next';
import ptBR from './pt-BR.json';

import { initReactI18next } from 'react-i18next';

export const resources = {
  ptBR: { translation: ptBR },
}
const lng = 'ptBR'; // default language
const fallbackLng = 'ptBR'; // specifies the language to be used when the user's preferred language cannot be found
 
export const EnableTokensForAutocompleteInVscode =
    JSON.parse(JSON.stringify(ptBR));
 
i18n
// .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    compatibilityJSON: 'v3',
    lng,
    resources,
    fallbackLng,
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    }
  });
 
export default {i18n};