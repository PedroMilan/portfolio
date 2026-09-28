import { Container } from "./ui/Section";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line pb-12 pt-8">
      <Container className="flex flex-wrap justify-between gap-x-8 gap-y-3 text-sm text-faint">
        <span>Pedro Milan, {year}. Feito por mim, em Next.js.</span>
        <a
          href="https://github.com/PedroMilan/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted underline-offset-4"
        >
          Código no GitHub
        </a>
      </Container>
    </footer>
  );
}
