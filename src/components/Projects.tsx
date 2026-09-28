import Image from "next/image";

import { Container, Section, SectionHeader } from "./ui/Section";
import { PenNote } from "./ui/PenNote";

interface Project {
  title: string;
  kind: string;
  description: string;
  image: string;
  imageAlt: string;
  link: string;
}

interface OtherProject {
  title: string;
  description: string;
  stack: string;
  link?: { label: string; href: string };
}

const featured = {
  title: "Luiza Study",
  kind: "Webapp full-stack · do design ao banco",
  image: "/images/luizastudy.webp",
  imageAlt:
    "Painel do Luiza Study com total de matérias, sessões de estudo, anotações e progresso",
  link: "https://luiza-study.vercel.app/",
  stack: "Next.js · TypeScript · Tailwind · Prisma · JWT · bcrypt",
  story: [
    {
      heading: "Por que existe",
      text: "A Luiza, minha namorada, estuda muito e organizava tudo no Notion, mas queria um lugar com a cara dela. Fiz o Luiza Study de surpresa e fui ajustando conforme ela usava. Cada funcionalidade nova começou com um pedido dela.",
    },
    {
      heading: "O que eu fiz",
      text: "O projeto inteiro: organização por matérias, registro de sessões de estudo e anotações, login próprio com JWT e bcrypt, API e banco de dados com Prisma.",
    },
    {
      heading: "A parte difícil",
      text: "A API e a conexão com o banco. Até então eu era mais do front. Aqui precisei modelar os dados, proteger as rotas e fazer a autenticação do começo ao fim. Foi nesse projeto que virei full-stack.",
    },
  ],
};

const projects: Project[] = [
  {
    title: "HoraJusta",
    kind: "Webapp · projeto pessoal",
    description:
      "Cronômetro para freelancer e PJ saber quanto tempo gastou e quanto ganhou em cada cliente, por dia, semana e mês.",
    image: "/images/horajusta.webp",
    imageAlt: "Tela do HoraJusta com cronômetro e totais por dia, semana e mês",
    link: "https://horajusta.vercel.app/",
  },
  {
    title: "Alba Serena",
    kind: "Landing page · cliente",
    description:
      "Página de produto para o perfume sólido artesanal da Secret Garden, com lavanda e bergamota.",
    image: "/images/alba-serena.webp",
    imageAlt: "Landing page do perfume sólido Alba Serena",
    link: "https://alba-serena.vercel.app/",
  },
  {
    title: "Ruiz & Milan",
    kind: "Site institucional",
    description:
      "Site da Ruiz & Milan Solutions, com os serviços da empresa e formulário ligado a um banco PostgreSQL.",
    image: "/images/ruizmilan.webp",
    imageAlt: "Site institucional da Ruiz & Milan Solutions",
    link: "https://ruiz-milan-solutions.vercel.app/",
  },
  {
    title: "Jogo da Memória",
    kind: "Jogo · projeto pessoal",
    description:
      "Jogo da memória para duas pessoas no mesmo computador, com animação das cartas em Framer Motion.",
    image: "/images/memory.webp",
    imageAlt: "Jogo da memória para dois jogadores",
    link: "https://memory-game-two-players.vercel.app/",
  },
];

const others: OtherProject[] = [
  {
    title: "E-commerce",
    description: "Template de loja com vitrine, carrinho e checkout em formulário.",
    stack: "Next.js · React Hook Form",
    link: { label: "Abrir ↗", href: "https://e-commerce-default-template.vercel.app/" },
  },
  {
    title: "Widget de clima",
    description: "Micro frontend que mostra a previsão do tempo pela sua localização.",
    stack: "Vue.js · Tailwind",
    link: { label: "Abrir ↗", href: "https://weather-widget-azure-eta.vercel.app/" },
  },
  {
    title: "API de login e documentos",
    description:
      "Autenticação, recuperação de senha e geração de documentos, documentada no Swagger.",
    stack: "NestJS · Prisma · Docker",
    link: { label: "GitHub ↗", href: "https://github.com/PedroMilan" },
  },
  {
    title: "Sistema de ortodontia",
    description: "Login e fluxo completo de atendimento para clínicas.",
    stack: "React · Material UI",
  },
  {
    title: "Gerador de documentos",
    description: "Criação e edição de documentos para o setor administrativo.",
    stack: "React · Python",
  },
];

