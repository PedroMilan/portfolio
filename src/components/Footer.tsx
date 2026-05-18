import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { label: "Início", id: "home" },
    { label: "Sobre", id: "about" },
    { label: "Habilidades", id: "skills" },
    { label: "Projetos", id: "projects" },
    { label: "Contato", id: "contact" },
  ];

  const services = [
    "Desenvolvimento Web",
    "Aplicações Mobile",
    "APIs e Backend",
    "Consultoria Técnica",
    "Arquitetura de Software",
  ];

  const socials = [
    { icon: Github, href: "https://github.com/PedroMilan", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/pedro-henrique-milan-5a9551245/",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:pedro.milan9@gmail.com", label: "Email" },
  ];

  return (
    <footer
      className="relative overflow-hidden bg-[#0a0a0f]"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      {/* Grid de fundo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(120,80,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(120,80,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
      {/* Glow sutil no topo */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[2px] pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(120,80,255,0.5), transparent)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Corpo do footer */}
        <div className="grid md:grid-cols-4 gap-10 py-14">
          {/* Coluna de identidade */}
          <div className="md:col-span-2 flex flex-col gap-5">
            {/* Nome com gradiente */}
            <div>
              <p
                className="text-[11px] tracking-[0.2em] uppercase mb-1"
                style={{
                  fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                  color: "rgba(240,238,255,0.25)",
                }}
              >
                &gt; pedro_milan.ts
              </p>
              <h3
                className="text-2xl font-bold"
                style={{
                  background: "linear-gradient(135deg, #a78bfa, #38bdf8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Pedro Milan
              </h3>
            </div>

            <p
              className="text-[14px] leading-relaxed max-w-xs"
              style={{ color: "rgba(240,238,255,0.4)" }}
            >
              Desenvolvedor frontend apaixonado por criar interfaces modernas,
              performáticas e que realmente fazem diferença para o usuário.
            </p>

            {/* Socials */}
            <div className="flex gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
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
                    color: "rgba(240,238,255,0.4)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(120,80,255,0.45)";
                    e.currentTarget.style.color = "#a78bfa";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.08)";
                    e.currentTarget.style.color = "rgba(240,238,255,0.4)";
                  }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navegação */}
          <div className="flex flex-col gap-4">
            <h4
              className="text-[11px] uppercase tracking-[0.2em]"
              style={{
                color: "rgba(240,238,255,0.3)",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              Navegação
            </h4>
            <nav className="flex flex-col gap-[10px]">
              {navLinks.map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="text-left text-[14px] transition-colors w-fit"
                  style={{ color: "rgba(240,238,255,0.4)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#a78bfa")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(240,238,255,0.4)")
                  }
                >
                  {label}
                </button>
              ))}
            </nav>
          </div>

          {/* Serviços */}
          <div className="flex flex-col gap-4">
            <h4
              className="text-[11px] uppercase tracking-[0.2em]"
              style={{
                color: "rgba(240,238,255,0.3)",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              Serviços
            </h4>
            <ul className="flex flex-col gap-[10px]">
              {services.map((s) => (
                <li
                  key={s}
                  className="text-[14px]"
                  style={{ color: "rgba(240,238,255,0.4)" }}
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Linha divisória */}
        <div
          className="w-full h-px"
          style={{ background: "rgba(255,255,255,0.05)" }}
        />

        {/* Rodapé inferior */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6">
          <p
            className="text-[12px]"
            style={{ color: "rgba(240,238,255,0.25)" }}
          >
            © {year} Pedro Milan. Feito com Next.js e Tailwind CSS.
          </p>
          <button
            onClick={() => scrollToSection("home")}
            className="text-[12px] transition-colors"
            style={{ color: "rgba(240,238,255,0.25)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#a78bfa")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "rgba(240,238,255,0.25)")
            }
          >
            Voltar ao topo ↑
          </button>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap');
      `}</style>
    </footer>
  );
}
