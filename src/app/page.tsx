import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import LandingFeatureTabs from "@/components/landing-feature-tabs";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "UstadhApp Landing Page",
  description: "A conversion-focused landing page for UstadhApp.",
  path: "/",
});

const steps = [
  {
    title: "Choose your Surah & start your journey",
    copy: "Pick the Surah you want to learn and begin a guided path with bite-sized levels.",
    image:
      "https://images.unsplash.com/photo-1487546331507-fcf8a5d27ab3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Learn through smart levels",
    copy: "Complete fun interactive levels with ayah memorization and word pronunciation practice.",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Revise, recite & master",
    copy: "Get smart revision prompts and build long-term memorization confidence.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  },
];

const comingSoon = [
  {
    title: "Surah storytelling for deeper understanding",
    label: "Feature one",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Qari certification for every Juz completed",
    label: "Feature two",
    image:
      "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "AI correction with visual guidance in real time",
    label: "Feature three",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=80",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="section-animate px-6 pt-8 md:px-16 md:pt-12">
        <div className="mx-auto grid w-full max-w-6xl gap-6 overflow-hidden rounded-3xl bg-[#004a36] p-5 text-white md:grid-cols-2 md:p-8">
          <article className="isolate rounded-2xl border border-[#0a6c4d] bg-[#004a36] p-6 shadow-[0_12px_30px_rgba(0,0,0,0.2)] hover-lift">
            <h1 className="fade-in-stagger text-4xl font-extrabold leading-tight text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)] md:text-6xl">
              The fun, smart, and effective way to memorize Quran.
            </h1>
            <p
              className="fade-in-stagger mt-4 max-w-xl text-sm text-[#e8fff7] [text-shadow:0_1px_2px_rgba(0,0,0,0.2)]"
              style={{ animationDelay: "90ms" }}
            >
              Learn Quran step by step with AI recitation feedback, beginner lessons, XP rewards, streaks, and smart revision.
              Built for children and adults learning at any level.
            </p>
            <div className="fade-in-stagger mt-5 flex flex-wrap gap-3" style={{ animationDelay: "170ms" }}>
              <Link href="#waitlist" className="gradient-btn cta-sheen rounded-full px-5 py-3 text-sm font-semibold text-white">
                Join Waiting List
              </Link>
              <Link
                href="#how-it-works"
                className="rounded-full border border-white/55 bg-white/12 px-5 py-3 text-sm font-semibold text-white"
              >
                See How It Works
              </Link>
            </div>
          </article>
          <article className="premium-card hover-zoom-img relative min-h-[360px] overflow-hidden rounded-2xl border border-[#5a79ff] bg-[#083729] md:min-h-[520px]">
            <Image
              src="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1400&q=80"
              alt="Students learning together"
              fill
              className="object-cover"
              priority
            />
          </article>
        </div>
      </section>

      <section className="section-animate px-6 md:px-16">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-5 rounded-xl border border-[#d8e0eb] bg-white px-3 py-4 text-center text-xs font-semibold text-[#0d1b2a] shadow-[0_10px_26px_rgba(13,27,42,0.06)]">
          <span>Arabic</span>
          <span>Urdu</span>
          <span>English</span>
          <span>Fast progress</span>
          <span>Join thousands</span>
        </div>
      </section>

      <section className="section-animate bg-[#f3f3f0] px-6 py-16 md:px-16 md:py-24">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2">
          <article className="flex items-center">
            <div>
              <h2 className="section-title font-semibold text-[#161616]">Free. Fun & Effective</h2>
              <p className="mt-3 max-w-sm text-sm text-[#424242]">
                Learning with UstadhApp is engaging, structured, and built to help you truly memorize the Quran.
              </p>
            </div>
          </article>
          <article className="premium-card hover-zoom-img rounded-2xl bg-gradient-to-br from-[#d9e3ef] to-[#c9d5de] p-3 shadow-sm">
            <div className="h-64 rounded-xl bg-white/50 ring-1 ring-white/50" />
          </article>
        </div>
      </section>

      <section className="section-animate bg-[#f3f3f0] px-6 py-16 md:px-16 md:py-24">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2">
          <article className="premium-card hover-zoom-img rounded-2xl bg-gradient-to-br from-[#d9e3ef] to-[#c9d5de] p-3 shadow-sm md:order-1">
            <div className="relative h-64 overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80"
                alt="Gamified learning on UstadhApp"
                fill
                className="object-cover"
              />
            </div>
          </article>
          <article className="flex items-center md:order-2">
            <div>
              <h2 className="section-title font-semibold text-[#161616]">Gamified backed by structured learning</h2>
              <p className="mt-3 max-w-sm text-sm text-[#424242]">
                Daily streaks, XP points, levels, and leaderboards make learning a habit. Friendly reminders keep you on track.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="section-animate bg-[#e4e4e4] px-6 py-16 md:px-16 md:py-24">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2">
          <article className="flex items-center">
            <div>
              <h2 className="section-title font-semibold text-[#161616]">Stay motivated</h2>
              <p className="mt-3 max-w-sm text-sm text-[#424242]">
                UstadhApp rewards your consistency with daily streaks, achievement badges, and level-based milestones.
                We combine Islamic education with modern UX to keep the learning experience focused and joyful.
              </p>
            </div>
          </article>
          <article className="premium-card hover-zoom-img rounded-2xl bg-gradient-to-br from-[#d9e3ef] to-[#c9d5de] p-3 shadow-sm">
            <div className="relative h-64 overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?auto=format&fit=crop&w=1200&q=80"
                alt="Motivated learner using UstadhApp"
                fill
                className="object-cover"
              />
            </div>
          </article>
        </div>
      </section>

      <section className="section-animate bg-[#f3f3f0] px-6 py-16 md:px-16 md:py-24">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2">
          <article className="premium-card hover-zoom-img rounded-2xl bg-gradient-to-br from-[#d9e3ef] to-[#c9d5de] p-3 shadow-sm md:order-1">
            <div className="relative h-64 overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
                alt="AI-powered learning assistance"
                fill
                className="object-cover"
              />
            </div>
          </article>
          <article className="flex items-center md:order-2">
            <div>
              <h2 className="section-title font-semibold text-[#161616]">AI-powered learning</h2>
              <p className="mt-3 max-w-sm text-sm text-[#424242]">
                Our AI tutor listens to your recitation and highlights exactly where you need improvement. Get
                pronunciation corrections in real time so you retain each ayah with confidence.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="section-animate bg-[#f3f3f0] px-6 pb-10 text-center md:px-16">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#5a5a5a]">Personalized learning</p>
        <h3 className="mt-2 text-2xl font-semibold text-[#151515] md:text-3xl">Memorise anytime anywhere</h3>
      </section>

      <section id="waitlist" className="section-animate bg-[#0D3D26] px-6 py-20 text-center md:px-16">
        <div className="mx-auto w-full max-w-xl">
          <h2 className="text-4xl font-black text-white">Join the early waiting list</h2>
          <p className="mt-4 text-sm leading-relaxed text-white/75">
            Be first to access UstadhApp at launch and help shape the future of Quran learning.
            Limited early access spots available.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full max-w-xs rounded-lg bg-white px-4 py-3 text-sm text-[#0d1b2a] outline-none ring-2 ring-transparent focus:ring-[#05966A]"
            />
            <Link
              href="#waitlist"
              className="gradient-btn cta-sheen rounded-lg bg-[#05966A] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#047857]"
            >
              Reserve my spot
            </Link>
          </div>
          <p className="mt-4 text-xs text-white/50">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </section>

      <section id="how-it-works" className="section-animate bg-[#f3f3f0] px-6 py-20 md:px-16 md:py-24">
        <div className="mx-auto w-full max-w-6xl">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-[#4d4d4d]">Step two</p>
          <h2 className="mt-2 text-center text-5xl font-semibold text-[#161616]">How UstadhApp works</h2>
          <p className="mt-2 text-center text-sm text-[#4d4d4d]">Three simple steps to start memorizing Quran today</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {steps.map((step, i) => (
              <article
                key={step.title}
                className="premium-card card-animate hover-zoom-img relative flex min-h-[320px] flex-col rounded-2xl border border-[#d2d2d2] bg-white p-6 text-left shadow-sm"
                style={{ animationDelay: `${i * 90}ms` }}
              >
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/35" />
                <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-md border border-white/70 bg-black/25 text-sm font-bold text-white">
                  {i + 1}
                </div>
                <h3 className="text-3xl font-semibold leading-tight text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/90">{step.copy}</p>
                <p className="interactive-link mt-auto pt-6 text-xs font-semibold text-white">{`step ${i + 1} >`}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <LandingFeatureTabs />

      <section id="coming-soon" className="section-animate bg-[#f3f3f0] px-6 py-20 md:px-16 md:py-24">
        <div className="mx-auto w-full max-w-6xl">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-[#4d4d4d]">Coming</p>
          <h2 className="mt-2 text-center text-5xl font-semibold text-[#161616]">Coming soon</h2>
          <p className="mt-2 text-center text-sm text-[#4d4d4d]">More features launching soon to enhance your learning journey</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {comingSoon.map((feature) => (
              <article
                key={feature.title}
                className="premium-card group hover-zoom-img relative flex min-h-[360px] flex-col justify-end overflow-hidden rounded-2xl border border-[#d3d8dd] bg-gradient-to-br from-[#f7f8fa] to-[#eceff3] p-5 text-left"
              >
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/45 to-black/20 transition-opacity group-hover:opacity-90" />
                <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-white/20 blur-2xl transition-transform group-hover:scale-125" />
                <p className="text-xs font-semibold text-white/80">{feature.label}</p>
                <h3 className="mt-2 text-4xl font-semibold leading-tight text-white">{feature.title}</h3>
                <p className="mt-3 text-xs text-white/90">
                  Learn the meaning and context behind every Surah through engaging narratives.
                </p>
                <p className="interactive-link mt-4 text-xs font-semibold text-white">Explore {">"}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-animate bg-[#f3f3f0] px-6 pb-20 md:px-16 md:pb-24">
        <div className="mx-auto w-full max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-[#5a5a5a] to-[#7a7a7a] p-10 text-center text-white">
          <h2 className="text-5xl font-semibold">Begin memorizing Quran today</h2>
          <p className="mt-2 text-sm text-white/80">
            Thousands are waiting to transform how they learn. Don&apos;t miss your chance to join them.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="#waitlist" className="premium-card hover-grow rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#1f1f1f]">
              Join the waiting list
            </Link>
            <Link href="#how-it-works" className="rounded-full border border-white/50 px-5 py-3 text-sm font-semibold text-white">
              Learn more
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
