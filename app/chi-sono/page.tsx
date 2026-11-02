import type { Metadata } from "next";
import { AboutContent } from "./about-content";
import "./about.css";
import { alternatesFor } from "../seo-config";
import { PersonStructuredData } from "../components/structured-data";

export const metadata: Metadata = {
  alternates: alternatesFor("/chi-sono/"),
  title: "Chi sono | Giulia Calzone, Psicologa Psicoterapeuta a Crema",
  description: "Conosci Giulia Calzone e il suo approccio cognitivo-comportamentale: ascolto, risorse personali e una relazione terapeutica di fiducia. A Crema e online.",
  openGraph: {
    title: "Giulia Calzone — Prima di tutto, una relazione di fiducia",
    description: "La mia visione, il mio approccio e i principi di un percorso costruito insieme.",
    locale: "it_IT", type: "website",
  },
};

export default function AboutPage() {
  return <><PersonStructuredData /><AboutContent /></>;
}
