"use client";

import { useEffect, useRef } from "react";

export function CursorFollower() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const hasMoved = useRef(false);

  useEffect(() => {
    const el = dotRef.current;
    if (!el) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

    if (reduceMotion.matches || !finePointer.matches) {
      el.style.display = "none";
      return;
    }

    let raf = 0;

    const tick = () => {
      const t = 0.16;
      const px = pos.current.x + (target.current.x - pos.current.x) * t;
      const py = pos.current.y + (target.current.y - pos.current.y) * t;
      pos.current = { x: px, y: py };
      el.style.transform = `translate3d(${px}px, ${py}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };

    const onMove = (e: MouseEvent) => {
      if (!hasMoved.current) {
        hasMoved.current = true;
        const p = { x: e.clientX, y: e.clientY };
        pos.current = p;
        target.current = p;
      } else {
        target.current = { x: e.clientX, y: e.clientY };
      }
      el.style.opacity = "1";
    };

    const onDown = () => {
      el.classList.add("cursor-follower--press");
    };

    const onUp = () => {
      el.classList.remove("cursor-follower--press");
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      aria-hidden
      className="cursor-follower pointer-events-none fixed left-0 top-0 z-[9999] opacity-0 will-change-transform"
    />
  );
}
