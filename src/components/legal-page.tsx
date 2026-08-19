import type { ReactNode } from "react";
import { IslamicStar } from "@/components/islamic-star";

// Shared shell for long-form legal reading (Privacy Policy, Terms of Service).
// Uses the same hero gradient and glass-panel treatment as the rest of the
// site so these read as official UstadApp documents, not a bolted-on legal
// template, while keeping a single readable column since the job here is
// "find the clause," not "be persuaded."
export function LegalPage({
  title,
  effectiveDate,
  intro,
  children,
}: {
  title: string;
  effectiveDate: string;
  intro?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#05966A] via-[#0F1B2A] via-45% to-[#0F1B2A] px-6 pb-24 pt-20 text-white md:px-10 md:pt-28">
      <div aria-hidden className="grain pointer-events-none absolute inset-0" style={{ opacity: 0.12 }} />
      <IslamicStar className="pointer-events-none absolute -right-16 -top-10 h-64 w-64 text-white/10 spin-slow" />
      <IslamicStar
        className="pointer-events-none absolute -left-20 top-1/3 h-56 w-56 text-white/5 spin-slow [animation-direction:reverse] [animation-delay:6s]"
      />

      <div className="relative z-10 mx-auto w-full max-w-3xl text-center">
        <p className="text-xs font-black tracking-widest text-[#2fd88f]">UstadApp</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">{title}</h1>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/60">
          Effective {effectiveDate}
        </div>
      </div>

      <div
        className="relative z-10 mx-auto mt-12 w-full max-w-3xl rounded-3xl border border-white/15 px-6 py-10 text-left shadow-[0_40px_100px_rgba(0,0,0,0.5)] sm:px-10 sm:py-12"
        style={{ backgroundColor: "#F5F7FA" }}
      >
        {intro && <div className="text-base leading-relaxed text-[#5A5D68]">{intro}</div>}
        <div className={`divide-y divide-[#5A5D68]/20 ${intro ? "mt-10" : ""}`}>{children}</div>
      </div>
    </div>
  );
}

export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <section className="py-8 first:pt-0 last:pb-0">
      <h2 className="text-lg font-black tracking-tight text-[#5A5D68] md:text-xl">{heading}</h2>
      <div className="mt-3 space-y-4 text-base leading-relaxed text-[#5A5D68] [&_a]:text-[#5A5D68] [&_a]:underline [&_a]:underline-offset-2 [&_li]:ml-5 [&_li]:list-disc [&_strong]:text-[#5A5D68]">
        {children}
      </div>
    </section>
  );
}
