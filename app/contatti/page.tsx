import type { Metadata } from "next";
import { ContactsContent } from "./contacts-content";
import "./contacts.css";

export const metadata: Metadata = {
  title: "Contatti | Giulia Calzone, Psicologa Psicoterapeuta a Crema",
  description: "Contatta Giulia Calzone per informazioni o un primo colloquio. Studio in Via Salvecchio 6/A a Crema, su appuntamento, e colloqui online.",
  openGraph: { title: "Giulia Calzone — Il primo passo? Possiamo parlarne.", description: "Riferimenti, studio a Crema e richiesta di un primo colloquio. In studio e online.", locale: "it_IT", type: "website" },
};

export default function ContactsPage() {
  return <ContactsContent />;
}
