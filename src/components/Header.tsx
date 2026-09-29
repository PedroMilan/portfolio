import { Container } from "./ui/Section";

const navItems = [
  { label: "Projetos", id: "projetos" },
  { label: "Sobre", id: "sobre" },
  { label: "Stack", id: "stack" },
  { label: "Contato", id: "contato" },
];

export function Header() {
  return (
    <header className="py-6">
      <Container className="flex flex-wrap items-center gap-x-6 gap-y-3">
        <a
          href="#inicio"
          className="font-display text-[19px] font-bold tracking-[-0.01em] no-underline"
        >
          Pedro Milan
        </a>

        <nav aria-label="Seções" className="flex flex-wrap gap-x-5 gap-y-1 text-[15px]">
          {navItems.map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-muted no-underline decoration-[1.5px] underline-offset-[5px] hover:text-ink hover:underline"
            >
              {label}
            </a>
          ))}
        </nav>

        <span className="flex items-center gap-2 text-sm text-muted sm:ml-auto">
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-ok" />
          Aberto a vagas e freelas
        </span>
      </Container>
    </header>
  );
}
