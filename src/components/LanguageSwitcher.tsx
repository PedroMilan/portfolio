import React from "react";
import * as S from "@/styles/LanguageSwitch.styled";
import { useTranslation } from "react-i18next";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <S.Container>
      <S.Button
        active={currentLang.startsWith("pt")}
        onClick={() => changeLanguage("pt")}
        aria-label="Mudar para Português"
      >
        🇧🇷 Português
      </S.Button>
      <S.Button
        active={currentLang.startsWith("en")}
        onClick={() => changeLanguage("en")}
        aria-label="Switch to English"
      >
        🇺🇸 English
      </S.Button>
    </S.Container>
  );
};
