"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** Watches every [data-reveal] element and adds .is-visible when it scrolls into view. */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.classList.add("is-visible");
            observer.unobserve(el);
            // Once revealed, drop the reveal styles so hover transitions are instant again.
            const delay = parseInt(el.style.getPropertyValue("--reveal-delay")) || 0;
            window.setTimeout(() => el.removeAttribute("data-reveal"), delay + 1800);
          }
        }
      },
      { rootMargin: "0px 0px -60px 0px", threshold: 0.1 },
    );
    document.querySelectorAll("[data-reveal]:not(.is-visible)").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}

/** Feeds the pointer position into --x/--y on the hovered [data-spotlight] or .card-lift card (one listener for the page). */
export function PointerSpotlight() {
  useEffect(() => {
    if (!window.matchMedia("(hover: hover)").matches) return;
    let frame = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const el = (e.target as Element | null)?.closest<HTMLElement>("[data-spotlight], .card-lift");
        if (!el) return;
        const r = el.getBoundingClientRect();
        el.style.setProperty("--x", `${e.clientX - r.left}px`);
        el.style.setProperty("--y", `${e.clientY - r.top}px`);
      });
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("pointermove", onMove);
    };
  }, []);

  return null;
}
