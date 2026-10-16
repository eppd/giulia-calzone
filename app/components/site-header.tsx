"use client";

import Link from "next/link";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

import { navigation } from "./navigation";

const headerNavigation = navigation.filter(item => item.id !== "come-funziona");

export function Brand({ home = false, emblem = false }: { home?: boolean; emblem?: boolean }) {
  return <Link className={emblem ? "brand brand-with-emblem" : "brand"} href={home ? "#home" : "/#home"} aria-label="Giulia Calzone, home">{emblem && <Image className="brand-emblem" src="/images/emblema-giulia-calzone-header.webp" alt="" width={192} height={141} priority />}<span>Giulia Calzone<span className="brand-dot">.</span></span><small>PSICOLOGA PSICOTERAPEUTA</small></Link>;
}

export function SiteHeader({ home = false, activePage = "chi-sono" }: { home?: boolean; activePage?: "chi-sono" | "percorsi" | "contatti" }) {
  const [menu, setMenu] = useState(false);
  const pathname = usePathname();
  useEffect(() => { setMenu(false); }, [pathname]);
  const toggle = useRef<HTMLButtonElement>(null);
  const reduced = useReducedMotion();
  const href = (item: typeof navigation[number]) => home && item.id !== "chi-sono" && item.id !== "percorsi" && item.id !== "contatti" ? `#${item.id}` : item.href;
  return <header className="header" onKeyDown={event => { if (event.key === "Escape" && menu) { setMenu(false); toggle.current?.focus(); } }}><div className="nav-shell">
    <Brand home={home} emblem />
    <nav className="desktop-nav" aria-label="Navigazione principale">{headerNavigation.map(item => <Link key={item.id} href={href(item)} aria-current={item.id === (home ? "home" : activePage) ? "page" : undefined}>{item.label}</Link>)}</nav>
    <Link className="button nav-cta" href="/contatti/#modulo">Richiedi un colloquio <ArrowUpRight size={15} /></Link>
    <button ref={toggle} className="menu-toggle" aria-expanded={menu} aria-controls="mobile-menu" aria-label={menu ? "Chiudi il menu" : "Apri il menu"} onClick={() => setMenu(!menu)}>{menu ? <X /> : <Menu />}</button>
  </div><AnimatePresence>{menu && <motion.nav id="mobile-menu" className="mobile-nav" aria-label="Navigazione mobile" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: reduced ? 0 : .2 }} onKeyDown={event => { if (event.key === "Escape") { setMenu(false); toggle.current?.focus(); } }}>{headerNavigation.map(item => <Link href={href(item)} key={item.id} aria-current={item.id === (home ? "home" : activePage) ? "page" : undefined} onClick={() => setMenu(false)}>{item.label}<ArrowUpRight size={16} /></Link>)}</motion.nav>}</AnimatePresence></header>;
}
