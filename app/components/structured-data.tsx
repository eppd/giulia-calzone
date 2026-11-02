import { siteOrigin } from "../seo-config";

const professionalProfileUrl = "https://areariservata.psy.it/albo/iscritto/giulia_calzone_186719";

const person = {
  "@type": "Person",
  ...(siteOrigin
    ? {
        "@id": new URL("/#giulia-calzone", siteOrigin).href,
        url: new URL("/chi-sono/", siteOrigin).href,
      }
    : {}),
  name: "Giulia Calzone",
  jobTitle: "Psicologa e Psicoterapeuta",
  description: "Psicologa e psicoterapeuta a orientamento cognitivo-comportamentale a Crema.",
  email: "info@giuliacalzone.it",
  telephone: "+393482908640",
  knowsAbout: ["Psicologia clinica", "Psicoterapia cognitivo-comportamentale"],
  sameAs: [professionalProfileUrl],
  workLocation: {
    "@type": "Place",
    name: "Studio professionale",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Via Salvecchio 6/A",
      postalCode: "26013",
      addressLocality: "Crema",
      addressRegion: "Lombardia",
      addressCountry: "IT",
    },
  },
};

function JsonLd({ data }: { data: Record<string, unknown> }) {
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    ...data,
  }).replace(/</g, "\\u003c");

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />;
}

export function PersonStructuredData() {
  return <JsonLd data={person} />;
}

export function WebsiteStructuredData() {
  if (!siteOrigin) return null;

  return (
    <JsonLd
      data={{
        "@type": "WebSite",
        "@id": new URL("/#website", siteOrigin).href,
        url: new URL("/", siteOrigin).href,
        name: "Giulia Calzone",
        inLanguage: "it-IT",
        publisher: { "@id": new URL("/#giulia-calzone", siteOrigin).href },
      }}
    />
  );
}
