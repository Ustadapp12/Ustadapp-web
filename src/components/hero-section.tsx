import Image from "next/image";
import Link from "next/link";
import bell from "@/assets/circles/bell.svg";
import bell2 from "@/assets/circles/bell2.svg";
import bell3 from "@/assets/circles/bell3.svg";
import ellipseBlob from "@/assets/circles/Ellipse (1).svg";
import ellipseRing from "@/assets/circles/Ellipse (2).svg";
import ellipseRingBottom from "@/assets/circles/Ellipse(2) bott.svg";
import { PulseRing } from "@/components/animations";
import { AppMockupCard } from "@/components/app-mockup-card";
import { Mascot } from "@/components/mascot";

const MASCOT_SIZE = 260;
const BADGE_RING = 80; // % radius of the anchor box the badges sit on — mascot art fills ~85-100% of the box, so this must clear 100%

const floatingBadges = [
  { key: "xp", icon: "⭐", title: "+50 XP", subtitle: "Earned today", angle: 165 },
  { key: "ai", icon: "☕", title: "Your AI Ustad", subtitle: null, angle: 35 },
  { key: "correct", icon: "✓", title: "Correct", subtitle: "AI feedback", angle: -12 },
].map((badge) => {
  const rad = (badge.angle * Math.PI) / 180;
  return {
    ...badge,
    left: 50 + BADGE_RING * Math.cos(rad),
    top: 50 - BADGE_RING * Math.sin(rad),
  };
});

export function HeroSection() {
  return (
    <section id="hero" className="relative px-6 pb-14 pt-8 md:px-16 md:pb-16 md:pt-10">
      <div aria-hidden className="grain pointer-events-none absolute inset-0" style={{ opacity: 0.12 }} />
      <Image src={bell} alt="" aria-hidden className="pointer-events-none absolute -right-16 top-0 h-[440px] w-[440px]" />
      <Image src={bell2} alt="" aria-hidden className="pointer-events-none absolute -left-20 top-10 h-80 w-80" />
      <Image src={bell3} alt="" aria-hidden className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72" />
      <Image src={ellipseBlob} alt="" aria-hidden className="pointer-events-none absolute -top-56 -left-56 h-[620px] w-[620px] opacity-70 blur-xl" />
      <div className="pointer-events-none absolute -bottom-16 right-0 w-72 opacity-50">
        <Image src={ellipseRing} alt="" aria-hidden className="h-auto w-full" />
        <Image src={ellipseRingBottom} alt="" aria-hidden className="h-auto w-full" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-start gap-12 lg:grid-cols-[1fr_auto]">
        {/* Left: copy */}
        <div className="text-center lg:max-w-sm lg:text-left xl:max-w-xl">
          <h1 className="text-4xl font-bold uppercase leading-[1.3] tracking-normal text-white sm:text-5xl md:text-[56px]">
            Fun and effective way to memorise Quran
          </h1>
          <p className="mx-auto mt-6 max-w-md text-base font-normal leading-[1.3] tracking-normal text-white/75 lg:mx-0">
            We&apos;re building the smartest way to memorize Quran: AI recitation feedback, daily streaks, and
            lessons that take just 5 minutes a day.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3 lg:justify-start">
            <span className="relative inline-flex overflow-visible">
              <PulseRing />
              <Link href="#waitlist" className="gradient-btn cta-sheen relative z-[1] rounded-full px-6 py-3 text-sm font-bold text-white">
                Get Early Access
              </Link>
            </span>
            <Link
              href="#journey"
              className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/20 active:scale-[0.97]"
            >
              See how it works
            </Link>
          </div>
        </div>

        {/* Right: mascot + floating badges + app mockup, grouped as one unit */}
        <div className="relative mx-auto flex w-full max-w-sm flex-col items-center lg:mx-0 lg:w-[24rem] lg:min-h-[600px]">
          <div>
            {/* Anchor box: mascot centered, badges computed around its ring */}
            <div className="relative mx-auto lg:absolute lg:left-1/2 lg:top-0 lg:z-20 lg:-translate-x-1/2" style={{ width: MASCOT_SIZE, height: MASCOT_SIZE }}>
              <Mascot size={MASCOT_SIZE} priority />

              {floatingBadges.map((badge) => (
                <div
                  key={badge.key}
                  className="glass-panel absolute z-20 hidden items-center gap-2 whitespace-nowrap rounded-2xl px-3.5 py-2.5 text-white lg:flex"
                  style={{ left: `${badge.left}%`, top: `${badge.top}%`, transform: "translate(-50%, -50%)" }}
                >
                  <span aria-hidden className="text-base">{badge.icon}</span>
                  <span className="text-left leading-tight">
                    <span className="block text-xs font-bold">{badge.title}</span>
                    {badge.subtitle ? <span className="block text-[10px] text-white/60">{badge.subtitle}</span> : null}
                  </span>
                </div>
              ))}
            </div>

            {/* Mobile: badges wrap in a simple row below the mascot */}
            <div className="mt-4 flex flex-wrap justify-center gap-2 lg:hidden">
              {floatingBadges.map((badge) => (
                <div key={badge.key} className="glass-panel flex items-center gap-2 rounded-2xl px-3.5 py-2.5 text-white">
                  <span aria-hidden className="text-base">{badge.icon}</span>
                  <span className="text-left leading-tight">
                    <span className="block text-xs font-bold">{badge.title}</span>
                    {badge.subtitle ? <span className="block text-[10px] text-white/60">{badge.subtitle}</span> : null}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 w-full lg:absolute lg:left-1/2 lg:top-[280px] lg:mt-0 lg:w-[22rem] lg:-translate-x-1/2">
              <AppMockupCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
