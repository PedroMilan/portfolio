"use client";

import { motion } from "framer-motion";
import { ExternalLink, Lock } from "lucide-react";

import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Project {
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  externalLink?: string;
  featured?: boolean;
  private?: boolean;
}

const projects: Project[] = [
  {
    title: "Luiza Study",
    description:
      "Webapp de estudo criado com uma necessidade real, possibilitando transportar e organizar todo seu material para o digital.",
    image: "/images/luizastudy.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "JWT",
      "Bcrypt",
    ],
    featured: true,
    externalLink: "https://luiza-study.vercel.app/",
  },
  {
    title: "HoraJusta",
    description:
      "Plataforma de marcação de hora para profissionais freelancers e PJ, para ter clareza de tempo gasto e dinheiro ganho.",
    image: "/images/horajusta.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    externalLink: "https://horajusta.vercel.app/",
  },
  {
    title: "Secret Garden | Alba Serena",
    description:
      "Alba Serena é um perfume sólido artesanal com lavanda e bergamota, criado pela Secret Garden para transformar sua rotina em bem-estar.",
    image: "/images/alba-serena.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    externalLink: "https://alba-serena.vercel.app/",
  },
  {
    title: "Jogo da Memória",
    description:
      "Aplicação de jogo da memória para dois jogadores, feita com propósito de entretenimento e exploração do lúdico em código.",
    image: "/images/memory.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    externalLink: "https://memory-game-two-players.vercel.app/",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Plataforma completa de e-commerce com painel administrativo, integração de pagamentos e gerenciamento de estoque em tempo real.",
    image: "/images/ecommerce.png",
    technologies: ["Next.js", "TypeScript", "Hook Form", "Tailwind CSS"],
    externalLink: "https://e-commerce-default-template.vercel.app/",
  },
  {
    title: "Ruiz & Milan Solutions",
    description:
      "Landing page institucional desenvolvida para apresentar os serviços da Ruiz & Milan Solutions, com design responsivo e moderno.",
    image: "/images/ruizmilan.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Styled-Components",
      "Prisma",
      "PostgreSQL",
    ],
    externalLink: "https://ruiz-milan-solutions.vercel.app/",
  },
  {
    title: "Widget de Climatempo",
    description:
      "Micro frontend para exibir previsão do tempo em tempo real de forma simples, leve e responsiva.",
    image: "/images/widget.jpg",
    technologies: ["Vue.js", "Tailwind", "JavaScript"],
    externalLink: "https://weather-widget-azure-eta.vercel.app/",
  },
  {
    title: "API de Login e Geração de Documentos",
    description:
      "API robusta para autenticação segura e geração de documentos, com containerização e documentação interativa via Swagger.",
    image: "/images/api.jpg",
    technologies: ["NestJS", "Node.js", "Prisma", "Docker", "Swagger"],
    externalLink: undefined,
  },
  {
    title: "Sistema de Ortodontia",
    description:
      "Sistema especializado para clínicas odontológicas, com módulo de login seguro e fluxo completo de atendimento ao paciente.",
    image: "/images/odont.jpg",
    technologies: ["React", "TypeScript", "Material UI", "React Hook Form"],
    private: true,
  },
  {
    title: "Sistema de Geração de Documentos",
    description:
      "Aplicação web para criação, edição e gerenciamento de documentos, com foco em eficiência no fluxo administrativo.",
    image: "/images/document.jpg",
    technologies: ["React", "TypeScript", "Python", "Styled-Components"],
    private: true,
  },
];

const featuredProject = projects.find((p) => p.featured)!;
const otherProjects = projects.filter((p) => !p.featured);

