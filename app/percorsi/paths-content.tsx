"use client";

import Link from "next/link";

import Image from "next/image";
import { ArrowDown, ArrowUpRight, Brain, BatteryLow, RefreshCw, CloudSun, MessageCircleHeart, Sprout, UsersRound, HeartHandshake } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Reveal } from "../components/reveal";
import { FirstStepCta } from "../components/first-step-cta";
import { ProcessTimeline } from "../components/process-timeline";

gsap.registerPlugin(ScrollTrigger, useGSAP);
const paths = [
  { id: "individuale", number: "01", label: "Individuale", title: "Psicoterapia individuale", text: "Un percorso per comprendere ansia, stress e difficoltà emotive, esplorando il legame tra pensieri, emozioni e comportamenti. La psicoterapia aiuta a riconoscere le proprie risorse e a sviluppare strategie per affrontare le difficoltà e favorire il benessere psicologico.", image: "/images/individuale-ambiente.webp", alt: "Immagine d’atmosfera: poltrona con cuscino salvia, tavolino e luce naturale", note: "Uno spazio per comprendere ciò che stai vivendo." },
  { id: "coppia", number: "02", label: "Coppia", title: "Terapia di coppia", text: "Uno spazio di confronto per comprendere le dinamiche relazionali, affrontare conflitti, difficoltà di comunicazione e momenti di crisi. Il percorso favorisce una maggiore consapevolezza dei bisogni reciproci e la ricerca di nuove modalità per vivere la relazione.", image: "/images/coppia-ambiente.webp", alt: "Immagine d’atmosfera: divano a due posti e tavolino in un ambiente accogliente", note: "Dare spazio ai diversi punti di vista." },
  { id: "genitorialita", number: "03", label: "Genitorialità", title: "Sostegno alla genitorialità", text: "Un percorso di consultazione e supporto per comprendere i bisogni evolutivi dei figli, affrontare le difficoltà educative e riflettere sulle dinamiche familiari. Il lavoro valorizza le risorse genitoriali e aiuta a sviluppare modalità educative e relazionali più consapevoli.", image: "/images/genitorialita-ambiente.webp", alt: "Immagine d’atmosfera: scrivania, sedute vuote e piccoli giochi in legno", note: "Riconoscere e valorizzare le risorse genitoriali." },
];
const areas = [
  ["Ansia e disturbi d’ansia", "Comprendere e affrontare preoccupazioni persistenti, tensione psicofisica e attacchi di panico, riducendone l'impatto sulla vita quotidiana.", Brain],
  ["Stress e burnout", "Affrontare il sovraccarico emotivo e lavorativo, riconoscendo i segnali di stress e sviluppando maggiore consapevolezza dei propri bisogni e confini.", BatteryLow],
  ["Pensieri intrusivi e ossessivi", "Comprendere i pensieri ricorrenti e i comportamenti ritualizzati, sviluppando strategie per ridurne l'impatto sul benessere e sulla quotidianità.", RefreshCw],
  ["Difficoltà emotive e dell’umore", "Dare spazio a tristezza, perdita di motivazione e difficoltà nella gestione delle emozioni, favorendo una maggiore comprensione dei propri vissuti.", CloudSun],
  ["Difficoltà relazionali e di coppia", "Esplorare le difficoltà di comunicazione, i conflitti e le dinamiche affettive, per comprendere meglio i bisogni reciproci e le possibilità di cambiamento.", MessageCircleHeart],
  ["Autostima e consapevolezza", "Approfondire la conoscenza di sé, comprendere i blocchi personali e rafforzare l'autostima, valorizzando le proprie capacità e risorse individuali.", Sprout],
  ["Sostegno alla genitorialità", "Comprendere i bisogni evolutivi dei figli, affrontare le difficoltà educative e riflettere sulle dinamiche familiari, valorizzando le risorse genitoriali.", UsersRound],
  ["Lutto e transizioni di vita", "Affrontare perdite, separazioni e cambiamenti significativi, dando spazio alle emozioni e sviluppando nuove risorse per attraversare le fasi di transizione.", HeartHandshake],
] as const;
const phases = [
  ["Primo contatto", "Un primo contatto telefonico o online per raccogliere la richiesta e valutare la possibilità di avviare una consultazione."],
  ["Consultazione e valutazione clinica", "Una fase iniziale di 2–3 colloqui per approfondire la storia personale, comprendere le difficoltà e condividere gli obiettivi terapeutici."],
  ["Percorso terapeutico", "Incontri regolari per elaborare i vissuti, affrontare le difficoltà e sviluppare strategie terapeutiche condivise."],
  ["Conclusione e verifiche", "Valutazione dei cambiamenti raggiunti, consolidamento delle risorse personali e conclusione condivisa del percorso."],
] as const;

