import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { NextSeo } from "next-seo";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32.png"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon-180.png" />
      </Head>

      <NextSeo
        title="Pedro Milan | Desenvolvedor Front-End"
        description="Desenvolvedor apaixonado por tecnologia, focado em criar soluções digitais modernas e escaláveis. Especializado em frontend com React/Next.js, com experiência em backend e mobile híbrido."
        canonical="https://pedromilan.vercel.app/"
        openGraph={{
          url: "https://pedromilan.vercel.app/",
          title: "Pedro Milan | Desenvolvedor Front-End",
          description:
            "Desenvolvedor apaixonado por tecnologia, focado em criar soluções digitais modernas e escaláveis. Especializado em frontend com React/Next.js, com experiência em backend e mobile híbrido.",
          images: [
            {
              url: "https://pedromilan.vercel.app/favicon-512.png",
              width: 1200,
              height: 630,
              alt: "Portfólio de Pedro Milan",
            },
          ],
          siteName: "Portfólio - Pedro Milan",
        }}
      />

      <div className="min-h-screen bg-[#0a0a0f]">
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
