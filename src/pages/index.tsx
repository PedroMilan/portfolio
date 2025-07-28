import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import React, { useState } from "react";
import { GlobalStyle } from "../styles/global";
import { lightTheme, darkTheme } from "../styles/theme";
import * as S from "../styles/Home.styled";
import { SkillsSection } from "@/components/SkillSection";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const { t } = useTranslation();

  const [isClient, setIsClient] = useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient || !i18n.isInitialized) {
    return null;
  }

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Head>
        <title>Pedro Milan | Front-end Developer</title>
        <meta
          name="description"
          content="Portfólio de Pedro Milan, desenvolvedor front-end especializado em React, Next.js e TypeScript."
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Pedro Milan" />
        <meta name="robots" content="index, follow" />
      </Head>

      <GlobalStyle />

      <S.Container>
        <LanguageSwitcher />
        <S.Header>
          <S.Title>{t("title")}</S.Title>
          <S.Subtitle>{t("subtitle")}</S.Subtitle>
          <S.ToggleButton
            onClick={() => setDarkMode((prev) => !prev)}
            aria-label="Alternar modo escuro/claro"
          >
            {darkMode ? t("toggleLight") : t("toggleDark")}
          </S.ToggleButton>
        </S.Header>

        <S.Section aria-labelledby="about-title">
          <S.SectionTitle id="about-title">{t("about")}</S.SectionTitle>
          <p>{t("aboutParagraph1")}</p>
          <p>{t("aboutParagraph2")}</p>
          <p>{t("aboutParagraph3")}</p>
        </S.Section>

        <SkillsSection />

        <S.Section aria-labelledby="projects-title">
          <S.SectionTitle id="projects-title">{t("projects")}</S.SectionTitle>

          <S.Project>
            <h3>{t("project1Title")}</h3>
            <p>{t("project1Desc")}</p>
          </S.Project>

          <S.Project>
            <h3>{t("project2Title")}</h3>
            <p>{t("project2Desc")}</p>
          </S.Project>

          <S.Project>
            <h3>{t("project3Title")}</h3>
            <p>{t("project3Desc")}</p>
            <a
              href="https://github.com/PedroMilan/docSave-api"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("repository")}
            </a>
          </S.Project>

          <S.Project>
            <h3>{t("project4Title")}</h3>
            <p>{t("project4Desc")}</p>
            <a
              href="https://github.com/PedroMilan/weather-widget"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("repository")}
            </a>
          </S.Project>
        </S.Section>

        <S.Section aria-labelledby="contact-title">
          <S.SectionTitle id="contact-title">{t("contact")}</S.SectionTitle>
          <S.SocialLinks>
            <a
              href="https://github.com/PedroMilan"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/pedro-henrique-milan-5a9551245/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a href="mailto:pedro.milan9@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </S.SocialLinks>
        </S.Section>

        <S.Footer>
          <small>
            © {new Date().getFullYear()} Pedro Milan. {t("footer")}
          </small>
        </S.Footer>
      </S.Container>
    </ThemeProvider>
  );
}
