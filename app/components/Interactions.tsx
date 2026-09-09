"use client";

import { useEffect } from "react";

export default function Interactions() {
  useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups: Array<() => void> = [];

    /* reveals */
    const reveals = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (reduce || !("IntersectionObserver" in window)) {
      reveals.forEach((el) => el.classList.add("in"));
    } else {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const sibs = Array.from(el.parentElement!.querySelectorAll<HTMLElement>(":scope > .reveal"));
          const idx = sibs.indexOf(el);
          const delay = idx > 0 ? Math.min(idx, 5) * 90 : 0;
          window.setTimeout(() => el.classList.add("in"), delay);
          io.unobserve(el);
        });
      }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });
      reveals.forEach((el) => io.observe(el));
      cleanups.push(() => io.disconnect());
    }

    /* sticky nav */
    const nav = document.getElementById("topnav");
    const onScroll = () => { if (!nav) return; nav.classList.toggle("scrolled", window.scrollY > 16); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    cleanups.push(() => window.removeEventListener("scroll", onScroll));

    /* scrollspy */
    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>(".nav-links a"));
    const map: Record<string, HTMLAnchorElement> = {};
    links.forEach((a) => { const id = (a.getAttribute("href") || "").replace("#", ""); if (document.getElementById(id)) map[id] = a; });
    if ("IntersectionObserver" in window) {
      const spy = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id") || "";
          if (entry.isIntersecting && map[id]) { links.forEach((a) => a.classList.remove("active")); map[id].classList.add("active"); }
        });
      }, { rootMargin: "-45% 0px -50% 0px" });
      Object.keys(map).forEach((id) => { const s = document.getElementById(id); if (s) spy.observe(s); });
      cleanups.push(() => spy.disconnect());
    }

    /* overlay menu */
    const menu = document.getElementById("overlay-menu");
    const openBtn = document.getElementById("menu-open");
    const closeBtn = document.getElementById("menu-close");
    const FOCUSABLE = 'a[href],button:not([disabled])';
    const openMenu = () => {
      menu?.classList.add("open");
      menu?.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      (closeBtn as HTMLElement | null)?.focus();
    };
    const closeMenu = () => {
      menu?.classList.remove("open");
      menu?.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      (openBtn as HTMLElement | null)?.focus();
    };
    const trap = (e: KeyboardEvent) => {
      if (!menu || !menu.classList.contains("open") || e.key !== "Tab") return;
      const nodes = Array.from(menu.querySelectorAll<HTMLElement>(FOCUSABLE)).filter((n) => n.offsetParent !== null);
      if (!nodes.length) return;
      const first = nodes[0], last = nodes[nodes.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    openBtn?.addEventListener("click", openMenu);
    closeBtn?.addEventListener("click", closeMenu);
    const menuLinks = menu ? Array.from(menu.querySelectorAll("a")) : [];
    menuLinks.forEach((a) => a.addEventListener("click", closeMenu));
    const escClose = (e: KeyboardEvent) => { if (e.key === "Escape") closeMenu(); };
    window.addEventListener("keydown", escClose);
    window.addEventListener("keydown", trap);
    cleanups.push(() => {
      openBtn?.removeEventListener("click", openMenu);
      closeBtn?.removeEventListener("click", closeMenu);
      menuLinks.forEach((a) => a.removeEventListener("click", closeMenu));
      window.removeEventListener("keydown", escClose);
      window.removeEventListener("keydown", trap);
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
