"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const response = await fetch("https://formspree.io/f/meolregn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "pedro.milan9@gmail.com",
      href: "mailto:pedro.milan9@gmail.com",
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+55 (11) 96177-6373",
      href: "https://wa.me/5511961776373?text=Olá!%20Vim%20pelo%20seu%20site.",
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "São Paulo, SP — Brasil",
      href: "#",
    },
  ];

  return (
    <section
      id="contact"
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
        className="absolute top-0 right-0 w-[350px] h-[350px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(56,189,248,0.07) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[300px] h-[300px] pointer-events-none"
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
            &gt; contato
          </p>
          <h2
            className="text-4xl lg:text-5xl font-bold tracking-tight"
            style={{ color: "#f0eeff" }}
          >
            Vamos{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #a78bfa, #38bdf8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Trabalhar Juntos
            </span>
          </h2>
          <p
            className="mt-4 text-[15px] max-w-xl"
            style={{ color: "rgba(240,238,255,0.45)" }}
          >
            Tem um projeto em mente? Estou disponível para freelances,
            oportunidades de trabalho ou trocar ideias sobre tecnologia.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Coluna esquerda — informações */}
          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Cards de contato */}
            <div className="flex flex-col gap-3">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href !== "#" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl transition-all group"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(120,80,255,0.35)";
                    e.currentTarget.style.background = "rgba(120,80,255,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.07)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                  }}
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center rounded-lg flex-shrink-0"
                    style={{
                      background: "rgba(120,80,255,0.12)",
                      border: "1px solid rgba(120,80,255,0.2)",
                    }}
                  >
                    <Icon className="w-4 h-4" style={{ color: "#a78bfa" }} />
                  </div>
                  <div>
                    <p
                      className="text-[11px] uppercase tracking-widest mb-[2px]"
                      style={{ color: "rgba(240,238,255,0.3)" }}
                    >
                      {label}
                    </p>
                    <p
                      className="text-[14px] font-medium"
                      style={{ color: "rgba(240,238,255,0.75)" }}
                    >
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Disponibilidade */}
            <div
              className="p-5 rounded-xl"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <p
                className="text-[11px] uppercase tracking-widest mb-3"
                style={{
                  fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                  color: "rgba(240,238,255,0.3)",
                }}
              >
                Horário de trabalho
              </p>
              <p
                className="text-[14px]"
                style={{ color: "rgba(240,238,255,0.55)", lineHeight: 1.7 }}
              >
                Segunda a Sexta:{" "}
                <span style={{ color: "#a78bfa" }}>9h às 18h</span> (GMT-3)
                <br />
                Finais de semana:{" "}
                <span style={{ color: "rgba(240,238,255,0.35)" }}>
                  apenas projetos urgentes
                </span>
              </p>
            </div>
          </motion.div>

          {/* Coluna direita — formulário */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div
              className="p-7 rounded-xl"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <h3
                className="text-[16px] font-semibold mb-6"
                style={{ color: "#f0eeff" }}
              >
                Envie uma mensagem
              </h3>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Nome *">
                    <Input
                      name="name"
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Field>
                  <Field label="Email *">
                    <Input
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Field>
                </div>

                <Field label="Assunto *">
                  <Input
                    name="subject"
                    placeholder="Sobre o que você gostaria de falar?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </Field>

                <Field label="Mensagem *">
                  <textarea
                    name="message"
                    placeholder="Descreva seu projeto ou dúvida..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full resize-none rounded-lg px-4 py-3 text-[14px] outline-none transition-all"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "#f0eeff",
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor =
                        "rgba(120,80,255,0.5)")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor =
                        "rgba(255,255,255,0.08)")
                    }
                  />
                </Field>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center gap-2 w-full py-[11px] rounded-lg text-[14px] font-medium text-white transition-opacity hover:opacity-85 disabled:opacity-50"
                  style={{
                    background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
                  }}
                >
                  {loading ? (
                    <svg
                      className="animate-spin h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      />
                    </svg>
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  {loading ? "Enviando..." : "Enviar Mensagem"}
                </button>

                {status === "success" && (
                  <motion.p
                    className="text-center text-[13px]"
                    style={{ color: "#86efac" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    ✓ Mensagem enviada com sucesso!
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p
                    className="text-center text-[13px]"
                    style={{ color: "#f87171" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    ✗ Erro ao enviar. Tente novamente.
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap');
        ::placeholder { color: rgba(240,238,255,0.2); }
      `}</style>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-[6px]">
      <label
        className="text-[11px] uppercase tracking-widest"
        style={{ color: "rgba(240,238,255,0.35)" }}
      >
        {label}
      </label>
      {children}
    </div>
  );
}

function Input({
  name,
  placeholder,
  value,
  onChange,
  type = "text",
  required,
}: {
  name: string;
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  type?: string;
  required?: boolean;
}) {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full rounded-lg px-4 py-3 text-[14px] outline-none transition-all"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        color: "#f0eeff",
      }}
      onFocus={(e) =>
        (e.currentTarget.style.borderColor = "rgba(120,80,255,0.5)")
      }
      onBlur={(e) =>
        (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")
      }
    />
  );
}
