import "./process-timeline.css";
import { Ear, HandHeart, MessageCircle, Sprout } from "lucide-react";

const phaseIcons = [MessageCircle, Ear, Sprout, HandHeart] as const;

type ProcessTimelineProps = {
  steps: readonly (readonly [title: string, description: string])[];
};

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return <ol className="paths-timeline" role="list">
    {steps.map(([title, description], index) => {
      const Icon = phaseIcons[index] ?? MessageCircle;
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
