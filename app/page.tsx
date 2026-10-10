"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, ArrowRight, Menu, X, Leaf, LockKeyhole, MapPin, Mail, Phone, Check, Copy, ChevronDown, MessageCircle } from "lucide-react";
import { useRef, useState, type FormEvent, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const navigation = [["Home", "home"], ["Chi sono", "chi-sono"], ["Percorsi e servizi", "percorsi"], ["Come funziona", "come-funziona"], ["Contatti", "contatti"]];
const services = [
  { number: "01", tag: "INDIVIDUALE", title: "Psicoterapia individuale", text: "Un percorso per affrontare ansia, stress e difficoltà emotive o relazionali.", image: "/images/individuale-ambiente.webp", alt: "Poltrona color crema con cuscino salvia accanto a un tavolino e una finestra luminosa", detail: "Uno spazio dedicato a ciò che stai vivendo. Nel primo colloquio esploriamo le tue esigenze e valutiamo insieme obiettivi, modalità e possibilità del percorso individuale." },
  { number: "02", tag: "COPPIA", title: "Terapia di coppia", text: "Uno spazio per lavorare su comunicazione, conflitti e cambiamenti nella relazione.", image: "/images/coppia-ambiente.webp", alt: "Divano a due posti e tavolino in uno studio luminoso e accogliente", detail: "Uno spazio di ascolto della relazione, in cui dare voce ai diversi punti di vista. Il primo incontro permette di comprendere la richiesta e valutare insieme un percorso condiviso." },
  { number: "03", tag: "FAMIGLIA", title: "Sostegno alla genitorialità", text: "Un supporto per affrontare dubbi e complessità del ruolo genitoriale.", image: "/images/genitorialita-ambiente.webp", alt: "Scrivania in legno con sedute vuote, un quaderno e piccoli giochi in legno", detail: "Un momento per fermarsi, condividere le difficoltà e riflettere sul proprio ruolo genitoriale. A partire dalle tue domande, definiamo insieme il tipo di sostegno più adatto." },
];
const steps = [
  ["Primo contatto", "Mi scrivi per avere informazioni o richiedere un primo incontro."],
  ["Primo colloquio", "Ci conosciamo e iniziamo a dare spazio a ciò che stai vivendo."],
  ["Percorso condiviso", "Definiamo insieme obiettivi e modalità, rispettando i tuoi tempi."],
  ["Incontri nel tempo", "Proseguiamo il lavoro, osservando insieme cambiamenti e bisogni."],
];

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: .65 }}>{children}</motion.div>;
}

