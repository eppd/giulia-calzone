import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type FirstStepCtaProps = {
  id: string;
};

export function FirstStepCta({ id }: FirstStepCtaProps) {
  const titleId = `${id}-title`;

  return (
    <section id={id} className="pause section-shell" aria-labelledby={titleId}>
      <div className="cta-photo">
        <Image
          src="/images/cta-ambiente.webp?v=2"
          alt="Un angolo accogliente dello studio con poltrona, piante e luce naturale"
          fill
          sizes="(max-width: 760px) 100vw, 92vw"
        />
      </div>
      <div className="cta-copy">
        <h2 id={titleId}>
          Il primo passo?
          <br />
          <em>Parlarne insieme.</em>
        </h2>
        <p>Non serve avere tutte le risposte. Un primo colloquio è uno spazio per le tue domande, con i tuoi tempi.</p>
        <Link className="button cta-button" href="/contatti/#modulo">
          Richiedi un colloquio <ArrowUpRight size={18} />
        </Link>
        <span className="cta-location">In studio a Crema e online</span>
      </div>
    </section>
  );
}
