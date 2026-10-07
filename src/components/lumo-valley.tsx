"use client";

import { useEffect, useRef } from "react";
import type { StaticImageData } from "next/image";

import ayesha from "@/assets/lumo-scene/app/ayesha.png";
import fireBlank from "@/assets/lumo-scene/app/blank_fire.png";
import fireBlue from "@/assets/lumo-scene/app/blue_fire_30.png";
import lumoRead from "@/assets/lumo-scene/app/lumo_read.png";
import muhammad from "@/assets/lumo-scene/app/muhammad.png";
import fire30 from "@/assets/lumo-scene/app/orange_fire_30.png";
import nodeGreen from "@/assets/lumo-scene/app/recommended_special.png";
import heart from "@/assets/lumo-scene/app/redh.png";
import nodeStar from "@/assets/lumo-scene/app/special_done.png";
import frontCorrect from "@/assets/lumo-scene/phones/phone-correct-front1.png";
import frontRewards from "@/assets/lumo-scene/phones/phone-rewards-front1.png";
import screenCorrect from "@/assets/lumo-scene/phones/screen-correct.png";
import screenRewards from "@/assets/lumo-scene/phones/screen-rewards.png";
import birds from "@/assets/lumo-scene/scenery/birds.png";
import flowerBush from "@/assets/lumo-scene/scenery/glitch-flower-bush-1997990.png";
import clump from "@/assets/lumo-scene/scenery/grass-clump.png";
import grassTex from "@/assets/lumo-scene/scenery/grass.jpg";
import mountainsArt from "@/assets/lumo-scene/scenery/mountains_crop.png";
import palm from "@/assets/lumo-scene/scenery/tree1.png";
import cloud from "@/assets/clouds.png";
import lumoPlain from "@/assets/lumo_transparent.png";
import moonArt from "@/assets/moon1.png";
import siteStar from "@/assets/star.png";
import { siteConfig } from "@/lib/site";

import "./lumo-valley.css";

// Every image the scene builds itself out of. Keyed exactly as the approved
// prototype keyed them (artifact UxfDQSGNPMrYZdY7s9zNu2) so the placement
// numbers below still mean the same thing.
const A: Record<string, StaticImageData> = {
  lumoRead,
  heart,
  nodeStar,
  nodeGreen,
  palm,
  mountains: mountainsArt,
  birds,
  grassTex,
  clump,
  muhammad,
  ayesha,
  siteStar,
  moon: moonArt,
  flowerBush,
  fire30,
  fireBlank,
  fireBlue,
  lumoPlain,
  cloud,
};

// The two Play Store screenshots, each with its pop-out card as a separate
// layer. Both share the mockup's 1183x1586 canvas, so the card positions are
// percentages of the screen cutout (x 278, y 27, 627 x 1257).
const SCREENS = [
  {
    label: "Lesson complete, plus 40 XP",
    shot: screenRewards,
    fronts: [{ src: frontRewards, x: 10.725075528700906, y: 53.94144144144144, w: 81.41993957703929 }],
  },
  {
    label: "Correct answer, plus 2 XP",
    shot: screenCorrect,
    fronts: [{ src: frontCorrect, x: 13.293051359516618, y: 54.95495495495496, w: 75.83081570996978 }],
  },
];

// Floating rewards. x/y = centre inside the stage, w = clamp(min, vw, max);
// m = the phone-width override [x, y, w], or false to hide it there.
type Item = {
  k: string;
  x: string;
  y: string;
  w: [number, number, number];
  d: number;
  dur: number;
  dy: number;
  r: [number, number];
  label: string;
  act: string;
  m: [string, string, string] | false;
  front?: boolean;
};