function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [draft, setDraft] = useState("");
  const [copied, setCopied] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("nome") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("messaggio") || "").trim();
    const next: Record<string, string> = {};
    if (!name) next.nome = "Inserisci il tuo nome e cognome.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Inserisci un indirizzo email valido.";
    if (!message) next.messaggio = "Scrivi una breve richiesta, senza dettagli clinici.";
    if (!data.get("privacy")) next.privacy = "Conferma di aver letto l’informativa privacy.";
    setErrors(next);
    if (Object.keys(next).length) {
      setDraft("");
      requestAnimationFrame(() => formRef.current?.querySelector<HTMLElement>(`[name="${Object.keys(next)[0]}"]`)?.focus());
      return;
    }
    setDraft(`Buongiorno Giulia,\n\n${message}\n\nNome: ${name}\nEmail: ${email}${data.get("telefono") ? `\nTelefono: ${data.get("telefono")}` : ""}${data.get("preferenza") ? `\nPreferenza: ${data.get("preferenza")}` : ""}\n\nGrazie.`);
    setCopied(false);
  }
  const error = (key: string) => errors[key] && <span className="field-error" id={`${key}-error`}>{errors[key]}</span>;
  return <form ref={formRef} noValidate onSubmit={submit} className="contact-form">
    <div className="form-row"><label><span className="field-label">Nome e cognome <span className="required-mark" aria-hidden="true">*</span></span><input name="nome" autoComplete="name" maxLength={120} required aria-invalid={!!errors.nome} aria-describedby={errors.nome ? "nome-error" : undefined} placeholder="Il tuo nome" />{error("nome")}</label><label><span className="field-label">Email <span className="required-mark" aria-hidden="true">*</span></span><input type="email" name="email" autoComplete="email" maxLength={254} required aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} placeholder="La tua email" />{error("email")}</label></div>
    <div className="form-row"><label><span className="field-label">Telefono <span className="optional">(facoltativo)</span></span><input name="telefono" type="tel" autoComplete="tel" maxLength={40} placeholder="Il tuo numero" /></label><label><span className="field-label">Preferenza</span><span className="select-control"><select name="preferenza" defaultValue=""><option value="" disabled>Seleziona</option><option value="In studio">In studio</option><option value="Online">Online</option><option value="Da definire">Da definire</option></select><ChevronDown size={18} aria-hidden="true" /></span></label></div>
    <label><span className="field-label">Come posso aiutarti? <span className="required-mark" aria-hidden="true">*</span></span><textarea name="messaggio" rows={4} maxLength={2000} required placeholder="Scrivi qui una breve richiesta…" aria-invalid={!!errors.messaggio} aria-describedby={`message-hint${errors.messaggio ? " messaggio-error" : ""}`} />{error("messaggio")}</label>
    <p id="message-hint" className="form-hint">Per questo primo contatto, evita informazioni sanitarie o dettagli personali sensibili.</p>
    <label className="consent"><input type="checkbox" name="privacy" required aria-invalid={!!errors.privacy} aria-describedby={errors.privacy ? "privacy-error" : undefined} /><span>Ho letto l’<a href="/privacy/">informativa privacy</a>. <span className="required-mark" aria-hidden="true">*</span></span></label>{error("privacy")}
    <button className="button primary" type="submit">Prepara il messaggio <ArrowUpRight size={17} /></button>
    <div role="status" aria-live="polite">{draft && <div className="draft"><h3>La tua bozza è pronta.</h3><p>Puoi copiare il testo e utilizzarlo per il tuo primo contatto.</p><pre>{draft}</pre><button type="button" className="text-link" onClick={async () => { try { await navigator.clipboard.writeText(draft); setCopied(true); } catch { setCopied(false); } }}>{copied ? <Check size={16} /> : <Copy size={16} />}{copied ? "Bozza copiata" : "Copia la bozza"}</button></div>}</div>
  </form>;
}

