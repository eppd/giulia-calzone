"use client";

import Link from "next/link";

import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Reveal } from "../components/reveal";
import { FirstStepCta } from "../components/first-step-cta";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const professionalPortrait = "/images/giulia-calzone-chi-sono.webp";
const pillars = [
  { title: "Comprendere i vissuti", text: "Esplorare il legame tra pensieri, emozioni e comportamenti per comprendere le proprie difficoltà e dare significato alle esperienze personali." },
  { title: "Sviluppare risorse", text: "Riconoscere e rafforzare le risorse personali, sviluppando strategie per affrontare ansia, stress e momenti di difficoltà emotiva." },
  { title: "Costruire fiducia", text: "Costruire una relazione terapeutica fondata sull'ascolto, sulla collaborazione e sulla condivisione degli obiettivi del percorso." },
];

export function AboutContent() {
  const scope = useRef<HTMLElement>(null);
  useGSAP(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(".bio-studio img", { scale: 1.035 }, { scale: 1, ease: "none", scrollTrigger: { trigger: ".bio-studio", start: "top bottom", end: "center center", scrub: .8 } });
      gsap.from(".bio-pillar", { y: 14, opacity: 0, duration: .65, stagger: .12, ease: "power2.out", scrollTrigger: { trigger: ".bio-pillars-grid", start: "top 85%", once: true } });
    });
    return () => media.revert();
  }, { scope });

  return <main ref={scope} id="main" className="bio-main">
    <section className="bio-hero section-shell" aria-labelledby="bio-title">
      <div className="bio-hero-copy"><nav className="bio-back" aria-label="Percorso di navigazione"><Link href="/">Home</Link><span aria-hidden="true">/</span><span>Chi sono</span></nav><p className="eyebrow">CHI SONO</p><h1 id="bio-title">Prima di tutto,<br /><em>la relazione.</em></h1><p className="bio-introduction">Sono Giulia Calzone, psicologa clinica e psicoterapeuta a Crema, a orientamento cognitivo-comportamentale. Accompagno le persone in percorsi personalizzati per comprendere le difficoltà e valorizzare le proprie risorse.</p><a className="text-link underlined" href="#visione">La mia visione <ArrowDown size={17} /></a></div>
      <figure className="bio-portrait"><Image src={professionalPortrait} alt="Giulia Calzone seduta in poltrona in un salotto luminoso" fill priority sizes="(max-width: 760px) 100vw, 35vw" /></figure>
    </section>

    <section id="visione" className="bio-vision" aria-labelledby="vision-title"><div className="section-shell"><p className="eyebrow">LA MIA VISIONE</p><Reveal className="bio-vision-heading"><h2 id="vision-title"><span>Ali</span><span className="bio-vision-and">e</span><em>radici.</em></h2></Reveal><div className="bio-vision-bottom"><span className="bio-vision-note">La tua storia.<br />Le tue possibilità.</span><p>Le radici raccontano la nostra storia e ciò che ci ha formati. Le ali rappresentano le risorse e le possibilità di cambiamento. Nel mio lavoro, comprendere le prime significa dare forza alle seconde.</p></div></div></section>

    <section id="approccio-clinico" className="bio-clinical section-shell" aria-labelledby="clinical-title"><div className="bio-clinical-heading"><p className="eyebrow">IL MIO APPROCCIO</p><h2 id="clinical-title">Comprendere per<br /><em>poter cambiare.</em></h2></div><div className="bio-clinical-text"><p>Ogni percorso terapeutico nasce dall'ascolto della storia personale e dal bisogno di comprendere ciò che genera sofferenza.</p><p>Il mio approccio cognitivo-comportamentale, basato su evidenze scientifiche, integra la relazione terapeutica con l'esplorazione di pensieri, emozioni e comportamenti, per valorizzare le risorse personali e favorire il cambiamento.</p></div><figure className="bio-studio"><Image src="/images/ambiente-consulenza.webp" alt="Immagine d’atmosfera: due poltrone, una libreria e luce naturale in uno spazio di ascolto" fill sizes="(max-width: 760px) 100vw, 92vw" /><figcaption>Uno spazio per fermarsi. E ripartire.</figcaption></figure></section>

    <section className="bio-pillars section-shell" aria-labelledby="pillars-title"><div className="bio-pillars-heading"><p className="eyebrow">I PILASTRI DEL MIO LAVORO</p><h2 id="pillars-title">Il percorso si costruisce <em>insieme.</em></h2></div><div className="bio-pillars-grid">{pillars.map((pillar, index) => <article className="bio-pillar" key={pillar.title}><span className="bio-pillar-number">0{index + 1}</span><h3>{pillar.title}</h3><p>{pillar.text}</p></article>)}</div></section>

    <section className="bio-personal" aria-labelledby="personal-title"><div className="section-shell bio-personal-grid"><Reveal><h2 id="personal-title">Ogni storia merita<br /><em>il proprio spazio.</em></h2></Reveal><div><p>Ogni persona porta con sé una storia e bisogni differenti. Il percorso terapeutico si costruisce insieme, attraverso la comprensione delle difficoltà e la condivisione degli obiettivi.</p><Link className="text-link underlined" href="/percorsi/">Esplora i percorsi <ArrowUpRight size={18} /></Link></div></div></section>

    <FirstStepCta id="chi-sono-primo-passo" />
  </main>;
}
