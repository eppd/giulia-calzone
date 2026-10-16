"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
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
  if (!(pathname in pages)) return children;

  const page = pathname as keyof typeof pages;
  const home = page === "/";
  const activePage = page === "/percorsi" ? "percorsi" : page === "/contatti" ? "contatti" : "chi-sono";

  return <div className={`site-root ${pages[page]}`.trim()}>
    <a className="skip-link" href="#main">Vai al contenuto</a>
    <SiteHeader home={home} activePage={activePage} />
    {children}
    <SiteFooter home={home} />
  </div>;
}
