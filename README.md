# Giulia Calzone

Sito in italiano realizzato con Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, GSAP e Lucide React.

## Avvio locale

```sh
npm install
npm run dev
```

Anteprima: http://127.0.0.1:3000

```sh
npm run build
```

Il progetto genera un’esportazione statica nella cartella `out/`.

## Prima di pubblicare

Il modulo prepara una bozza nel browser e non invia messaggi. L’email e il numero presenti nella pagina Contatti sono stati forniti dall’utente. Le pagine privacy, cookie e informazioni professionali contengono note da completare e verificare. Il sito ha `noindex`: aggiornare i metadati dopo la verifica dei contenuti definitivi.

La homepage usa il ritratto fornito dall’utente in `public/images/giulia-ritratto-home.webp`; la professionista dovrà verificare che la persona raffigurata corrisponda alla fotografia approvata per la pubblicazione. La hero di `/chi-sono/` usa il ritratto fornito dall’utente in `public/images/giulia-calzone-chi-sono.webp`. Lo studio, i tre ambienti dei servizi e la foto della CTA sono immagini illustrative generate con IA: non raffigurano lo studio effettivo o clienti reali. La precedente variante verticale generata rimane disponibile come asset alternativo. Le immagini attive sono servite localmente da `public/images/` in formato WebP. Le precedenti foto d’atmosfera di Unsplash sono conservate come alternative e i relativi URL si trovano in `scripts/download-assets.mjs`. I font Geist e Playfair Display sono gestiti e serviti localmente da `next/font`.

Le indicazioni del progetto sono in `AGENTS.md`. Le skill richieste sono installate in `.agents/skills/`.

Foto CTA: `public/images/cta-ambiente.webp`, generata con lo strumento integrato imagegen. La versione aggiornata ha la parete salvia profonda coordinata al colore del fondo dietro al testo; mantiene lo studio vuoto, la poltrona crema, il tavolino in rovere, la pianta e la finestra a destra, con luce naturale e senza testo.

## Pagina Chi sono

Header e footer condividono il marchio con l’emblema botanico originale fornito dall’utente. Il PNG in `public/images/emblema-giulia-calzone.png` conserva la trasparenza originale. Il favicon usa lo stesso emblema su fondo avorio in `app/icon.png`.

La route `/chi-sono/` riutilizza header, footer e Reveal condivisi con la homepage. Il footer riporta l’iscrizione all’Ordine degli Psicologi della Lombardia n. 22666, riscontrata negli atti pubblici OPL del 2024. Il campo Partita IVA mostra il segnaposto `XXXXXXX` richiesto dall’utente: sostituirlo con il numero reale prima della pubblicazione.

La hero di `/chi-sono/` usa il ritratto fornito dall’utente in `public/images/giulia-calzone-chi-sono.webp`. Il riquadro mantiene le stesse dimensioni delle hero di Percorsi e Contatti: altezza 340 px, 310 px sotto i 1000 px e 250 px sotto i 760 px. `object-position: 64% 40%` mantiene il volto in evidenza; la foto è convertita in WebP senza filtri. La foto della homepage resta distinta. Le foto degli ambienti riutilizzano gli asset illustrativi esistenti.

`/percorsi/` contiene ora la pagina dedicata ai servizi. Le CTA di contatto portano al modulo esistente `/#contatti`. I metadati locali mantengono il noindex del progetto finché non sono pronti contenuti, contatti e informative definitive.

## Percorsi e servizi

La route `/percorsi/` contiene tre sezioni editoriali (`#individuale`, `#coppia`, `#genitorialita`), sette aree cliniche con disclosure native accessibili, una timeline in quattro fasi e una CTA al modulo `/#contatti`. Le card della homepage, il menu condiviso e il link da Chi sono raggiungono la nuova pagina. Le fotografie sono gli asset illustrativi di ambienti già presenti; non rappresentano persone o lo studio autentico. I contenuti clinici e la durata indicativa della consultazione provengono dal brief fornito. Nessun servizio di psicoterapia infantile è stato aggiunto.

## Pagina Contatti

La pagina `/contatti/` usa l’email `info@giuliacalzone.it`, il numero `+39 348 290 8640`, gli orari e le modalità forniti dall’utente. La fotografia dello studio è un’immagine d’atmosfera già presente, da sostituire con una foto autentica approvata.

Il modulo è condiviso in `app/components/contact-form.tsx`: la variante predefinita conserva campi, validazione e bozza locale della homepage; la variante `request` rende il messaggio facoltativo e omette la preferenza. Il pulsante è “Prepara la richiesta”, perché non esiste un servizio di invio: non vengono simulati invii riusciti. La bozza si può copiare e usare via email. Non sono effettuate richieste di rete né archiviazioni dei dati.

Per attivare “Invia la richiesta” servono un endpoint di invio compatibile con l’hosting statico, credenziali solo sul server, validazione server, limiti di frequenza e misure antispam (honeypot e protezione del servizio), gestione di caricamento ed errori reali, conferma soltanto dopo risposta positiva e un’informativa privacy definitiva. Nessuna integrazione di backend o piattaforma di videochiamata è stata inventata.

Foto online di `/contatti/`: `public/images/consulenza-online.webp`, immagine d’atmosfera generata con imagegen integrato, senza persone e senza una sessione reale. La nuova versione mostra una postazione in rovere chiaro, con schermo avorio neutro, tazza e quaderno color lino, tende chiare e luce naturale; evita lo sfondo verde della precedente versione. Sostituibile con una fotografia approvata. FAQ modificabili in `app/contatti/contacts-faq.tsx`.

Foto hero Contatti: `public/images/contatti-hero-dettaglio.webp`, immagine d’atmosfera generata con imagegen integrato. Prompt: dettaglio fotografico editoriale di un tavolino in rovere con tazza avorio e quaderno salvia chiuso, tende di lino e luce naturale; senza persone, testo, loghi o poltrona protagonista. Sostituibile con foto approvata.

## Navigazione e transizioni

I collegamenti tra pagine usano `next/link`, con il prefetch di Next.js in produzione. Il layout radice ospita `SiteShell`: header e footer restano montati durante la navigazione fra Home, Chi sono, Percorsi e Contatti. Le pagine mantengono i propri contenuti e metadati, renderizzati anche nel documento iniziale.

Il solo `main` entra con una transizione CSS di 220 ms (opacità e spostamento di 7 px), attiva esclusivamente con `prefers-reduced-motion: no-preference`. Non sono previsti ritardi, schermate di attesa o animazioni di uscita. I link agli anchor conservano lo scroll nativo o quello di Next.js.

L’emblema originale rimane in `public/images/emblema-giulia-calzone.png`; per l’header viene servita la derivata WebP trasparente `emblema-giulia-calzone-header.webp` (192 px, circa 26 KB anziché 1,1 MB), senza cambiare la dimensione visualizzata. Le foto e i font locali restano gli stessi. La prima compilazione di una route in `next dev` può essere più lenta: i controlli di navigazione vanno confrontati con la build esportata in `out/`.

Foto hero di `/percorsi/`: riutilizza `public/images/ambiente-consulenza.webp`, immagine illustrativa di ambiente già presente nel sito, con due poltrone e luce naturale. Non rappresenta lo studio autentico. Ritaglio centrato al 60% in verticale, senza modifiche al file originale.
