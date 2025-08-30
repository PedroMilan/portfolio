import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                Desenvolvedor de Sistemas
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Olá, eu sou
                <span className="text-primary block">Pedro Milan</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Desenvolvedor de sistemas apaixonado por criar soluções digitais
                inovadoras e eficientes. Especializado em desenvolvimento web
                moderno e arquitetura de software robusta.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="w-fit"
              >
                Ver Projetos
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="w-fit"
              >
                <Mail className="w-4 h-4 mr-2" />
                Entrar em Contato
              </Button>
            </div>

            <div className="flex items-center space-x-6">
              <Button
                variant="ghost"
                size="sm"
                onClick={() =>
                  window.open("https://github.com/PedroMilan", "_blank")
                }
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
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <a href="/Curriculo-Pedro Milan-Atualizado.pdf" download>
                <Button variant="ghost" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  CV
                </Button>
              </a>
            </div>
          </div>

          <div className="relative">
            {/* Elementos decorativos */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse transition-all duration-300"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-accent/15 rounded-full blur-2xl animate-pulse delay-1000 transition-all duration-300"></div>

            {/* Caixa de fundo ajustável */}
            <div className="relative z-10 inline-block p-2 bg-gradient-to-br from-primary/8 to-accent/8 rounded-2xl transition-all duration-300">
              <ImageWithFallback
                src="/profile.jpg"
                alt="Workspace do Pedro Milan"
                className="rounded-2xl shadow-2xl w-60 h-60 object-cover border-2 border-primary/20 transition-all duration-300"
              />
            </div>

            {/* Sobreposição decorativa */}
          </div>
        </div>
      </div>
    </section>
  );
}
