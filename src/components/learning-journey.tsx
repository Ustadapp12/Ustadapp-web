import Image from "next/image";
import characterSelectLevel from "@/assets/1.png";
import characterEffectiveExercises from "@/assets/7.png";
import characterSmartRevision from "@/assets/3.png";
import characterRecitation from "@/assets/4.png";
import characterCorrection from "@/assets/6.png";
import iconStarsBars from "@/assets/PhotoshopExtension_Image_3.png";
import iconHeadGears from "@/assets/PhotoshopExtension_Image_4.png";
import iconBrain from "@/assets/PhotoshopExtension_Image_2.png";
import iconCheck from "@/assets/PhotoshopExtension_Image_1.png";
import { AnimatedSection } from "@/components/animations";
import { JourneyBackground } from "@/components/journey-background";

type Stop = {
  number: number;
  label: string;
  character: typeof characterSelectLevel;
  icon: typeof iconStarsBars | null;
  x: number;
  y: number;
  side: "left" | "right";
};

const stops: Stop[] = [
  { number: 1, label: "Select Level", character: characterSelectLevel, icon: iconStarsBars, x: 40, y: 10, side: "right" },
  { number: 2, label: "Effective Exercises", character: characterEffectiveExercises, icon: iconHeadGears, x: 60, y: 29, side: "left" },
  { number: 3, label: "Smart Revision", character: characterSmartRevision, icon: iconBrain, x: 40, y: 50, side: "right" },
  { number: 4, label: "Recitation", character: characterRecitation, icon: null, x: 60, y: 71, side: "left" },
  { number: 5, label: "Correction", character: characterCorrection, icon: iconCheck, x: 40, y: 90, side: "right" },
];

const ROCKET_POINT = { x: stops[0].x, y: 3 };
// Virtual point only — draws the path curving off the last node toward the trophy below, which
// renders in normal flow (centered) right under this container, never on the coordinate grid.
const PATH_END_POINT = { x: 50, y: 100 };

function buildCurvePath(points: { x: number; y: number }[]) {
  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const dy = curr.y - prev.y;
    d += ` C ${prev.x} ${prev.y + dy / 2}, ${curr.x} ${curr.y - dy / 2}, ${curr.x} ${curr.y}`;
  }
  return d;
}

const pathD = buildCurvePath([ROCKET_POINT, ...stops.map((s) => ({ x: s.x, y: s.y })), PATH_END_POINT]);

function StopContent({ stop }: { stop: Stop }) {
  return (
    <div className={`flex items-center gap-1.5 sm:gap-3 md:gap-5 ${stop.side === "left" ? "flex-row-reverse text-right" : "text-left"}`}>
      <div className="relative h-14 w-14 shrink-0 sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-36 lg:w-36">
        <Image src={stop.character} alt="" fill className="object-contain object-bottom drop-shadow-[0_14px_20px_rgba(0,0,0,0.5)]" />
      </div>
      <div className={`flex flex-col gap-1 sm:gap-2 ${stop.side === "left" ? "items-end" : "items-start"}`}>
        {stop.icon ? (
          <Image src={stop.icon} alt="" className="h-7 w-7 object-contain sm:h-11 sm:w-11 md:h-14 md:w-14" />
        ) : (
          <span aria-hidden className="text-2xl sm:text-4xl md:text-5xl">📖</span>
        )}
        <span className="text-xs font-bold text-[#2fd88f] sm:text-base md:text-lg">{stop.label}</span>
      </div>
    </div>
  );
}

export function LearningJourney() {
  return (
    <AnimatedSection id="journey" className="relative overflow-hidden bg-[#0F1B2A] px-6 py-14 md:px-10 md:py-20">
      <JourneyBackground />

      <div className="relative z-10 mx-auto w-full max-w-4xl">
        <h2 className="text-3xl font-black text-white md:text-4xl">
          Your Learning <span className="block text-[#2fd88f]">Journey</span>
        </h2>

        <div className="relative mt-10 min-h-[950px] overflow-hidden sm:min-h-[1050px] md:min-h-[1200px]">
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d={pathD} stroke="#F4C752" strokeWidth="0.5" strokeDasharray="2 1.6" strokeLinecap="round" fill="none" vectorEffect="non-scaling-stroke" />
          </svg>

          <div
            aria-hidden
            className="absolute z-10 text-4xl sm:text-5xl"
            style={{ left: `${ROCKET_POINT.x}%`, top: `${ROCKET_POINT.y}%`, transform: "translate(-50%, -60%)" }}
          >
            🚀
          </div>

          {stops.map((stop) => (
            <div key={stop.number} className="absolute" style={{ left: `${stop.x}%`, top: `${stop.y}%`, transform: "translate(-50%, -50%)" }}>
              <div
                className={`relative z-20 flex h-12 w-12 items-center justify-center rounded-full text-base font-bold text-white shadow-[0_0_0_4px_#0B1E33] sm:h-14 sm:w-14 ${
                  stop.number === stops.length ? "bg-[#C6A153]" : "bg-[#05966a]"
                }`}
              >
                {stop.number}
              </div>
              <div
                className="absolute top-1/2 z-10 w-max max-w-[15rem] -translate-y-1/2 sm:max-w-none"
                style={stop.side === "right" ? { left: "calc(100% + 1rem)" } : { right: "calc(100% + 1rem)" }}
              >
                <StopContent stop={stop} />
              </div>
            </div>
          ))}
        </div>

        <div className="relative z-10 -mt-6 flex flex-col items-center text-center">
          <span aria-hidden className="text-5xl">🏆</span>
          <h3 className="mt-3 text-2xl font-black text-white">Journey Complete</h3>
          <p className="mt-1 text-sm text-white/60">Become a Confident Quran Learner</p>
        </div>
      </div>
    </AnimatedSection>
  );
}
