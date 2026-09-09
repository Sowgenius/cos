"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { projects, type Project } from "../data/projects";
import { blueprintFor } from "./Blueprints";

/* blur-up render (handles cached-complete race) */
function Render({ src, fallback, alt, priority }: { src: string; fallback?: string; alt: string; priority?: boolean; }) {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth > 0) setLoaded(true);
  }, [src, fallback]);
  return (
    <picture>
      {fallback ? <source srcSet={src} type="image/webp" /> : null}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={ref}
        src={fallback ?? src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        onLoad={() => setLoaded(true)}
        style={{
          filter: loaded ? "none" : "blur(14px)",
          transform: loaded ? "none" : "scale(1.05)",
          opacity: loaded ? 1 : 0.5,
          transition: "filter .6s cubic-bezier(.16,1,.3,1), transform .6s cubic-bezier(.16,1,.3,1), opacity .4s ease",
        }}
      />
    </picture>
  );
}

function MediaField({ project, priority }: { project: Project; priority?: boolean }) {
  const has = project.images.length > 0;
  return (
    <div className={"proj-frame" + (has ? "" : " blueprint-field")} role="img" aria-label={has ? project.images[0].alt : project.fieldLabel}>
      {has ? <Render src={project.images[0].src} fallback={project.images[0].fallback} alt={project.images[0].alt} priority={priority} /> : blueprintFor(project.id)}
      {has && <span className="badge">{String(project.images.length).padStart(2, "0")} vues</span>}
      <span className="caption">{project.fieldLabel}</span>
    </div>
  );
}

const FOCUSABLE = 'a[href],button:not([disabled]),[tabindex]:not([tabindex="-1"])';

