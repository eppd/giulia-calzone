import type { ReactNode } from "react";

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={className} data-scroll-reveal>{children}</div>;
}