const metaClass = "font-mono text-[12.5px] uppercase tracking-[0.03em] text-faint";
const shotClass =
  "block w-full rounded-md border border-line bg-surface object-cover object-left-top";

export function Projects() {
  return (
    <Section id="projetos">
      <Container>
        <SectionHeader title="Projetos">
          Alguns são meus, outros foram para clientes. Os que estão sob contrato
          de confidencialidade aparecem na lista do fim, sem imagem.
        </SectionHeader>

        <article className="mb-[72px] grid items-start gap-8 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
          <div className="relative">
            <Image
              src={featured.image}
              alt={featured.imageAlt}
              width={1274}
              height={902}
              sizes="(min-width: 1024px) 620px, 100vw"
              className={`${shotClass} aspect-[16/10.5]`}
            />
            <PenNote className="absolute -bottom-5 right-3.5 -rotate-[4deg] bg-paper px-2 py-0.5">
              feito de surpresa pra ela
            </PenNote>
          </div>

          <div>
            <p className={metaClass}>{featured.kind}</p>
            <h3 className="mb-5 mt-2 text-[clamp(30px,3.4vw,40px)] font-bold tracking-[-0.025em]">
              {featured.title}
            </h3>
            <div className="grid gap-[18px]">
              {featured.story.map(({ heading, text }) => (
                <div key={heading}>
                  <h4 className="mb-1 font-mono text-[13px] font-medium uppercase tracking-[0.08em] text-faint">
                    {heading}
                  </h4>
                  <p className="text-muted">{text}</p>
                </div>
              ))}
              <p className="font-mono text-[13.5px] text-muted">{featured.stack}</p>
            </div>
            <a
              href={featured.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link mt-6 inline-block"
            >
              Abrir o Luiza Study ↗
            </a>
          </div>
        </article>

        <div className="grid gap-x-10 gap-y-12 md:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid gap-3.5 no-underline"
            >
              <Image
                src={project.image}
                alt={project.imageAlt}
                width={1280}
                height={800}
                sizes="(min-width: 768px) 520px, 100vw"
                className={`${shotClass} aspect-[16/10] transition duration-300 group-hover:-translate-y-[3px] group-hover:shadow-paper`}
              />
              <p className={metaClass}>{project.kind}</p>
              <h3 className="flex items-baseline justify-between gap-3 text-2xl font-bold tracking-[-0.015em]">
                {project.title}
                <span className="whitespace-nowrap font-body text-[15px] font-medium text-pen group-hover:underline group-hover:underline-offset-4">
                  Abrir ↗
                </span>
              </h3>
              <p className="text-base text-muted">{project.description}</p>
            </a>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="mb-2 text-[22px] font-bold">Outros trabalhos</h3>
          <p className="mb-5 text-base text-muted">
            Projetos menores e sistemas de clientes.
          </p>
          <ul className="border-t border-line">
            {others.map((item) => (
              <li
                key={item.title}
                className="grid grid-cols-[1fr_auto] gap-x-6 gap-y-1 border-b border-line py-[18px] lg:grid-cols-[1.1fr_1.4fr_1fr_120px] lg:items-baseline"
              >
                <span className="font-semibold">{item.title}</span>
                <span className="col-span-2 text-[15px] text-muted lg:col-span-1">
                  {item.description}
                </span>
                <span className="col-span-2 font-mono text-[12.5px] text-faint lg:col-span-1">
                  {item.stack}
                </span>
                <span className="col-start-2 row-start-1 text-right text-[15px] lg:col-start-auto lg:row-start-auto">
                  {item.link ? (
                    <a
                      href={item.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pen underline-offset-4"
                    >
                      {item.link.label}
                    </a>
                  ) : (
                    <span className="whitespace-nowrap rounded-full border border-line px-2.5 py-[3px] font-mono text-xs text-faint">
                      sob NDA
                    </span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
