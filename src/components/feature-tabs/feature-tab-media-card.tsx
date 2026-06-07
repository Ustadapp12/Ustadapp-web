"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { FeatureTab } from "./types";

export type FeatureTabMediaCardProps = {
  tab: FeatureTab;
};

export function FeatureTabMediaCard({ tab }: FeatureTabMediaCardProps) {
  const [broken, setBroken] = useState(false);

  return (
    <div
      className={`group relative h-72 overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br shadow-lg md:h-96 ${tab.imageClass}`}
    >
      {!broken ? (
        <Image
          src={tab.image}
          alt={tab.heading}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
          onError={() => setBroken(true)}
        />
      ) : (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#f4f6f5] to-[#e8eceb] p-8 text-center"
          role="img"
          aria-label={tab.heading}
        >
          <span className="arabic text-4xl text-[#004a36]/30">القرآن</span>
          <span className="text-sm font-semibold text-[#374151]">{tab.heading}</span>
        </div>
      )}

      {/* Base gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-60" />

      {/* Static bottom caption */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-0 p-4 transition-all duration-300 group-hover:opacity-0 md:p-5">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/60">{tab.label2}</p>
            <p className="mt-0.5 text-sm font-semibold leading-snug text-white">{tab.label}</p>
          </div>
          <span className="rounded-full border border-white/25 bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/80 backdrop-blur-sm">
            Preview
          </span>
        </div>
      </div>

      {/* Slide-up overlay on hover */}
      <div className="absolute inset-x-0 bottom-0 translate-y-full transition-transform duration-400 ease-out group-hover:translate-y-0">
        <div className="border-t border-white/15 bg-black/80 p-5 backdrop-blur-md">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-emerald-400">{tab.label2}</p>
          <h4 className="mt-1 text-base font-semibold leading-snug text-white">{tab.heading}</h4>
          <p className="mt-2 text-xs leading-relaxed text-white/75">{tab.body}</p>
          <Link
            href="#waitlist"
            className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-[#05966a] px-4 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#047857]"
          >
            Get early access →
          </Link>
        </div>
      </div>
    </div>
  );
}
