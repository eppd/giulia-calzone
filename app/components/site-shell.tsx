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