export function Projects() {
  return (
    <section
      id="projects"
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
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(120,80,255,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
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
            &gt; projetos
          </p>
          <h2
            className="text-4xl lg:text-5xl font-bold tracking-tight"
            style={{ color: "#f0eeff" }}
          >
            Trabalhos em{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #a78bfa, #38bdf8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Destaque
            </span>
          </h2>
          <p
            className="mt-4 text-[15px] max-w-xl"
            style={{ color: "rgba(240,238,255,0.45)" }}
          >
            Seleção de projetos que demonstram minha experiência em diferentes
            tecnologias e segmentos.
          </p>
        </motion.div>

        {/* Projeto hero — destaque */}
        <motion.div
          className="mb-8 rounded-2xl overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-2">
            {/* Imagem */}
            <div className="relative h-64 lg:h-auto overflow-hidden">
              {featuredProject.image && (
                <ImageWithFallback
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover"
                />
              )}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to right, transparent 60%, rgba(10,10,15,0.95))",
                }}
              />
              {/* Badge destaque */}
              <span
                className="absolute top-4 left-4 text-[11px] font-semibold px-3 py-1 rounded-full tracking-wide"
                style={{
                  background: "rgba(120,80,255,0.2)",
                  border: "1px solid rgba(120,80,255,0.45)",
                  color: "#a78bfa",
                }}
              >
                ⭐ Destaque
              </span>
            </div>

            {/* Conteúdo */}
            <div className="p-8 lg:p-10 flex flex-col justify-center gap-5">
              <h3
                className="text-2xl lg:text-3xl font-bold"
                style={{ color: "#f0eeff" }}
              >
                {featuredProject.title}
              </h3>
              <p
                className="text-[15px] leading-relaxed"
                style={{ color: "rgba(240,238,255,0.5)" }}
              >
                {featuredProject.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {featuredProject.technologies.map((tech) => (
                  <TechBadge key={tech} label={tech} />
                ))}
              </div>
              {featuredProject.externalLink && (
                <a
                  href={featuredProject.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 w-fit px-5 py-[9px] rounded-lg text-[13px] font-medium text-white transition-opacity hover:opacity-85"
                  style={{
                    background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
                  }}
                >
                  <ExternalLink className="w-4 h-4" />
                  Ver projeto
                </a>
              )}
            </div>
          </div>
        </motion.div>

        {/* Grid dos outros projetos */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {otherProjects.map((project, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="rounded-xl overflow-hidden flex flex-col group transition-colors"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(120,80,255,0.3)";
                e.currentTarget.style.background = "rgba(120,80,255,0.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                e.currentTarget.style.background = "rgba(255,255,255,0.03)";
              }}
            >
              {/* Imagem */}
              {project.image && (
                <div className="relative h-36 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(10,10,15,0.7) 0%, transparent 60%)",
                    }}
                  />
                  {project.private && (
                    <span
                      className="absolute top-3 right-3 flex items-center gap-1 text-[10px] font-semibold px-2 py-[3px] rounded-full"
                      style={{
                        background: "rgba(10,10,15,0.7)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        color: "rgba(240,238,255,0.4)",
                      }}
                    >
                      <Lock className="w-3 h-3" /> NDA
                    </span>
                  )}
                </div>
              )}

              {/* Conteúdo */}
              <div className="p-5 flex flex-col gap-3 flex-1">
                <h4
                  className="text-[15px] font-semibold"
                  style={{ color: "#f0eeff" }}
                >
                  {project.title}
                </h4>
                <p
                  className="text-[13px] leading-relaxed flex-1"
                  style={{ color: "rgba(240,238,255,0.45)" }}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-[6px]">
                  {project.technologies.map((tech) => (
                    <TechBadge key={tech} label={tech} small />
                  ))}
                </div>
                {project.externalLink && (
                  <a
                    href={project.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 w-fit text-[12px] font-medium transition-colors mt-1"
                    style={{ color: "#a78bfa" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#38bdf8")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#a78bfa")
                    }
                  >
                    <ExternalLink className="w-3 h-3" />
                    Ver projeto
                  </a>
                )}
                {project.private && (
                  <span
                    className="flex items-center gap-1 w-fit text-[11px] mt-1"
                    style={{ color: "rgba(240,238,255,0.25)" }}
                  >
                    <Lock className="w-3 h-3" />
                    Projeto privado / NDA
                  </span>
                )}
              </div>
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

function TechBadge({ label, small }: { label: string; small?: boolean }) {
  return (
    <span
      className={`rounded-md font-medium ${small ? "text-[10px] px-2 py-[3px]" : "text-[11px] px-[10px] py-[5px]"}`}
      style={{
        background: "rgba(120,80,255,0.1)",
        border: "1px solid rgba(120,80,255,0.2)",
        color: "rgba(240,238,255,0.55)",
      }}
    >
      {label}
    </span>
  );
}
