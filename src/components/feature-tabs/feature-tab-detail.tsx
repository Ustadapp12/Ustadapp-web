"use client";

import Link from "next/link";
import type { FeatureTab } from "./types";

export type FeatureTabDetailProps = {
  tab: FeatureTab;
};

export function FeatureTabDetail({ tab }: FeatureTabDetailProps) {
  return (
    <article className="flex flex-col justify-center gap-4 text-left">
      {/* Label pill */}
      <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[#05966a]/25 bg-[#05966a]/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-[#05966a]">
        <span className="h-1.5 w-1.5 rounded-full bg-[#05966a]" aria-hidden />
        {tab.label2}
      </span>

      <h3 className="text-3xl font-semibold leading-tight tracking-tight text-[#161616] md:text-4xl">
        {tab.heading}
      </h3>

      <p className="max-w-lg text-base leading-relaxed text-[#424242] md:text-[1.05rem]">
        {tab.body}
      </p>

      {/* Divider */}
      <div className="h-px w-16 rounded-full bg-[#05966a]/40" />

      <div className="flex flex-wrap items-center gap-3">
        <Link
          href="#waitlist"
          className="gradient-btn cta-sheen rounded-lg px-5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#05966a]"
        >
          Get early access
        </Link>
        <Link
          href="#how-it-works"
          className="rounded-lg border border-[#c5d0cc] bg-white px-5 py-2.5 text-sm font-semibold text-[#1a1a1a] transition-colors hover:border-[#05966a] hover:text-[#05966a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#05966a]"
        >
          How it works
        </Link>
      </div>

      <p className="text-xs leading-relaxed text-[#9ca3af]">
        Use the row above to compare how each capability fits into your study plan.
      </p>
    </article>
  );
}
