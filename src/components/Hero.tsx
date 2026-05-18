"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, Lock } from "lucide-react";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden bg-[#0a0a0f]"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(120,80,255,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(120,80,255,0.07) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div
        className="absolute -top-20 -left-20 w-[360px] h-[360px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(120,80,255,0.18) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-16 -right-10 w-[280px] h-[280px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,220,180,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 flex-1 flex items-center pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[480px]">
            <motion.div
              className="flex flex-col gap-6"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <motion.div
                className="flex items-center gap-2 w-fit rounded-full px-4 py-[6px] text-[12px] font-medium tracking-wide"
                style={{
                  background: "rgba(120,80,255,0.12)",
                  border: "1px solid rgba(120,80,255,0.35)",
                  color: "#a78bfa",
                }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span
                  className="w-[7px] h-[7px] rounded-full bg-[#a78bfa]"
                  style={{ animation: "pulse-dot 2s ease-in-out infinite" }}
                />
                disponível para oportunidades
              </motion.div>

              <div>
                <p
                  className="text-[13px] mb-2 tracking-wide"
                  style={{
                    fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                    color: "#38bdf8",
                  }}
                >
                  <span style={{ color: "rgba(120,80,255,0.7)" }}>&gt; </span>
                  pedro_milan.ts
                </p>
                <motion.h1
                  className="text-5xl lg:text-6xl font-bold leading-[1.05] tracking-[-0.02em]"
                  style={{ color: "#f0eeff" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  Frontend
                  <br />
                  <span
                    style={{
                      background: "linear-gradient(135deg, #a78bfa, #38bdf8)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Developer.
                  </span>
                </motion.h1>
              </div>

              <motion.p
                className="text-[15px] leading-[1.65] max-w-[380px]"
                style={{ color: "rgba(240,238,255,0.55)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
              >
                Construo interfaces modernas com Next.js, TypeScript e Tailwind.
                Foco em performance, experiência do usuário e código que escala.
              </motion.p>

              <motion.div
                className="flex gap-3 flex-wrap"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
              >
                <button
                  onClick={() => scrollToSection("projects")}
                  className="px-6 py-[10px] rounded-lg text-[14px] font-medium text-white transition-opacity hover:opacity-85"
                  style={{
                    background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
                    border: "none",
                  }}
                >
                  Ver projetos
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-6 py-[10px] rounded-lg text-[14px] font-medium transition-colors"
                  style={{
                    background: "transparent",
                    border: "1px solid rgba(120,80,255,0.35)",
                    color: "#a78bfa",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "rgba(120,80,255,0.1)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "transparent")
                  }
                >
                  Entrar em contato
                </button>
              </motion.div>

              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <div className="flex gap-2">
                  {[
                    {
                      icon: Github,
                      href: "https://github.com/PedroMilan",
                      label: "GitHub",
                    },
                    {
                      icon: Linkedin,
                      href: "https://www.linkedin.com/in/pedro-henrique-milan-5a9551245/",
                      label: "LinkedIn",
                    },
                    {
                      icon: Mail,
                      href: "mailto:pedro.milan9@gmail.com",
                      label: "Email",
                    },
                  ].map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-9 h-9 flex items-center justify-center rounded-lg transition-all"
                      style={{
                        border: "1px solid rgba(255,255,255,0.08)",
                        background: "rgba(255,255,255,0.04)",
                        color: "rgba(240,238,255,0.5)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor =
                          "rgba(120,80,255,0.5)";
                        e.currentTarget.style.color = "#a78bfa";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor =
                          "rgba(255,255,255,0.08)";
                        e.currentTarget.style.color = "rgba(240,238,255,0.5)";
                      }}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>

                <div
                  className="flex-1 h-px"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                />

                <div className="flex gap-2">
                  {[
                    {
                      label: "CV",
                      href: "/curriculo-pedro-milan-desenvolvedor.pdf",
                    },
                    {
                      label: "Resume (EN)",
                      href: "/resume-pedro-milan-developer.pdf",
                    },
                  ].map(({ label, href }) => (
                    <a key={label} href={href} download>
                      <button
                        className="flex items-center gap-[6px] px-3 py-[7px] rounded-lg text-[12px] font-medium transition-colors"
                        style={{
                          background: "transparent",
                          border: "1px solid rgba(120,80,255,0.35)",
                          color: "#a78bfa",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.background =
                            "rgba(120,80,255,0.1)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.background = "transparent")
                        }
                      >
                        <Download className="w-3 h-3" />
                        {label}
                      </button>
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex items-center justify-center lg:justify-end"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div
                className="w-full max-w-[300px] rounded-xl overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  className="flex items-center gap-[6px] px-4 py-[10px]"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <span className="w-[9px] h-[9px] rounded-full bg-[#ff5f57]" />
                  <span className="w-[9px] h-[9px] rounded-full bg-[#febc2e]" />
                  <span className="w-[9px] h-[9px] rounded-full bg-[#28c840]" />
                  <span
                    className="ml-2 text-[11px]"
                    style={{
                      fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                      color: "rgba(255,255,255,0.25)",
                    }}
                  >
                    pedro.ts
                  </span>
                </div>

                <div
                  className="p-5 text-[12px] leading-[1.8]"
                  style={{
                    fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                  }}
                >
                  {[
                    <>
                      <Ln n={1} />
                      <Kw>const</Kw>
                      <Fn> pedro</Fn> <P>= {"{"}</P>
                    </>,
                    <>
                      <Ln n={2} />
                      &nbsp;&nbsp;<S>role</S>
                      <P>:</P> <S>&quot;Frontend Dev&quot;</S>
                      <P>,</P>
                    </>,
                    <>
                      <Ln n={3} />
                      &nbsp;&nbsp;<S>stack</S>
                      <P>: [</P>
                    </>,
                    <>
                      <Ln n={4} />
                      &nbsp;&nbsp;&nbsp;&nbsp;<S>&quot;Next.js&quot;</S>
                      <P>,</P> <S>&quot;TypeScript&quot;</S>
                      <P>,</P>
                    </>,
                    <>
                      <Ln n={5} />
                      &nbsp;&nbsp;&nbsp;&nbsp;<S>&quot;Tailwind CSS&quot;</S>
                    </>,
                    <>
                      <Ln n={6} />
                      &nbsp;&nbsp;<P>],</P>
                    </>,
                    <>
                      <Ln n={7} />
                      &nbsp;&nbsp;<S>projects</S>
                      <P>: {"{"}</P>
                    </>,
                    <>
                      <Ln n={8} />
                      &nbsp;&nbsp;&nbsp;&nbsp;<S>public</S>
                      <P>:</P> <Fn>10</Fn>
                      <P>,</P>
                    </>,
                    <>
                      <Ln n={9} />
                      &nbsp;&nbsp;&nbsp;&nbsp;<S>private</S>
                      <P>:</P> <C>{"/* NDA */"}</C>
                      <P>,</P>
                    </>,
                    <>
                      <Ln n={10} />
                      &nbsp;&nbsp;<P>{"}"}</P>
                      <P>,</P>
                    </>,
                    <>
                      <Ln n={11} />
                      &nbsp;&nbsp;<S>open</S>
                      <P>:</P> <Kw>true</Kw>
                      <P>,</P>
                    </>,
                    <>
                      <Ln n={12} />
                      <P>{"}"}</P>
                      <span
                        className="inline-block w-[7px] h-[14px] bg-[#a78bfa] align-[-2px]"
                        style={{ animation: "blink 1.2s step-end infinite" }}
                      />
                    </>,
                  ].map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        className="relative z-10 w-full flex"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        {[
          { num: "10+", label: "projetos públicos", badge: null },
          {
            num: "??",
            label: "projetos privados",
            badge: "NDA",
            icon: <Lock className="w-3 h-3 inline ml-1 opacity-30" />,
          },
          { num: "3+", label: "anos de exp.", badge: null },
          { num: "SP", label: "São Paulo, BR", badge: null },
        ].map(({ num, label, badge, icon }, i, arr) => (
          <div
            key={i}
            className="flex-1 flex flex-col items-center gap-1 py-4"
            style={{
              borderRight:
                i < arr.length - 1
                  ? "1px solid rgba(255,255,255,0.05)"
                  : "none",
            }}
          >
            <span
              className="font-bold"
              style={{ color: "#f0eeff", lineHeight: 1, fontSize: "1.4625rem" }}
            >
              {num}
              {icon}
            </span>
            <span
              className="text-[10px] tracking-widest uppercase"
              style={{ color: "rgba(240,238,255,0.3)" }}
            >
              {label}
            </span>
            {badge && (
              <span
                className="text-[9px] rounded-full px-2 py-[2px] tracking-wide"
                style={{
                  background: "rgba(120,80,255,0.15)",
                  border: "1px solid rgba(120,80,255,0.25)",
                  color: "#a78bfa",
                }}
              >
                {badge}
              </span>
            )}
          </div>
        ))}
      </motion.div>

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.8); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}

/* ── Helpers de syntax highlight ── */
function Ln({ n }: { n: number }) {
  return (
    <span
      className="mr-4 text-[11px] select-none"
      style={{ color: "rgba(255,255,255,0.13)" }}
    >
      {n}
    </span>
  );
}
function Kw({ children }: { children: React.ReactNode }) {
  return <span style={{ color: "#c084fc" }}>{children}</span>;
}
function Fn({ children }: { children: React.ReactNode }) {
  return <span style={{ color: "#38bdf8" }}>{children}</span>;
}
function S({ children }: { children: React.ReactNode }) {
  return <span style={{ color: "#86efac" }}>{children}</span>;
}
function C({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ color: "rgba(255,255,255,0.28)", fontStyle: "italic" }}>
      {children}
    </span>
  );
}
function P({ children }: { children: React.ReactNode }) {
  return <span style={{ color: "rgba(255,255,255,0.6)" }}>{children}</span>;
}
