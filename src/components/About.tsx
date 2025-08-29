import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Code, Server, Database, Smartphone } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Frontend",
      description: "React, Next.js, TypeScript, Tailwind CSS"
    },
    {
      icon: Server,
      title: "Backend",
      description: "Node.js, Python, Java, APIs RESTful"
    },
    {
      icon: Database,
      title: "Banco de Dados",
      description: "PostgreSQL, MongoDB, MySQL, Redis"
    },
    {
      icon: Smartphone,
      title: "Mobile",
      description: "React Native, Flutter, desenvolvimento híbrido"
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Sobre Mim
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Desenvolvedor Full-Stack com Paixão por Inovação
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Com mais de 5 anos de experiência em desenvolvimento de sistemas, 
              tenho ajudado empresas a transformar ideias em soluções digitais robustas e escaláveis.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Minha Jornada</h3>
              <p className="text-muted-foreground">
                Iniciei minha carreira como desenvolvedor júnior e, através de dedicação 
                e aprendizado contínuo, evoluí para um desenvolvedor full-stack especializado 
                em arquiteturas modernas e metodologias ágeis.
              </p>
              <p className="text-muted-foreground">
                Acredito que a tecnologia deve servir às pessoas, por isso priorizo sempre 
                a experiência do usuário e a qualidade do código em todos os meus projetos.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Valores e Princípios</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-3 h-3 bg-primary rounded-full mt-2 mr-3 flex-shrink-0 shadow-md shadow-primary/30"></span>
                  Código limpo e bem documentado
                </li>
                <li className="flex items-start">
                  <span className="w-3 h-3 bg-primary rounded-full mt-2 mr-3 flex-shrink-0 shadow-md shadow-primary/30"></span>
                  Foco na experiência do usuário
                </li>
                <li className="flex items-start">
                  <span className="w-3 h-3 bg-primary rounded-full mt-2 mr-3 flex-shrink-0 shadow-md shadow-primary/30"></span>
                  Aprendizado contínuo e adaptabilidade
                </li>
                <li className="flex items-start">
                  <span className="w-3 h-3 bg-primary rounded-full mt-2 mr-3 flex-shrink-0 shadow-md shadow-primary/30"></span>
                  Colaboração e trabalho em equipe
                </li>
              </ul>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}