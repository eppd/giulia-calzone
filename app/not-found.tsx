import Link from "next/link";

export default function NotFound() {
  return (
    <main className="legal-page">
      <p className="eyebrow">ERRORE 404</p>
      <h1>Pagina non trovata</h1>
      <p>La pagina richiesta non è disponibile.</p>
      <Link className="text-link underlined" href="/">Torna alla pagina iniziale</Link>
    </main>
  );
}
