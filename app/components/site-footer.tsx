import Link from "next/link";
import Image from "next/image";
import { navigation } from "./navigation";
import { footerProfessionalDetails } from "./footer-professional-details";
import "./site-footer.css";

const directions = "https://www.google.com/maps/search/?api=1&query=Via+Salvecchio+6%2FA+Crema+CR";
const footerNavigation = navigation.filter(item => !["home", "come-funziona"].includes(item.id));

export function SiteFooter({ home = false }: { home?: boolean }) {
  const { registration, vatNumber } = footerProfessionalDetails;
  const hasRegistration = registration?.region.trim() && registration.number.trim();

  return <footer className="site-footer">
    <div className="section-shell site-footer__grid">
      <div className="site-footer__identity">
        <Link className="site-footer__brand" href={home ? "#home" : "/#home"} aria-label="Giulia Calzone, home">
          <Image className="site-footer__brand-emblem" src="/images/emblema-giulia-calzone-header.webp" alt="" width={192} height={141} />
          <span className="site-footer__brand-copy">
            <span className="site-footer__brand-name">Giulia Calzone<span className="brand-dot">.</span></span>
            <small>PSICOLOGA PSICOTERAPEUTA</small>
          </span>
        </Link>
        <p>Uno spazio di ascolto e rispetto.<br />Percorsi pensati insieme,<br />con i tuoi tempi.</p>
      </div>

      <nav className="site-footer__column" aria-labelledby="footer-explore-title">
        <h2 id="footer-explore-title">Esplora</h2>
        <ul className="site-footer__links">
          {footerNavigation.map(item => <li key={item.id}><Link href={item.href}>{item.label}</Link></li>)}
        </ul>
      </nav>

      <div className="site-footer__column">
        <h2>Informazioni professionali</h2>
        {(hasRegistration || vatNumber?.trim()) && <dl className="site-footer__credentials">
          {hasRegistration && registration && <div><dt>Albo degli Psicologi</dt><dd><a href="https://areariservata.psy.it/albo/iscritto/giulia_calzone_186719" target="_blank" rel="noopener noreferrer" aria-label={`Iscrizione all’Albo degli Psicologi ${registration.region}, numero ${registration.number}; apre una nuova scheda`}>{registration.region} · n. {registration.number}</a></dd></div>}
          {vatNumber?.trim() && <div><dt>Partita IVA</dt><dd>{vatNumber}</dd></div>}
        </dl>}
      </div>

      <div className="site-footer__column site-footer__contacts-column">
        <h2>Contatti</h2>
        <address className="site-footer__contacts">
          <a href="mailto:info@giuliacalzone.it">info@giuliacalzone.it</a>
          <a href="tel:+393482908640">+39 348 290 8640</a>
          <a href={directions} target="_blank" rel="noopener noreferrer" aria-label="Indicazioni per lo studio: Via Salvecchio 6/A, Crema (CR), apre una nuova scheda">Via Salvecchio 6/A,<br />Crema (CR)</a>
        </address>
      </div>

    </div>

    <div className="section-shell site-footer__bottom">
      <span>© 2026 Giulia Calzone. Tutti i diritti riservati.</span>
      <nav aria-label="Informative e informazioni professionali">
        <Link href="/privacy/">Privacy</Link>
        <Link href="/cookie/">Cookie</Link>
        <Link href="/informazioni/">Informazioni professionali</Link>
      </nav>
    </div>
  </footer>;
}
