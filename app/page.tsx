"use client";

import Link from "next/link";

import Image from "next/image";
import { ArrowUpRight, ArrowRight, Leaf, LockKeyhole, MessageCircle } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { Reveal } from "./components/reveal";
import { FirstStepCta } from "./components/first-step-cta";
import { ProcessTimeline } from "./components/process-timeline";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const services = [
  { id: "individuale", number: "01", tag: "INDIVIDUALE", title: "Psicoterapia individuale", text: "Un percorso per affrontare ansia, stress e difficoltà emotive, valorizzando le proprie risorse.", image: "/images/individuale-ambiente.webp", alt: "Poltrona color crema con cuscino salvia accanto a un tavolino e una finestra luminosa", detail: "Uno spazio dedicato a ciò che stai vivendo. Nel primo colloquio esploriamo le tue esigenze e valutiamo insieme obiettivi, modalità e possibilità del percorso individuale." },
  { id: "coppia", number: "02", tag: "COPPIA", title: "Terapia di coppia", text: "Uno spazio per affrontare i conflitti, migliorare la comunicazione e comprendere le dinamiche di coppia.", image: "/images/coppia-ambiente.webp", alt: "Divano a due posti e tavolino in uno studio luminoso e accogliente", detail: "Uno spazio di ascolto della relazione, in cui dare voce ai diversi punti di vista. Il primo incontro permette di comprendere la richiesta e valutare insieme un percorso condiviso." },
  { id: "genitorialita", number: "03", tag: "FAMIGLIA", title: "Sostegno alla genitorialità", text: "Un supporto per comprendere i bisogni dei figli e affrontare le difficoltà educative e familiari.", image: "/images/genitorialita-ambiente.webp", alt: "Scrivania in legno con sedute vuote, un quaderno e piccoli giochi in legno", detail: "Un momento per fermarsi, condividere le difficoltà e riflettere sul proprio ruolo genitoriale. A partire dalle tue domande, definiamo insieme il tipo di sostegno più adatto." },
];
const steps = [
  ["Primo contatto", "Valutiamo insieme la richiesta e la possibilità di una consultazione."],
  ["Consultazione e valutazione clinica", "Approfondiamo la storia personale e definiamo gli obiettivi."],
  ["Percorso terapeutico", "Esploriamo le difficoltà e sviluppiamo strategie condivise."],
  ["Conclusione e verifiche", "Valutiamo i progressi e consolidiamo le risorse personali."],
] as const;

