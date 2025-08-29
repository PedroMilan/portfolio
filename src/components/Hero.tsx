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
              <Button variant="ghost" size="sm">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm">
                <Download className="w-4 h-4 mr-2" />
                CV
              </Button>
            </div>
          </div>

          <div className="relative">
            {/* Elementos decorativos com a nova paleta */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse transition-all duration-300"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-accent/15 rounded-full blur-2xl animate-pulse delay-1000 transition-all duration-300"></div>

            <div className="relative z-10 bg-gradient-to-br from-primary/5 to-accent/5 p-2 rounded-2xl transition-all duration-300">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU2NDQzODAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Workspace do Pedro Milan"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover border-2 border-primary/20 transition-all duration-300"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 rounded-2xl transition-all duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
