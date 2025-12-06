// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Yo'lni projekt tuzilishiga qarab moslashtirasan:
// Agar `locales` papkang `src/locales` bo'lsa, bu to'g'ri:
import translationsUz from "./translationsUz";
import translationsEn from "./translationsEn";
import translationsRu from "./translationsRu";
import translationsFr from "./translationsFr";
import translationsTr from "./translationsTr";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      uz: { translation: translationsUz },
      tr: { translation: translationsTr },
      ru: { translation: translationsRu },
      fr: { translation: translationsFr },
      en: { translation: translationsEn },
    },
    lng: "uz",
    fallbackLng: "uz",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
