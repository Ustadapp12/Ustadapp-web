import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  AnimatedSection,
  FadeInStaggerGroup,
  FloatingBlob,
  PulseRing,
  SlidingReveal,
} from "@/components/animations";
import LandingFeatureTabs from "@/components/landing-feature-tabs";
import { IslamicStar } from "@/components/islamic-star";
import { WaitlistForm } from "@/components/waitlist-form";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Ustad — Quran Memorization",
  description: "The fun, smart, and effective way to memorize Quran. Gamified lessons, AI recitation feedback, streaks, and smart revision — built for children and adults.",
  path: "/",
});

const steps = [
  {
    title: "Choose your Surah & start your journey",
    copy: "Pick the Surah you want to learn and begin a guided path with bite-sized levels.",
    image: "https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Learn through smart levels",
    copy: "Complete fun interactive levels with ayah memorization and word pronunciation practice.",
    image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Revise, recite & master",
    copy: "Get smart revision prompts and build long-term memorization confidence.",
    image: "https://images.unsplash.com/photo-1573483883644-d0b4b55eb25d?auto=format&fit=crop&w=1200&q=80",
  },
];

const comingSoon = [
  {
    title: "Surah storytelling for deeper understanding",
    label: "Surah context",
    body: "Explore the historical context, themes, and virtues of each Surah — so every ayah carries real meaning before you memorize it.",
    image: "https://images.unsplash.com/photo-1616422840391-fa670d4b2ae7?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Qari certification for every Juz completed",
    label: "Certification",
    body: "Earn a verified certificate for each Juz you complete. Track milestones and share your achievements with pride.",
    image: "https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "AI correction with visual guidance in real time",
    label: "AI recitation",
    body: "Our AI listens as you recite and flags tajweed errors instantly — with visual highlights on the exact letter or vowel mark.",
    image: "https://images.unsplash.com/photo-1720873160840-d5934323bb23?auto=format&fit=crop&w=1400&q=80",
  },
];

const arabicAlphabets = ["ا", "ب", "ت", "ث", "ج", "ح", "خ", "د", "ذ", "ر", "ز", "س", "ش", "ص", "ض", "ط", "ظ", "ع", "غ", "ف", "ق", "ك", "ل", "م", "ن", "ه", "و", "ي"];