function ProjectDetail({ project, onClose }: { project: Project; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const has = project.images.length > 0;
  const count = project.images.length;

  const go = useCallback((d: number) => setActive((i) => Math.min(Math.max(i + d, 0), count - 1)), [count]);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const dialog = dialogRef.current;
    dialog?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { onClose(); return; }
      if (e.key === "ArrowRight" && has) go(1);
      if (e.key === "ArrowLeft" && has) go(-1);
      if (e.key === "Tab" && dialog) {
        // focus trap
        const nodes = Array.from(dialog.querySelectorAll<HTMLElement>(FOCUSABLE)).filter((n) => n.offsetParent !== null);
        if (nodes.length === 0) return;
        const first = nodes[0], last = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = prev; };
  }, [onClose, go, has]);

  return (
    <div className="proj-overlay" role="dialog" aria-modal="true" aria-label={`Projet : ${project.title}`}>
      <button className="proj-scrim" aria-label="Fermer le projet" onClick={onClose} />
      <div className="proj-detail" ref={dialogRef} tabIndex={-1}>
        <div className="detail-head">
          <div>
            <span className="detail-num">{project.index}</span>
            <p className="detail-kind">{project.type}</p>
            <h3 className="detail-title">{project.title}</h3>
          </div>
          <button className="detail-close" onClick={onClose} aria-label="Fermer">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6 L18 18 M18 6 L6 18" fill="none" stroke="currentColor" strokeWidth="1.6" /></svg>
          </button>
        </div>

        {has ? (
          <>
            <div className="stage">
              <Render key={project.images[active].src} src={project.images[active].src} fallback={project.images[active].fallback} alt={project.images[active].alt} priority />
              {count > 1 && (
                <>
                  <button className="stage-arrow prev" aria-label="Vue précédente" onClick={() => go(-1)} disabled={active === 0}>
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5 L8 12 L15 19" fill="none" stroke="currentColor" strokeWidth="1.6" /></svg>
                  </button>
                  <button className="stage-arrow next" aria-label="Vue suivante" onClick={() => go(1)} disabled={active === count - 1}>
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5 L16 12 L9 19" fill="none" stroke="currentColor" strokeWidth="1.6" /></svg>
                  </button>
                </>
              )}
              <span className="stage-count" aria-live="polite">{String(active + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}</span>
            </div>
            <div className="thumbs" role="tablist" aria-label="Vues du projet">
              {project.images.map((img, i) => (
                <button key={img.src} className={"thumb" + (i === active ? " active" : "")} role="tab" aria-selected={i === active} aria-label={`Vue ${i + 1} : ${img.alt}`} onClick={() => setActive(i)}>
                  <Render src={img.src} fallback={img.fallback} alt="" />
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="stage stage-blueprint">
            {blueprintFor(project.id)}
            <span className="stage-note">Plans, notes de calcul et modèles disponibles sur demande.</span>
          </div>
        )}

        <div className="detail-body">
          <p className="detail-desc">{project.desc}</p>
          <div>
            <div className="detail-specs">
              {project.specs.map((s) => (
                <div className="dspec" key={s.k}><span className="dk">{s.k}</span><span className="dv">{s.v}</span></div>
              ))}
            </div>
            <div className="tag-list">{project.tags.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
            {!has && (
              <div className="detail-cta">
                <a className="btn btn-outline arrow" href={`mailto:cheikhoumarsy05@gmail.com?subject=${encodeURIComponent(`Demande de plans — ${project.title}`)}`}>Demander les plans</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [openId, setOpenId] = useState<string | null>(null);
  const rowRefs = useRef<Record<string, HTMLElement | null>>({});
  const triggerRef = useRef<HTMLElement | null>(null);
  const open = openId ? projects.find((p) => p.id === openId) ?? null : null;

  const handleOpen = useCallback((id: string, trigger: HTMLElement) => { triggerRef.current = trigger; setOpenId(id); }, []);
  const handleClose = useCallback(() => { setOpenId(null); triggerRef.current?.focus(); }, []);

  useEffect(() => {
    if (!open) return;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const detail = document.querySelector<HTMLElement>(".proj-detail");
    const fieldRect = rowRefs.current[open.id]?.querySelector(".proj-frame")?.getBoundingClientRect();
    if (!detail || !fieldRect) return;
    const to = detail.getBoundingClientRect();
    const dx = fieldRect.left - to.left, dy = fieldRect.top - to.top;
    const sx = fieldRect.width / to.width, sy = fieldRect.height / to.height;
    detail.animate(
      [{ transform: `translate(${dx}px,${dy}px) scale(${sx},${sy})`, opacity: 0.5 }, { transform: "none", opacity: 1 }],
      { duration: 480, easing: "cubic-bezier(0.16,1,0.3,1)" }
    );
  }, [open]);

  return (
    <>
      <div className="proj-index">
        {projects.map((project, i) => (
          <article className="proj-row reveal" key={project.id} ref={(el) => { rowRefs.current[project.id] = el; }}>
            <div className="proj-main">
              <div className="proj-head">
                <span className="proj-num">{project.index}</span>
                <span className="proj-kind">{project.type}</span>
              </div>
              <button className="proj-title-btn" onClick={(e) => handleOpen(project.id, e.currentTarget)} aria-haspopup="dialog">
                <h3>{project.title}</h3>
              </button>
              <div className="proj-specs">
                {project.specs.slice(0, 2).map((s) => (
                  <span className="spec" key={s.k}><span className="sk">{s.k}</span><span className="sv">{s.v}</span></span>
                ))}
              </div>
              <p className="proj-desc">{project.desc}</p>
              <div className="proj-foot">
                <div className="tag-list">{project.tags.slice(0, 3).map((t) => <span className="tag" key={t}>{t}</span>)}</div>
                <button className="proj-open arrow" onClick={(e) => handleOpen(project.id, e.currentTarget)} aria-haspopup="dialog">
                  {project.images.length > 0 ? "Voir les rendus" : "Voir le projet"}
                </button>
              </div>
            </div>
            <button className="proj-media proj-media-btn" onClick={(e) => handleOpen(project.id, e.currentTarget)} aria-label={`Ouvrir ${project.title}`}>
              <MediaField project={project} priority={i === 0} />
            </button>
          </article>
        ))}
      </div>
      {open && <ProjectDetail project={open} onClose={handleClose} />}
    </>
  );
}
