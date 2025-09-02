"use client";

import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formEndpoint = "https://formspree.io/f/meolregn"; // seu endpoint

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
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
      title: "WhatsApp",
      value: "+55 (11) 96177-6373",
      link: "https://wa.me/5511961776373?text=Olá!%20Vim%20pelo%20seu%20site%20e%20gostaria%20de%20mais%20informações.",
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "São Paulo, SP - Brasil",
      link: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-muted/50 relative overflow-hidden"
    >
      {/* efeito de fundo */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Cabeçalho */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Badge variant="outline" className="mb-4 animate-pulse">
              Contato
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Vamos Trabalhar Juntos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tem um projeto em mente? Estou sempre aberto a discutir novas
              oportunidades e desafios interessantes.
            </p>
          </motion.div>

          {/* Grid principal */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Informações de contato */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
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
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <Card className="transition-all hover:shadow-lg hover:bg-accent/40">
                      <CardContent className="p-4">
                        <a
                          href={info.link}
                          className="flex items-center space-x-4"
                          target="_blank"
                        >
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <info.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">{info.title}</p>
                            <p className="text-muted-foreground hover:text-primary transition-colors">
                              {info.value}
                            </p>
                          </div>
                        </a>
                      </CardContent>
                    </Card>
                  </motion.div>
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
            </motion.div>

            {/* Formulário */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-md hover:shadow-xl transition-all">
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

                    <Button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 group"
                      disabled={loading}
                    >
                      {loading ? (
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8H4z"
                          ></path>
                        </svg>
                      ) : (
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      )}
                      {loading ? "Enviando..." : "Enviar Mensagem"}
                    </Button>

                    {/* Mensagem pós-envio */}
                    {status === "success" && (
                      <motion.p
                        className="text-green-500 mt-4 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        Mensagem enviada com sucesso!
                      </motion.p>
                    )}
                    {status === "error" && (
                      <motion.p
                        className="text-red-500 mt-4 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        Houve um erro ao enviar a mensagem. Tente novamente.
                      </motion.p>
                    )}
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
