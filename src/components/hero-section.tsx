import Image from "next/image";
import Link from "next/link";
import bell from "@/assets/circles/bell.svg";
import bell2 from "@/assets/circles/bell2.svg";
import bell3 from "@/assets/circles/bell3.svg";
import ellipseBlob from "@/assets/circles/Ellipse (1).svg";
import ellipseRing from "@/assets/circles/Ellipse (2).svg";
import ellipseRingBottom from "@/assets/circles/Ellipse(2) bott.svg";
import { AppMockupCard } from "@/components/app-mockup-card";
import playstore from "@/assets/circles/playstore.svg";
import { Mascot } from "@/components/mascot";
import { siteConfig } from "@/lib/site";

const MASCOT_SIZE = 260;
const BADGE_RING = 80; // % radius of the anchor box the badges sit on — mascot art fills ~85-100% of the box, so this must clear 100%

function AiUstadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden className="shrink-0">
      <rect width="16" height="16" rx="5" fill="#2fd88f" />
      <path d="M8 3.1 9.05 6.55 12.4 7.6 9.05 8.65 8 12.1 6.95 8.65 3.6 7.6 6.95 6.55 8 3.1Z" fill="#06251c" />
    </svg>
  );
}

const floatingBadges = [
  { key: "xp", icon: "⭐", title: "+50 XP", subtitle: "Earned today", angle: 165 },
  { key: "ai", icon: <AiUstadIcon />, title: "Your AI Ustad", subtitle: null, angle: 35 },
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
            We&apos;re building the smartest way to memorize Quran. AI recitation feedback, daily streaks, and
            lessons that take just 5 minutes a day.
          </p>
          {/* Figma "Landing Page (3)": a single row of two buttons — the black Play
              store badge and a solid green iOS waitlist button with a hard bottom
              edge. The helper line that used to sit above each button is gone. */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <a
              href={siteConfig.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download UstadApp on Google Play"
              className="inline-flex h-14 w-[13rem] items-center justify-center gap-3 rounded-[10px] border border-[#42A46E] bg-black transition-transform active:translate-y-[2px]"
            >
              <Image src={playstore} alt="" aria-hidden className="h-7 w-7 shrink-0" />
              <span className="flex flex-col text-left leading-none">
                <span className="text-[11px] font-medium text-white/80">Download on</span>
                <span className="mt-1 text-base font-bold text-white">Google Play</span>
              </span>
            </a>
            <Link
              href="#waitlist"
              className="inline-flex h-14 w-[13rem] items-center justify-center rounded-[10px] bg-[#047A56] text-base font-bold text-white shadow-[0_5px_0_#006949] transition-colors hover:bg-[#05966A] active:translate-y-[3px] active:shadow-[0_2px_0_#006949]"
            >
              Join Waitlist for iOS
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
                  {typeof badge.icon === "string" ? (
                    <span aria-hidden className="text-base">{badge.icon}</span>
                  ) : (
                    badge.icon
                  )}
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
                  {typeof badge.icon === "string" ? (
                    <span aria-hidden className="text-base">{badge.icon}</span>
                  ) : (
                    badge.icon
                  )}
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