export default function Home() {
  const [menu, setMenu] = useState(false);
  const reduced = useReducedMotion();
  const scope = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.utils.toArray<HTMLElement>(".service-image").forEach(image => {
        gsap.fromTo(image, { scale: .96 }, { scale: 1, ease: "none", scrollTrigger: { trigger: image, start: "top 90%", end: "top 50%", scrub: .8 } });
      });
      gsap.fromTo(".pause .cta-copy", { opacity: .65 }, { opacity: 1, ease: "none", scrollTrigger: { trigger: ".pause", start: "top 90%", end: "top 55%", scrub: .8 } });
    });
    return () => media.revert();
  }, { scope });
  return <div ref={scope} className="site-root">
    <a className="skip-link" href="#main">Vai al contenuto</a>
    <header className="header"><div className="nav-shell">
      <a className="brand" href="#home" aria-label="Giulia Calzone, home"><span>Giulia Calzone<span className="brand-dot">.</span></span><small>PSICOLOGA PSICOTERAPEUTA</small></a>
      <nav className="desktop-nav" aria-label="Navigazione principale">{navigation.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
      <a className="button nav-cta" href="#contatti">Richiedi un colloquio <ArrowUpRight size={15} /></a>
      <button className="menu-toggle" aria-expanded={menu} aria-controls="mobile-menu" aria-label={menu ? "Chiudi il menu" : "Apri il menu"} onClick={() => setMenu(!menu)}>{menu ? <X /> : <Menu />}</button>
    </div><AnimatePresence>{menu && <motion.nav id="mobile-menu" className="mobile-nav" aria-label="Navigazione mobile" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: reduced ? 0 : .2 }} onKeyDown={e => { if (e.key === "Escape") setMenu(false); }}>{navigation.map(([label, id]) => <a href={`#${id}`} key={id} onClick={() => setMenu(false)}>{label}<ArrowUpRight size={16} /></a>)}</motion.nav>}</AnimatePresence></header>
    <main id="main">
      <section id="home" className="hero section-shell">
        <div className="hero-main"><Reveal className="hero-copy"><p className="eyebrow"><span /> PSICOLOGIA E ASCOLTO</p><h1>Uno spazio per<br />ritrovare il tuo<br /><em>equilibrio.</em></h1><p className="hero-description">Un luogo di ascolto e accoglienza, dove esplorare ciò che stai vivendo e prenderti cura di te, con i tuoi tempi.</p><div className="hero-actions"><a className="button primary" href="#come-funziona">Come funziona il percorso <ArrowUpRight size={17} /></a><a className="text-link" href="#approccio">Scopri il mio approccio <ArrowRight size={17} /></a></div><div className="hero-location"><span className="status-dot" /> In studio a Crema e online <span className="small-divider" /> Uno spazio, anche a distanza</div></Reveal>
        <Reveal className="hero-visual"><div className="image-frame"><Image src="/images/psicologa.webp" alt="Ritratto di una professionista seduta in uno studio luminoso" fill priority sizes="(max-width: 760px) 100vw, 48vw" className="hero-image" /><div className="image-grain" /></div><div className="hero-note"><span className="note-icon"><Leaf size={22} strokeWidth={1.3} /></span><div><span>Ogni percorso inizia</span><em>dal sentirsi accolti.</em></div><span className="note-line" /></div><div className="vertical-caption">ASCOLTO. CURA. POSSIBILITÀ.</div></Reveal></div>
        <div className="hero-bottom"><div className="highlight"><LockKeyhole size={22} strokeWidth={1.2} /><div><h3>Uno spazio riservato</h3><p>Un ambiente accogliente e senza giudizio,<br className="desktop-break" /> dove sentirti libero di raccontarti.</p></div></div><div className="highlight"><Leaf size={24} strokeWidth={1.2} /><div><h3>Un percorso personale</h3><p>Un percorso costruito insieme, nel rispetto<br className="desktop-break" /> dei tuoi bisogni e dei tuoi tempi.</p></div></div><div className="highlight"><MessageCircle size={24} strokeWidth={1.2} /><div><h3>Un primo incontro</h3><p>Un momento per conoscerci e dare spazio a ciò che stai vivendo.</p></div></div></div>
      </section>

      <section id="chi-sono" className="about section-shell"><Reveal className="about-image"><Image src="/images/ambiente-consulenza.webp" alt="Studio accogliente con due poltrone, una libreria e luce naturale" fill sizes="(max-width: 760px) 100vw, 42vw" /><span className="photo-caption">UN LUOGO PER FERMARSI E ASCOLTARSI</span></Reveal><Reveal className="about-copy"><p className="eyebrow">CHI SONO</p><h2>Prima di tutto,<br />una relazione<br />di <em>fiducia.</em></h2><p>Sono Giulia Calzone, psicologa e psicoterapeuta a orientamento cognitivo-comportamentale.</p><p>Credo in uno spazio di ascolto senza giudizio, dove ogni percorso nasce dall’incontro e si costruisce insieme, nel rispetto dei bisogni e dei tempi di ciascuno.</p><a className="text-link underlined" href="#approccio">Conosci Giulia <ArrowUpRight size={18} /></a><div id="approccio" className="approach"><span>IL MIO APPROCCIO</span><p>Un lavoro condiviso per esplorare il legame tra pensieri, emozioni e comportamenti, a partire dalle tue esperienze e dagli obiettivi che definiamo insieme.</p></div></Reveal></section>

      <section id="percorsi" className="services"><div className="section-shell"><Reveal className="section-heading"><div><p className="eyebrow">COME POSSO AIUTARTI</p><h2>Percorsi pensati <em>per te.</em></h2></div><p>Tre percorsi di ascolto e cura, da costruire insieme a partire dalla tua storia e dalle tue esigenze.</p></Reveal><div className="services-grid">{services.map(service => <Reveal className="service" key={service.number}><div className="service-image"><Image src={service.image} alt={service.alt} fill sizes="(max-width: 760px) 100vw, 33vw" /><span className="service-number">{service.number}</span></div><p className="eyebrow service-tag">{service.number} / {service.tag}</p><h3>{service.title}</h3><p>{service.text}</p><details><summary>Scopri il percorso <ArrowUpRight size={18} /></summary><div className="service-detail"><p>{service.detail}</p><a className="text-link" href="#contatti">Richiedi un colloquio <ArrowRight size={16} /></a></div></details></Reveal>)}</div></div></section>

      <section id="come-funziona" className="process section-shell"><Reveal className="process-heading"><p className="eyebrow">COME FUNZIONA</p><h2>Un percorso,<br /><em>passo dopo passo.</em></h2><p>Dal primo messaggio agli incontri successivi: ogni fase si costruisce insieme, con attenzione ai tuoi tempi.</p><a className="text-link underlined" href="#contatti">Facciamo il primo passo <ArrowUpRight size={18} /></a></Reveal><div className="steps">{steps.map(([title, text], i) => <Reveal className="step" key={title}><span>0{i + 1}</span><div><h3>{title}</h3><p>{text}</p></div><ArrowDown size={16} /></Reveal>)}</div></section>

      <section id="primo-passo" className="pause section-shell" aria-labelledby="cta-title">
        <div className="cta-photo"><Image src="/images/cta-ambiente.webp?v=1" alt="Un angolo accogliente dello studio con poltrona, piante e luce naturale" fill sizes="(max-width: 760px) 100vw, 92vw" /></div>
        <div className="cta-copy"><h2 id="cta-title">Il primo passo?<br /><em>Parlarne insieme.</em></h2><p>Non serve avere tutte le risposte. Un primo colloquio è uno spazio per le tue domande, con i tuoi tempi.</p><a className="button cta-button" href="#contatti">Richiedi un colloquio <ArrowUpRight size={18} /></a><span className="cta-location">In studio a Crema e online</span></div>
      </section>

      <div className="contact-band"><section id="contatti" className="contact section-shell"><Reveal className="contact-copy"><p className="eyebrow">CONTATTI</p><h2>Parliamone<br /><em>insieme.</em></h2><p>Per una domanda, un’informazione o un primo colloquio, puoi scrivermi. Troveremo insieme il modo migliore per iniziare.</p><div className="contact-details"><div><MapPin size={19} /><span>Via Salvecchio 6/A, Crema<small>In studio e online</small><a href="https://www.google.com/maps/search/?api=1&query=Via+Salvecchio+6%2FA+Crema" target="_blank" rel="noopener noreferrer">Indicazioni <ArrowUpRight size={13} /></a></span></div><div><Mail size={19} /><span>giulia.calzone@example.com</span></div><div><Phone size={18} /><span>+39 02 0000 0000</span></div></div><div className="contact-note"><LockKeyhole size={17} /><p>Ogni percorso nasce da un primo incontro, nel rispetto della tua riservatezza.</p></div></Reveal><Reveal><ContactForm /></Reveal></section></div>
    </main>
    <footer><div className="section-shell footer-top"><div><a className="brand" href="#home"><span>Giulia Calzone<span className="brand-dot">.</span></span><small>PSICOLOGA PSICOTERAPEUTA</small></a><p>Uno spazio di ascolto, rispetto e collaborazione,<br />con attenzione ai tuoi tempi.</p></div><nav aria-label="Navigazione nel footer">{navigation.slice(1).map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav><div className="footer-address"><p>Via Salvecchio 6/A, Crema<br />In studio e online</p><a className="text-link" href="#contatti">Richiedi un colloquio <ArrowUpRight size={17} /></a></div></div><div className="section-shell footer-bottom"><span>© 2026 Giulia Calzone. Tutti i diritti riservati.</span><div><a href="/privacy/">Privacy</a><a href="/cookie/">Cookie</a><a href="/informazioni/">Informazioni professionali</a></div></div><p className="section-shell legal-note">Psicologa Psicoterapeuta · Orientamento cognitivo-comportamentale.</p></footer>
  </div>;
}

