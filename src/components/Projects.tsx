import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Plataforma completa de e-commerce com painel administrativo, sistema de pagamento e gerenciamento de estoque.",
      image:
        "https://images.unsplash.com/photo-1546900703-cf06143d1239?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NTY0ODY5MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Stripe",
        "Tailwind CSS",
      ],
      featured: true,
    },
    {
      title: "Sistema de Gestão Empresarial",
      description:
        "Sistema ERP para gestão de recursos empresariais com módulos de vendas, estoque e relatórios avançados.",
      image:
        "https://images.unsplash.com/photo-1599580546605-a86af98dbdb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1NjQzMzY3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "Chart.js"],
      featured: true,
    },
    {
      title: "App de Delivery Mobile",
      description:
        "Aplicativo móvel para delivery de alimentos com geolocalização, pagamentos e acompanhamento em tempo real.",
      image:
        "https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU2NDQzODAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: [
        "React Native",
        "Firebase",
        "Google Maps API",
        "PayPal SDK",
      ],
      featured: false,
    },
    {
      title: "Sistema de Monitoramento",
      description:
        "Dashboard em tempo real para monitoramento de serviços e infraestrutura com alertas automatizados.",
      image:
        "https://images.unsplash.com/photo-1546900703-cf06143d1239?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NTY0ODY5MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Vue.js", "Python", "InfluxDB", "Docker", "Grafana"],
      featured: false,
    },
    {
      title: "Plataforma de Cursos Online",
      description:
        "LMS completo com sistema de usuários, progresso de cursos, certificações e pagamentos.",
      image:
        "https://images.unsplash.com/photo-1599580546605-a86af98dbdb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1NjQzMzY3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Next.js", "Prisma", "AWS S3", "Stripe", "Tailwind CSS"],
      featured: false,
    },
    {
      title: "API de Microserviços",
      description:
        "Arquitetura de microserviços para aplicação de grande escala com autenticação e documentação completa.",
      image:
        "https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU2NDQzODAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Node.js", "Docker", "Kubernetes", "Redis", "JWT"],
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Projetos
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Trabalhos em Destaque
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Seleção de projetos que demonstram minha experiência em diferentes
              tecnologias e soluções para diversos segmentos.
            </p>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-center">
            Em desenvolvimento...
          </h2>

          {/* 
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <Badge
                    className="absolute top-4 left-4 bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/30"
                    variant="secondary"
                  >
                    ⭐ Destaque
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Github className="w-4 h-4 mr-2" />
                    Código
                  </Button>
                  <Button size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-8 text-center">
              Outros Projetos
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {otherProjects.map((project, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-32">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <CardDescription className="text-sm line-clamp-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.technologies
                        .slice(0, 3)
                        .map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0 flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Github className="w-3 h-3 mr-1" />
                      Código
                    </Button>
                    <Button size="sm" className="flex-1">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Demo
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
          */}
        </div>
      </div>
    </section>
  );
}
