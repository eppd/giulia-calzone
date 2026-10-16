import type { Metadata } from "next";
import { PathsContent } from "./paths-content";
import "./paths.css";

export const metadata: Metadata = {
  title: "Percorsi e servizi | Giulia Calzone, Psicologa Psicoterapeuta a Crema",
  description: "Psicoterapia individuale dell’adulto, terapia e consulenza di coppia, sostegno alla genitorialità. Scopri i percorsi e come richiedere un primo colloquio a Crema e online.",
  openGraph: { title: "Giulia Calzone — Ogni percorso inizia dall’ascolto", description: "Percorsi personalizzati, aree di intervento e fasi del lavoro terapeutico. In studio a Crema e online.", locale: "it_IT", type: "website" },
};

export default function PathsPage() {
  return <PathsContent />;
}