const ITEMS: Item[] = [
  // 96px floor, not 74: below that the "Your recitation" label overflows the bubble
  { k: "wave", x: "11%", y: "12%", w: [96, 6.4, 104], d: 0.45, dur: 5.4, dy: -10, r: [-3, 2], label: "Recitation audio", act: "wiggle", m: false },
  { k: "lumoRead", x: "21%", y: "31%", w: [60, 7.2, 106], d: 0.6, dur: 4.8, dy: -12, r: [-4, 3], label: "Lumo reading the Quran", act: "wiggle", m: ["14%", "12%", "58px"] },
  { k: "nodeStar", x: "32%", y: "13%", w: [40, 4.4, 68], d: 0.55, dur: 4.1, dy: -10, r: [-10, 6], label: "Gold star lesson badge", act: "collect", m: ["37%", "5%", "38px"] },
  { k: "heart", x: "33%", y: "34%", w: [28, 2.9, 46], d: 0.7, dur: 3.2, dy: -10, r: [-10, 6], label: "Heart", act: "beat", m: false },
  { k: "nodeGreen", x: "8%", y: "79%", w: [38, 4, 62], d: 1, dur: 3.8, dy: -10, r: [8, -6], label: "Recommended lesson badge", act: "collect", m: ["22%", "33%", "34px"], front: true },
  { k: "flame", x: "68%", y: "14%", w: [58, 6.6, 100], d: 0.6, dur: 3.8, dy: -10, r: [5, -4], label: "Daily streak flame", act: "flare", m: ["64%", "6%", "50px"] },
  { k: "heart", x: "89%", y: "15%", w: [26, 2.7, 42], d: 0.5, dur: 3.6, dy: -9, r: [8, -6], label: "Heart", act: "beat", m: ["88%", "6%", "26px"] },
  { k: "nodeStar", x: "79%", y: "32%", w: [42, 4.6, 72], d: 0.8, dur: 4.4, dy: -12, r: [-8, 10], label: "Gold star lesson badge", act: "collect", m: ["89%", "32%", "38px"] },
  { k: "mic", x: "74%", y: "80%", w: [58, 6.4, 94], d: 0.9, dur: 4.6, dy: -9, r: [-3, 3], label: "Recite aloud", act: "beat", m: false, front: true },
];

// The front hill's silhouette, in a 1440 x 360 box. Decorations are placed by
// sampling this path, so they sit exactly on the grass line.
const FRONT_HILL =
  "M0,78 C160,64 260,104 340,160 C410,210 470,196 560,206 C620,212 640,330 720,330 C800,330 820,212 880,206 C970,196 1030,210 1100,160 C1180,104 1280,64 1440,78 L1440,360 L0,360 Z";
const BACK_HILLS = [
  "M0,18 C160,-2 330,38 430,128 C470,166 520,220 600,300 L600,360 L0,360 Z",
  "M1440,18 C1280,-2 1110,38 1010,128 C970,166 920,220 840,300 L840,360 L1440,360 Z",
];

const REACT_ANIM: Record<string, Keyframe[]> = {
  collect: [{ transform: "scale(1) rotateY(0)" }, { transform: "scale(1.25) rotateY(180deg)" }, { transform: "scale(1) rotateY(360deg)" }],
  beat: [{ transform: "scale(1)" }, { transform: "scale(1.22)" }, { transform: "scale(.94)" }, { transform: "scale(1.1)" }, { transform: "scale(1)" }],
  flare: [{ transform: "scale(1)" }, { transform: "scale(1.12, 1.3) translateY(-6%)" }, { transform: "scale(1)" }],
  wiggle: [{ transform: "rotate(0)" }, { transform: "rotate(8deg)" }, { transform: "rotate(-6deg)" }, { transform: "rotate(0)" }],
};

type LottieAnim = {
  play: () => void;
  pause: () => void;
  destroy: () => void;
  setSpeed: (s: number) => void;
  goToAndStop: (f: number, isFrame?: boolean) => void;
  addEventListener: (e: string, cb: () => void) => void;
  totalFrames: number;
};

