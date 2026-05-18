"use client";

import { Code, Server, Database, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Frontend",
      description:
        "React, Next.js, TypeScript, Tailwind CSS, Material UI, Styled Components",
    },
    {
      icon: Server,
      title: "Backend",
      description: "Node.js, NestJS, Python, APIs RESTful, Prisma",
    },
    {
      icon: Database,
      title: "Banco de Dados",
      description: "PostgreSQL, MongoDB, MySQL, Redis",
    },
    {
      icon: Smartphone,
      title: "Mobile",
      description: "React Native, Flutter, desenvolvimento híbrido",
    },
  ];

  const values = [
    "Código limpo, testável e bem documentado",
    "Foco na experiência do usuário",
    "Aprendizado contínuo e adaptabilidade",
    "Colaboração e trabalho em equipe",
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden bg-[#0a0a0f]">
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

      {/* Glows */}
      <div
        className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(120,80,255,0.1) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(56,189,248,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header — padrão das outras seções */}
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
              &gt; sobre mim
            </p>
            <h2
              className="text-4xl lg:text-5xl font-bold tracking-tight"
              style={{ color: "#f0eeff" }}
            >
              Desenvolvedor{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #a78bfa, #38bdf8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Full-Stack
              </span>
              <br />
              em Evolução Constante
            </h2>
            <p
              className="mt-4 text-[15px] max-w-xl"
              style={{ color: "rgba(240,238,255,0.45)" }}
            >
              Apaixonado por tecnologia, focado em criar soluções digitais
              modernas e escaláveis. Trabalho principalmente com frontend em
              React/Next.js, mas também com backend e mobile híbrido.
            </p>
          </motion.div>

          {/* Jornada + Valores */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <motion.div
              className="p-7 rounded-xl flex flex-col gap-4"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(120,80,255,0.2)",
              }}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h3
                className="text-[18px] font-bold"
                style={{ color: "#f0eeff" }}
              >
                Minha{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #a78bfa, #38bdf8)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Jornada
                </span>
              </h3>
              <p
                className="text-[14px] leading-relaxed"
                style={{ color: "rgba(240,238,255,0.55)" }}
              >
                Comecei como desenvolvedor júnior e, através de projetos
                desafiadores, estudo contínuo e prática em tecnologias modernas,
                evoluí para atuar como full-stack. Tenho experiência real em
                sistemas web complexos e aplicações mobile híbridas.
              </p>
              <p
                className="text-[14px] leading-relaxed"
                style={{ color: "rgba(240,238,255,0.55)" }}
              >
                Valorizo UX/UI, código limpo, testes, boas práticas e
                colaboração em equipe, sempre buscando entregar valor real aos
                usuários.
              </p>
            </motion.div>

            <motion.div
              className="p-7 rounded-xl flex flex-col gap-4"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(56,189,248,0.15)",
              }}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h3
                className="text-[18px] font-bold"
                style={{ color: "#f0eeff" }}
              >
                Valores e{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #38bdf8, #a78bfa)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Princípios
                </span>
              </h3>
              <ul className="flex flex-col gap-3">
                {values.map((value, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    viewport={{ once: true }}
                  >
                    <span
                      className="w-[6px] h-[6px] rounded-full mt-[6px] flex-shrink-0"
                      style={{
                        background: "linear-gradient(135deg, #a78bfa, #38bdf8)",
                        boxShadow: "0 0 6px rgba(120,80,255,0.5)",
                      }}
                    />
                    <span
                      className="text-[14px]"
                      style={{ color: "rgba(240,238,255,0.6)" }}
                    >
                      {value}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Cards de destaque */}
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                  }}
                  className="p-6 rounded-xl flex flex-col items-center text-center gap-4 transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(120,80,255,0.08)";
                    e.currentTarget.style.borderColor = "rgba(120,80,255,0.4)";
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.boxShadow =
                      "0 16px 40px rgba(120,80,255,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.07)";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-lg"
                    style={{
                      background: "rgba(120,80,255,0.12)",
                      border: "1px solid rgba(120,80,255,0.2)",
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: "#a78bfa" }} />
                  </div>
                  <h4
                    className="text-[15px] font-semibold"
                    style={{ color: "#f0eeff" }}
                  >
                    {item.title}
                  </h4>
                  <p
                    className="text-[13px] leading-relaxed"
                    style={{ color: "rgba(240,238,255,0.45)" }}
                  >
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap');
      `}</style>
    </section>
  );
}
