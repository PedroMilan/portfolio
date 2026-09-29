import { Container, Section, SectionHeader } from "./ui/Section";

interface Tech {
  name: string;
  note?: string;
}

interface Level {
  title: string;
  hint: string;
  techs: Tech[];
  strong?: boolean;
}

const levels: Level[] = [
  {
    title: "Todo dia",
    hint: "Onde sou mais rápido",
    strong: true,
    techs: [
      { name: "TypeScript" },
      { name: "React e Next.js", note: "front" },
      { name: "Tailwind CSS", note: "front" },
      { name: "Node.js e NestJS", note: "back" },
      { name: "Prisma e PostgreSQL", note: "back" },
      { name: "Git" },
    ],
  },
  {
    title: "Com frequência",
    hint: "Uso em quase todo projeto",
    techs: [
      { name: "APIs REST e JWT" },
      { name: "React Query" },
      { name: "React Hook Form" },
      { name: "Styled Components" },
      { name: "Material UI" },
      { name: "Framer Motion" },
    ],
  },
  {
    title: "Já usei em projeto",
    hint: "Sei o caminho, preciso de uns dias",
    techs: [
      { name: "PHP e Laravel", note: "estudando" },
      { name: "React Native e Flutter" },
      { name: "Vue.js" },
      { name: "Python" },
      { name: "GraphQL" },
      { name: "MongoDB, MySQL, Redis" },
      { name: "Docker" },
      { name: "AWS", note: "Amplify, Lambda, S3" },
      { name: "Jest e Cypress" },
    ],
  },
];

export function Stack() {
  return (
    <Section id="stack">
      <Container>
        <SectionHeader title="Com o que eu trabalho">
          Front e back, separados pelo quanto eu uso. Isso diz mais do que uma
          parede de logos.
        </SectionHeader>

        <div className="grid gap-10 md:grid-cols-3 md:gap-12">
          {levels.map((level) => (
            <div key={level.title}>
              <h3 className="mb-1 text-xl font-bold">{level.title}</h3>
              <p className="mb-[18px] text-sm text-faint">{level.hint}</p>
              <ul>
                {level.techs.map((tech) => (
                  <li
                    key={tech.name}
                    className={`flex justify-between gap-3 border-b border-dashed border-line py-[9px] text-base ${
                      level.strong ? "font-semibold" : ""
                    }`}
                  >
                    {tech.name}
                    {tech.note && (
                      <small className="font-mono text-xs font-normal text-faint">
                        {tech.note}
                      </small>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
