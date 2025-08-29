import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-card border-t border-primary/10 relative transition-colors duration-300">
      {/* Elemento decorativo */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-accent transition-all duration-300"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2 space-y-4">
              <h3 className="text-xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Pedro Milan
              </h3>
              <p className="text-muted-foreground max-w-md">
                Desenvolvedor de sistemas apaixonado por criar soluções digitais
                inovadoras e eficientes. Sempre em busca de novos desafios e
                oportunidades de aprendizado.
              </p>
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm">
                  <Github className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Linkedin className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Mail className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Navegação</h4>
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Início
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Sobre
                </button>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Habilidades
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Projetos
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Contato
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Serviços</h4>
              <div className="flex flex-col space-y-2 text-muted-foreground">
                <span>Desenvolvimento Web</span>
                <span>Aplicações Mobile</span>
                <span>APIs e Backend</span>
                <span>Consultoria Técnica</span>
                <span>Arquitetura de Software</span>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <span>© {currentYear} Pedro Milan. Desenvolvido com</span>
              <Heart className="w-4 h-4 fill-red-500 text-red-500" />
              <span>e React</span>
            </div>
            <Button
              variant="ghost"
              onClick={scrollToTop}
              className="text-muted-foreground hover:text-primary"
            >
              Voltar ao topo ↑
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
