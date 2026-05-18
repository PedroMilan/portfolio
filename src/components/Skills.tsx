"use client";

import { motion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiStyledcomponents,
  SiMui,
  SiRedux,
  SiReactquery,
  SiFramer,
  SiNodedotjs,
  SiNestjs,
  SiPython,
  SiGraphql,
  SiPrisma,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiDocker,
  SiGit,
  SiLinux,
  SiJest,
  SiCypress,
  SiAwslambda,
  SiAmazons3,
  SiFlutter,
  SiDart,
} from "react-icons/si";
import { DiResponsive } from "react-icons/di";

interface Tech {
  name: string;
  icon: React.ReactNode;
}

interface Category {
  label: string;
  techs: Tech[];
}

const categories: Category[] = [
  {
    label: "Frontend",
    techs: [
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-400" />,
      },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
      { name: "React", icon: <SiReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400" />,
      },
      {
        name: "Styled Components",
        icon: <SiStyledcomponents className="text-pink-400" />,
      },
      { name: "Material UI", icon: <SiMui className="text-blue-400" /> },
      { name: "Redux", icon: <SiRedux className="text-purple-400" /> },
      { name: "React Query", icon: <SiReactquery className="text-pink-400" /> },
      { name: "Framer Motion", icon: <SiFramer className="text-white" /> },
      {
        name: "Responsividade",
        icon: <DiResponsive className="text-sky-400" />,
      },
    ],
  },
  {
    label: "Backend",
    techs: [
      { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
      { name: "NestJS", icon: <SiNestjs className="text-red-500" /> },
      { name: "Python", icon: <SiPython className="text-yellow-400" /> },
      { name: "GraphQL", icon: <SiGraphql className="text-pink-400" /> },
      { name: "Prisma", icon: <SiPrisma className="text-white" /> },
    ],
  },
  {
    label: "Banco de Dados",
    techs: [
      { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-400" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
      { name: "Redis", icon: <SiRedis className="text-red-500" /> },
    ],
  },
  {
    label: "DevOps & Cloud",
    techs: [
      { name: "Docker", icon: <SiDocker className="text-sky-400" /> },
      { name: "Git", icon: <SiGit className="text-orange-500" /> },
      { name: "Linux", icon: <SiLinux className="text-white" /> },
      { name: "AWS Lambda", icon: <SiAwslambda className="text-orange-400" /> },
      { name: "AWS S3", icon: <SiAmazons3 className="text-orange-400" /> },
    ],
  },
  {
    label: "Testes",
    techs: [
      { name: "Jest", icon: <SiJest className="text-red-400" /> },
      { name: "Cypress", icon: <SiCypress className="text-green-500" /> },
    ],
  },
  {
    label: "Mobile",
    techs: [
      { name: "React Native", icon: <SiReact className="text-cyan-400" /> },
      { name: "Flutter", icon: <SiFlutter className="text-sky-400" /> },
      { name: "Dart", icon: <SiDart className="text-sky-400" /> },
    ],
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const techVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

export function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 overflow-hidden bg-[#0a0a0f]"
    >
      {/* Grid de fundo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(120,80,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(120,80,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
      {/* Glow */}
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(56,189,248,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header da seção */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p
            className="text-[12px] font-medium tracking-[0.2em] uppercase mb-3"
            style={{
              fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
              color: "#a78bfa",
            }}
          >
            &gt; habilidades
          </p>
          <h2
            className="text-4xl lg:text-5xl font-bold tracking-tight"
            style={{ color: "#f0eeff" }}
          >
            Tecnologias &{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #a78bfa, #38bdf8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Expertise
            </span>
          </h2>
          <p
            className="mt-4 text-[15px] max-w-xl"
            style={{ color: "rgba(240,238,255,0.45)" }}
          >
            Stack que uso no dia a dia para entregar aplicações robustas,
            escaláveis e com foco em experiência do usuário.
          </p>
        </motion.div>

        {/* Grid de categorias */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.label}
              variants={cardVariants}
              className="rounded-xl p-5 flex flex-col gap-4"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {/* Label da categoria */}
              <div className="flex items-center gap-3">
                <span
                  className="w-1 h-4 rounded-full"
                  style={{
                    background: "linear-gradient(180deg, #a78bfa, #38bdf8)",
                  }}
                />
                <span
                  className="text-[11px] font-semibold tracking-[0.15em] uppercase"
                  style={{ color: "rgba(240,238,255,0.4)" }}
                >
                  {cat.label}
                </span>
              </div>

              {/* Techs */}
              <motion.div
                className="flex flex-wrap gap-2"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {cat.techs.map((tech) => (
                  <motion.div
                    key={tech.name}
                    variants={techVariants}
                    whileHover={{ scale: 1.08 }}
                    className="flex items-center gap-2 px-3 py-[6px] rounded-lg cursor-default transition-colors"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor =
                        "rgba(120,80,255,0.4)";
                      e.currentTarget.style.background =
                        "rgba(120,80,255,0.08)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor =
                        "rgba(255,255,255,0.07)";
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.04)";
                    }}
                  >
                    <span className="text-lg leading-none">{tech.icon}</span>
                    <span
                      className="text-[12px] font-medium"
                      style={{ color: "rgba(240,238,255,0.65)" }}
                    >
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap');
      `}</style>
    </section>
  );
}
