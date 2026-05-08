"use client";

import { useState } from "react";
import { RevealOnScroll } from "@/components/animations";
import {
  FEATURE_TABS,
  FeatureTabBar,
  FeatureTabDetail,
  FeatureTabMediaCard,
} from "@/components/feature-tabs";

export default function LandingFeatureTabs() {
  const [active, setActive] = useState(0);
  const tab = FEATURE_TABS[active];

  return (
    <section id="feature-tabs" className="bg-[#f3f3f0] px-6 py-20 md:px-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <RevealOnScroll className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#5a6f66]">Platform overview</p>
          <h2 className="mt-2 text-4xl font-semibold leading-tight text-[#161616] md:text-5xl">
            Capabilities for structured Quranic study
          </h2>
          <p className="mt-3 text-sm text-[#4d4d4d] md:text-base">
            Each column highlights a core learning track. Select a heading to read a concise summary and representative
            preview.
          </p>
        </RevealOnScroll>

        <div className="feature-tabs-table-shell mt-10 overflow-hidden rounded-xl border border-[#d2d2d2] bg-white shadow-[0_10px_26px_rgba(13,27,42,0.06)]">
          <FeatureTabBar tabs={FEATURE_TABS} activeIndex={active} onChange={setActive} />

          <div
            key={tab.id}
            id={`feature-tab-panel-${tab.id}`}
            role="tabpanel"
            aria-labelledby={`feature-tab-${tab.id}`}
            className="tab-panel-animate grid gap-8 border-t border-[#d2d2d2] bg-[#f8f9fa] p-6 md:grid-cols-2 md:p-8"
          >
            <FeatureTabMediaCard tab={tab} />
            <FeatureTabDetail tab={tab} />
          </div>
        </div>
      </div>
    </section>
  );
}
