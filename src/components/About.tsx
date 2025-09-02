"use client";

import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Code, Server, Database, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Frontend",
      description:
        "React, Next.js, TypeScript, Tailwind CSS, Material UI, Styled Components",
    },
    {
      icon: Server,
      title: "Backend",
      description: "Node.js, NestJS, Python, APIs RESTful, Prisma",
    },
    {
      icon: Database,
      title: "Banco de Dados",
      description: "PostgreSQL, MongoDB, MySQL, Redis",
    },
    {
      icon: Smartphone,
      title: "Mobile",
      description: "React Native, Flutter, desenvolvimento híbrido",
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background decorativo sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/80" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Cabeçalho */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Badge variant="outline" className="mb-4 animate-pulse">
              Sobre Mim
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Desenvolvedor Full-Stack em Evolução Constante
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sou um desenvolvedor apaixonado por tecnologia, focado em criar
              soluções digitais modernas e escaláveis. Trabalho principalmente
              com frontend em React/Next.js, mas também possuo experiência em
              backend e mobile híbrido.
            </p>
          </motion.div>

          {/* Minha Jornada + Valores */}
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold">Minha Jornada</h3>
              <p className="text-muted-foreground">
                Comecei como desenvolvedor júnior e, através de projetos
                desafiadores, estudo contínuo e prática em tecnologias modernas,
                evoluí para atuar como full-stack. Tenho experiência real em
                sistemas web complexos e aplicações mobile híbridas.
              </p>
              <p className="text-muted-foreground">
                Valorizo UX/UI, código limpo, testes, boas práticas e
                colaboração em equipe, sempre buscando entregar valor real aos
                usuários.
              </p>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold">Valores e Princípios</h3>
              <ul className="space-y-3 text-muted-foreground">
                {[
                  "Código limpo, testável e bem documentado",
                  "Foco na experiência do usuário",
                  "Aprendizado contínuo e adaptabilidade",
                  "Colaboração e trabalho em equipe",
                ].map((value, idx) => (
                  <li key={idx} className="flex items-start group">
                    <span className="w-3 h-3 bg-primary rounded-full mt-2 mr-3 flex-shrink-0 shadow-md shadow-primary/30 group-hover:scale-125 transition-transform" />
                    {value}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Destaques */}
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <Card className="text-center hover:shadow-lg hover:scale-105 transition-transform">
                  <CardContent className="p-6">
                    <item.icon className="w-12 h-12 text-primary mx-auto mb-4 transition-transform group-hover:rotate-6" />
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
