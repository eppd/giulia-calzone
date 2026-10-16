"use client";

import Link from "next/link";

import { useRef, useState, type FormEvent } from "react";
import { ArrowUpRight, Check, Copy, ChevronDown } from "lucide-react";

export function ContactForm({ variant = "home" }: { variant?: "home" | "request" }) {
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
    if (variant === "home" && !message) next.messaggio = "Scrivi una breve richiesta, senza dettagli clinici.";
    if (!data.get("privacy")) next.privacy = "Conferma di aver letto l’informativa privacy.";
    setErrors(next);
    if (Object.keys(next).length) {
      setDraft("");
      requestAnimationFrame(() => formRef.current?.querySelector<HTMLElement>(`[name="${Object.keys(next)[0]}"]`)?.focus());
      return;
    }
    setDraft(`Buongiorno Giulia,\n\n${message || "Vorrei ricevere informazioni per un primo colloquio."}\n\nNome: ${name}\nEmail: ${email}${data.get("telefono") ? `\nTelefono: ${data.get("telefono")}` : ""}${data.get("preferenza") ? `\nPreferenza: ${data.get("preferenza")}` : ""}\n\nGrazie.`);
    setCopied(false);
  }
  const error = (key: string) => errors[key] && <span className="field-error" id={`${key}-error`}>{errors[key]}</span>;
  return <form ref={formRef} noValidate onSubmit={submit} className="contact-form">
    <div className="form-row"><label><span className="field-label">Nome e cognome <span className="required-mark" aria-hidden="true">*</span></span><input name="nome" autoComplete="name" maxLength={120} required aria-invalid={!!errors.nome} aria-describedby={errors.nome ? "nome-error" : undefined} placeholder="Il tuo nome" />{error("nome")}</label><label><span className="field-label">Email <span className="required-mark" aria-hidden="true">*</span></span><input type="email" name="email" autoComplete="email" maxLength={254} required aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} placeholder="La tua email" />{error("email")}</label></div>
    <div className="form-row"><label><span className="field-label">Telefono <span className="optional">(facoltativo)</span></span><input name="telefono" type="tel" autoComplete="tel" maxLength={40} placeholder="Il tuo numero" /></label><label><span className="field-label">Preferenza</span><span className="select-control"><select name="preferenza" defaultValue=""><option value="" disabled>Seleziona</option><option value="In studio">In studio</option><option value="Online">Online</option><option value="Da definire">Da definire</option></select><ChevronDown size={18} aria-hidden="true" /></span></label></div>
    <label><span className="field-label">{variant === "home" ? "Come posso aiutarti?" : "Messaggio"} {variant === "home" ? <span className="required-mark" aria-hidden="true">*</span> : <span className="optional">(facoltativo)</span>}</span><textarea name="messaggio" rows={4} maxLength={2000} required={variant === "home"} placeholder="Scrivi qui una breve richiesta…" aria-invalid={!!errors.messaggio} aria-describedby={`message-hint${errors.messaggio ? " messaggio-error" : ""}`} />{error("messaggio")}</label>
    <p id="message-hint" className="form-hint">Per questo primo contatto, evita informazioni sanitarie o dettagli personali sensibili.</p>
    <label className="consent"><input type="checkbox" name="privacy" required aria-invalid={!!errors.privacy} aria-describedby={errors.privacy ? "privacy-error" : undefined} /><span>Ho letto l’<Link href="/privacy/">informativa privacy</Link>. <span className="required-mark" aria-hidden="true">*</span></span></label>{error("privacy")}
    <button className="button primary" type="submit">{variant === "home" ? "Prepara il messaggio" : "Invia il messaggio"} <ArrowUpRight size={17} /></button>
    <div role="status" aria-live="polite">{draft && <div className="draft"><h3>La tua bozza è pronta.</h3><p>Puoi copiare il testo e utilizzarlo per il tuo primo contatto.</p><pre>{draft}</pre><button type="button" className="text-link" onClick={async () => { try { await navigator.clipboard.writeText(draft); setCopied(true); } catch { setCopied(false); } }}>{copied ? <Check size={16} /> : <Copy size={16} />}{copied ? "Bozza copiata" : "Copia la bozza"}</button></div>}</div>
  </form>;
}
