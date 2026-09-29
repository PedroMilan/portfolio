import { Container, Section, SectionHeader } from "./ui/Section";

// Atualize a cada 2 ou 3 meses
const nowUpdatedAt = "set/2026";
const now = [
  { label: "Trabalhando em", value: "Freelances para grandes empresas do Brasil" },
  { label: "Estudando", value: "PHP e Laravel" },
  {
    label: "Lendo",
    value: (
      <>
        <cite>Nada pode me ferir</cite>, de David Goggins
      </>
    ),
  },
  { label: "Procurando", value: "Vaga full-stack ou front-end, remota ou em SP" },
];

export function About() {
  return (
    <Section id="sobre">
      <Container className="grid gap-12 lg:grid-cols-[1fr_340px] lg:gap-20">
        <div>
          <SectionHeader title="Sobre mim" />
          <div className="grid max-w-[34em] gap-5 text-[19px] text-muted">
            <p className="text-[22px] leading-normal text-ink">
              Comecei como desenvolvedor júnior, mexendo em telas de sistemas
              internos. Com o tempo fui descendo para a API e o banco, e hoje{" "}
              <strong className="font-semibold">trabalho como full-stack</strong>:
              modelo os dados, escrevo a API e faço a interface.
            </p>
            <p>
              O que eu mais gosto é pegar um processo bagunçado de alguém e
              transformar numa tela simples. Foi assim com a clínica de
              ortodontia, que trocava fichas de papel por um sistema, e com o
              Luiza Study.
            </p>
            <p>
              Me importo com o que o usuário sente ao usar: carregamento rápido,
              formulário que não perde o que você digitou, botão que diz
              exatamente o que vai fazer.
            </p>
            <p>
              Fora do código, sou apaixonado por esporte. Acompanho de futebol à
              Fórmula 1 e sou fã de esports, principalmente de{" "}
              <strong className="font-semibold text-ink">Counter-Strike</strong>.
            </p>
          </div>
        </div>

        <aside
          aria-label="O que estou fazendo agora"
          className="self-start rounded-md border border-line bg-surface px-[26px] pb-[22px] pt-[26px]"
        >
          <div className="mb-[18px] flex items-baseline justify-between gap-3">
            <h3 className="text-[22px] font-bold">Agora</h3>
            <span className="font-mono text-xs text-faint">{nowUpdatedAt}</span>
          </div>
          <dl className="grid gap-4">
            {now.map(({ label, value }) => (
              <div key={label}>
                <dt className="font-mono text-xs uppercase tracking-[0.08em] text-faint">
                  {label}
                </dt>
                <dd className="mt-1 text-base">{value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </Container>
    </Section>
  );
}
