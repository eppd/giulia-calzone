import type { Metadata } from "next";
import Link from "next/link";

import { footerProfessionalDetails } from "../components/footer-professional-details";
import { alternatesFor } from "../seo-config";
import styles from "./professional-info.module.css";

const registration = footerProfessionalDetails.registration;
const vatNumber = footerProfessionalDetails.vatNumber;
const professionalProfileUrl = "https://areariservata.psy.it/albo/iscritto/giulia_calzone_186719";

export const metadata: Metadata = {
  alternates: alternatesFor("/informazioni/"),
  title: "Informazioni professionali | Giulia Calzone",
  description: "Informazioni professionali della Dott.ssa Giulia Calzone, psicologa e psicoterapeuta a Crema. Iscrizione all'Albo, Partita IVA e recapiti dello studio.",
};

export default function Informazioni() {
  return (
    <main id="main" className="legal-page">
      <Link href="/">← Torna al sito</Link>
      <p className="eyebrow">PROFESSIONE E TRASPARENZA</p>
      <h1>Informazioni professionali</h1>
      <p>Qualifiche, iscrizione all'Albo e riferimenti professionali della Dott.ssa Giulia Calzone, psicologa e psicoterapeuta a Crema.</p>

      <section aria-labelledby="professional-profile-title">
        <h2 id="professional-profile-title">Profilo professionale</h2>
        <dl className={styles.entries}>
          <div className={styles.entry}><dt>Professionista</dt><dd>Dott.ssa Giulia Calzone</dd></div>
          <div className={styles.entry}><dt>Qualifica</dt><dd>Psicologa e Psicoterapeuta</dd></div>
          <div className={styles.entry}><dt>Orientamento</dt><dd>Cognitivo-comportamentale</dd></div>
          <div className={styles.entry}><dt>Ordine professionale</dt><dd>Ordine degli Psicologi della Lombardia</dd></div>
          <div className={styles.entry}>
            <dt>Iscrizione all'Albo</dt>
            <dd>n. {registration?.number ?? "22666"}<br /><a href={professionalProfileUrl} target="_blank" rel="noopener noreferrer">Consulta l'iscrizione all'Albo</a></dd>
          </div>
          <div className={styles.entry}><dt>Partita IVA</dt><dd>{vatNumber ?? "01747640199"}</dd></div>
        </dl>
      </section>

      <section aria-labelledby="professional-contacts-title">
        <h2 id="professional-contacts-title">Sede e recapiti</h2>
        <dl className={styles.entries}>
          <div className={styles.entry}><dt>Sede professionale</dt><dd>Via Salvecchio 6/A, 26013 Crema (CR)</dd></div>
          <div className={styles.entry}><dt>Email</dt><dd><a href="mailto:info@giuliacalzone.it">info@giuliacalzone.it</a></dd></div>
          <div className={styles.entry}><dt>Telefono</dt><dd><a href="tel:+393482908640">+39 348 290 8640</a></dd></div>
          <div className={styles.entry}><dt>Modalità di ricevimento</dt><dd>In studio a Crema e online, esclusivamente su appuntamento.</dd></div>
        </dl>
      </section>
    </main>
  );
}
