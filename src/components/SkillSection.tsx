import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGithub,
} from "react-icons/fa";
import {
  SiTypescript,
  SiStyledcomponents,
  SiNextdotjs,
  SiTailwindcss,
  SiNestjs,
  SiPrisma,
  SiSwagger,
  SiAxios,
  SiYarn,
  SiJest,
  SiMui,
} from "react-icons/si";

import * as S from "@/styles/SkillSection.styled";

const tabs = ["Frontend", "Backend", "Ferramentas"] as const;
type Tab = (typeof tabs)[number];

const skillsData: Record<
  Tab,
  Array<{ name: string; icon: React.JSX.Element; desc: string }>
> = {
  Frontend: [
    {
      name: "HTML5",
      icon: <FaHtml5 />,
      desc: "Marcações semânticas e acessibilidade",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt />,
      desc: "Flexbox, Grid, responsividade e animações",
    },
    {
      name: "JavaScript",
      icon: <FaJsSquare />,
      desc: "ES6+, DOM, event loop, closures",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      desc: "Tipagem estática e segurança",
    },
    {
      name: "React.js",
      icon: <FaReact />,
      desc: "Hooks, Context API, componentização",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
      desc: "SSR, SSG, API Routes, SEO",
    },
    {
      name: "Styled Components",
      icon: <SiStyledcomponents />,
      desc: "CSS-in-JS, theming, dark mode",
    },
    {
      name: "Material UI",
      icon: <SiMui />,
      desc: "Componentes prontos e customizáveis",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      desc: "Utilitário CSS para designs rápidos",
    },
  ],
  Backend: [
    {
      name: "Node.js",
      icon: <FaNodeJs />,
      desc: "JavaScript no backend, servidor rápido",
    },
    {
      name: "NestJS",
      icon: <SiNestjs />,
      desc: "Framework progressivo para Node.js",
    },
    {
      name: "Prisma",
      icon: <SiPrisma />,
      desc: "ORM para banco de dados",
    },
    {
      name: "Swagger",
      icon: <SiSwagger />,
      desc: "Documentação de APIs",
    },
    {
      name: "Docker",
      icon: <FaDocker />,
      desc: "Containerização de aplicações",
    },
  ],
  Ferramentas: [
    {
      name: "Git & GitHub",
      icon: <FaGithub />,
      desc: "Versionamento e colaboração",
    },
    {
      name: "Axios",
      icon: <SiAxios />,
      desc: "Cliente HTTP para requisições",
    },
    {
      name: "Yarn",
      icon: <SiYarn />,
      desc: "Gerenciador de pacotes",
    },
    {
      name: "Jest",
      icon: <SiJest />,
      desc: "Testes unitários e integração",
    },
  ],
};

export const SkillsSection = () => {
  const [activeTab, setActiveTab] = React.useState<Tab>("Frontend");

  return (
    <S.Section aria-label="Seção de habilidades técnicas">
      <S.Tabs role="tablist" aria-label="Categorias de habilidades">
        {tabs.map((tab) => (
          <S.TabButton
            key={tab}
            active={tab === activeTab}
            onClick={() => setActiveTab(tab)}
            role="tab"
            aria-selected={tab === activeTab}
            aria-controls={`panel-${tab}`}
            id={`tab-${tab}`}
            tabIndex={tab === activeTab ? 0 : -1}
          >
            {tab}
          </S.TabButton>
        ))}
      </S.Tabs>

      <S.SkillsGrid
        role="tabpanel"
        id={`panel-${activeTab}`}
        aria-labelledby={`tab-${activeTab}`}
      >
        {skillsData[activeTab].map(({ name, icon, desc }) => (
          <S.SkillCard key={name} tabIndex={0} aria-label={`${name}: ${desc}`}>
            <S.SkillIcon>{icon}</S.SkillIcon>
            <S.SkillName>{name}</S.SkillName>
            <S.Tooltip>{desc}</S.Tooltip>
          </S.SkillCard>
        ))}
      </S.SkillsGrid>
    </S.Section>
  );
};
