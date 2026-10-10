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

Il modulo prepara una bozza nel browser e non invia messaggi. Email e telefono sono dimostrativi. Le pagine privacy, cookie e informazioni professionali contengono note da completare e verificare. La demo ha `noindex`: aggiornare i metadati dopo la verifica dei contenuti definitivi.

Il ritratto iniziale, lo studio nella sezione “Chi sono” e i tre ambienti dei servizi e la foto della CTA sono immagini illustrative generate con IA: non raffigurano Giulia Calzone, il suo studio effettivo o clienti reali. Le immagini attive sono servite localmente da `public/images/` in formato WebP. Le precedenti foto d’atmosfera di Unsplash sono conservate come alternative e i relativi URL si trovano in `scripts/download-assets.mjs`. I font Geist e Playfair Display sono gestiti e serviti localmente da `next/font`.

Le indicazioni del progetto sono in `agent.md`. Le skill richieste sono installate in `.agents/skills/`.

Foto CTA: `public/images/cta-ambiente.webp`, generata con lo strumento integrato imagegen. Prompt: fotografia editoriale panoramica di uno studio vuoto, parete salvia libera a sinistra e poltrona crema, tavolino in rovere, pianta e finestra a destra; luce naturale, senza persone o testo.
