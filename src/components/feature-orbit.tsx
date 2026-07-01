import Image from "next/image";
import Link from "next/link";
import trophyIcon from "@/assets/PhotoshopExtension_Image_7.png";
import robotIcon from "@/assets/PhotoshopExtension_Image_9.png";
import syncIcon from "@/assets/PhotoshopExtension_Image_10.png";
import chartIcon from "@/assets/PhotoshopExtension_Image_8.png";
import flameIcon from "@/assets/PhotoshopExtension_Image_5.png";
import dumbbellIcon from "@/assets/PhotoshopExtension_Image_6.png";
import { AnimatedSection, PulseRing } from "@/components/animations";
import { Mascot } from "@/components/mascot";

const orbitIcons = [
  { key: "achievements", src: trophyIcon, label: "Achievements", bg: "bg-[#C6A153]", position: "top-0 left-1/2 -translate-x-1/2" },
  { key: "sync", src: syncIcon, label: "Daily sync", bg: "bg-[#3E8E54]", position: "top-[18%] right-0" },
  { key: "streaks", src: flameIcon, label: "Streaks", bg: "bg-[#059669]", position: "bottom-[18%] right-0" },
  { key: "practice", src: dumbbellIcon, label: "Practice", bg: "bg-[#5C5C66]", position: "bottom-0 left-1/2 -translate-x-1/2" },
  { key: "progress", src: chartIcon, label: "Progress", bg: "bg-[#93A5C4]", position: "bottom-[18%] left-0" },
  { key: "ai-ustad", src: robotIcon, label: "AI Ustad", bg: "bg-[#C6A153]", position: "top-[18%] left-0" },
] as const;

export function FeatureOrbit() {
  return (
    <AnimatedSection id="features" className="relative overflow-hidden bg-[#0B1E33] px-6 py-14 text-center md:px-16 md:py-20">
      <div className="relative z-10 mx-auto w-full max-w-3xl">
        <h2 className="text-3xl font-black text-white md:text-4xl">
          Everything you need to <span className="text-[#2fd88f]">memorize Quran</span>
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-white/60">
          AI-powered tools that make memorization easier, smarter and fun.
        </p>

        {/* Desktop: mascot with orbiting icons */}
        <div className="relative mx-auto mt-16 hidden h-[440px] w-[440px] md:block lg:h-[480px] lg:w-[480px]">
          <div className="absolute inset-0 rounded-full border border-dashed border-white/15" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Mascot size={190} />
          </div>
          {orbitIcons.map((icon) => (
            <div key={icon.key} className={`absolute flex h-20 w-20 items-center justify-center rounded-full ring-4 ring-[#0B1E33] ${icon.bg} ${icon.position}`}>
              <Image src={icon.src} alt={icon.label} className="h-12 w-12 object-contain" />
            </div>
          ))}
        </div>

        {/* Mobile: mascot + icon grid */}
        <div className="mt-10 flex flex-col items-center gap-8 md:hidden">
          <Mascot size={160} />
          <div className="grid w-full grid-cols-3 gap-4">
            {orbitIcons.map((icon) => (
              <div key={icon.key} className="flex flex-col items-center gap-2">
                <div className={`flex h-16 w-16 items-center justify-center rounded-full ${icon.bg}`}>
                  <Image src={icon.src} alt={icon.label} className="h-9 w-9 object-contain" />
                </div>
                <span className="text-[11px] font-medium text-white/70">{icon.label}</span>
              </div>
            ))}
          </div>
        </div>

        <span className="relative mt-14 inline-flex overflow-visible">
          <PulseRing />
          <Link href="#waitlist" className="gradient-btn cta-sheen relative z-[1] rounded-full px-6 py-3 text-sm font-bold text-white">
            Get Early Access
          </Link>
        </span>
      </div>
    </AnimatedSection>
  );
}
