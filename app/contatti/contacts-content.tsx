import Link from "next/link";

import Image from "next/image";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { ContactForm } from "../components/contact-form";

const directions = "https://www.google.com/maps/search/?api=1&query=Via+Salvecchio+6%2FA+Crema+CR";

export function ContactsContent() {
  return <main id="main" className="contacts-main">
    <section className="contacts-hero section-shell" aria-labelledby="contacts-title"><div className="contacts-hero-copy"><nav className="contacts-breadcrumb" aria-label="Percorso di navigazione"><Link href="/">Home</Link><span aria-hidden="true">/</span><span>Contatti</span></nav><p className="eyebrow">CONTATTI</p><h1 id="contacts-title">Il primo passo?<br /><em>Possiamo parlarne.</em></h1><p>Per richiedere un primo colloquio psicologico a Crema o online, puoi contattarmi attraverso il modulo o i recapiti dello studio. Insieme potremo approfondire la tua richiesta e valutare la possibilità di iniziare un percorso.</p><a className="text-link underlined" href="#modulo">Scrivimi un messaggio <ArrowDown size={18} /></a></div><figure className="contacts-hero-photo"><Image src="/images/contatti-hero-dettaglio.webp" alt="Immagine d’atmosfera: una tazza e un quaderno su un tavolino illuminato da luce naturale" fill priority sizes="(max-width: 760px) 100vw, 35vw" /></figure></section>

    <section className="contacts-practical-band" aria-labelledby="references-title"><div className="contacts-practical section-shell"><div className="contacts-references"><p className="eyebrow">RIFERIMENTI</p><h2 id="references-title">Uno spazio di ascolto,<br /><em>a Crema e online.</em></h2><dl className="contacts-reference-list"><div><dt>Studio professionale</dt><dd>Via Salvecchio 6/A<br />Crema (CR)<a className="text-link" href={directions} target="_blank" rel="noopener noreferrer">Indicazioni <ArrowUpRight size={14} /></a></dd></div><div><dt>Consulenze online</dt><dd>Colloqui psicologici tramite piattaforma di videochiamata protetta</dd></div><div><dt>Orari di ricevimento</dt><dd>Dal lunedì al venerdì<br />09:00–20:00<small>Esclusivamente su appuntamento.</small></dd></div><div><dt>Email</dt><dd><a className="contacts-email" href="mailto:info@giuliacalzone.it">info@giuliacalzone.it</a></dd></div><div><dt>Telefono</dt><dd><a className="contacts-email" href="tel:+393482908640">+39 348 290 8640</a></dd></div></dl></div><div id="modulo" className="contacts-request" aria-labelledby="request-title"><p className="eyebrow">RICHIEDI UN COLLOQUIO</p><h2 id="request-title">Scrivimi un messaggio.</h2><p>Compila il modulo per richiedere informazioni o un primo colloquio. Potremo valutare insieme le modalità di una prima consultazione.</p><ContactForm variant="request" /></div></div></section>

    <section className="contacts-closing" aria-labelledby="contacts-closing-title">
      <div className="section-shell">
        <h2 id="contacts-closing-title"><span>Non devi sapere già</span><em>da dove cominciare.</em></h2>
        <p>Il primo colloquio è un'occasione per dare spazio alle tue domande e iniziare a comprendere ciò di cui hai bisogno.</p>
      </div>
    </section>
  </main>;
}
