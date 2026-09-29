import Image from "next/image";

import { Container } from "./ui/Section";
import { PenArrow, PenNote } from "./ui/PenNote";

const resumes = [
  { label: "português (PDF)", href: "/curriculo-pedro-milan-desenvolvedor.pdf" },
  { label: "English (PDF)", href: "/resume-pedro-milan-developer.pdf" },
];

export function Hero() {
  return (
    <section id="inicio" className="pb-20 pt-10 md:pb-24 md:pt-14">
      <Container className="grid items-center gap-12 lg:grid-cols-[1fr_300px] lg:gap-[72px]">
        <div>
          <p className="mb-5 font-mono text-[13px] tracking-[0.02em] text-muted">
            Desenvolvedor full-stack · São Paulo, SP
          </p>

          <h1 className="text-[clamp(38px,6.2vw,68px)] font-extrabold leading-[1.02] tracking-[-0.035em]">
            Oi, eu sou o Pedro. Faço sites e sistemas web que as pessoas{" "}
            <span className="mark mark-sweep">usam sem precisar de manual.</span>
          </h1>

          <p className="mt-7 max-w-[34em] text-[19px] text-muted">
            Cuido do projeto inteiro, do banco de dados à tela:{" "}
            <strong className="font-semibold text-ink">
              API em Node.js e NestJS, interface em React e Next.js
            </strong>
            , tudo em TypeScript. São mais de três anos nisso. Hoje atendo como
            freelancer grandes empresas do Brasil.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3.5">
            <a
              href="#projetos"
              className="inline-flex items-center rounded-md bg-ink px-[22px] py-3.5 font-semibold text-paper no-underline transition-transform hover:-translate-y-px"
            >
              Ver projetos
            </a>
            <a href="#contato" className="text-link">
              pedro.milan9@gmail.com
            </a>
          </div>

          <p className="mt-7 flex flex-wrap gap-x-[18px] gap-y-1.5 text-[15px] text-muted">
            Currículo:
            {resumes.map(({ label, href }) => (
              <a key={href} href={href} download className="text-ink underline-offset-4">
                {label}
              </a>
            ))}
          </p>
        </div>

        <div className="relative w-[min(300px,78vw)] justify-self-center">
          <div className="absolute -right-2 -top-8 z-10 rotate-[5deg] lg:-left-[172px] lg:right-auto lg:-top-1 lg:flex lg:w-[150px] lg:-rotate-[8deg] lg:flex-col lg:items-end lg:text-right">
            <PenNote>eu, num evento de tech em SP</PenNote>
            <PenArrow className="-mr-1.5 mt-0.5 hidden lg:block" />
          </div>
          <figure className="m-0 -rotate-[2.2deg] rounded-sm bg-surface p-2.5 pb-3.5 shadow-paper">
            <Image
              src="/pedro-milan.jpg"
              alt="Selfie de Pedro Milan, de óculos e moletom preto, na entrada de um evento de tecnologia em São Paulo"
              width={1200}
              height={1500}
              quality={90}
              priority
              sizes="300px"
              className="block aspect-[4/5] w-full object-cover"
            />
            <figcaption className="pt-2.5 font-mono text-[11px] tracking-[0.02em] text-faint">
              São Paulo, SP
            </figcaption>
          </figure>
        </div>
      </Container>
    </section>
  );
}
