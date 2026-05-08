"use client";

import Image from "next/image";
import { useState } from "react";

const tabs = [
  {
    id: "font",
    label: "choose Font",
    label2: "Motivation",
    heading: "Start from Arabic letters and symbols",
    body: "Master Arabic letters, symbols, and complete words at your own pace",
    imageClass: "from-[#d7dee8] to-[#c5d0dd]",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "surah",
    label: "Choose Surah",
    label2: "Surah Learning",
    heading: "Pick your Surah and start your journey",
    body: "Choose from Juz Amma or any Surah in the Quran with bite-sized ayah groups.",
    imageClass: "from-[#d8ecd8] to-[#bfd9bf]",
    image:
      "https://images.unsplash.com/photo-1474898856510-884a2b2b6d89?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "repetition",
    label: "Custom repetition",
    label2: "Retention",
    heading: "Spaced repetition built around you",
    body: "UstadhApp schedules revision at the right time so memorization stays strong.",
    imageClass: "from-[#e4d9ef] to-[#d2c5e4]",
    image:
      "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "alphabets",
    label: "Arabic Alphabets",
    label2: "Foundation",
    heading: "Learn every letter the right way",
    body: "All 28 Arabic letters with forms and pronunciation for absolute beginners.",
    imageClass: "from-[#f0e0d2] to-[#e7d0bc]",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "symbols",
    label: "Symbols",
    label2: "Tajweed",
    heading: "Understand Quranic symbols and signs",
    body: "Learn tajweed symbols and waqf signs to recite with confidence.",
    imageClass: "from-[#d8e6e7] to-[#c1d7d9]",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "duas",
    label: "Dua & supplications",
    label2: "Daily Practice",
    heading: "Master essential daily duas",
    body: "Morning, evening, and prayer duas with audio and translation support.",
    imageClass: "from-[#e7e2d6] to-[#d8d2c1]",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=80",
  },
];

export default function LandingFeatureTabs() {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <section id="feature-tabs" className="section-animate bg-[#f3f3f0] px-6 py-20 md:px-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-[#4d4d4d]">Beginner</p>
        <h2 className="mt-2 text-center text-5xl font-semibold leading-tight text-[#161616]">
          Everything you need to learn and memorize Quran
        </h2>
        <p className="mt-2 text-center text-sm text-[#4d4d4d]">Start with the fundamentals and build your foundation</p>

        <div className="mt-8 grid grid-cols-3 gap-0 rounded-t-2xl border border-[#d2d2d2] text-center text-sm font-semibold md:grid-cols-6">
          {tabs.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActive(index)}
              className={`border-r border-[#d2d2d2] px-3 py-4 transition-all duration-300 last:border-r-0 ${
                index === active
                  ? "bg-[#eaeaea] text-[#111] shadow-inner"
                  : "bg-white text-[#333] hover:bg-[#f4f4f4] hover:text-[#05966a]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="tab-panel-animate grid gap-8 rounded-b-2xl border border-t-0 border-[#d2d2d2] bg-[#f3f3f3] p-6 md:grid-cols-2">
          <div key={tab.id} className={`premium-card subtle-grid hover-grow hover-zoom-img relative h-80 overflow-hidden rounded-2xl bg-gradient-to-br ${tab.imageClass}`}>
            <Image
              src={tab.image}
              alt={tab.heading}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10" />
            <div className="relative grid h-full place-items-end p-5">
              <div className="rounded-xl border border-white/45 bg-black/35 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
                {tab.label}
              </div>
            </div>
          </div>
          <article key={`${tab.id}-content`} className="tab-panel-animate flex items-center text-left">
            <div>
              <p className="text-xs font-semibold text-[#4d4d4d]">{tab.label2}</p>
              <h3 className="mt-2 text-5xl font-semibold leading-tight text-[#161616]">{tab.heading}</h3>
              <p className="mt-2 text-sm text-[#3d3d3d]">{tab.body}</p>
              <div className="mt-4 flex items-center gap-3">
                <button className="premium-card rounded-lg border border-[#2a2a2a] bg-white px-4 py-2 text-sm font-semibold">
                  Explore
                </button>
                <button className="interactive-link text-sm font-semibold text-[#1a1a1a]">Explore {">"}</button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
