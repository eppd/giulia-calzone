import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";
const sans = Geist({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const serif = Playfair_Display({ subsets: ["latin"], variable: "--font-serif", display: "swap" });
export const metadata: Metadata = {
  title: "Giulia Calzone | Psicologa Psicoterapeuta a Crema",
  description: "Uno spazio di ascolto e accoglienza con Giulia Calzone, psicologa e psicoterapeuta a orientamento cognitivo-comportamentale. In studio a Crema e online.",
  robots: { index: false, follow: false },
  openGraph: { title: "Giulia Calzone — Uno spazio per ritrovare il tuo equilibrio", description: "Psicologia e ascolto. In studio a Crema e online.", locale: "it_IT", type: "website" }
};
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="it"><body className={`${sans.variable} ${serif.variable}`}>{children}</body></html>;
}
