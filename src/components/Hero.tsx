"use client";

import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "framer-motion";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 relative overflow-hidden"
    >
      {/* Background gradient sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/80" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit animate-pulse">
                Desenvolvedor de Sistemas
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Olá, eu sou
                <motion.span
                  className="text-primary block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                >
                  Pedro Milan
                </motion.span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Desenvolvedor de sistemas apaixonado por criar soluções digitais
                inovadoras e eficientes. Especializado em desenvolvimento web
                moderno e arquitetura de software robusta.
              </p>
            </div>

            {/* Botões principais */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="w-fit hover:scale-105 transition-transform"
              >
                Ver Projetos
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="w-fit hover:scale-105 transition-transform"
              >
                <Mail className="w-4 h-4 mr-2" />
                Entrar em Contato
              </Button>
            </motion.div>

            {/* Social + CV */}
            <motion.div
              className="flex items-center space-x-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={() =>
                  window.open("https://github.com/PedroMilan", "_blank")
                }
                className="hover:text-primary hover:scale-110 transition-transform"
              >
                <Github className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/pedro-henrique-milan-5a9551245/",
                    "_blank"
                  )
                }
                className="hover:text-primary hover:scale-110 transition-transform"
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <a href="/Curriculo-Pedro Milan-Atualizado.pdf" download>
                <Button
                  variant="ghost"
                  size="sm"
                  className="hover:text-primary hover:scale-110 transition-transform"
                >
                  <Download className="w-4 h-4 mr-2" />
                  CV
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Imagem + Efeitos */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Círculos decorativos */}
            <motion.div
              className="absolute -top-8 -right-8 w-32 h-32 bg-primary/10 rounded-full blur-3xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-8 -left-8 w-24 h-24 bg-accent/15 rounded-full blur-2xl"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            />

            {/* Foto com borda animada */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative z-10 inline-block p-2 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl"
            >
              <ImageWithFallback
                src="/profile.jpg"
                alt="Foto de Pedro Milan"
                className="rounded-2xl shadow-2xl w-60 h-60 object-cover border-2 border-primary/30"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
