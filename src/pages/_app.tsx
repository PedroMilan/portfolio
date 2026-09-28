import {
  Bricolage_Grotesque,
  Figtree,
  IBM_Plex_Mono,
  Nanum_Pen_Script,
} from "next/font/google";
import { AppProps } from "next/app";

import "@/styles/globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
});

const body = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

const pen = Nanum_Pen_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pen",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* As variáveis ficam no <html> para o body e o ::selection enxergarem */}
      <style jsx global>{`
        :root {
          --font-display: ${display.style.fontFamily};
          --font-body: ${body.style.fontFamily};
          --font-mono: ${mono.style.fontFamily};
          --font-pen: ${pen.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
