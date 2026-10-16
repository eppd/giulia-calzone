import "./process-timeline.css";

type ProcessTimelineProps = {
  steps: readonly (readonly [title: string, description: string])[];
};

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return <ol className="paths-timeline" role="list">
    {steps.map(([title, description], index) => <li className="path-phase" key={title}>
      <span className="path-phase-number" aria-hidden="true">0{index + 1}</span>
      <div><h3>{title}</h3><p>{description}</p></div>
    </li>)}
  </ol>;
}
