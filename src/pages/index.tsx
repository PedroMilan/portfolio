import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useState } from "react";
import { GlobalStyle } from "../styles/global";
import { lightTheme, darkTheme } from "../styles/theme";
import * as S from "../styles/Home.styled";
import { SkillsSection } from "@/components/SkillSection";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

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
        <S.Header>
          <S.Title>Pedro Milan</S.Title>
          <S.Subtitle>
            Desenvolvedor Front-End | React | Next.js | TypeScript
          </S.Subtitle>
          <S.ToggleButton
            onClick={() => setDarkMode((prev) => !prev)}
            aria-label="Alternar modo escuro/claro"
          >
            {darkMode ? "☀️ Modo Claro" : "🌙 Modo Escuro"}
          </S.ToggleButton>
        </S.Header>

        <S.Section aria-labelledby="about-title">
          <S.SectionTitle id="about-title">Sobre Mim</S.SectionTitle>
          <p>
            Sou um Desenvolvedor Front-End apaixonado por criar interfaces web
            modernas, acessíveis e de alta performance. Tenho experiência sólida
            com React, Next.js e TypeScript, além de forte conhecimento em
            design responsivo, usabilidade e SEO.
          </p>

          <p>
            Adoro transformar ideias em código limpo e reutilizável, buscando
            sempre a melhor experiência para o usuário. Também tenho interesse
            em backend com Node.js e NestJS, além de praticar boas práticas com
            testes, versionamento e integração contínua.
          </p>
          <p>
            Estou sempre aprendendo novas tecnologias e metodologias para
            entregar soluções eficientes e escaláveis. Meu objetivo é contribuir
            com times que valorizam inovação, colaboração e qualidade de
            software.
          </p>
        </S.Section>

        <SkillsSection />

        <S.Section aria-labelledby="projects-title">
          <S.SectionTitle id="projects-title">Projetos</S.SectionTitle>
          <S.Project>
            <h3>Clínica Odontológica Digital</h3>
            <p>
              Sistema completo para gestão de clínicas, com troca de dentistas
              em tempo real e digitalização de fichas físicas.
            </p>
          </S.Project>
          <S.Project>
            <h3>Backoffice Administrativo</h3>
            <p>
              Plataforma de gerenciamento com dashboards, filtros e CRUDs
              otimizados para performance.
            </p>
          </S.Project>

          <S.Project>
            <h3>DocSave API (Projeto Pessoal)</h3>
            <p>
              Api com autenticação e gerenciamento de documentos para o dia a
              dia.
            </p>

            <a
              href="https://github.com/PedroMilan/docSave-api"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repositório Github
            </a>
          </S.Project>

          <S.Project>
            <h3>Weather Widget (Projeto Pessoal)</h3>
            <p>
              Micro frontend em Vue que verifica o clima por localização, tendo
              a opção de trocar a mesma.
            </p>

            <a
              href="https://github.com/PedroMilan/weather-widget"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repositório Github
            </a>
          </S.Project>
        </S.Section>

        <S.Section aria-labelledby="contact-title">
          <S.SectionTitle id="contact-title">Contato</S.SectionTitle>
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
            © {new Date().getFullYear()} Pedro Milan. Todos os direitos
            reservados.
          </small>
        </S.Footer>
      </S.Container>
    </ThemeProvider>
  );
}