export function PathsContent() {
  const scope = useRef<HTMLElement>(null);
  useGSAP(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.utils.toArray<HTMLElement>(".path-photo img").forEach(image => gsap.fromTo(image, { scale: 1.035 }, { scale: 1, ease: "none", scrollTrigger: { trigger: image.parentElement, start: "top bottom", end: "center center", scrub: .7 } }));
      gsap.utils.toArray<HTMLElement>(".path-phase").forEach(phase => gsap.from(phase, { opacity: 0, y: 12, duration: .6, ease: "power2.out", scrollTrigger: { trigger: phase, start: "top 90%", once: true } }));
    });
    return () => media.revert();
  }, { scope });

  return <main ref={scope} id="main" className="paths-main">
    <section className="paths-hero section-shell" aria-labelledby="paths-title"><div className="paths-hero-copy"><nav className="paths-breadcrumb" aria-label="Percorso di navigazione"><Link href="/">Home</Link><span aria-hidden="true">/</span><span>Percorsi e servizi</span></nav><p className="eyebrow">PERCORSI E SERVIZI</p><h1 id="paths-title">Ogni percorso<br /><em>inizia dall’ascolto.</em></h1><p>Propongo percorsi di psicoterapia individuale, terapia di coppia e sostegno alla genitorialità, a Crema e online. Ogni intervento nasce dalla comprensione delle difficoltà e delle risorse personali, con obiettivi condivisi.</p><a className="text-link underlined" href="#i-percorsi">Esplora i percorsi <ArrowDown size={18} /></a></div><figure className="paths-hero-photo"><Image src="/images/ambiente-consulenza.webp" alt="Immagine d’atmosfera: due poltrone chiare e un tavolino in legno in uno spazio luminoso" fill priority sizes="(max-width: 760px) 100vw, 35vw" /></figure></section>

    <section id="i-percorsi" className="paths-offered" aria-labelledby="offered-title"><div className="section-shell"><div className="paths-offered-heading"><div><p className="eyebrow">I PERCORSI</p><h2 id="offered-title">Uno spazio per ogni<br /><em>esigenza di ascolto.</em></h2></div><p>Tre modalità di intervento, costruite a partire dai bisogni della persona, della coppia e della famiglia.</p></div><div className="paths-editorial">{paths.map(path => <article id={path.id} className={`path-block path-block-${path.id}`} key={path.id} aria-labelledby={`${path.id}-title`}><div className="path-copy"><p className="eyebrow"><span className="path-number">{path.number}</span>{path.label}</p><h3 id={`${path.id}-title`}>{path.title}</h3><p>{path.text}</p><Link className="text-link underlined" href="/contatti/#modulo">Richiedi un primo colloquio <ArrowUpRight size={17} /></Link></div><figure className="path-photo"><Image src={path.image} alt={path.alt} fill sizes="(max-width: 760px) 100vw, 45vw" /><figcaption>{path.note}</figcaption></figure></article>)}</div></div></section>

    <section className="paths-areas section-shell" aria-labelledby="areas-title"><div className="paths-section-heading"><div><p className="eyebrow">AREE DI INTERVENTO</p><h2 id="areas-title">Le difficoltà che<br /><em>possiamo affrontare insieme.</em></h2></div><p>Ogni percorso parte dalla comprensione delle difficoltà e della storia personale, per definire insieme gli obiettivi terapeutici.</p></div><div className="paths-areas-grid">{[areas.slice(0, 4), areas.slice(4)].map((column, index) => <div className="paths-areas-column" key={index}>{column.map(([title, description, Icon]) => <article className="path-area" key={title}><Icon className="path-area-icon" size={22} strokeWidth={1.4} aria-hidden="true" focusable="false" /><div><h3>{title}</h3><p>{description}</p></div></article>)}</div>)}</div></section>

    <section className="paths-process" aria-labelledby="phases-title"><div className="section-shell paths-process-grid"><div className="paths-process-heading"><p className="eyebrow">IL PERCORSO TERAPEUTICO</p><h2 id="phases-title">Un percorso,<br /><em>passo dopo passo.</em></h2><p>Ogni percorso inizia con una fase di consultazione e si sviluppa attraverso obiettivi condivisi, incontri regolari e verifiche dei cambiamenti nel tempo.</p></div><ProcessTimeline steps={phases} /></div></section>

    <FirstStepCta id="percorsi-primo-passo" />
  </main>;
}
