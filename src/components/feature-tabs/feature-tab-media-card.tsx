"use client";

import Image from "next/image";
import { useState } from "react";
import type { FeatureTab } from "./types";

export type FeatureTabMediaCardProps = {
  tab: FeatureTab;
};

export function FeatureTabMediaCard({ tab }: FeatureTabMediaCardProps) {
  const [broken, setBroken] = useState(false);

  return (
    <div
      className={`feature-tab-media subtle-grid hover-zoom-img group relative h-72 overflow-hidden rounded-2xl border border-[#d8e3df] bg-gradient-to-br shadow-sm transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-md md:h-80 ${tab.imageClass}`}
    >
      {!broken ? (
        <Image
          src={tab.image}
          alt={tab.heading}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 50vw"
          onError={() => setBroken(true)}
        />
      ) : (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#f4f6f5] to-[#e8eceb] p-8 text-center"
          role="img"
          aria-label={tab.heading}
        >
          <span className="text-sm font-semibold text-[#374151]">{tab.heading}</span>
          <span className="max-w-xs text-xs leading-relaxed text-[#6b7280]">
            Image unavailable. This preview reflects the selected topic.
          </span>
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />

      <div className="relative flex h-full flex-col justify-end p-4 md:p-5">
        <div className="flex justify-end">
          <span className="feature-tab-caption">{tab.label}</span>
        </div>
      </div>
    </div>
  );
}
