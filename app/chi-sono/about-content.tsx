import Link from "next/link";

import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Reveal } from "../components/reveal";
import { FirstStepCta } from "../components/first-step-cta";

const professionalPortrait = "/images/giulia-calzone-chi-sono.webp";
const pillars = [
  { title: "Comprendere i vissuti", text: "Esplorare il legame tra pensieri, emozioni e comportamenti per comprendere le proprie difficoltà e dare significato alle esperienze personali." },
  { title: "Sviluppare risorse", text: "Riconoscere e rafforzare le risorse personali, sviluppando strategie per affrontare ansia, stress e momenti di difficoltà emotiva." },
  { title: "Costruire fiducia", text: "Costruire una relazione terapeutica fondata sull'ascolto, sulla collaborazione e sulla condivisione degli obiettivi del percorso." },
];

export function AboutContent() {
  return <main id="main" className="bio-main">
    <section className="bio-hero section-shell" aria-labelledby="bio-title">
      <div className="bio-hero-copy"><nav className="bio-back" aria-label="Percorso di navigazione"><Link href="/">Home</Link><span aria-hidden="true">/</span><span>Chi sono</span></nav><p className="eyebrow">CHI SONO</p><h1 id="bio-title">Prima di tutto,<br /><em>la relazione</em></h1><p className="bio-introduction">Sono Giulia Calzone, psicologa clinica e psicoterapeuta a Crema, a orientamento cognitivo-comportamentale. Accompagno le persone in percorsi personalizzati per comprendere le difficoltà e valorizzare le proprie risorse.</p><a className="text-link underlined" href="#visione">La mia visione <ArrowDown size={17} /></a></div>
      <figure className="bio-portrait"><Image src={professionalPortrait} alt="Giulia Calzone seduta in poltrona in un salotto luminoso" fill priority sizes="(max-width: 760px) 100vw, 35vw" /></figure>
    </section>

    <section id="visione" className="bio-vision" aria-labelledby="vision-title"><div className="section-shell"><p className="eyebrow">LA MIA VISIONE</p><Reveal className="bio-vision-heading"><h2 id="vision-title"><span>Ali</span><span className="bio-vision-and">e</span><em>radici</em></h2></Reveal><div className="bio-vision-bottom" data-scroll-reveal><span className="bio-vision-note">La tua storia.<br /> Le tue possibilità.</span><p>Le radici raccontano la nostra storia. Le ali rappresentano le possibilità di cambiamento. Comprendere le radici aiuta a rafforzare le ali.</p></div></div></section>

    <section id="approccio-clinico" className="bio-clinical section-shell" aria-labelledby="clinical-title">
      <div className="bio-clinical-intro" data-scroll-reveal>
        <div className="bio-clinical-heading"><p className="eyebrow">IL MIO APPROCCIO</p><h2 id="clinical-title">Pensieri, emozioni<br /><em>e comportamenti</em></h2></div>
        <div className="bio-clinical-text">
          <p>Nell'approccio cognitivo-comportamentale, pensieri, emozioni e comportamenti sono strettamente collegati. Il modo in cui interpretiamo le esperienze influenza le emozioni che proviamo e le nostre reazioni.</p>
          <p>Alcuni pensieri automatici, di cui non sempre siamo consapevoli, possono contribuire alla sofferenza. Per comprenderli, il percorso integra interventi cognitivi e comportamentali.</p>
        </div>
      </div>
      <div className="bio-clinical-practice" data-scroll-reveal>
        <div className="bio-practice-divider" aria-hidden="true" />
        <article aria-labelledby="cognitive-title"><h3 id="cognitive-title">Interventi cognitivi</h3><p>Esploriamo i pensieri automatici che possono alimentare la sofferenza, il loro significato personale e le possibili interpretazioni alternative.</p></article>
        <article aria-labelledby="behavioural-title"><h3 id="behavioural-title">Interventi comportamentali</h3><p>Individuiamo strategie concrete per modificare i comportamenti che non ti aiutano e affrontare le difficoltà quotidiane con più consapevolezza.</p></article>
      </div>
      <figure className="bio-studio" data-scroll-reveal><Image src="/images/ambiente-consulenza.webp" alt="Immagine d’atmosfera: due poltrone, una libreria e luce naturale in uno spazio di ascolto" fill sizes="(max-width: 760px) 100vw, 92vw" /><figcaption>Uno spazio per fermarsi. E ripartire.</figcaption></figure>
    </section>

    <section className="bio-pillars section-shell" aria-labelledby="pillars-title"><div className="bio-pillars-heading" data-scroll-reveal><p className="eyebrow">I PILASTRI DEL MIO LAVORO</p><h2 id="pillars-title">Un lavoro costruito <em>insieme</em></h2></div><div className="bio-pillars-grid" data-scroll-reveal>{pillars.map((pillar, index) => <article className="bio-pillar" key={pillar.title}><div className="bio-pillar-heading"><span className="bio-pillar-number">0{index + 1}</span><h3>{pillar.title}</h3></div><p>{pillar.text}</p></article>)}</div></section>

    <section className="bio-personal" aria-labelledby="personal-title"><div className="section-shell bio-personal-grid"><Reveal><h2 id="personal-title">Ogni storia merita<br /><em>il proprio spazio</em></h2></Reveal><div data-scroll-reveal><p>Ogni persona porta con sé una storia e bisogni differenti. Per questo, difficoltà e obiettivi vengono esplorati e condivisi nel percorso terapeutico.</p><Link className="text-link underlined" href="/percorsi/">Esplora i percorsi <ArrowUpRight size={18} /></Link></div></div></section>

    <FirstStepCta id="chi-sono-primo-passo" />
  </main>;
}
