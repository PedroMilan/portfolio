import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Stack } from "@/components/Stack";
import { NextSeo } from "next-seo";
import Head from "next/head";

const SITE_URL = "https://pedromilan.vercel.app/";
const TITLE = "Pedro Milan | Desenvolvedor Full-Stack";
const DESCRIPTION =
  "Desenvolvedor full-stack em São Paulo. Faço do banco de dados à tela, com Node.js, NestJS, React, Next.js e TypeScript.";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon-180.png" />
        <meta name="theme-color" content="#f4f5f2" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#111317" media="(prefers-color-scheme: dark)" />
      </Head>

      <NextSeo
        title={TITLE}
        description={DESCRIPTION}
        canonical={SITE_URL}
        openGraph={{
          url: SITE_URL,
          title: TITLE,
          description: DESCRIPTION,
          locale: "pt_BR",
          images: [
            {
              url: `${SITE_URL}og-image.png`,
              width: 1200,
              height: 630,
              alt: "Pedro Milan, desenvolvedor full-stack em São Paulo",
            },
          ],
          siteName: "Pedro Milan",
        }}
        twitter={{ cardType: "summary_large_image" }}
      />

      <Header />
      <main>
        <Hero />
        <Projects />
        <About />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
