# Istruzioni del progetto

## Contesto

Sito in italiano per Giulia Calzone, psicologa e psicoterapeuta a orientamento cognitivo-comportamentale a Crema. Il sito presenta la professionista e i percorsi, con l’obiettivo di aiutare le persone a richiedere un primo colloquio.

## Voce e contenuti

- Comunicare con calore, chiarezza e rispetto, senza giudizi o promesse terapeutiche.
- Non inventare qualifiche, iscrizioni professionali, esperienze, testimonianze, risultati o dati di contatto.
- Su richiesta dell’utente, non mostrare nell’interfaccia diciture su versione dimostrativa, immagini generate con IA o dati da verificare. Documentare lo stato dei contatti e delle immagini nel README.
- Evitare di chiedere informazioni sanitarie o dettagli clinici attraverso il primo contatto.
- Prima della pubblicazione verificare i dati dell’Albo e completare le informative legali.

## Direzione visiva

- Estetica editoriale, sobria e accogliente; palette avorio, salvia e toni neutri, con testo antracite.
- Titoli serif e testo sans-serif leggibile, ampio spazio bianco, immagini luminose e dettagli naturali.
- Evitare template sanitari generici, promesse visive vistose, animazioni invasive e layout basati solo su card.
- Curare contrasto, navigazione da tastiera, focus visibile, testi alternativi e layout responsive.
- Rispettare `prefers-reduced-motion`.

## Stack e comportamento

- Next.js App Router, TypeScript, Tailwind CSS, Motion for React e Lucide React.
- Usare componenti semantici e mantenere la navigazione funzionante anche su dispositivi mobili.
- Il modulo dimostrativo valida i campi nel browser e prepara una bozza locale; non dichiarare che invia o salva dati.
- Non attivare un invio reale prima di configurare un backend sicuro, misure antispam e un’informativa privacy completa.

## Skill locali

Le skill installate dal repository `Leonxlnx/taste-skill` si trovano in `.agents/skills/`. La skill richiesta per questo progetto è `gpt-taste/SKILL.md`; adattarne le indicazioni al brief, all’accessibilità e al tono calmo del sito. Non usare la skill Sites di OpenAI: lavorare direttamente nel progetto locale.