export function LumoValley() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const q = <T extends Element>(sel: string) => root.querySelector(sel) as T;
    const img = (k: string, alt = "") =>
      `<img src="${A[k].src}" width="${A[k].width}" height="${A[k].height}" alt="${alt}" draggable="false">`;

    // everything that has to be torn down if React remounts this effect
    const timers: ReturnType<typeof setTimeout>[] = [];
    const observers: (IntersectionObserver | ResizeObserver)[] = [];
    const lotties: LottieAnim[] = [];
    let disposed = false;

    (q<HTMLImageElement>(".mountains")).src = A.mountains.src;

    // ---------- sky: the website's own star field, drifting clouds, birds ----------
    const sky = q<HTMLElement>(".sky-deco");
    // same sizes, opacities, layout formula and bounce as journey-background.tsx
    for (let i = 0; i < 65; i++) {
      const roll = i % 9;
      const size = roll === 0 ? 17 : roll <= 2 ? 12 : roll <= 5 ? 8 : 5;
      const s = document.createElement("img");
      s.className = "site-star";
      s.alt = "";
      s.src = A.siteStar.src;
      s.style.cssText =
        `left:${(i * 13.7 + i * i * 0.37 + 3) % 96}%;top:${((i * 23.1 + i * i * 0.19 + 4) % 100) * 0.5}%;` +
        `width:${size}px;height:${size}px;` +
        `opacity:${roll === 0 ? 1 : roll <= 2 ? 0.85 : i % 3 === 0 ? 0.75 : 0.4};` +
        `animation-delay:${(i % 6) * 0.5}s`;
      sky.appendChild(s);
    }
    ([[8, "34vw", 110, -20], [26, "24vw", 140, -85], [15, "18vw", 170, -40]] as const).forEach(([top, w, t, d]) => {
      const c = document.createElement("img");
      c.className = "cloud";
      c.alt = "";
      c.src = A.cloud.src;
      c.style.cssText = `top:${top}%;width:${w};--t:${t}s;--d:${d}s`;
      sky.appendChild(c);
    });
    const moon = document.createElement("img");
    moon.className = "moon";
    moon.alt = "";
    moon.src = A.moon.src;
    sky.appendChild(moon);
    const birdsEl = document.createElement("img");
    birdsEl.className = "birds";
    birdsEl.alt = "";
    birdsEl.src = A.birds.src;
    sky.appendChild(birdsEl);

    // ---------- hills: the app's grass texture, recoloured to the site's greens ----------
    const hills = q<HTMLElement>(".hills");
    const backCv = q<HTMLCanvasElement>(".back-hill");
    const frontCv = q<HTMLCanvasElement>(".front-hill");
    const grass = new Image();
    grass.src = A.grassTex.src;

    // sample the front hill's top edge so decorations sit exactly on it
    const svgNS = "http://www.w3.org/2000/svg";
    const probe = document.createElementNS(svgNS, "path");
    probe.setAttribute("d", FRONT_HILL);
    const probeSvg = document.createElementNS(svgNS, "svg");
    probeSvg.setAttribute("width", "0");
    probeSvg.setAttribute("height", "0");
    probeSvg.style.position = "absolute";
    probeSvg.appendChild(probe);
    document.body.appendChild(probeSvg);
    const edge: { x: number; y: number }[] = [];
    const plen = probe.getTotalLength();
    for (let s = 0; s < plen; s += 4) {
      const p = probe.getPointAtLength(s);
      if (p.y < 355 && p.x >= 0 && p.x <= 1440) edge.push({ x: p.x, y: p.y });
    }
    edge.sort((a, b) => a.x - b.x);
    probeSvg.remove();
    const edgeY = (x: number) => {
      let best = edge[0];
      for (const p of edge) if (Math.abs(p.x - x) < Math.abs(best.x - x)) best = p;
      return best.y;
    };

    type HillOpts = { tex: number; hue: string; deepen: string; fade: [number, string][]; lip?: string };
    function paintHill(cv: HTMLCanvasElement, paths: string[], opts: HillOpts) {
      const r = hills.getBoundingClientRect();
      if (!r.width || !r.height) return;
      const dpr = Math.min(devicePixelRatio || 1, 2);
      cv.width = Math.round(r.width * dpr);
      cv.height = Math.round(r.height * dpr);
      const ctx = cv.getContext("2d");
      if (!ctx) return;
      const W = cv.width;
      const H = cv.height;
      const m = new DOMMatrix().scale(W / 1440, H / 360);
      const shape = new Path2D();
      paths.forEach((d) => shape.addPath(new Path2D(d), m));
      ctx.save();
      ctx.clip(shape);
      const pat = ctx.createPattern(grass, "repeat");
      if (!pat) return;
      pat.setTransform(new DOMMatrix().scale(dpr * opts.tex));
      ctx.fillStyle = pat;
      ctx.fillRect(0, 0, W, H);
      ctx.globalCompositeOperation = "color"; // keep the texture's light, take the site's hue
      ctx.fillStyle = opts.hue;
      ctx.fillRect(0, 0, W, H);
      ctx.globalCompositeOperation = "multiply";
      ctx.fillStyle = opts.deepen;
      ctx.fillRect(0, 0, W, H);
      ctx.globalCompositeOperation = "source-over";
      const g = ctx.createLinearGradient(0, 0, 0, H); // fade into the next section
      opts.fade.forEach(([o, c]) => g.addColorStop(o, c));
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);
      ctx.restore();
      if (opts.lip) {
        // Used to clip this stroke out of the x:575-865 valley floor (where the
        // phone stands) so the highlight wouldn't run behind it. But the ridge
        // dips down through that span, so the stroke was getting cut off
        // mid-line at each clip boundary — two short vertical stroke-ends
        // right beside the phone. Drawing it continuously instead: the part
        // that falls behind the phone is simply covered by it (this canvas
        // sits underneath), same result without the hard cutoff.
        const top = new Path2D();
        top.addPath(new Path2D(FRONT_HILL.split(" L1440,360")[0]), m);
        ctx.save();
        ctx.strokeStyle = opts.lip;
        ctx.lineWidth = 2.2 * dpr;
        ctx.stroke(top);
        ctx.restore();
      }
    }
    function paintAll() {
      paintHill(backCv, BACK_HILLS, {
        tex: 0.42,
        hue: "#05966A",
        deepen: "rgba(4, 107, 76, .85)",
        // pushed later and lighter — this hill was going nearly opaque navy
        // well before its own bottom edge, which is right where FinalCta
        // starts navy too, so the two stacked into one hard dark band
        fade: [
          [0, "rgba(15,27,42,.15)"],
          [0.85, "rgba(15,27,42,.25)"],
          [1, "rgba(15,27,42,.45)"],
        ],
      });
      paintHill(frontCv, [FRONT_HILL], {
        tex: 0.55,
        hue: "#0FB989",
        deepen: "rgba(5, 150, 106, .55)",
        // same fix on the front hill, which was the bigger offender: solid
        // opaque #0F1B2A by 72% left a wide flat-navy strip along its own
        // bottom before FinalCta's navy even starts. Stays vividly green
        // until 95% now, with only a light vignette at the very edge —
        // never gets close to full navy.
        fade: [
          [0, "rgba(15,27,42,0)"],
          [0.6, "rgba(15,27,42,.05)"],
          [0.95, "rgba(15,27,42,.15)"],
          [1, "rgba(15,27,42,.4)"],
        ],
        lip: "rgba(167, 243, 208, .55)",
      });
    }
    grass.decode().then(paintAll).catch(() => grass.addEventListener("load", paintAll));
    let rt = 0;
    const ro = new ResizeObserver(() => {
      cancelAnimationFrame(rt);
      rt = requestAnimationFrame(() => grass.complete && paintAll());
    });
    ro.observe(hills);
    observers.push(ro);

    // ---------- things standing on the hill line ----------
    const edgeLayer = q<HTMLElement>(".edge-layer");
    function place(layer: HTMLElement, x: number, html: string, cls: string, w: string, extra = "", mx: number | null = null) {
      const el = document.createElement("span");
      el.className = "on-edge " + cls;
      el.style.setProperty("--l", (x / 1440) * 100 + "%");
      el.style.setProperty("--t", (edgeY(x) / 360) * 100 + "%");
      if (mx !== null) {
        el.style.setProperty("--ml", (mx / 1440) * 100 + "%");
        el.style.setProperty("--mt", (edgeY(mx) / 360) * 100 + "%");
      }
      el.style.width = w;
      if (extra) el.style.cssText += extra;
      el.innerHTML = html;
      layer.appendChild(el);
      return el;
    }
    // palms framing the scene, kept inside the frame
    place(edgeLayer, 125, img("palm"), "palm", "clamp(92px, 11vw, 170px)", "transform:translate(-50%,-96%)", 150);
    place(edgeLayer, 1325, img("palm"), "palm r m-hide", "clamp(86px, 10vw, 156px)", "transform:translate(-50%,-96%)");
    // two Ustads from the lessons, standing on the hills
    place(edgeLayer, 395, img("muhammad"), "person m-hide", "clamp(28px, 3vw, 46px)", "transform:translate(-50%,-94%)");
    place(edgeLayer, 1060, img("ayesha"), "person m-hide", "clamp(26px, 2.8vw, 44px)", "transform:translate(-50%,-94%)");
    // painted grass clumps along the whole edge, skipping the valley floor
    let gi = 0;
    for (let x = 6; x < 1440; x += 46 + ((gi * 37) % 30)) {
      gi++;
      if (x > 585 && x < 855) continue;
      const scale = 0.55 + ((gi * 53) % 45) / 100;
      const el = place(
        edgeLayer,
        x,
        img("clump"),
        "clump" + (gi % 2 ? " flip" : "") + (gi % 3 === 0 ? " m-hide" : ""),
        `calc(clamp(36px, 4.4vw, 70px) * ${scale.toFixed(2)})`,
        "transform:translate(-50%,-80%)",
      );
      const ci = el.querySelector("img") as HTMLImageElement;
      ci.style.setProperty("--t", 3.4 + (gi % 4) * 0.6 + "s");
      ci.style.setProperty("--d", -gi * 0.41 + "s");
    }
    place(edgeLayer, 470, img("flowerBush"), "flower-bush m-hide", "clamp(56px, 5.4vw, 86px)", "transform:translate(-50%,-80%)");

    // ---------- floating rewards ----------
    const inner = q<HTMLElement>(".stage-inner");
    const phone = q<HTMLElement>(".phone");
    const nodes: HTMLElement[] = [];
    const lottieSlots: { el: HTMLElement; name: string; speed: number; owner: HTMLElement }[] = [];

    ITEMS.forEach((it, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.setAttribute("aria-label", it.label);
      b.className = "item" + (it.m === false ? " m-hide" : "") + (it.front ? " front" : "");
      b.dataset.act = it.act;
      b.style.setProperty("--x", it.x);
      b.style.setProperty("--y", it.y);
      b.style.setProperty("--w", `clamp(${it.w[0]}px, ${it.w[1]}vw, ${it.w[2]}px)`);
      if (Array.isArray(it.m)) {
        b.style.setProperty("--mx", it.m[0]);
        b.style.setProperty("--my", it.m[1]);
        b.style.setProperty("--mw", it.m[2]);
      }
      const bobStyle = `--dur:${it.dur}s;--dy:${it.dy}px;--ra:${it.r[0]}deg;--rb:${it.r[1]}deg;--del:${(-(i * 0.73) % it.dur).toFixed(2)}s`;
      let art = "";
      if (A[it.k]) art = img(it.k);
      else if (it.k === "flame" || it.k === "mic") art = `<span class="lottie"></span>`;
      else if (it.k === "wave") art = `<span class="bubble"><small>Your recitation</small><span class="lottie"></span></span>`;
      b.innerHTML = `<span class="enter"><span class="par"><span class="bob" style="${bobStyle}"><span class="art">${art}</span></span></span></span>`;
      inner.appendChild(b);
      const holder = b.querySelector(".lottie") as HTMLElement | null;
      if (holder) {
        lottieSlots.push({
          el: holder,
          name: it.k === "flame" ? "allday" : it.k === "mic" ? "listen" : "wave",
          speed: it.k === "wave" ? 1.15 : 1,
          owner: b,
        });
      }
      nodes.push(b);
    });

    // ---------- the phone: three real UstadApp screens ----------
    const scr = q<HTMLElement>(".scr");
    const frontsEl = q<HTMLElement>(".fronts");
    const live = q<HTMLElement>(".phone-live");
    type Screen = { shot: HTMLElement; fronts: HTMLElement[]; label: string; streak?: boolean };
    const screens: Screen[] = [];
    SCREENS.forEach((ph) => {
      const shot = document.createElement("div");
      shot.className = "shot";
      shot.innerHTML = `<img src="${ph.shot.src}" alt="" draggable="false">`;
      scr.appendChild(shot);
      const fronts = ph.fronts.map((f) => {
        const im = document.createElement("img");
        im.src = f.src.src;
        im.alt = "";
        im.draggable = false;
        im.style.cssText = `left:${f.x}%;top:${f.y}%;width:${f.w}%`;
        frontsEl.appendChild(im);
        return im as HTMLElement;
      });
      screens.push({ shot, fronts, label: ph.label });
    });

    // streak screen (light theme), rebuilt from the app's StreakScreen/StreakCalendar
    const streak = document.createElement("div");
    streak.className = "shot";
    // a realistic month: orange = practiced, blue = frozen (missed, streak saved), blank = missed
    const days: string[] = [];
    const first = new Date(2026, 8, 1).getDay();
    const blue = new Set([10, 11, 21, 22]);
    const missed = new Set([17]);
    for (let i = 0; i < first; i++) days.push(`<span class="st-day"></span>`);
    for (let d = 1; d <= 30; d++) {
      const icon = blue.has(d) ? A.fireBlue.src : missed.has(d) ? A.fireBlank.src : A.fire30.src;
      days.push(`<span class="st-day"><img src="${icon}" alt=""><b>${d}</b></span>`);
    }
    streak.innerHTML = `<div class="streak-app">
      <div class="st-status"><span>9:41</span><i></i></div>
      <div class="st-header"><span class="st-circle">&#x2715;</span><span class="st-title">Streak</span><span class="st-circle">?</span></div>
      <div class="st-scroll">
        <div class="st-lumo"><img class="st-lumo-img" src="${A.lumoPlain.src}" alt=""></div>
        <div class="st-hero">
          <div><span class="st-num">7</span><div class="st-label">day streak!</div></div>
          <div class="st-flame"></div>
        </div>
        <p class="st-sub">MashaAllah! 7 days in a row. You&rsquo;ve kept your streak alive.</p>
        <div class="st-cal">
          <h4>Practice Calendar</h4>
          <div class="st-month"><span class="st-nav">&#x2039;</span><span>September 2026</span><span class="st-nav off">&#x203A;</span></div>
          <div class="st-grid">${["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((w) => `<span class="st-wd">${w}</span>`).join("")}${days.join("")}</div>
        </div>
      </div>
    </div>`;
    scr.appendChild(streak);
    screens.push({ shot: streak, fronts: [], label: "Seven day streak", streak: true });

    const stApp = streak.querySelector(".streak-app") as HTMLElement;
    const fitStreak = () => {
      const w = scr.clientWidth;
      if (!w) return;
      stApp.style.transform = `scale(${w / 390})`;
      stApp.style.height = scr.clientHeight / (w / 390) + "px";
    };
    const sro = new ResizeObserver(fitStreak);
    sro.observe(scr);
    observers.push(sro);

    let stFlame: LottieAnim | null = null;
    function playStreak() {
      if (stFlame) stFlame.play();
      if (reduce) return;
      (streak.querySelector(".st-lumo-img") as HTMLElement).animate(
        [{ transform: "scale(0)" }, { transform: "scale(1.12)", offset: 0.7 }, { transform: "scale(1)" }],
        { duration: 650, delay: 300, easing: "cubic-bezier(.2,.8,.3,1)", fill: "backwards" },
      );
      (streak.querySelector(".st-hero") as HTMLElement).animate(
        [{ transform: "scale(.8)", opacity: 0.6 }, { transform: "scale(1)", opacity: 1 }],
        { duration: 600, easing: "cubic-bezier(.2,.9,.3,1.2)" },
      );
      timers.push(
        setTimeout(() => {
          (streak.querySelector(".st-num") as HTMLElement).animate(
            [{ transform: "scale(1)" }, { transform: "scale(1.35)" }, { transform: "scale(1)" }],
            { duration: 520, easing: "cubic-bezier(.3,.7,.3,1.3)" },
          );
        }, 1100),
      );
    }

    screens.forEach((sc, i) => {
      sc.shot.style.visibility = i === 0 ? "visible" : "hidden";
      sc.fronts.forEach((f) => (f.style.visibility = i === 0 ? "visible" : "hidden"));
    });
    let cur = 0;
    let cycleTimer: ReturnType<typeof setTimeout>;
    const hideScreen = (sc: Screen) => {
      sc.shot.style.visibility = "hidden";
      sc.fronts.forEach((f) => (f.style.visibility = "hidden"));
    };
    function showScreen(next: number) {
      if (next === cur) return;
      const out = screens[cur];
      const inn = screens[next];
      live.textContent = "UstadApp screen: " + inn.label;
      // Reset every screen first: a fill:forwards fade that never got its
      // onfinish would otherwise leave an old pop-out card hanging over the
      // phone, so only `out` and `inn` are ever allowed to be visible.
      screens.forEach((sc) => {
        [sc.shot, ...sc.fronts].forEach((el) => el.getAnimations().forEach((an) => an.cancel()));
        if (sc !== out && sc !== inn) hideScreen(sc);
      });
      inn.shot.style.visibility = "visible";
      inn.fronts.forEach((f) => (f.style.visibility = "visible"));
      const hideOut = () => {
        if (screens[cur] !== out) hideScreen(out);
      };
      if (inn.streak) playStreak();
      if (reduce) {
        hideOut();
        cur = next;
        return;
      }
      out.fronts.forEach((f) => {
        f.animate([{ transform: "none", opacity: 1 }, { transform: "translateY(16px) scale(.9)", opacity: 0 }], {
          duration: 260,
          easing: "ease-in",
          fill: "forwards",
        }).onfinish = () => {
          if (screens[cur] !== out) f.style.visibility = "hidden";
        };
      });
      // the screen itself slides like an app transition, clipped by the phone screen
      out.shot.animate([{ transform: "none" }, { transform: "translateX(-28%)", filter: "brightness(.7)" }], {
        duration: 520,
        delay: 120,
        easing: "cubic-bezier(.4,0,.2,1)",
        fill: "forwards",
      }).onfinish = hideOut;
      inn.shot.style.zIndex = "1";
      out.shot.style.zIndex = "0";
      inn.shot.animate([{ transform: "translateX(100%)" }, { transform: "none" }], {
        duration: 520,
        delay: 120,
        easing: "cubic-bezier(.4,0,.2,1)",
        fill: "backwards",
      });
      inn.fronts.forEach((f, k) =>
        f.animate(
          [
            { transform: "translateY(28px) scale(.72)", opacity: 0 },
            { opacity: 1, offset: 0.25 },
            { transform: "translateY(-6px) scale(1.05)", offset: 0.7 },
            { transform: "none", opacity: 1 },
          ],
          { duration: 720, delay: 560 + k * 160, easing: "cubic-bezier(.2,.8,.3,1)", fill: "backwards" },
        ),
      );
      cur = next;
    }
    function scheduleCycle() {
      clearTimeout(cycleTimer);
      // The streak screen is the cycle's natural destination (rewards ->
      // correct -> streak) — auto-advancing away from it after a few seconds
      // just reads as it popping up and then disappearing. Let it be the
      // resting state instead; a tap on the phone still cycles manually.
      if (screens[cur].streak) return;
      cycleTimer = setTimeout(() => {
        if (disposed) return;
        showScreen((cur + 1) % screens.length);
        scheduleCycle();
      }, reduce ? 6500 : 4200);
    }
    scheduleCycle();
    q<HTMLElement>(".phone-hit").addEventListener("click", () => {
      showScreen((cur + 1) % screens.length);
      scheduleCycle();
    });

    // ---------- entrance: rewards burst out of the phone, then settle ----------
    function burstIn() {
      if (reduce) return;
      const pr = (q<HTMLElement>(".iphone")).getBoundingClientRect();
      const ox = pr.left + pr.width / 2;
      const oy = pr.top + pr.height * 0.5;
      nodes.forEach((el, i) => {
        if (el.offsetParent === null) return;
        const r = el.getBoundingClientRect();
        const dx = ox - (r.left + r.width / 2);
        const dy = oy - (r.top + r.height / 2);
        (el.querySelector(".enter") as HTMLElement).animate(
          [
            { transform: `translate(${dx}px, ${dy}px) scale(.12) rotate(-35deg)`, opacity: 0 },
            { opacity: 1, offset: 0.22 },
            { transform: "translate(0,0) scale(1) rotate(0)", opacity: 1 },
          ],
          { duration: 1100, delay: 160 + i * 55, easing: "cubic-bezier(.18,.9,.32,1.18)", fill: "backwards" },
        );
      });
      phone.animate(
        [
          { transform: "translateX(-50%) translateY(18px) scale(.96)" },
          { transform: "translateX(-50%) translateY(-6px) scale(1.01)" },
          { transform: "translateX(-50%) translateY(0) scale(1)" },
        ],
        { duration: 700, easing: "cubic-bezier(.2,.8,.3,1.2)" },
      );
    }

    const stage = q<HTMLElement>(".stage");
    let played = false;
    const io = new IntersectionObserver(
      (es) => {
        if (!played && es.some((e) => e.isIntersecting)) {
          played = true;
          burstIn();
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(stage);
    observers.push(io);

    // ---------- lottie: starts loading as soon as this section mounts, not when
    // it scrolls into view — otherwise the first burst-in animation flies in
    // blank placeholders for the flame/mic/wave items, which then visibly pop to
    // life a moment later once lottie-web + the JSON finish fetching. Loading it
    // eagerly means it's almost always ready before the user actually scrolls
    // this far, at the cost of ~90KB fetched a little earlier than strictly needed.
    let lottieLib: typeof import("lottie-web").default | null = null;
    async function loadLotties() {
      const [lib, allday, listen, wave, streakJson] = await Promise.all([
        import("lottie-web"),
        import("@/assets/lumo-scene/lottie/allday.json"),
        import("@/assets/lumo-scene/lottie/listen.json"),
        import("@/assets/lumo-scene/lottie/wave.json"),
        import("@/assets/lumo-scene/lottie/streak.json"),
      ]);
      if (disposed) return;
      lottieLib = lib.default;
      const data: Record<string, object> = {
        allday: allday.default,
        listen: listen.default,
        wave: wave.default,
      };
      const mount = (container: HTMLElement, animationData: object, speed = 1) => {
        const anim = lottieLib!.loadAnimation({
          container,
          renderer: "svg",
          loop: true,
          autoplay: !reduce,
          animationData,
          rendererSettings: { preserveAspectRatio: "xMidYMid meet" },
        }) as unknown as LottieAnim;
        if (reduce) anim.addEventListener("DOMLoaded", () => anim.goToAndStop(Math.floor(anim.totalFrames * 0.55), true));
        if (speed !== 1) anim.setSpeed(speed);
        lotties.push(anim);
        return anim;
      };
      lottieSlots.forEach((slot) => {
        const anim = mount(slot.el, data[slot.name], slot.speed);
        (slot.owner as HTMLElement & { _anim?: LottieAnim })._anim = anim;
      });
      stFlame = lottieLib.loadAnimation({
        container: streak.querySelector(".st-flame") as HTMLElement,
        renderer: "svg",
        loop: true,
        autoplay: false,
        animationData: streakJson.default,
      }) as unknown as LottieAnim;
      lotties.push(stFlame);
      if (screens[cur].streak) stFlame.play();
    }
    loadLotties();

    // ---------- taps: reward badges sparkle on tap ----------
    function sparkle(el: HTMLElement, text: string) {
      const sr = stage.getBoundingClientRect();
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2 - sr.left;
      const cy = r.top + r.height / 2 - sr.top;
      if (!reduce)
        for (let i = 0; i < 10; i++) {
          const d = document.createElement("img");
          d.className = "burst";
          d.alt = "";
          d.src = A.siteStar.src;
          d.style.left = cx - 8 + "px";
          d.style.top = cy - 8 + "px";
          stage.appendChild(d);
          const ang = (i / 10) * Math.PI * 2;
          const dist = 44 + (i % 3) * 18;
          d.animate(
            [
              { transform: "translate(0,0) rotate(0)", opacity: 1 },
              { transform: `translate(${Math.cos(ang) * dist}px, ${Math.sin(ang) * dist}px) rotate(90deg) scale(.4)`, opacity: 0 },
            ],
            { duration: 700, easing: "cubic-bezier(.2,.8,.3,1)" },
          ).onfinish = () => d.remove();
        }
      if (text) {
        const p = document.createElement("span");
        p.className = "plus";
        p.textContent = text;
        p.style.left = cx + "px";
        p.style.top = cy + "px";
        stage.appendChild(p);
        p.animate(
          [
            { transform: "translate(-50%,-50%) scale(.6)", opacity: 0 },
            { transform: "translate(-50%,-120%) scale(1.1)", opacity: 1, offset: 0.3 },
            { transform: "translate(-50%,-260%)", opacity: 0 },
          ],
          { duration: 1000, easing: "ease-out" },
        ).onfinish = () => p.remove();
      }
    }
    inner.addEventListener("click", (e) => {
      const item = (e.target as HTMLElement).closest("button.item") as (HTMLElement & { _anim?: LottieAnim }) | null;
      if (!item) return;
      const act = item.dataset.act!;
      if (!reduce && REACT_ANIM[act])
        (item.querySelector(".art") as HTMLElement).animate(REACT_ANIM[act], {
          duration: act === "collect" ? 650 : 560,
          easing: "cubic-bezier(.3,.7,.3,1.2)",
        });
      if (item._anim) {
        item._anim.setSpeed(2.2);
        timers.push(setTimeout(() => item._anim?.setSpeed(1), 900));
      }
      if (act === "collect") sparkle(item, "+10 XP");
      else sparkle(item, "");
    });

    return () => {
      disposed = true;
      clearTimeout(cycleTimer);
      timers.forEach(clearTimeout);
      cancelAnimationFrame(rt);
      observers.forEach((o) => o.disconnect());
      lotties.forEach((an) => an.destroy());
      probeSvg.remove();
      // everything above was appended imperatively, so clear the containers the
      // effect filled and leave the JSX shell as React rendered it
      [sky, edgeLayer, inner, scr, frontsEl].forEach((el) => {
        el.innerHTML = "";
      });
      root.querySelectorAll(".burst, .plus").forEach((n) => n.remove());
    };
  }, []);

  return (
    <section ref={rootRef} id="lumo-valley" className="lumo-valley" aria-labelledby="lumo-valley-title">
      <div aria-hidden className="bell a" />
      <div aria-hidden className="bell b" />
      <div aria-hidden className="bell c" />
      <div aria-hidden className="grain pointer-events-none absolute inset-0 -z-10" style={{ opacity: 0.12 }} />
      <div aria-hidden className="sky-deco" />

      <div className="copy">
        <h2 id="lumo-valley-title">
          Memorize the Quran with <span className="hero-gradient-text">Lumo</span>
        </h2>
        <p className="lede">
          Five-minute lessons, AI feedback on your recitation, and a streak worth protecting. UstadApp is free on
          Android today.
        </p>
        <div className="cta-row">
          <span className="cta-wrap">
            <span className="pulse-ring" aria-hidden />
            <a
              className="cta-btn gradient-btn cta-sheen"
              href={siteConfig.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" aria-hidden>
                <path
                  fill="currentColor"
                  d="M4.2 2.4c-.3.3-.4.8-.4 1.3v16.6c0 .5.1 1 .4 1.3l9.3-9.6-9.3-9.6Zm10.7 8.2 2.7-2.8L6 1.2c-.4-.2-.8-.3-1.1-.2l10 9.6Zm0 2.8L5 23c.3.1.7 0 1.1-.2l11.6-6.6-2.8-2.8Zm4-4.4-3.1 3 3.1 3 2.9-1.7c.9-.5.9-2 0-2.6l-2.9-1.7Z"
                />
              </svg>
              Download on Google Play
            </a>
          </span>
          <p className="cta-note">Coming soon to iPhone</p>
        </div>
      </div>

      <div className="stage" aria-label="UstadApp screens on a phone, surrounded by the rewards you earn">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="mountains" alt="" aria-hidden />
        <div className="fog" aria-hidden />
        <div className="hills" aria-hidden>
          <canvas className="back-hill" />
          <canvas className="front-hill" />
          <div className="hill-layer edge-layer" />
        </div>

        <div className="stage-inner">
          <div className="phone">
            <div className="iphone" aria-hidden>
              <div className="scr">
                <span className="island" />
              </div>
            </div>
            <div className="fronts" aria-hidden />
            <button className="phone-hit" type="button" aria-label="Show the next app screen" suppressHydrationWarning />
            <p className="phone-live sr-only" aria-live="polite" />
          </div>
        </div>
      </div>
    </section>
  );
}
