import "./process-timeline.css";
import { Ear, HandHeart, MessageCircle, Sprout, type LucideIcon } from "lucide-react";

const phaseIcons = [MessageCircle, Ear, Sprout, HandHeart] as const;

type ProcessTimelineProps = {
  steps: readonly (readonly [title: string, description: string])[];
  icons?: readonly LucideIcon[];
};

export function ProcessTimeline({ steps, icons = phaseIcons }: ProcessTimelineProps) {
  return <ol className="paths-timeline" role="list">
    {steps.map(([title, description], index) => {
      const Icon = icons[index] ?? MessageCircle;
      return (
        <li className="path-phase" data-scroll-reveal key={title}>
          <span className="path-phase-marker" aria-hidden="true">
            <Icon size={26} strokeWidth={1.65} focusable="false" />
          </span>
          <div><h3>{title}</h3><p>{description}</p></div>
        </li>
      );
    })}
  </ol>;
}
