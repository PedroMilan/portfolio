"use client";

import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

// Ícones das tecnologias
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiNestjs,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiDocker,
  SiGit,
  SiTailwindcss,
  SiStyledcomponents,
  SiGraphql,
  SiRedux,
  SiJest,
  SiCypress,
  SiLinux,
  SiPrisma,
  SiReactquery,
  SiFlutter,
  SiAwsamplify,
  SiMui,
  SiDart,
  SiAwslambda,
  SiAmazons3,
  SiAmazon,
  SiAwsorganizations,
} from "react-icons/si";

import { DiResponsive } from "react-icons/di";

interface Tech {
  name: string;
  icon: React.ReactNode;
}

export function Skills() {
  const technologies: Tech[] = [
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
    { name: "React", icon: <SiReact className="text-cyan-400" /> },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-black dark:text-white" />,
    },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
    { name: "NestJS", icon: <SiNestjs className="text-red-600" /> },
    { name: "Python", icon: <SiPython className="text-yellow-500" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-700" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
    { name: "Docker", icon: <SiDocker className="text-sky-500" /> },

    // AWS e serviços
    { name: "AWS Amplify", icon: <SiAwsamplify className="text-orange-500" /> },
    { name: "AWS", icon: <SiAwsorganizations className="text-orange-500" /> },
    { name: "AWS Lambda", icon: <SiAwslambda className="text-orange-500" /> },
    { name: "AWS S3", icon: <SiAmazons3 className="text-orange-500" /> },

    { name: "Git", icon: <SiGit className="text-orange-600" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
    {
      name: "Material UI",
      icon: <SiMui className="text-blue-500" />,
    },
    {
      name: "Styled Components",
      icon: <SiStyledcomponents className="text-pink-500" />,
    },
    { name: "React Query", icon: <SiReactquery className="text-pink-400" /> },

    { name: "GraphQL", icon: <SiGraphql className="text-pink-500" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-600" /> },
    { name: "Jest", icon: <SiJest className="text-red-500" /> },
    { name: "Cypress", icon: <SiCypress className="text-green-600" /> },
    { name: "Linux", icon: <SiLinux className="text-black dark:text-white" /> },
    {
      name: "Prisma",
      icon: <SiPrisma className="text-black dark:text-white" />,
    },
    { name: "React Native", icon: <SiReact className="text-cyan-400" /> },
    { name: "Flutter", icon: <SiFlutter className="text-sky-400" /> },
    { name: "Dart", icon: <SiDart className="text-sky-400" /> },
    { name: "Responsividade", icon: <DiResponsive className="text-sky-400" /> },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container aa mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Habilidades
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Tecnologias e Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tecnologias que domino e utilizo para entregar aplicações
              robustas, escaláveis e com foco em performance e experiência do
              usuário.
            </p>
          </div>

          {/* Tecnologias */}
          <Card>
            <CardHeader>
              <CardTitle className="text-center">
                Principais Tecnologias
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.03 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center gap-2"
                  >
                    <div className="text-4xl">{tech.icon}</div>
                    <span className="text-sm font-medium text-center">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
