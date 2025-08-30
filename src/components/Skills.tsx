import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Material UI & Styled Components", level: 85 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "NestJS", level: 82 },
        { name: "Python", level: 78 },
        { name: "APIs REST & GraphQL", level: 92 },
        { name: "Prisma & ORM", level: 80 },
      ],
    },
    {
      title: "Banco de Dados",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Redis", level: 75 },
        { name: "MySQL", level: 82 },
      ],
    },
    {
      title: "DevOps & Ferramentas",
      skills: [
        { name: "Docker", level: 80 },
        { name: "AWS", level: 75 },
        { name: "Git", level: 95 },
        { name: "CI/CD", level: 78 },
        { name: "Linux & Nginx", level: 70 },
      ],
    },
  ];

  const technologies = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "NestJS",
    "Python",
    "Java",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "MySQL",
    "Docker",
    "AWS",
    "Git",
    "Tailwind CSS",
    "Material UI",
    "Styled Components",
    "React Query",
    "Express.js",
    "GraphQL",
    "REST APIs",
    "Redux",
    "Jest",
    "Cypress",
    "Linux",
    "Nginx",
    "Prisma",
    "React Native",
    "Flutter",
  ];

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Habilidades
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Tecnologias e Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Domínio em tecnologias modernas, metodologias ágeis e boas
              práticas que garantem a entrega de soluções robustas, escaláveis e
              com excelente experiência para o usuário.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {skillCategories.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-center">
                Tecnologias que Trabalho
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3 justify-center">
                {technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
