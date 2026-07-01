"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "hero",     label: "Home" },
  { id: "features", label: "Features" },
  { id: "journey",  label: "Journey" },
  { id: "waitlist", label: "Waitlist" },
];

export function SectionDots() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 md:flex"
      aria-label="Page sections"
    >
      {SECTIONS.map(({ id, label }) => {
        const isActive = active === id;
        return (
          <a
            key={id}
            href={`#${id}`}
            aria-label={`Go to ${label}`}
            className="group flex items-center justify-end gap-2"
          >
            {/* Label — slides in on hover */}
            <span className="translate-x-1 whitespace-nowrap text-[10px] font-semibold text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)] opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
              {label}
            </span>
            {/* Dot */}
            <span
              className={`flex items-center justify-center rounded-full border transition-all duration-300 ${
                isActive
                  ? "h-3 w-3 border-[#2fd88f] bg-[#2fd88f] shadow-[0_0_8px_rgba(47,216,143,0.65)]"
                  : "h-2.5 w-2.5 border-white/30 bg-white/20 shadow-sm group-hover:border-white/60"
              }`}
            />
          </a>
        );
      })}
    </nav>
  );
}
