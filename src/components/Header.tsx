import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const isHomePage = router.pathname === "/";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-primary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Link href="/">
              <h1 className="text-xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent cursor-pointer">
                Pedro Milan
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-8">
              <button
                onClick={() =>
                  isHomePage ? scrollToSection("home") : router.push("/")
                }
                className="hover:text-primary transition-colors"
              >
                Início
              </button>
              <button
                onClick={() =>
                  isHomePage ? scrollToSection("about") : router.push("/")
                }
                className="hover:text-primary transition-colors"
              >
                Sobre
              </button>
              <button
                onClick={() =>
                  isHomePage ? scrollToSection("skills") : router.push("/")
                }
                className="hover:text-primary transition-colors"
              >
                Habilidades
              </button>

              <button
                onClick={() =>
                  isHomePage ? scrollToSection("projects") : router.push("/")
                }
                className="hover:text-primary transition-colors"
              >
                Projetos
              </button>
              <button
                onClick={() =>
                  isHomePage ? scrollToSection("contact") : router.push("/")
                }
                className="hover:text-primary transition-colors"
              >
                Contato
              </button>
            </nav>
            {/*<ThemeToggle />*/}
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center space-x-2">
            {/*<ThemeToggle />*/}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() =>
                  isHomePage ? scrollToSection("home") : router.push("/")
                }
                className="text-left hover:text-primary transition-colors"
              >
                Início
              </button>
              <button
                onClick={() =>
                  isHomePage ? scrollToSection("about") : router.push("/")
                }
                className="text-left hover:text-primary transition-colors"
              >
                Sobre
              </button>
              <button
                onClick={() =>
                  isHomePage ? scrollToSection("skills") : router.push("/")
                }
                className="text-left hover:text-primary transition-colors"
              >
                Habilidades
              </button>

              <button
                onClick={() =>
                  isHomePage ? scrollToSection("projects") : router.push("/")
                }
                className="text-left hover:text-primary transition-colors"
              >
                Projetos
              </button>
              <button
                onClick={() =>
                  isHomePage ? scrollToSection("contact") : router.push("/")
                }
                className="text-left hover:text-primary transition-colors"
              >
                Contato
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
