"use client";

import { useEffect } from "react";

export default function Interactions() {
  useEffect(() => {
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hasIO = "IntersectionObserver" in window;
    const timers: number[] = [];
    let revealObserver: IntersectionObserver | null = null;
    let spyObserver: IntersectionObserver | null = null;

    /* reveals */
    const reveals = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (reduce || !hasIO) {
      reveals.forEach((el) => el.classList.add("in"));
    } else {
      revealObserver = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target as HTMLElement;
            const sibs = Array.from(el.parentElement!.querySelectorAll<HTMLElement>(":scope > .reveal"));
            const idx = sibs.indexOf(el);
            const delay = idx > 0 ? Math.min(idx, 5) * 90 : 0;
            timers.push(window.setTimeout(() => el.classList.add("in"), delay));
            obs.unobserve(el);
          });
        },
        { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
      );
      reveals.forEach((el) => revealObserver!.observe(el));
    }

    /* sticky nav */
    const nav = document.getElementById("topnav");
    const onScroll = () => { if (nav) nav.classList.toggle("scrolled", window.scrollY > 16); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    /* scrollspy */
    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>(".nav-links a"));
    const map: Record<string, HTMLAnchorElement> = {};
    links.forEach((a) => {
      const id = (a.getAttribute("href") || "").replace("#", "");
      if (document.getElementById(id)) map[id] = a;
    });
    if (hasIO) {
      spyObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const id = entry.target.getAttribute("id") || "";
            if (entry.isIntersecting && map[id]) {
              links.forEach((a) => a.classList.remove("active"));
              map[id].classList.add("active");
            }
          });
        },
        { rootMargin: "-45% 0px -50% 0px" }
      );
      Object.keys(map).forEach((id) => {
        const s = document.getElementById(id);
        if (s) spyObserver!.observe(s);
      });
    }

    /* overlay menu */
    const menu = document.getElementById("overlay-menu");
    const openBtn = document.getElementById("menu-open");
    const closeBtn = document.getElementById("menu-close");
    const FOCUSABLE = "a[href],button:not([disabled])";
    const openMenu = () => {
      menu?.classList.add("open");
      menu?.removeAttribute("inert");
      document.body.style.overflow = "hidden";
      (closeBtn as HTMLElement | null)?.focus();
    };
    const closeMenu = () => {
      menu?.classList.remove("open");
      menu?.setAttribute("inert", "");
      document.body.style.overflow = "";
      (openBtn as HTMLElement | null)?.focus();
    };
    const onKeydown = (e: KeyboardEvent) => {
      if (!menu || !menu.classList.contains("open")) return;
      if (e.key === "Escape") { closeMenu(); return; }
      if (e.key === "Tab") {
        const nodes = Array.from(menu.querySelectorAll<HTMLElement>(FOCUSABLE)).filter((n) => n.offsetParent !== null);
        if (!nodes.length) return;
        const first = nodes[0], last = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    const menuLinks = menu ? Array.from(menu.querySelectorAll("a")) : [];
    openBtn?.addEventListener("click", openMenu);
    closeBtn?.addEventListener("click", closeMenu);
    menuLinks.forEach((a) => a.addEventListener("click", closeMenu));
    window.addEventListener("keydown", onKeydown);

    return () => {
      timers.forEach(clearTimeout);
      revealObserver?.disconnect();
      spyObserver?.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeydown);
      openBtn?.removeEventListener("click", openMenu);
      closeBtn?.removeEventListener("click", closeMenu);
      menuLinks.forEach((a) => a.removeEventListener("click", closeMenu));
    };
  }, []);

  return null;
}