export default function Home() {
  const scope = useRef<HTMLElement>(null);
  useGSAP(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.utils.toArray<HTMLElement>(".hero-bottom .highlight").forEach((highlight, index) => {
        gsap.fromTo(highlight, { opacity: 0, y: 12 }, {
          opacity: 1,
          y: 0,
          duration: .55,
          delay: index * .08,
          ease: "power2.out",
          clearProps: "opacity,transform",
          scrollTrigger: { trigger: highlight, start: "top 90%", once: true },
        });
      });
      gsap.utils.toArray<HTMLElement>(".service-image").forEach(image => {
        gsap.fromTo(image, { scale: .96 }, { scale: 1, ease: "none", scrollTrigger: { trigger: image, start: "top 90%", end: "top 50%", scrub: .8 } });
      });
    });
    return () => media.revert();
  }, { scope });
  return <main ref={scope} id="main">
      <section id="home" className="hero section-shell">
        <div className="hero-main"><Reveal className="hero-copy"><p className="eyebrow"><span /> PSICOLOGIA E ASCOLTO</p><h1>Uno spazio per<br />ritrovare il tuo<br /><em>equilibrio.</em></h1><p className="hero-description">Psicoterapia a Crema e online, con ascolto e percorsi personalizzati per il benessere psicologico.</p><div className="hero-actions"><a className="button primary" href="#come-funziona">Come funziona il percorso <ArrowUpRight size={17} /></a><a className="text-link" href="#approccio">Scopri il mio approccio <ArrowRight size={17} /></a></div><div className="hero-location"><span className="status-dot" /> In studio a Crema e online <span className="small-divider" /> Uno spazio, anche a distanza</div></Reveal>
        <Reveal className="hero-visual"><div className="image-frame"><Image src="/images/giulia-ritratto-home-nuovo.webp" alt="Giulia Calzone seduta in poltrona in un salotto luminoso, tra piante e una libreria" fill priority sizes="(max-width: 760px) 100vw, 48vw" className="hero-image" /><div className="image-grain" /></div><div className="hero-note"><span className="note-icon"><Leaf size={22} strokeWidth={1.3} /></span><div><span>Ogni percorso inizia</span><em>dal sentirsi accolti.</em></div><span className="note-line" /></div><div className="vertical-caption">ASCOLTO. CURA. POSSIBILITÀ.</div></Reveal></div>
        <div className="hero-bottom"><div className="highlight"><LockKeyhole size={22} strokeWidth={1.2} /><div><h3>Uno spazio riservato</h3><p>Un ambiente accogliente e senza giudizio,<br className="desktop-break" /> dove sentirti libero di raccontarti.</p></div></div><div className="highlight"><Leaf size={24} strokeWidth={1.2} /><div><h3>Un percorso personale</h3><p>Un percorso costruito insieme, nel rispetto<br className="desktop-break" /> dei tuoi bisogni e dei tuoi tempi.</p></div></div><div className="highlight"><MessageCircle size={24} strokeWidth={1.2} /><div><h3>Un primo incontro</h3><p>Un momento per conoscerci e dare spazio a ciò che stai vivendo.</p></div></div></div>
      </section>

      <section id="chi-sono" className="about section-shell"><Reveal className="about-image"><Image src="/images/ambiente-consulenza.webp" alt="Studio accogliente con due poltrone, una libreria e luce naturale" fill sizes="(max-width: 760px) 100vw, 42vw" /><span className="photo-caption">Uno spazio per fermarsi. E ripartire.</span></Reveal><Reveal className="about-copy"><p className="eyebrow">CHI SONO</p><h2>La persona,<br /><em>prima di tutto.</em></h2><p>Sono Giulia Calzone, psicologa e psicoterapeuta a orientamento cognitivo-comportamentale.</p><p>Credo in uno spazio di ascolto senza giudizio, dove ogni percorso nasce dall’incontro e si costruisce insieme, nel rispetto dei bisogni e dei tempi di ciascuno.</p><Link className="text-link underlined" href="/chi-sono/">Conosci Giulia <ArrowUpRight size={18} /></Link><div id="approccio" className="approach"><span>IL MIO APPROCCIO</span><p>Un lavoro condiviso per esplorare il legame tra pensieri, emozioni e comportamenti, a partire dalle tue esperienze e dagli obiettivi che definiamo insieme.</p></div></Reveal></section>

      <section id="percorsi" className="services"><div className="section-shell"><Reveal className="section-heading"><div><p className="eyebrow">COME POSSO AIUTARTI</p><h2>Percorsi pensati <em>per te.</em></h2></div><p>Tre percorsi di ascolto e cura, da costruire insieme a partire dalla tua storia e dalle tue esigenze.</p></Reveal><div className="services-grid">{services.map(service => <Reveal className="service" key={service.number}><div className="service-image"><Image src={service.image} alt={service.alt} fill sizes="(max-width: 760px) 100vw, 33vw" /></div><p className="eyebrow service-tag">{service.number} / {service.tag}</p><h3>{service.title}</h3><p>{service.text}</p><Link className="service-link" href={`/percorsi/#${service.id}`} aria-label={`Scopri il percorso: ${service.title}`}>Scopri il percorso <ArrowUpRight size={18} /></Link></Reveal>)}</div></div></section>

      <section id="come-funziona" className="process section-shell"><Reveal className="process-heading"><p className="eyebrow">COME FUNZIONA</p><h2>Un percorso,<br /><em>passo dopo passo.</em></h2><p>Dal primo messaggio agli incontri successivi, il percorso si costruisce passo dopo passo. Ogni fase viene condivisa e definita insieme, con chiarezza e attenzione alla tua storia, alle tue esigenze e ai tuoi tempi.</p><Link className="text-link underlined" href="/contatti/#modulo">Facciamo il primo passo <ArrowUpRight size={18} /></Link></Reveal><ProcessTimeline steps={steps} /></section>

      <FirstStepCta id="primo-passo" />
    </main>;
}

