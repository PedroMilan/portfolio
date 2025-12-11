import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import React from "react";
import { NextSeo } from "next-seo";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfólio - Pedro Milan</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <NextSeo
        title="Pedro Milan | Desenvolvedor Front-End"
        description="Sou um desenvolvedor apaixonado por tecnologia, focado em criar soluções digitais modernas e escaláveis. Trabalho principalmente com frontend em React/Next.js, mas também possuo experiência em backend e mobile híbrido."
        canonical="https://pedromilan.vercel.app/"
        openGraph={{
          url: "https://pedromilan.vercel.app/",
          title: "Pedro Milan | Desenvolvedor Front-End",
          description:
            "Sou um desenvolvedor apaixonado por tecnologia, focado em criar soluções digitais modernas e escaláveis. Trabalho principalmente com frontend em React/Next.js, mas também possuo experiência em backend e mobile híbrido.",
          images: [
            {
              url: "https://pedromilan.vercel.app/profile.jpg",
              width: 1200,
              height: 630,
              alt: "Imagem de destaque do portfólio",
            },
          ],
          siteName: "Portfólio - Pedro Milan",
        }}
      />

      <div className="min-h-screen bg-background transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
