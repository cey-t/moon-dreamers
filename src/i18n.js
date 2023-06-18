import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import commonTR from "../src/utils/locales/tr/common.json";
import commonEN from "../src/utils/locales/en/common.json";

const resources = {
  en: {
    common: commonEN,
  },
  tr: {
    common: commonTR,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "tr",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
