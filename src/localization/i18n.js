import en from './en'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en,
}
i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: { en: { common: en } },
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
  ns: ['common'],
  defaultNS: 'common',
})
export default i18n
