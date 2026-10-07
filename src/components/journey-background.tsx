import Image from "next/image";
import cloudsImg from "@/assets/clouds.png";
import planetImg from "@/assets/planet.png";
import starImg from "@/assets/star.png";

const STAR_COUNT = 65;

const stars = Array.from({ length: STAR_COUNT }, (_, i) => {
  const sizeRoll = i % 9;
  const size = sizeRoll === 0 ? 30 : sizeRoll <= 2 ? 20 : sizeRoll <= 5 ? 13 : 8;
  return {
    left: `${(i * 13.7 + i * i * 0.37 + 3) % 96}%`,
    top: `${(i * 23.1 + i * i * 0.19 + 4) % 100}%`,
    size,
    delay: `${(i % 6) * 0.5}s`,
    opacity: sizeRoll === 0 ? 1 : sizeRoll <= 2 ? 0.85 : i % 3 === 0 ? 0.75 : 0.4,
  };
});

// duration/delay vary per cloud so they drift at different paces instead of
// moving in lockstep — same drift the Lumo valley scene's sky clouds use.
const clouds = [
  { left: "2%", top: "14%", width: 240, opacity: 0.26, duration: 115, delay: -10 },
  { left: "74%", top: "8%", width: 280, opacity: 0.24, duration: 140, delay: -70 },
  { left: "8%", top: "40%", width: 220, opacity: 0.22, duration: 100, delay: -40 },
  { left: "78%", top: "34%", width: 260, opacity: 0.24, duration: 130, delay: -95 },
  { left: "6%", top: "64%", width: 230, opacity: 0.2, duration: 120, delay: -20 },
  { left: "76%", top: "60%", width: 250, opacity: 0.22, duration: 105, delay: -60 },
  { left: "45%", top: "84%", width: 270, opacity: 0.2, duration: 135, delay: -5 },
];

export function JourneyBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {clouds.map((cloud, i) => {
        const width = `clamp(${Math.round(cloud.width * 0.4)}px, 32vw, ${cloud.width}px)`;
        return (
          <div
            key={i}
            className="journey-cloud absolute overflow-hidden rounded-full blur-[2px]"
            style={
              {
                left: cloud.left,
                top: cloud.top,
                width,
                height: `calc(${width} * 0.5)`,
                opacity: cloud.opacity,
                mixBlendMode: "screen",
                "--cloud-duration": `${cloud.duration}s`,
                "--cloud-delay": `${cloud.delay}s`,
              } as React.CSSProperties
            }
          >
            <Image src={cloudsImg} alt="" fill className="scale-150 object-cover" style={{ objectPosition: "30% 60%" }} />
          </div>
        );
      })}
      {stars.map((star, i) => (
        <Image
          key={i}
          src={starImg}
          alt=""
          width={star.size}
          height={star.size}
          className="icon-bounce absolute"
          style={{ left: star.left, top: star.top, width: star.size, height: star.size, opacity: star.opacity, animationDelay: star.delay }}
        />
      ))}
      {/* The valley scene below (lumo-valley.tsx) keeps the actual moon — this
          is the roadmap's own sky, swapped to a planet per the asset drop. */}
      <Image
        src={planetImg}
        alt=""
        width={120}
        height={120}
        className="absolute right-6 top-6 h-20 w-20 drop-shadow-[0_0_28px_rgba(180,130,230,0.45)] sm:right-10 sm:top-8 sm:h-28 sm:w-28 md:right-16"
      />
    </div>
  );
}
