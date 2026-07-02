import Image from "next/image";
import cloudsImg from "@/assets/clouds.png";
import moonImg from "@/assets/moon1.png";
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

const clouds = [
  { left: "2%", top: "14%", width: 240, opacity: 0.26 },
  { left: "74%", top: "8%", width: 280, opacity: 0.24 },
  { left: "8%", top: "40%", width: 220, opacity: 0.22 },
  { left: "78%", top: "34%", width: 260, opacity: 0.24 },
  { left: "6%", top: "64%", width: 230, opacity: 0.2 },
  { left: "76%", top: "60%", width: 250, opacity: 0.22 },
  { left: "45%", top: "84%", width: 270, opacity: 0.2 },
];

export function JourneyBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {clouds.map((cloud, i) => {
        const width = `clamp(${Math.round(cloud.width * 0.4)}px, 32vw, ${cloud.width}px)`;
        return (
          <div
            key={i}
            className="absolute overflow-hidden rounded-full blur-[2px]"
            style={{ left: cloud.left, top: cloud.top, width, height: `calc(${width} * 0.5)`, opacity: cloud.opacity, mixBlendMode: "screen" }}
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
      <Image
        src={moonImg}
        alt=""
        width={120}
        height={120}
        className="absolute right-6 top-6 h-20 w-20 drop-shadow-[0_0_28px_rgba(255,255,255,0.4)] sm:right-10 sm:top-8 sm:h-28 sm:w-28 md:right-16"
      />
    </div>
  );
}
