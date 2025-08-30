import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode implementar a lógica de envio do formulário
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "pedro.milan9@gmail.com",
      link: "mailto:pedro.milan9@gmail.com",
    },
    {
      icon: Phone,
      title: "Telefone",
      value: "+55 (11) 96177-6373",
      link: "tel:+5511961776373",
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "São Paulo, SP - Brasil",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Contato
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Vamos Trabalhar Juntos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tem um projeto em mente? Estou sempre aberto a discutir novas
              oportunidades e desafios interessantes.
            </p>
          </div>

          <div className="grid lg:grid-cols-1 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Entre em Contato</h3>
                <p className="text-muted-foreground mb-6">
                  Estou disponível para projetos freelance, oportunidades de
                  trabalho ou apenas para trocar ideias sobre tecnologia e
                  desenvolvimento.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="transition-colors hover:bg-accent/50"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <info.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">{info.title}</p>
                          <a
                            href={info.link}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div>
                <h4 className="font-semibold mb-2">Horário de Trabalho</h4>
                <p className="text-muted-foreground">
                  Segunda a Sexta: 9h às 18h (GMT-3)
                  <br />
                  Finais de semana: Apenas projetos urgentes
                </p>
              </div>
            </div>

            {/* 
            <Card>
              <CardHeader>
                <CardTitle>Envie uma Mensagem</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Seu nome"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="seu.email@exemplo.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Assunto *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Sobre o que você gostaria de falar?"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Descreva seu projeto ou dúvida..."
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
            */}
          </div>
        </div>
      </div>
    </section>
  );
}
