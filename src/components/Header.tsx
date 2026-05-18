"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Início", id: "home" },
  { label: "Sobre", id: "about" },
  { label: "Habilidades", id: "skills" },
  { label: "Projetos", id: "projects" },
  { label: "Contato", id: "contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const isHomePage = pathname === "/";

  const handleNav = (id: string) => {
    if (isHomePage) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${id}`);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 overflow-hidden">
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
        className="absolute -top-20 -left-32 w-[280px] h-[280px] rounded-full pointer-events-none opacity-50"
        style={{
          background:
            "radial-gradient(circle, rgba(120,80,255,0.15) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute -top-20 -right-32 w-[280px] h-[280px] rounded-full pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Glass */}
      <div
        className="absolute inset-0 bg-[#0a0a0f]/75 backdrop-blur-xl"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
      />

      {/* Conteúdo */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/">
              <span
                className="text-xl font-bold cursor-pointer transition-all hover:opacity-80"
                style={{
                  background: "linear-gradient(135deg, #a78bfa, #38bdf8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                }}
              >
                pedro_milan
              </span>
            </Link>
          </motion.div>

          {/* Nav desktop */}
          <motion.nav
            className="hidden md:flex items-center gap-1"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {navItems.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => handleNav(id)}
                className="relative px-3 py-2 text-[13px] font-medium transition-colors group"
                style={{ color: "rgba(240,238,255,0.5)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#f0eeff")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(240,238,255,0.5)")
                }
              >
                {label}
                {/* Underline animada no hover via CSS group */}
                <span
                  className="absolute bottom-1 left-3 right-3 h-[1.5px] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  style={{
                    background: "linear-gradient(90deg, #a78bfa, #38bdf8)",
                  }}
                />
              </button>
            ))}
          </motion.nav>

          {/* Botão mobile */}
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="w-9 h-9 flex items-center justify-center rounded-lg transition-colors"
              style={{
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.04)",
                color: "rgba(240,238,255,0.6)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(120,80,255,0.45)";
                e.currentTarget.style.color = "#a78bfa";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                e.currentTarget.style.color = "rgba(240,238,255,0.6)";
              }}
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </motion.div>
        </div>

        {/* Nav mobile */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden"
              style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
            >
              <div className="flex flex-col gap-1 py-3">
                {navItems.map(({ label, id }) => (
                  <button
                    key={id}
                    onClick={() => handleNav(id)}
                    className="text-left px-3 py-2 rounded-lg text-[14px] transition-colors"
                    style={{ color: "rgba(240,238,255,0.55)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#f0eeff";
                      e.currentTarget.style.background =
                        "rgba(120,80,255,0.08)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(240,238,255,0.55)";
                      e.currentTarget.style.background = "transparent";
                    }}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap');
      `}</style>
    </header>
  );
}
