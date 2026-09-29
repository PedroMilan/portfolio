import { useEffect, useState } from "react";

import { Container, Section, SectionHeader } from "./ui/Section";

const EMAIL = "pedro.milan9@gmail.com";

const channels = [
  {
    label: "WhatsApp",
    value: "+55 11 96177-6373",
    href: "https://wa.me/5511961776373?text=Olá!%20Vim%20pelo%20seu%20site.",
  },
  {
    label: "LinkedIn",
    value: "pedro-henrique-milan ↗",
    href: "https://www.linkedin.com/in/pedro-henrique-milan-5a9551245/",
  },
  { label: "GitHub", value: "PedroMilan ↗", href: "https://github.com/PedroMilan" },
];

const emptyForm = { name: "", email: "", message: "" };

function useSaoPauloTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const format = new Intl.DateTimeFormat("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "America/Sao_Paulo",
    });
    const tick = () => setTime(format.format(new Date()));
    tick();
    const id = setInterval(tick, 20_000);
    return () => clearInterval(id);
  }, []);

  return time;
}

export function Contact() {
  const [formData, setFormData] = useState(emptyForm);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [copied, setCopied] = useState(false);
  const time = useSaoPauloTime();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch("https://formspree.io/f/meolregn", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData(emptyForm);
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

  const fieldClass =
    "w-full rounded border border-line bg-paper px-3 py-[11px] text-base font-normal text-ink placeholder:text-faint focus:border-transparent focus:outline focus:outline-2 focus:outline-offset-0 focus:outline-pen";

  return (
    <Section id="contato">
      <Container className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
        <div>
          <SectionHeader title="Vamos conversar">
            Para vaga, freela ou só trocar ideia. O jeito mais rápido é e-mail.
          </SectionHeader>

          <div className="mb-7 mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-3">
            <a
              href={`mailto:${EMAIL}`}
              className="font-display text-[clamp(24px,3.6vw,38px)] font-bold leading-tight tracking-[-0.02em] no-underline [overflow-wrap:anywhere] hover:underline hover:underline-offset-[6px]"
            >
              {EMAIL}
            </a>
            <button
              type="button"
              onClick={handleCopy}
              className="rounded-full border border-transparent bg-pen-soft px-3.5 py-[9px] text-sm font-semibold text-pen hover:border-pen"
            >
              {copied ? "Copiado" : "Copiar e-mail"}
            </button>
          </div>

          <ul className="max-w-[30em] border-t border-line">
            {channels.map(({ label, value, href }) => (
              <li
                key={label}
                className="flex flex-wrap justify-between gap-4 border-b border-line py-[13px] text-base"
              >
                <span className="text-faint">{label}</span>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink underline-offset-4"
                >
                  {value}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-7 grid gap-1.5 text-base text-muted">
            <p>Respondo em até um dia útil. Segunda a sexta, das 9h às 18h.</p>
            {time && (
              <p>
                Agora em São Paulo:{" "}
                <span className="font-mono tabular-nums text-ink">{time}</span>
              </p>
            )}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid gap-[18px] self-start rounded-md border border-line bg-surface p-7"
        >
          <h3 className="text-xl font-bold">Ou me mande uma mensagem</h3>

          <label htmlFor="contact-name" className="grid gap-1.5 text-sm font-semibold">
            Seu nome
            <input
              id="contact-name"
              name="name"
              autoComplete="name"
              required
              value={formData.name}
              onChange={handleChange}
              className={fieldClass}
            />
          </label>

          <label htmlFor="contact-email" className="grid gap-1.5 text-sm font-semibold">
            Seu e-mail
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={formData.email}
              onChange={handleChange}
              className={fieldClass}
            />
          </label>

          <label htmlFor="contact-message" className="grid gap-1.5 text-sm font-semibold">
            Mensagem
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              required
              placeholder="Conte um pouco sobre a vaga ou o projeto"
              value={formData.message}
              onChange={handleChange}
              className={`${fieldClass} min-h-[120px] resize-y`}
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="rounded-md bg-ink px-[22px] py-3.5 font-semibold text-paper transition-transform hover:-translate-y-px disabled:cursor-wait disabled:opacity-60"
          >
            {loading ? "Enviando…" : "Enviar mensagem"}
          </button>

          <p aria-live="polite" className="text-sm">
            {status === "success" && (
              <span className="text-ok">Mensagem enviada. Respondo em até um dia útil.</span>
            )}
            {status === "error" && (
              <span className="text-danger">
                Não consegui enviar. Tente de novo ou escreva direto para {EMAIL}.
              </span>
            )}
          </p>
        </form>
      </Container>
    </Section>
  );
}
