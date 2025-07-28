import React from "react";
import { useTranslation } from "react-i18next";
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

const iconMap: Record<string, React.JSX.Element> = {
  HTML5: <FaHtml5 />,
  CSS3: <FaCss3Alt />,
  JavaScript: <FaJsSquare />,
  TypeScript: <SiTypescript />,
  "React.js": <FaReact />,
  "Next.js": <SiNextdotjs />,
  "Styled Components": <SiStyledcomponents />,
  "Material UI": <SiMui />,
  "Tailwind CSS": <SiTailwindcss />,
  "Node.js": <FaNodeJs />,
  NestJS: <SiNestjs />,
  Prisma: <SiPrisma />,
  Swagger: <SiSwagger />,
  Docker: <FaDocker />,
  "Git & GitHub": <FaGithub />,
  Axios: <SiAxios />,
  Yarn: <SiYarn />,
  Jest: <SiJest />,
};

export const SkillsSection = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = React.useState<Tab>("Frontend");

  const tabLabelMap: Record<Tab, string> = {
    Frontend: t("skills.tabs.Frontend"),
    Backend: t("skills.tabs.Backend"),
    Ferramentas: t("skills.tabs.Ferramentas"),
  };

  const skills = t(`skills.${activeTab}`, { returnObjects: true }) as Record<
    string,
    { desc: string }
  >;

  return (
    <S.Section aria-label={t("skills.sectionLabel")}>
      <S.Tabs role="tablist" aria-label={t("skills.tabListLabel")}>
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
            {tabLabelMap[tab]}
          </S.TabButton>
        ))}
      </S.Tabs>

      <S.SkillsGrid
        role="tabpanel"
        id={`panel-${activeTab}`}
        aria-labelledby={`tab-${activeTab}`}
      >
        {Object.entries(skills).map(([name, { desc }]) => (
          <S.SkillCard key={name} tabIndex={0} aria-label={`${name}: ${desc}`}>
            <S.SkillIcon>{iconMap[name]}</S.SkillIcon>
            <S.SkillName>{name}</S.SkillName>
            <S.Tooltip>{desc}</S.Tooltip>
          </S.SkillCard>
        ))}
      </S.SkillsGrid>
    </S.Section>
  );
};
