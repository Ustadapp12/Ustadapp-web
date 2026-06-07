"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RevealOnScroll } from "@/components/animations";
import { IslamicStar } from "@/components/islamic-star";
import { FEATURE_TABS } from "@/components/feature-tabs/tabs-data";

export default function LandingFeatureTabs() {
  const [active, setActive] = useState(0);
  const [slideDir, setSlideDir] = useState<"right" | "left">("right");
  const [animKey, setAnimKey] = useState(0);
  const tab = FEATURE_TABS[active];

  function handleChange(i: number) {
    if (i === active) return;
    setSlideDir(i > active ? "right" : "left");
    setActive(i);
    setAnimKey((k) => k + 1);
  }

  return (
    /*
     * Outer section matches every other section's padding/background so the
     * horizontal spacing is identical. The dark glass card sits inside a
     * max-w-6xl rounded-3xl container — same pattern as the hero section.
     */
    <section id="feature-tabs" className="bg-[#f3f3f0] px-6 py-10 md:px-16 md:py-14">
      <RevealOnScroll>
        <div
          className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-3xl"
          style={{ background: "linear-gradient(160deg,#001810 0%,#002e1e 48%,#001810 100%)" }}
        >
          {/* ── Background atmosphere (clipped to card) ──── */}
          <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
            <div
              className="absolute inset-0"
              style={{ background: "radial-gradient(ellipse 75% 55% at 50% 0%, rgba(5,150,106,0.16), transparent 60%)" }}
            />
            <div
              className="absolute -left-16 -top-8 h-72 w-72 rounded-full"
              style={{ background: "radial-gradient(circle, rgba(88,204,2,0.18), transparent 70%)", filter: "blur(56px)", animation: "float-gentle 9s ease-in-out infinite" }}
            />
            <div
              className="absolute -right-16 bottom-0 h-64 w-64 rounded-full"
              style={{ background: "radial-gradient(circle, rgba(255,200,0,0.14), transparent 70%)", filter: "blur(56px)", animation: "float-gentle 11s ease-in-out infinite", animationDelay: "4s" }}
            />
            <IslamicStar className="absolute -right-6 -top-4 h-64 w-64 text-white/[0.025] spin-slow" />
            <IslamicStar className="absolute -left-10 bottom-0 h-52 w-52 text-white/[0.02] spin-slow [animation-direction:reverse] [animation-delay:8s]" />
          </div>

          {/* ── Card content ───────────────────────────── */}
          <div className="relative z-10 p-6 md:p-8">

            {/* Header */}
            <div className="mb-6 flex flex-col items-center gap-2.5 text-center">
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-emerald-300"
                style={{ background: "rgba(52,211,153,0.11)", border: "1px solid rgba(52,211,153,0.24)", backdropFilter: "blur(8px)" }}
              >
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" aria-hidden />
                Platform capabilities
              </span>
              <h2 className="text-2xl font-semibold leading-tight text-white md:text-3xl">
                Six tracks — one structured path to Quran mastery
              </h2>
            </div>

            {/* Pill tab bar */}
            <div className="mb-5 flex flex-wrap justify-center gap-1.5 md:gap-2" role="tablist" aria-label="Feature tracks">
              {FEATURE_TABS.map((t, i) => (
                <button
                  key={t.id}
                  role="tab"
                  aria-selected={active === i}
                  aria-controls={`feat-panel-${t.id}`}
                  id={`feat-tab-${t.id}`}
                  onClick={() => handleChange(i)}
                  className="rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/60 focus-visible:outline-offset-2"
                  style={
                    active === i
                      ? {
                          background: "rgba(255,255,255,0.94)",
                          color: "#002415",
                          boxShadow: "0 0 0 1px rgba(255,255,255,0.5) inset, 0 4px 14px rgba(255,255,255,0.18)",
                        }
                      : {
                          background: "rgba(255,255,255,0.07)",
                          color: "rgba(255,255,255,0.55)",
                          border: "1px solid rgba(255,255,255,0.12)",
                          backdropFilter: "blur(8px)",
                        }
                  }
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* Glass panel */}
            <div
              className="overflow-hidden rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(20px) saturate(140%)",
                WebkitBackdropFilter: "blur(20px) saturate(140%)",
                border: "1px solid rgba(255,255,255,0.12)",
                boxShadow: "0 16px 48px rgba(0,0,0,0.38), inset 0 1px 0 rgba(255,255,255,0.16)",
              }}
            >
              <div
                key={animKey}
                role="tabpanel"
                id={`feat-panel-${tab.id}`}
                aria-labelledby={`feat-tab-${tab.id}`}
                className={`grid md:grid-cols-[1fr_1.1fr] ${slideDir === "right" ? "feature-slide-right" : "feature-slide-left"}`}
              >
                {/* Text */}
                <div className="flex flex-col justify-center gap-3.5 p-6 md:p-7">
                  <span
                    className="inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-emerald-300"
                    style={{ background: "rgba(52,211,153,0.09)", border: "1px solid rgba(52,211,153,0.2)" }}
                  >
                    <span className="h-1 w-1 animate-pulse rounded-full bg-emerald-400" aria-hidden />
                    {tab.label2}
                  </span>

                  <h3 className="text-lg font-semibold leading-snug text-white md:text-xl">
                    {tab.heading}
                  </h3>

                  <p className="text-sm leading-relaxed text-white/60">
                    {tab.body}
                  </p>

                  <div
                    className="h-px w-8 rounded-full"
                    style={{ background: "linear-gradient(to right, rgba(52,211,153,0.6), transparent)" }}
                  />

                  <div className="flex flex-wrap gap-2">
                    <Link href="#waitlist" className="gradient-btn cta-sheen rounded-lg px-4 py-2 text-sm font-semibold text-white">
                      Get early access
                    </Link>
                    <Link
                      href="#how-it-works"
                      className="rounded-lg px-4 py-2 text-sm font-semibold text-white/65 transition-colors hover:text-white"
                      style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.13)" }}
                    >
                      How it works
                    </Link>
                  </div>

                  {/* Dot indicators */}
                  <div className="flex items-center gap-1.5 pt-0.5" aria-hidden>
                    {FEATURE_TABS.map((t, i) => (
                      <button
                        key={t.id}
                        onClick={() => handleChange(i)}
                        aria-label={`Go to ${t.label}`}
                        className="rounded-full transition-all duration-300"
                        style={{
                          height: "4px",
                          width: active === i ? "18px" : "4px",
                          background: active === i ? "rgba(52,211,153,0.9)" : "rgba(255,255,255,0.18)",
                          boxShadow: active === i ? "0 0 5px rgba(52,211,153,0.5)" : "none",
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div
                  className="group relative min-h-[200px] md:min-h-0"
                  style={{ borderLeft: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <Image
                    src={tab.image}
                    alt={tab.heading}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(135deg, rgba(0,0,0,0.24) 0%, transparent 50%)" }}
                  />
                  <span
                    className="absolute bottom-3 right-3 z-10 rounded-full px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-white/70"
                    style={{ background: "rgba(0,0,0,0.36)", border: "1px solid rgba(255,255,255,0.16)", backdropFilter: "blur(8px)" }}
                  >
                    {tab.label}
                  </span>
                </div>
              </div>
            </div>

            {/* Prev / Next navigation */}
            <div className="mt-4 flex items-center justify-between">
              <button
                onClick={() => handleChange(Math.max(0, active - 1))}
                disabled={active === 0}
                className="flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-semibold text-white/45 transition-all hover:text-white/80 disabled:pointer-events-none disabled:opacity-0"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)" }}
              >
                ← {active > 0 ? FEATURE_TABS[active - 1].label : ""}
              </button>
              <span className="text-[10px] font-semibold tabular-nums text-white/25">
                {active + 1} / {FEATURE_TABS.length}
              </span>
              <button
                onClick={() => handleChange(Math.min(FEATURE_TABS.length - 1, active + 1))}
                disabled={active === FEATURE_TABS.length - 1}
                className="flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-semibold text-white/45 transition-all hover:text-white/80 disabled:pointer-events-none disabled:opacity-0"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)" }}
              >
                {active < FEATURE_TABS.length - 1 ? FEATURE_TABS[active + 1].label : ""} →
              </button>
            </div>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
