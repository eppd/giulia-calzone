"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, type ReactNode } from "react";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";

const pages = {
  "/": "",
  "/chi-sono": "about-page",
  "/percorsi": "paths-page",
  "/contatti": "contacts-page",
} as const;

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname().replace(/\/$/, "") || "/";
  const previousPath = useRef(pathname);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const changed = previousPath.current !== pathname;
    previousPath.current = pathname;
    const main = root.current?.querySelector("main");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!changed || reduced.matches || !main?.animate) return;
    const animation = main.animate([
      { opacity: 0, transform: "translateY(7px)" },
      { opacity: 1, transform: "translateY(0)" },
    ], { duration: 220, easing: "cubic-bezier(.22,.61,.36,1)" });
    const stop = () => { if (reduced.matches) animation.cancel(); };
    reduced.addEventListener("change", stop);
    return () => {
      animation.cancel();
      reduced.removeEventListener("change", stop);
    };
  }, [pathname]);

  useEffect(() => {
    const main = root.current?.querySelector("main");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!main || reduced.matches || !("IntersectionObserver" in window) || !Element.prototype.animate) return;

    const targets = new Set<HTMLElement>();
    main.querySelectorAll<HTMLElement>("section").forEach(section => {
      const marked = section.querySelectorAll<HTMLElement>("[data-scroll-reveal]");
      if (marked.length) marked.forEach(target => targets.add(target));
      else targets.add(section);
    });

    const animations = new Map<HTMLElement, Animation>();
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const target = entry.target as HTMLElement;
        observer.unobserve(target);
        if (target.contains(document.activeElement)) return;
        const animation = target.animate([
          { opacity: 0, transform: "translateY(8px)" },
          { opacity: 1, transform: "translateY(0)" },
        ], { duration: 420, easing: "cubic-bezier(.22,.61,.36,1)" });
        animations.set(target, animation);
        animation.onfinish = () => animations.delete(target);
      });
    }, { threshold: 0.08 });

    targets.forEach(target => {
      // Above-the-fold content stays visible immediately, including on refresh.
      if (target.getBoundingClientRect().top >= window.innerHeight) observer.observe(target);
    });

    const stopForReducedMotion = () => {
      if (!reduced.matches) return;
      observer.disconnect();
      animations.forEach(animation => animation.cancel());
      animations.clear();
    };
    const stopOnFocus = (event: FocusEvent) => {
      const focused = event.target;
      if (!(focused instanceof Node)) return;
      animations.forEach((animation, target) => {
        if (!target.contains(focused)) return;
        animation.cancel();
        animations.delete(target);
      });
    };

    reduced.addEventListener("change", stopForReducedMotion);
    main.addEventListener("focusin", stopOnFocus);
    return () => {
      observer.disconnect();
      animations.forEach(animation => animation.cancel());
      reduced.removeEventListener("change", stopForReducedMotion);
      main.removeEventListener("focusin", stopOnFocus);
    };
  }, [pathname]);
  if (!(pathname in pages)) return children;

  const page = pathname as keyof typeof pages;
  const home = page === "/";
  const activePage = page === "/percorsi" ? "percorsi" : page === "/contatti" ? "contatti" : "chi-sono";

  return <div ref={root} className={`site-root ${pages[page]}`.trim()}>
    <a className="skip-link" href="#main">Vai al contenuto</a>
    <SiteHeader home={home} activePage={activePage} />
    {children}
    <SiteFooter home={home} />
  </div>;
}
