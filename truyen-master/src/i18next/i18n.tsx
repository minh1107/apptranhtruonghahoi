import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

import translationEN from "./en.json";

// the translations
const resources = {
  en: {
    translationEN: translationEN,
  },
};

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    initImmediate: false,
    debug: true,
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
