"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

// Content can be edited independently after the professional's review.
const questions = [
  ["Come posso richiedere un primo colloquio?", "Puoi utilizzare il modulo presente in questa pagina oppure scrivere direttamente all’indirizzo email indicato. Il primo contatto permette di condividere la richiesta iniziale e ricevere informazioni sulle modalità di consultazione."],
  ["È possibile svolgere gli incontri online?", "Sì, è possibile concordare colloqui online attraverso piattaforme di videochiamata protetta, in base alle esigenze e alla tipologia di intervento."],
  ["Come si svolge il primo appuntamento?", "Il primo colloquio è dedicato alla conoscenza reciproca, all’ascolto della richiesta e a una prima comprensione delle difficoltà e degli obiettivi del percorso."],
  ["Quanto dura un percorso terapeutico?", "La durata del percorso dipende dalle esigenze individuali, dagli obiettivi condivisi e dall’evoluzione del lavoro terapeutico. Modalità e frequenza degli incontri vengono concordate durante la fase iniziale."],
];

export function ContactsFaq() {
  const [open, setOpen] = useState<number | null>(null);
  const reduced = useReducedMotion();
  return <section className="contacts-faq" aria-labelledby="contacts-faq-title"><div className="section-shell contacts-faq-grid"><div><p className="eyebrow">DOMANDE FREQUENTI</p><h2 id="contacts-faq-title">Prima di iniziare,<br /><em>qualche risposta.</em></h2></div><div className="contacts-faq-list">{questions.map(([question, answer], index) => {
    const expanded = open === index;
    return <div className="contacts-faq-item" key={question}><h3><button id={`contacts-question-${index}`} type="button" aria-expanded={expanded} aria-controls={`contacts-answer-${index}`} onClick={() => setOpen(expanded ? null : index)}><span className="contacts-faq-number" aria-hidden="true">0{index + 1}</span><span>{question}</span>{expanded ? <Minus size={18} aria-hidden="true" /> : <Plus size={18} aria-hidden="true" />}</button></h3><motion.div id={`contacts-answer-${index}`} role="region" aria-labelledby={`contacts-question-${index}`} aria-hidden={!expanded} initial={false} animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }} transition={{ duration: reduced ? 0 : .24, ease: "easeInOut" }} className="contacts-faq-answer"><p>{answer}</p></motion.div></div>;
  })}</div></div></section>;
}
