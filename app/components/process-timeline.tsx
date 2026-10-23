import "./process-timeline.css";
import { CircleCheck, ClipboardList, MessageCircle, Sprout } from "lucide-react";

const phaseIcons = [MessageCircle, ClipboardList, Sprout, CircleCheck] as const;

type ProcessTimelineProps = {
  steps: readonly (readonly [title: string, description: string])[];
};

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return <ol className="paths-timeline" role="list">
    {steps.map(([title, description], index) => {
      const Icon = phaseIcons[index] ?? MessageCircle;
      return (
        <li className="path-phase" key={title}>
          <span className="path-phase-marker" aria-hidden="true">
            <Icon size={20} strokeWidth={1.9} focusable="false" />
          </span>
          <div><h3>{title}</h3><p>{description}</p></div>
        </li>
      );
    })}
  </ol>;
}