function IslamicPatternBg() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden" style={{ opacity: 0.055 }}>
      <IslamicStar className="absolute -right-12 -top-10 h-56 w-56 text-white spin-slow" />
      <IslamicStar className="absolute -bottom-8 -left-10 h-44 w-44 text-white spin-slow [animation-direction:reverse] [animation-delay:8s]" />
      <IslamicStar className="absolute right-1/3 top-1/2 h-28 w-28 text-yellow-200 spin-slow [animation-delay:4s]" />
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <AnimatedSection id="hero" className="px-6 pt-8 md:px-16 md:pt-12">
        <div className="mx-auto grid w-full max-w-6xl gap-6 overflow-hidden rounded-3xl bg-[#004a36] p-5 text-white md:grid-cols-2 md:p-8">

          {/* Left: copy */}
          <article className="relative isolate overflow-hidden rounded-2xl border border-[#0a6c4d] bg-[#004a36] p-6 shadow-[0_12px_30px_rgba(0,0,0,0.2)] hover-lift">
            <IslamicPatternBg />
            {/* Grain texture */}
            <div aria-hidden className="grain pointer-events-none absolute inset-0" />
            <FloatingBlob className="right-0 top-0 h-40 w-40 -translate-y-4 translate-x-6 md:h-48 md:w-48" variant="mint" />
            <FloatingBlob className="bottom-6 left-2 h-32 w-32 opacity-70 [animation-delay:0.6s] md:bottom-10 md:left-6" variant="gold" />
            <div aria-hidden className="beam-sweep pointer-events-none absolute inset-y-0 w-16 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div aria-hidden lang="ar" className="arabic pointer-events-none absolute right-5 top-5 select-none text-4xl font-bold text-white/10">القرآن</div>

            <FadeInStaggerGroup>
              <h1 className="hero-gradient-text text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
                The fun, smart, and effective way to memorize Quran.
              </h1>
              <p className="mt-4 max-w-xl text-sm text-[#e8fff7] [text-shadow:0_1px_2px_rgba(0,0,0,0.2)]">
                Learn Quran step by step with AI recitation feedback, beginner lessons, XP rewards, streaks, and smart revision.
                Built for children and adults learning at any level.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <span className="relative inline-flex overflow-visible">
                  <PulseRing />
                  <Link href="#waitlist" className="relative z-[1] gradient-btn cta-sheen rounded-full px-5 py-3 text-sm font-semibold text-white">
                    Join the waitlist
                  </Link>
                </span>
                <Link href="#how-it-works" className="rounded-full border border-white/55 bg-white/12 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/20 active:scale-[0.97]">
                  See how it works
                </Link>
              </div>
            </FadeInStaggerGroup>
          </article>

          {/* Right: Quran image */}
          <article className="hover-zoom-img relative min-h-[360px] overflow-hidden rounded-2xl border border-[#0a6c4d] bg-[#083729] transition-transform duration-300 hover:-translate-y-1 md:min-h-[520px]">
            <Image
              src="https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&w=1400&q=80"
              alt="Open Quran ready for learning"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#004a36]/70 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 z-10 flex items-center gap-2.5 rounded-xl border border-white/20 bg-black/50 px-3.5 py-2 backdrop-blur-sm">
              <span lang="ar" className="arabic text-sm font-bold leading-none text-emerald-300">اقرأ</span>
              <span className="h-3 w-px shrink-0 rounded-full bg-white/30" aria-hidden />
              <span className="text-xs font-semibold leading-none text-white/90">Start reading today</span>
            </div>
          </article>
        </div>
      </AnimatedSection>

      {/* ── Trust bar ────────────────────────────────────── */}
      <AnimatedSection className="px-6 pt-8 md:px-16 md:pt-10">
        <div className="mx-auto w-full max-w-6xl rounded-xl border border-[#d8e0eb] bg-white px-3 py-5 shadow-[0_10px_26px_rgba(13,27,42,0.06)]">
          <div className="grid grid-cols-5 text-center text-xs font-semibold text-[#0d1b2a]">
            {[
              {
                icon: <span lang="ar" className="arabic text-lg font-bold text-[#05966a]">ا</span>,
                label: "28 Arabic letters",
                delay: "0s",
              },
              {
                icon: <span lang="ar" className="arabic text-base font-bold text-[#05966a]">بسم</span>,
                label: "6,236 Ayahs",
                delay: "0.3s",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-[#05966a]" aria-hidden>
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                ),
                label: "5 min a day",
                delay: "0.6s",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-amber-500" aria-hidden>
                    <path d="M12 2L4.09 12.26 11 12l-3 10 9.91-10.26L11 12l2-10z" fill="currentColor" />
                  </svg>
                ),
                label: "AI feedback",
                delay: "0.9s",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-[#05966a]" aria-hidden>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ),
                label: "Always free",
                delay: "1.2s",
              },
            ].map(({ icon, label, delay }) => (
              <div key={label} className="flex flex-col items-center gap-1.5">
                <div className="icon-bounce flex h-7 w-7 items-center justify-center" style={{ animationDelay: delay }}>
                  {icon}
                </div>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ── Free. Fun & Effective ─────────────────────────── */}
      <AnimatedSection className="bg-[#f3f3f0] px-6 py-16 md:px-16 md:py-24">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2">
          <SlidingReveal direction="left" className="flex items-center">
            <div>
              <h2 className="section-title font-semibold text-[#161616]">Free. Fun & Effective</h2>
              <p className="mt-3 max-w-sm text-sm text-[#424242]">
                Learning with Ustad is engaging, structured, and built to help you truly memorize the Quran.
              </p>
            </div>
          </SlidingReveal>
          <SlidingReveal direction="right" className="premium-card card-glow hover-zoom-img overflow-hidden rounded-2xl shadow-sm">
            <div className="relative h-64">
              <Image src="https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=1200&q=80" alt="Quran pages for learning" fill className="object-cover" />
            </div>
          </SlidingReveal>
        </div>
      </AnimatedSection>

      {/* ── Gamified — image LEFT ─────────────────────────── */}
      <AnimatedSection className="bg-[#eaeae6] px-6 py-16 md:px-16 md:py-24">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2">
          <SlidingReveal direction="left" className="premium-card card-glow hover-zoom-img overflow-hidden rounded-2xl shadow-sm">
            <div className="relative h-64">
              <Image src="https://images.unsplash.com/photo-1629273229664-11fabc0becc0?auto=format&fit=crop&w=1200&q=80" alt="Students learning Quran" fill className="object-cover" />
            </div>
          </SlidingReveal>
          <SlidingReveal direction="right" className="flex items-center">
            <div>
              <h2 className="section-title font-semibold text-[#161616]">Gamified backed by structured learning</h2>
              <p className="mt-3 max-w-sm text-sm text-[#424242]">
                Daily streaks, XP points, levels, and leaderboards make learning a habit. Friendly reminders keep you on track.
              </p>
            </div>
          </SlidingReveal>
        </div>
      </AnimatedSection>

      {/* ── Stay motivated — image RIGHT ─────────────────── */}
      <AnimatedSection className="bg-[#f3f3f0] px-6 py-16 md:px-16 md:py-24">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2">
          <SlidingReveal direction="left" className="flex items-center">
            <div>
              <h2 className="section-title font-semibold text-[#161616]">Stay motivated</h2>
              <p className="mt-3 max-w-sm text-sm text-[#424242]">
                Ustad rewards your consistency with daily streaks, achievement badges, and level-based milestones.
                We combine Islamic education with modern UX to keep the learning experience focused and joyful.
              </p>
            </div>
          </SlidingReveal>
          <SlidingReveal direction="right" className="premium-card card-glow hover-zoom-img overflow-hidden rounded-2xl shadow-sm">
            <div className="relative h-64">
              <Image src="https://images.unsplash.com/photo-1553755088-ef1973c7b4a1?auto=format&fit=crop&w=1200&q=80" alt="Kaaba and Masjid al-Haram" fill className="object-cover" />
            </div>
          </SlidingReveal>
        </div>
      </AnimatedSection>

      {/* ── AI-powered — image LEFT ───────────────────────── */}
      <AnimatedSection className="bg-[#eaeae6] px-6 py-16 md:px-16 md:py-24">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2">
          <SlidingReveal direction="left" className="premium-card card-glow hover-zoom-img overflow-hidden rounded-2xl shadow-sm">
            <div className="relative h-64">
              <Image src="https://images.unsplash.com/photo-1624862300786-fcdbd20ba0c3?auto=format&fit=crop&w=1200&q=80" alt="Quran and prayer beads for focused study" fill className="object-cover" />
            </div>
          </SlidingReveal>
          <SlidingReveal direction="right" className="flex items-center">
            <div>
              <h2 className="section-title font-semibold text-[#161616]">AI-powered learning</h2>
              <p className="mt-3 max-w-sm text-sm text-[#424242]">
                Our AI tutor listens to your recitation and highlights exactly where you need improvement. Get
                pronunciation corrections in real time so you retain each ayah with confidence.
              </p>
            </div>
          </SlidingReveal>
        </div>
      </AnimatedSection>

      {/* ── Tagline bridge ───────────────────────────────── */}
      <AnimatedSection className="bg-[#f3f3f0] px-6 pb-10 text-center md:px-16">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#5a5a5a]">Personalized learning</p>
        <h3 className="mt-2 text-2xl font-semibold text-[#151515] md:text-3xl">Memorise anytime, anywhere</h3>
      </AnimatedSection>

      {/* ── Waitlist ─────────────────────────────────────── */}
      <AnimatedSection id="waitlist" className="relative overflow-hidden bg-[#0D3D26] px-6 py-20 text-center md:px-16">
        {/* Islamic stars */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <IslamicStar className="absolute right-12 top-10 h-28 w-28 text-white/10 spin-slow" />
          <IslamicStar className="absolute left-10 bottom-10 h-20 w-20 text-white/10 spin-slow [animation-direction:reverse]" />
          <IslamicStar className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 text-white/5 spin-slow [animation-delay:3s]" />
          <IslamicStar className="absolute right-1/4 bottom-8 h-16 w-16 text-yellow-300/15 spin-slow [animation-delay:6s]" />
          <IslamicStar className="absolute left-1/4 top-8 h-14 w-14 text-emerald-300/15 spin-slow [animation-delay:9s]" />
          {arabicAlphabets.slice(0, 14).map((letter, i) => (
            <span
              key={letter}
              aria-hidden
              lang="ar"
              className="arabic pointer-events-none absolute select-none text-xl font-bold text-white/[0.07]"
              style={{
                left: `${(i * 7.3 + 3) % 95}%`,
                top: `${((i * 13.7 + 8) % 80) + 10}%`,
                transform: `rotate(${i % 2 === 0 ? i * 8 : -(i * 8)}deg)`,
              }}
            >
              {letter}
            </span>
          ))}
        </div>
        <FloatingBlob className="pointer-events-none absolute -left-10 top-0 h-48 w-48 blur-3xl opacity-30" variant="mint" />
        <FloatingBlob className="pointer-events-none absolute -right-10 bottom-0 h-40 w-40 blur-3xl opacity-25 [animation-delay:2s]" variant="gold" />

        <div className="relative z-10 mx-auto w-full max-w-xl">
          <h2 className="text-4xl font-black text-white">Join the early waitlist</h2>
          <p className="mt-4 text-sm leading-relaxed text-white/75">
            Be first to access Ustad at launch and help shape the future of Quran learning.
            Limited early access spots available.
          </p>
          <WaitlistForm />
        </div>
      </AnimatedSection>

      {/* ── How it works ─────────────────────────────────── */}
      <AnimatedSection id="how-it-works" className="bg-[#f3f3f0] px-6 py-20 md:px-16 md:py-24">
        <div className="mx-auto w-full max-w-6xl">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-[#4d4d4d]">Step by step</p>
          <h2 className="mt-2 text-center text-4xl font-semibold text-[#161616] md:text-5xl">How Ustad works</h2>
          <p className="mt-2 text-center text-sm text-[#4d4d4d]">Three simple steps to start memorizing Quran today</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {steps.map((step, i) => (
              <article
                key={step.title}
                className="card-glow pop-in group relative flex min-h-[320px] flex-col overflow-hidden rounded-2xl border border-[#d2d2d2] shadow-sm"
                style={{ animationDelay: `${i * 110}ms` }}
              >
                <Image src={step.image} alt={step.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/20" />
                <div className="relative z-10 flex h-full flex-col p-6">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md border border-white/60 bg-white/15 text-sm font-bold text-white backdrop-blur-sm">
                    {i + 1}
                  </div>
                  <div className="mt-auto">
                    <h3 className="text-xl font-semibold leading-snug text-white">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/80">{step.copy}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <LandingFeatureTabs />

      {/* ── Coming soon ───────────────────────────────────── */}
      <AnimatedSection id="coming-soon" className="bg-[#f3f3f0] px-6 py-20 md:px-16 md:py-24">
        <div className="mx-auto w-full max-w-6xl">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-[#4d4d4d]">On the roadmap</p>
          <h2 className="mt-2 text-center text-4xl font-semibold text-[#161616] md:text-5xl">Coming soon</h2>
          <p className="mt-2 text-center text-sm text-[#4d4d4d]">Features launching next to deepen your learning journey</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {comingSoon.map((feature, i) => (
              <article
                key={feature.title}
                className="card-glow pop-in group relative flex min-h-[260px] flex-col justify-end overflow-hidden rounded-2xl border border-[#d3d8dd] p-5 md:min-h-[360px]"
                style={{ animationDelay: `${i * 110}ms` }}
              >
                <Image src={feature.image} alt={feature.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/48 to-black/10 transition-opacity group-hover:opacity-95" />
                <div className="pointer-events-none absolute -right-8 -top-8 opacity-10">
                  <IslamicStar className="h-28 w-28 text-white spin-slow" />
                </div>
                <div className="relative z-10">
                  <span className="inline-block rounded-full border border-white/30 bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm">
                    {feature.label}
                  </span>
                  <h3 className="mt-2.5 text-xl font-semibold leading-snug text-white">{feature.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-white/72">{feature.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ── Bottom CTA ────────────────────────────────────── */}
      <AnimatedSection className="bg-[#f3f3f0] px-6 pb-20 md:px-16 md:pb-24">
        <div className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-3xl bg-[#004a36] p-10 text-center text-white shadow-[0_20px_60px_rgba(0,74,54,0.35)]">
          <IslamicPatternBg />
          <FloatingBlob className="right-0 top-0 h-52 w-52 -translate-y-10 translate-x-10" variant="mint" />
          <FloatingBlob className="bottom-0 left-0 h-44 w-44 translate-y-8 -translate-x-8 [animation-delay:1.2s]" variant="gold" />
          <div aria-hidden className="beam-sweep pointer-events-none absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-white/8 to-transparent [animation-delay:1s]" />
          <div className="relative z-10">
            <IslamicStar className="mx-auto mb-4 h-10 w-10 text-white/30" />
            <h2 className="text-4xl font-semibold md:text-5xl">Begin memorizing Quran today</h2>
            <p className="mt-3 text-sm text-white/75">
              Thousands are waiting to transform how they learn. Don&apos;t miss your chance to join them.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link href="#waitlist" className="hover-grow rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#004a36] shadow-sm active:scale-[0.97]">
                Join the waitlist
              </Link>
              <Link href="#how-it-works" className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 active:scale-[0.97]">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
