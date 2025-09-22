"use client";

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
import { ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "framer-motion";

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Plataforma completa de e-commerce com painel administrativo intuitivo, integração de pagamentos e gerenciamento de estoque em tempo real.",
      image: "/images/ecommerce.png",
      technologies: ["Next.js", "TypeScript", "Hook Form", "Tailwind CSS"],
      featured: true,
      externalLink: "https://e-commerce-default-template.vercel.app/",
    },
    {
      title: "Ruiz&Milan Solutions",
      description:
        "Landing page institucional desenvolvida para apresentar os serviços da Ruiz&Milan Solutions, com design responsivo e moderno.",
      image: "/images/ruizmilan.png",
      technologies: [
        "Next.js",
        "Typescript",
        "Styled-Components",
        "Prisma",
        "PostgreSQL",
        "Node.js",
      ],
      featured: true,
      externalLink: "https://ruiz-milan-solutions.vercel.app/",
    },
    {
      title: "Widget de Climatempo",
      description:
        "Aplicação em micro frontend para exibir a previsão do tempo em tempo real de forma simples, leve e responsiva.",
      image: "/images/widget.jpg",
      technologies: ["Vue.js", "Tailwind", "JavaScript", "CSS"],
      featured: false,
      externalLink: "https://weather-widget-azure-eta.vercel.app/",
    },
    {
      title: "API de Login e Criação de Documentos",
      description:
        "API robusta para autenticação segura e geração de documentos, com suporte a containerização e documentação interativa.",
      image: "/images/api.jpg",
      technologies: ["NestJS", "Node.js", "Prisma", "Docker", "Swagger"],
      featured: false,
    },
    {
      title: "Sistema de Ortodontia",
      image: "/images/odont.jpg",
      description:
        "Sistema especializado para clínicas odontológicas, com módulo de login seguro e fluxo completo de atendimento ao paciente durante toda a consulta.",
      technologies: ["React", "TypeScript", "Material UI", "React Hook Form"],
      featured: false,
    },
    {
      title: "Sistema de Geração de Documentos",
      image: "/images/document.jpg",
      description:
        "Aplicação web voltada para criação, edição e gerenciamento de documentos, garantindo eficiência no fluxo administrativo e segurança dos dados.",
      technologies: ["React", "TypeScript", "Python", "Styled-Components"],
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

          {/* Featured Projects */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden min-h-[33rem]">
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
                  {project.externalLink && (
                    <CardFooter className="flex gap-2">
                      <Button
                        size="sm"
                        onClick={() =>
                          window.open(project.externalLink, "_blank")
                        }
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    </CardFooter>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-xl font-semibold mb-8 text-center">
              Outros Projetos
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden min-h-[25rem]">
                    {project.image && (
                      <div className="relative h-32">
                        <ImageWithFallback
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <CardDescription className="text-sm ">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex flex-wrap gap-1 mb-3">
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
                    {project.externalLink && (
                      <CardFooter className="flex gap-2">
                        <Button
                          size="sm"
                          onClick={() =>
                            window.open(project.externalLink, "_blank")
                          }
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </Button>
                      </CardFooter>
                    )}
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
