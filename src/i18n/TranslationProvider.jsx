// src/i18n/TranslationProvider.jsx
import { createContext, useContext, useMemo, useState } from "react";

import translationsUz from "../locales/translationsUz";
import translationsEn from "../locales/translationsEn";
import translationsRu from "../locales/translationsRu";
import translationsFr from "../locales/translationsFr";
import translationsTr from "../locales/translationsTr";

const TranslationContext = createContext(null);

// Barcha tillarni bitta obyektga yig'amiz
const allTranslations = {
  uz: translationsUz,
  en: translationsEn,
  ru: translationsRu,
  fr: translationsFr,
  tr: translationsTr,
};

export const TranslationProvider = ({ children }) => {
  // default til: uz
  const [lang, setLang] = useState("uz");

  const value = useMemo(() => {
    const t = (key) => {
      if (!key) return "";

      const currentDict = allTranslations[lang] || {};

      // oddiy flat key: "home", "products", "product_1_name" va hokazo
      const val = currentDict[key];

      // agar topilmasa, kalitni o'zini qaytaramiz (debug uchun ham foydali)
      if (val === undefined || val === null) {
        return key;
      }

      return val;
    };

    return {
      lang,
      setLang,
      t,
    };
  }, [lang]);

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const ctx = useContext(TranslationContext);
  if (!ctx) {
    throw new Error("useTranslation must be used within TranslationProvider");
  }
  return ctx;
};
