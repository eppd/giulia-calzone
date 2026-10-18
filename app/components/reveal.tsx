"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const element = useRef<HTMLDivElement>(null);
  const animation = useRef<Animation | null>(null);

  useEffect(() => {
    const node = element.current;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!node || reduced.matches || !("IntersectionObserver" in window) || !node.animate) return;

    // Never conceal server-rendered content or replay an entrance above the fold.
    if (node.getBoundingClientRect().top < window.innerHeight) return;
    const observer = new IntersectionObserver(entries => {
      if (!entries.some(entry => entry.isIntersecting)) return;
      observer.disconnect();
      if (reduced.matches || node.contains(document.activeElement)) return;
      animation.current = node.animate([
        { opacity: 0, transform: "translateY(12px)" },
        { opacity: 1, transform: "translateY(0)" },
      ], { duration: 450, easing: "cubic-bezier(.22,.61,.36,1)" });
    }, { threshold: 0.12 });
    observer.observe(node);

    const stop = () => {
      if (!reduced.matches) return;
      observer.disconnect();
      animation.current?.cancel();
    };
    reduced.addEventListener("change", stop);
    return () => {
      observer.disconnect();
      animation.current?.cancel();
      reduced.removeEventListener("change", stop);
    };
  }, []);

  return <div ref={element} className={className} onFocusCapture={() => animation.current?.cancel()}>{children}</div>;
}
