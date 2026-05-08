"use client";

import type { FeatureTab } from "./types";

export type FeatureTabDetailProps = {
  tab: FeatureTab;
};

export function FeatureTabDetail({ tab }: FeatureTabDetailProps) {
  return (
    <article className="flex flex-col justify-center text-left">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#5a6f66]">
        {tab.label2}
      </p>
      <h3 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-[#161616] md:text-4xl">
        {tab.heading}
      </h3>
      <p className="mt-3 max-w-lg text-base leading-relaxed text-[#424242] md:text-[1.05rem]">{tab.body}</p>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <button
          type="button"
          className="rounded-lg bg-[#05966a] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#047857] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#05966a]"
        >
          Learn more
        </button>
        <button
          type="button"
          className="rounded-lg border border-[#c5d0cc] bg-white px-5 py-2.5 text-sm font-semibold text-[#1a1a1a] transition-colors hover:border-[#05966a] hover:text-[#05966a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#05966a]"
        >
          View details
        </button>
      </div>

      <p className="mt-5 text-xs leading-relaxed text-[#6b7280]">
        Use the row above to compare how each capability fits into your study plan.
      </p>
    </article>
  );
}
