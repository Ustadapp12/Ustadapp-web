# USTAD — Complete Landing Page Build Document
> **Hand this entire file to Cursor.** It contains every section, layout, copy, component, data, token, and interaction needed to build the exact landing page shown in the wireframes. No guessing required.

---

## SECTION 0 — PROJECT SETUP

### Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS v3
- **Fonts:** `next/font/google` — Nunito + Amiri
- **Animations:** Framer Motion
- **Icons:** Lucide React

### Install commands
```bash
npx create-next-app@latest ustad --typescript --tailwind --eslint --app
cd ustad
npm install framer-motion lucide-react
```

### `tailwind.config.ts`
```ts
import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: '#05966A',
          dark:    '#047857',
          light:   '#D1FAE5',
          mint:    '#6EE7B7',
        },
        dark: {
          DEFAULT: '#0D1B2A',
          hero:    '#0D3D26',
        },
        surface: '#F5F5F0',
      },
      fontFamily: {
        display: ['var(--font-amiri)', 'serif'],
        body:    ['var(--font-nunito)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
```

### `app/layout.tsx`
```tsx
import { Nunito, Amiri } from 'next/font/google'
import './globals.css'

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400','600','700','800','900'],
  variable: '--font-nunito',
  display: 'swap',
})
const amiri = Amiri({
  subsets: ['arabic', 'latin'],
  weight: ['400', '700'],
  variable: '--font-amiri',
  display: 'swap',
})

export const metadata = {
  title: 'Ustad — Learn Quran Beautifully, Daily',
  description: 'The fun, smart, and effective way to memorize Quran. AI recitation feedback, XP rewards, streaks, and smart revision. Built for children and adults at any level.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${nunito.variable} ${amiri.variable}`}>
      <body className="font-body bg-white text-dark antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
```

### `app/globals.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html { scroll-behavior: smooth; }
}
```

### `app/page.tsx`
```tsx
import Navbar          from '@/components/sections/Navbar'
import Hero            from '@/components/sections/Hero'
import TrustBar        from '@/components/sections/TrustBar'
import FreeFun         from '@/components/sections/FreeFun'
import Gamified        from '@/components/sections/Gamified'
import StayMotivated   from '@/components/sections/StayMotivated'
import AIPowered       from '@/components/sections/AIPowered'
import PersonalisedCTA from '@/components/sections/PersonalisedCTA'
import WaitlistBanner  from '@/components/sections/WaitlistBanner'
import HowItWorks      from '@/components/sections/HowItWorks'
import FeatureTabs     from '@/components/sections/FeatureTabs'
import ComingSoon      from '@/components/sections/ComingSoon'
import FinalCTA        from '@/components/sections/FinalCTA'
import Footer          from '@/components/sections/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <FreeFun />
        <Gamified />
        <StayMotivated />
        <AIPowered />
        <PersonalisedCTA />
        <WaitlistBanner />
        <HowItWorks />
        <FeatureTabs />
        <ComingSoon />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
```

---

## SECTION 1 — NAVBAR
**File:** `components/sections/Navbar.tsx`

**Wireframe:** Top bar — Logo (script/cursive style left), Signup button (green pill, right), Hamburger menu icon (right of signup)

**Behaviour:**
- Fixed to top, `z-50`
- Background: `white` always (not transparent)
- Adds `shadow-sm` on scroll — use `useEffect` + `window.addEventListener('scroll', ...)`
- Mobile: hamburger opens a slide-down or overlay nav

**Layout:** `flex items-center justify-between px-6 md:px-12 py-4 bg-white border-b border-gray-100`

**Left — Logo:**
```tsx
<a href="/" className="font-display text-2xl font-bold text-dark italic">
  Ustad
</a>
// Font: Amiri (italic, bold) — script/cursive feel matching wireframe "Logo"
// Color: dark (#0D1B2A)
```

**Right — Actions:**
```tsx
<div className="flex items-center gap-3">
  <a href="#waitlist"
     className="bg-green text-white text-sm font-bold px-5 py-2 rounded-full hover:bg-green-dark transition-colors">
    Signup
  </a>
  {/* Hamburger icon — Lucide Menu icon */}
  <button className="text-dark hover:text-green transition-colors">
    <Menu size={22} />
  </button>
</div>
```

**Mobile menu (hidden by default):**
```tsx
// On hamburger click → show vertical link list:
// Features / How It Works / Pricing / About
// + Signup button at bottom
// Slide down from navbar with framer-motion (y: -20 → 0, opacity 0 → 1)
```

---

## SECTION 2 — HERO
**File:** `components/sections/Hero.tsx`

**Wireframe (Image 1, top):** Dark green background, large bold white headline left, photo right (woman studying/working), two CTA buttons below headline, full-width dark green section

**Background:** `bg-dark-hero` (`#0D3D26`) — dark forest green, full width

**Layout:** `grid grid-cols-1 md:grid-cols-2 gap-0 min-h-[520px]`

**Left side** — `flex flex-col justify-center px-8 md:px-16 py-16`
```tsx
// Headline — large, bold, white, multi-line
<h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
  The fun,<br />
  smart, and<br />
  effective way<br />
  to memorize<br />
  Quran.
</h1>

// Subheadline — small, white, lower opacity
<p className="text-sm md:text-base text-white/75 leading-relaxed max-w-sm mb-8">
  Learn Quran step by step with AI recitation feedback,
  beginner lessons, XP rewards, streaks, and smart revision.
  Built for children and adults learning at any level.
</p>

// Two CTA buttons — side by side
<div className="flex gap-3 flex-wrap">
  <a href="#waitlist"
     className="bg-green text-white text-sm font-bold px-5 py-2.5 rounded-full hover:bg-green-dark transition-colors">
    Join Waiting List
  </a>
  <a href="#how-it-works"
     className="bg-transparent border border-white/40 text-white text-sm font-bold px-5 py-2.5 rounded-full hover:bg-white/10 transition-colors">
    See How It Works
  </a>
</div>
```

**Right side** — photo, full height, no padding
```tsx
// Real photo: woman with curly hair, leaning over desk studying/writing
// Use next/image, object-cover, full height of section
<div className="relative w-full h-full min-h-[400px]">
  <Image
    src="/images/hero-photo.jpg"
    alt="Student memorizing Quran"
    fill
    className="object-cover object-center"
    priority
  />
</div>
// NOTE: Source a stock photo from Unsplash — search "woman studying notes desk"
// Suggested Unsplash: https://unsplash.com/s/photos/woman-studying
// Photo has warm, natural tones — woman with curly hair bent over papers
```

---

## SECTION 3 — TRUST BAR
**File:** `components/sections/TrustBar.tsx`

**Wireframe (Image 1, below hero):** Thin white bar with 5 text items separated by spacing — simple marquee/static row

**Layout:** `border-y border-gray-100 py-4 px-6 bg-white`

**Content:** `flex items-center justify-center gap-8 md:gap-16 flex-wrap`

```tsx
const items = ['Arabic', 'Urdu', 'English', 'Fast progress', 'Join thousands']

// Each item: text-sm font-semibold text-dark/70
// Separator between items: hidden on mobile, · dot or pipe on desktop
// Full row centered, no icons — plain text only (matches wireframe exactly)
```

---

## SECTION 4 — FREE, FUN & EFFECTIVE
**File:** `components/sections/FreeFun.tsx`

**Wireframe (Image 1, first content section):** White background, text LEFT, photo RIGHT (man at laptop, confident pose), large section with generous padding

**Layout:** `grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6 md:px-16 py-20 md:py-28 bg-white max-w-7xl mx-auto`

**Left — Text:**
```tsx
<div>
  <h2 className="text-3xl md:text-4xl font-black text-dark leading-tight mb-5">
    Free. Fun &amp; Effective
  </h2>
  <p className="text-sm md:text-base text-gray-500 leading-relaxed max-w-sm">
    Learning with UstadhApp is engaging, structured, and built to help
    you truly memorize the Quran — not just read it.
  </p>
</div>
```

**Right — Photo:**
```tsx
// Real photo: Black man with glasses pushed up on forehead, sitting at laptop
// Confident, relaxed pose. Natural indoor lighting.
// Unsplash search: "man laptop confident relaxed"
<div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
  <Image src="/images/free-fun.jpg" alt="Learner using UstadhApp" fill className="object-cover" />
</div>
```

---

## SECTION 5 — GAMIFIED BACKED BY STRUCTURED LEARNING
**File:** `components/sections/Gamified.tsx`

**Wireframe (Image 1, second content section):** White background, photo LEFT (woman on couch smiling, using tablet/phone), text RIGHT. Photo has rounded corners.

**Layout:** `grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6 md:px-16 py-20 md:py-28 bg-white max-w-7xl mx-auto`

**Left — Photo:**
```tsx
// Real photo: Woman with curly hair, sitting on a pink/beige couch
// Smiling, holding a tablet or phone, wearing green sweater
// Warm cozy indoor setting
// Unsplash search: "woman couch tablet smiling"
<div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden">
  <Image src="/images/gamified.jpg" alt="Learner enjoying UstadhApp" fill className="object-cover" />
</div>
```

**Right — Text:**
```tsx
<div>
  <h2 className="text-3xl md:text-4xl font-black text-dark leading-tight mb-5">
    Gamified backed by<br />structured learning
  </h2>
  <p className="text-sm md:text-base text-gray-500 leading-relaxed max-w-sm">
    Daily streaks, XP points, levels, and leaderboards make learning a
    habit. Friendly reminders keep you on track without pressure.
  </p>
</div>
```

---

## SECTION 6 — STAY MOTIVATED
**File:** `components/sections/StayMotivated.tsx`

**Wireframe (Image 2, first section):** Light grey background (`#F5F5F0`), text LEFT, photo RIGHT (man with headphones, leaning on wall outdoors), same alternating layout pattern

**Background:** `bg-surface` (`#F5F5F0`)

**Layout:** `grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6 md:px-16 py-20 md:py-28 max-w-7xl mx-auto`

**Left — Text:**
```tsx
<div>
  <h2 className="text-3xl md:text-4xl font-black text-dark leading-tight mb-5">
    Stay motivated
  </h2>
  <p className="text-sm md:text-base text-gray-500 leading-relaxed max-w-sm">
    UstadhApp was built by educators and technologists who believe
    Quran memorization should be accessible, engaging, and effective
    for everyone. We combine Islamic education with modern AI to
    create the learning experience Muslims deserve.
  </p>
</div>
```

**Right — Photo:**
```tsx
// Real photo: Young man with headphones around neck, leaning against brick wall
// Outdoor setting, casual style, thoughtful look
// Unsplash search: "man headphones wall outdoor"
<div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
  <Image src="/images/stay-motivated.jpg" alt="Motivated learner" fill className="object-cover" />
</div>
```

---

## SECTION 7 — AI-POWERED LEARNING
**File:** `components/sections/AIPowered.tsx`

**Wireframe (Image 2, second section):** White background, photo LEFT (two women at laptop outdoors/cafe), text RIGHT

**Layout:** `grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6 md:px-16 py-20 md:py-28 bg-white max-w-7xl mx-auto`

**Left — Photo:**
```tsx
// Real photo: Two women (one wearing hijab) sharing a laptop at an outdoor cafe
// Collaborative, bright, warm daylight setting
// Unsplash search: "two women laptop cafe outdoor"
<div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
  <Image src="/images/ai-learning.jpg" alt="AI-powered Quran learning" fill className="object-cover" />
</div>
```

**Right — Text:**
```tsx
<div>
  <h2 className="text-3xl md:text-4xl font-black text-dark leading-tight mb-5">
    AI-powered learning
  </h2>
  <p className="text-sm md:text-base text-gray-500 leading-relaxed max-w-sm">
    Our AI Ustad listens to your recitation and highlights exactly
    where you need improvement. Get pronunciation corrections in
    real time so you master each word with confidence.
  </p>
</div>
```

---

## SECTION 8 — PERSONALISED LEARNING MICRO-BANNER
**File:** `components/sections/PersonalisedCTA.tsx`

**Wireframe (Image 2, thin centered text block):** White background, very simple — small label above, larger headline. No photo. Centered. Minimal.

**Layout:** `text-center py-16 px-6 bg-white`

```tsx
<div className="max-w-md mx-auto">
  {/* Small label above */}
  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
    Personalised learning
  </p>
  {/* Main line */}
  <h2 className="text-2xl md:text-3xl font-black text-dark">
    Memorise anytime anywhere
  </h2>
</div>
```

---

## SECTION 9 — WAITLIST BANNER
**File:** `components/sections/WaitlistBanner.tsx`

**Wireframe (Image 2, dark green full-width section at bottom):** Dark green background (`#0D3D26`), centered headline, subtext, email input + button row, privacy note

**Background:** `bg-dark-hero` (`#0D3D26`)

**Layout:** `py-20 px-6 text-center`

```tsx
<section id="waitlist" className="bg-[#0D3D26] py-20 px-6 text-center">
  <div className="max-w-lg mx-auto">

    {/* Headline */}
    <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
      Join the early waiting list
    </h2>

    {/* Subtext */}
    <p className="text-sm text-white/70 leading-relaxed mb-8">
      Be first to access UstadhApp at launch and help shape the future of Quran learning.
      Limited early access spots available.
    </p>

    {/* Input + Button row */}
    <div className="flex flex-col sm:flex-row gap-3 justify-center">
      <input
        type="text"
        placeholder="Enter your name"
        className="flex-1 max-w-xs px-4 py-3 rounded-lg text-sm text-dark bg-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-green"
      />
      <button className="bg-green text-white text-sm font-bold px-6 py-3 rounded-lg hover:bg-green-dark transition-colors whitespace-nowrap">
        Reserve my spot
      </button>
    </div>

    {/* Privacy note */}
    <p className="text-xs text-white/40 mt-4">
      We respect your privacy. Unsubscribe at any time.
    </p>

  </div>
</section>
```

---

## SECTION 10 — HOW USTADHAPP WORKS
**File:** `components/sections/HowItWorks.tsx`

**Wireframe (Images 3 & 4, top section):** White background, small label "Step two" above headline. Three-column card layout. Cards have numbered steps, icon top-left, title, bullet list or description, "step N >" link at bottom. Third card has a photo instead of text content.

**Layout:**
```tsx
<section id="how-it-works" className="py-24 px-6 bg-white">
  <div className="max-w-6xl mx-auto">

    {/* Label above heading */}
    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest text-center mb-3">
      Step two
    </p>

    {/* Section headline */}
    <h2 className="text-3xl md:text-4xl font-black text-dark text-center mb-3">
      How UstadhApp works
    </h2>

    {/* Sub headline */}
    <p className="text-sm text-gray-400 text-center mb-14">
      Three simple steps to start memorizing Quran today
    </p>

    {/* Three-column cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <StepCard1 />
      <StepCard2 />
      <StepCard3 />
    </div>

  </div>
</section>
```

**Step Card 1 — "Choose your Surah & Start Your Journey":**
```tsx
// Card: bg-gray-50 rounded-2xl p-7 flex flex-col justify-between min-h-[320px] border border-gray-100

// Top:
//   Icon: small square icon (book icon) — Lucide BookOpen, size 20, in a gray square bg
//   Step number: none visible (step 1 implied)

// Content:
<h3 className="text-lg font-black text-dark mt-5 mb-3">
  Choose your Surah &amp; Start Your Journey
</h3>
<p className="text-sm text-gray-500 leading-relaxed">
  Pick the Surah you want to learn and begin a guided path with
  bite-sized levels designed for steady progress.
</p>

// Bottom link:
<a href="#" className="text-xs font-bold text-dark mt-6 flex items-center gap-1 hover:text-green transition-colors">
  step 1 <ChevronRight size={14} />
</a>
```

**Step Card 2 — "Learn Through Smart Levels":**
```tsx
// Card: bg-gray-50 rounded-2xl p-7 flex flex-col justify-between min-h-[320px] border border-gray-100

// Top icon: small circle icon (circle with question mark or similar)

<h3 className="text-lg font-black text-dark mt-5 mb-3">
  Learn Through Smart Levels
</h3>
<p className="text-sm text-gray-500 mb-3">
  Complete fun interactive levels including:
</p>
<ul className="text-sm text-gray-500 space-y-1 list-none">
  <li>Ayah memorization</li>
  <li>Word pronunciation practice</li>
  <li>Symbol &amp; tajweed questions</li>
  <li>Listening challenges</li>
  <li>Recall tests</li>
</ul>
<p className="text-xs text-gray-400 mt-4 italic">
  Just like a game, each level builds your confidence.
</p>

<a href="#" className="text-xs font-bold text-dark mt-4 flex items-center gap-1 hover:text-green transition-colors">
  step 2 <ChevronRight size={14} />
</a>
```

**Step Card 3 — "Revise, Recite & Master" (has photo background):**
```tsx
// Card: relative rounded-2xl overflow-hidden min-h-[320px]
// Background: photo of woman with curly hair smiling, sitting outside, holding phone
// Overlay: dark gradient from bottom
// Text overlaid at bottom-right corner

<div className="relative rounded-2xl overflow-hidden min-h-[320px]">
  <Image
    src="/images/step3-photo.jpg"
    alt="Revise and master"
    fill
    className="object-cover object-center"
  />
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

  {/* Content over image — bottom right */}
  <div className="absolute bottom-0 right-0 p-6 text-right">
    <p className="text-xs font-bold text-white/60 mb-1">step 3</p>
    <h3 className="text-lg font-black text-white mb-2">
      Revise, Recite &amp; Master
    </h3>
    <p className="text-xs text-white/80 leading-relaxed max-w-[200px] ml-auto">
      Unlock revision lessons between levels, recite using your mic, and get
      AI feedback to strengthen long-term memorization.
    </p>
    <a href="#" className="text-xs font-bold text-white mt-3 flex items-center gap-1 justify-end hover:text-green-mint transition-colors">
      Start <ChevronRight size={12} />
    </a>
  </div>
</div>

// Photo: woman with red/auburn curly hair, smiling, sitting outside with phone
// Unsplash search: "woman curly hair smiling phone outdoor"
```

---

## SECTION 11 — FEATURE TABS
**File:** `components/sections/FeatureTabs.tsx`

**Wireframe (Images 3 & 4, below How It Works):** White background, small label "Beginner", large centered headline, horizontal tab bar with 6 tabs, below tabs: split layout (photo left, text right)

**Tab bar:** Horizontal scrollable tabs. Active tab has a dark background pill/box. Inactive tabs are plain text.

**Layout:**
```tsx
<section className="py-24 px-6 bg-white">
  <div className="max-w-6xl mx-auto">

    {/* Label */}
    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest text-center mb-3">
      Beginner
    </p>

    {/* Headline */}
    <h2 className="text-3xl md:text-4xl font-black text-dark text-center mb-3">
      Everything you need to<br />learn and memorize Quran
    </h2>

    {/* Sub */}
    <p className="text-sm text-gray-400 text-center mb-10">
      Start with the fundamentals and build your foundation
    </p>

    {/* Tab bar */}
    <div className="flex gap-2 overflow-x-auto pb-2 mb-10 scrollbar-hide">
      {tabs.map((tab, i) => (
        <button
          key={tab.id}
          onClick={() => setActive(i)}
          className={`whitespace-nowrap px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
            active === i
              ? 'bg-dark text-white'
              : 'text-gray-500 hover:text-dark'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>

    {/* Tab content panel */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Left — Photo */}
      <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
        <Image src={tabs[active].image} alt={tabs[active].label} fill className="object-cover" />
      </div>

      {/* Right — Text */}
      <div>
        <p className="text-xs font-bold text-green uppercase tracking-widest mb-3">
          {tabs[active].label2}
        </p>
        <h3 className="text-2xl md:text-3xl font-black text-dark mb-4">
          {tabs[active].heading}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-6">
          {tabs[active].body}
        </p>
        <div className="flex gap-3">
          <a href="#" className="text-sm font-bold text-dark border border-gray-200 px-4 py-2 rounded-lg hover:border-green hover:text-green transition-colors">
            Explore
          </a>
          <a href="#" className="text-sm font-bold text-dark flex items-center gap-1 hover:text-green transition-colors">
            Explore <ChevronRight size={14} />
          </a>
        </div>
      </div>
    </div>

  </div>
</section>
```

**Tab data (`tabs` array):**
```tsx
const tabs = [
  {
    id: 'font',
    label: 'choose Font',
    label2: 'Motivation',
    heading: 'Start from Arabic letters and symbols',
    body: 'Master Arabic letters, symbols, and complete words at your own pace.',
    image: '/images/tab-arabic.jpg',
    // Photo: two people sitting on couch indoors, plants in background, warm light
    // Unsplash search: "two people sitting couch indoor plants"
  },
  {
    id: 'surah',
    label: 'Choose Surah',
    label2: 'Surah Learning',
    heading: 'Pick your Surah and start your journey',
    body: 'Choose from Juz Amma or any Surah in the Quran. Bite-sized ayah groups make memorisation manageable.',
    image: '/images/tab-surah.jpg',
  },
  {
    id: 'repetition',
    label: 'Custom repetition',
    label2: 'Retention',
    heading: 'Spaced repetition built around you',
    body: 'Ustad schedules revision at the exact right time — so you never forget what you have memorised.',
    image: '/images/tab-repetition.jpg',
  },
  {
    id: 'alphabets',
    label: 'Arabic Alphabets',
    label2: 'Foundation',
    heading: 'Learn every letter the right way',
    body: 'All 28 Arabic letters with their forms, harakat, and pronunciation — built for absolute beginners.',
    image: '/images/tab-alphabets.jpg',
  },
  {
    id: 'symbols',
    label: 'Symbols',
    label2: 'Tajweed',
    heading: 'Understand Quranic symbols and signs',
    body: 'Learn tajweed symbols, waqf signs, and pronunciation marks to recite Quran accurately.',
    image: '/images/tab-symbols.jpg',
  },
  {
    id: 'duas',
    label: 'Dua & supplications',
    label2: 'Daily Practice',
    heading: 'Master essential daily Duas',
    body: 'Morning, evening, meals, travel, and prayer Duas — all taught with audio, transliteration, and translation.',
    image: '/images/tab-duas.jpg',
  },
]
```

---

## SECTION 12 — COMING SOON
**File:** `components/sections/ComingSoon.tsx`

**Wireframe (Image 4, three dark cards with photos):** White background, small label "Coming", large headline "Coming soon", subtext, then 3 cards side by side. Each card: background photo, dark overlay, small category label top-left, large white headline bottom-left, small description, "Explore >" link at bottom.

**Layout:**
```tsx
<section className="py-24 px-6 bg-white">
  <div className="max-w-6xl mx-auto">

    {/* Label */}
    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest text-center mb-3">
      Coming
    </p>

    {/* Headline */}
    <h2 className="text-3xl md:text-4xl font-black text-dark text-center mb-3">
      Coming soon
    </h2>

    {/* Sub */}
    <p className="text-sm text-gray-400 text-center mb-12">
      More features launching soon to enhance your learning journey
    </p>

    {/* 3 cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {comingSoonItems.map(item => <ComingSoonCard key={item.id} {...item} />)}
    </div>

  </div>
</section>
```

**ComingSoonCard component:**
```tsx
// Card: relative rounded-2xl overflow-hidden min-h-[380px] cursor-pointer group
// Background: photo, fill, object-cover
// Overlay: absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent
// Content: absolute bottom-0 left-0 p-6

function ComingSoonCard({ category, heading, body, image, alt }) {
  return (
    <div className="relative rounded-2xl overflow-hidden min-h-[380px] group cursor-pointer">
      <Image src={image} alt={alt} fill className="object-cover object-center group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6">
        <p className="text-xs font-bold text-white/60 uppercase tracking-widest mb-2">{category}</p>
        <h3 className="text-xl font-black text-white leading-tight mb-2">{heading}</h3>
        <p className="text-xs text-white/75 leading-relaxed mb-4">{body}</p>
        <a href="#" className="text-xs font-bold text-white flex items-center gap-1 hover:text-green-mint transition-colors">
          Explore <ChevronRight size={12} />
        </a>
      </div>
    </div>
  )
}
```

**Coming Soon data:**
```tsx
const comingSoonItems = [
  {
    id: 'stories',
    category: 'Stories',
    heading: 'Surah storytelling for deeper understanding',
    body: 'Learn the meaning and context behind every Surah through engaging narratives.',
    image: '/images/coming-stories.jpg',
    alt: 'Surah storytelling',
    // Photo: woman reading, warm indoor setting
    // Unsplash search: "woman reading book warm light"
  },
  {
    id: 'certification',
    category: 'Certificates',
    heading: 'Qari certification for every Juz completed',
    body: 'Earn recognised certification as you complete each out of the Quran.',
    image: '/images/coming-certification.jpg',
    alt: 'Qari certification',
    // Photo: man studying at desk, books, academic setting
    // Unsplash search: "man studying books desk academic"
  },
  {
    id: 'ai-correction',
    category: 'Coaching',
    heading: 'AI correction with visual guidance in real time',
    body: 'See exactly where you need improvement with interactive visual feedback.',
    image: '/images/coming-ai.jpg',
    alt: 'AI correction feedback',
    // Photo: woman with hijab smiling, phone or tablet
    // Unsplash search: "woman hijab smiling phone"
  },
]
```

---

## SECTION 13 — FINAL CTA
**File:** `components/sections/FinalCTA.tsx`

**Wireframe (Image 4, dark full-width section before footer):** Dark background with a photo/texture behind it (mosque or Islamic architecture texture), centered text, two buttons

**Layout:**
```tsx
<section className="relative py-28 px-6 text-center overflow-hidden">

  {/* Background photo */}
  <Image
    src="/images/final-cta-bg.jpg"
    alt=""
    fill
    className="object-cover object-center"
  />
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-dark/75" />

  {/* Content */}
  <div className="relative z-10 max-w-xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4">
      Begin memorizing Quran<br />today
    </h2>
    <p className="text-sm text-white/70 mb-10">
      Thousands are waiting to discover how they learn. Don't miss your chance to join them.
    </p>
    <div className="flex gap-4 justify-center flex-wrap">
      <a href="#waitlist"
         className="bg-green text-white text-sm font-bold px-6 py-3 rounded-full hover:bg-green-dark transition-colors">
        Join the waiting list
      </a>
      <a href="#how-it-works"
         className="bg-transparent border border-white/40 text-white text-sm font-bold px-6 py-3 rounded-full hover:bg-white/10 transition-colors">
        Learn more
      </a>
    </div>
  </div>

</section>
// Background photo: mosque, Islamic architecture, or dark textured stone
// Unsplash search: "mosque architecture dark stone texture"
```

---

## SECTION 14 — FOOTER
**File:** `components/sections/Footer.tsx`

**Wireframe (Image 4, bottom):** White background, 4-column layout: Brand column (logo + email subscribe), Product links, About links, Feedback/Social links. Bottom bar: Privacy Policy · Terms of Service · Cookies Settings · Cookies Policy

**Layout:** `bg-white border-t border-gray-100 px-6 md:px-16 pt-16 pb-8`

**Grid:** `grid grid-cols-2 md:grid-cols-4 gap-10 mb-12`

**Column 1 — Brand:**
```tsx
<div>
  <a href="/" className="font-display text-2xl font-bold text-dark italic block mb-3">
    Ustad
  </a>
  <p className="text-xs text-gray-400 leading-relaxed mb-5">
    Get updates on new features and launch news.
  </p>
  {/* Email subscribe */}
  <div className="flex gap-2">
    <input
      type="email"
      placeholder="Your email"
      className="flex-1 text-xs px-3 py-2 border border-gray-200 rounded-lg outline-none focus:ring-1 focus:ring-green"
    />
    <button className="bg-dark text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-dark-2 transition-colors whitespace-nowrap">
      Subscribe
    </button>
  </div>
  <p className="text-[10px] text-gray-300 mt-2">
    By subscribing you agree to our Privacy Policy and consent to receive updates from UstadhApp.
  </p>
</div>
```

**Column 2 — Product links:**
```tsx
const product = ['Features', 'Roadmap', 'How it works', 'Blog', 'Pricing', 'Company']
// Heading: "Product" text-xs font-black text-dark uppercase tracking-widest mb-4
// Links: text-sm text-gray-500 hover:text-green transition-colors, stacked with gap-3
```

**Column 3 — About links:**
```tsx
const about = ['Contact', 'Blog', 'Careers', 'X (Twitter)', 'Legal', 'Follow us']
// Heading: "About" text-xs font-black text-dark uppercase tracking-widest mb-4
// Same link style as Product
```

**Column 4 — Feedback / Social:**
```tsx
const social = [
  { label: 'Instagram', icon: 'Instagram' },
  { label: 'X',         icon: 'Twitter' },
  { label: 'LinkedIn',  icon: 'Linkedin' },
  { label: 'YouTube',   icon: 'Youtube' },
]
// Heading: "Feedback" text-xs font-black text-dark uppercase tracking-widest mb-4
// Each: flex items-center gap-2 text-sm text-gray-500 hover:text-green transition-colors
// Icons from Lucide React
// Copyright line at bottom: "© 2025 UstadhApp. All rights reserved."
```

**Bottom bar:**
```tsx
<div className="border-t border-gray-100 pt-6 flex flex-wrap gap-4 justify-between items-center">
  <div className="flex gap-6 flex-wrap">
    {['Privacy Policy', 'Terms of Service', 'Cookies Settings', 'Cookies Policy'].map(item => (
      <a key={item} href="#" className="text-xs text-gray-400 hover:text-green transition-colors">
        {item}
      </a>
    ))}
  </div>
</div>
```

---

## PART 5 — SCROLL ANIMATION PATTERN

Apply this to every section using Framer Motion. Import and use on each section's outer div:

```tsx
// components/ui/RevealSection.tsx
'use client'
import { motion } from 'framer-motion'

export default function RevealSection({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Usage: wrap the inner content div of each section
<RevealSection>
  <div className="grid grid-cols-2 ...">...</div>
</RevealSection>
```

---

## PART 6 — ALL COPY (Complete Reference)

| Section | Headline | Body Copy |
|---|---|---|
| Hero | The fun, smart, and effective way to memorize Quran. | Learn Quran step by step with AI recitation feedback, beginner lessons, XP rewards, streaks, and smart revision. Built for children and adults learning at any level. |
| Hero CTA 1 | Join Waiting List | — |
| Hero CTA 2 | See How It Works | — |
| Trust Bar | — | Arabic · Urdu · English · Fast progress · Join thousands |
| Free Fun | Free. Fun & Effective | Learning with UstadhApp is engaging, structured, and built to help you truly memorize the Quran — not just read it. |
| Gamified | Gamified backed by structured learning | Daily streaks, XP points, levels, and leaderboards make learning a habit. Friendly reminders keep you on track without pressure. |
| Stay Motivated | Stay motivated | UstadhApp was built by educators and technologists who believe Quran memorization should be accessible, engaging, and effective for everyone. We combine Islamic education with modern AI to create the learning experience Muslims deserve. |
| AI Learning | AI-powered learning | Our AI Ustad listens to your recitation and highlights exactly where you need improvement. Get pronunciation corrections in real time so you master each word with confidence. |
| Personalised | Memorise anytime anywhere | *(label: Personalised learning)* |
| Waitlist | Join the early waiting list | Be first to access UstadhApp at launch and help shape the future of Quran learning. Limited early access spots available. |
| Waitlist note | — | We respect your privacy. Unsubscribe at any time. |
| How It Works label | *(Step two)* | Three simple steps to start memorizing Quran today |
| How It Works | How UstadhApp works | — |
| Step 1 | Choose your Surah & Start Your Journey | Pick the Surah you want to learn and begin a guided path with bite-sized levels designed for steady progress. |
| Step 2 | Learn Through Smart Levels | Complete fun interactive levels including: Ayah memorization, Word pronunciation practice, Symbol & tajweed questions, Listening challenges, Recall tests. Just like a game, each level builds your confidence. |
| Step 3 | Revise, Recite & Master | Unlock revision lessons between levels, recite using your mic, and get AI feedback to strengthen long-term memorization. |
| Feature Tabs label | *(Beginner)* | Start with the fundamentals and build your foundation |
| Feature Tabs | Everything you need to learn and memorize Quran | — |
| Tab 1 active | Start from Arabic letters and symbols | Master Arabic letters, symbols, and complete words at your own pace. *(label: Motivation)* |
| Coming Soon label | *(Coming)* | More features launching soon to enhance your learning journey |
| Coming Soon | Coming soon | — |
| Coming card 1 | Surah storytelling for deeper understanding | Learn the meaning and context behind every Surah through engaging narratives. |
| Coming card 2 | Qari certification for every Juz completed | Earn recognised certification as you complete each Juz out of the Quran. |
| Coming card 3 | AI correction with visual guidance in real time | See exactly where you need improvement with interactive visual feedback. |
| Final CTA | Begin memorizing Quran today | Thousands are waiting to discover how they learn. Don't miss your chance to join them. |
| Final CTA 1 | Join the waiting list | — |
| Final CTA 2 | Learn more | — |

---

## PART 7 — PHOTOS NEEDED (Unsplash sourcing guide)

Download these and save to `/public/images/`:

| Filename | Description | Unsplash Search Query |
|---|---|---|
| `hero-photo.jpg` | Woman with curly hair leaning over papers on desk, studying | `woman curly hair studying desk` |
| `free-fun.jpg` | Black man with glasses pushed up, sitting relaxed at laptop | `man laptop relaxed confident` |
| `gamified.jpg` | Woman in green sweater on couch, smiling, holding phone/tablet | `woman couch smiling tablet` |
| `stay-motivated.jpg` | Young man with headphones, leaning on brick wall outdoors | `man headphones brick wall outdoor` |
| `ai-learning.jpg` | Two women sharing laptop at outdoor cafe, one with hijab | `women laptop cafe outdoor` |
| `step3-photo.jpg` | Woman with red/curly hair, smiling, sitting outside | `woman curly hair smiling outdoor` |
| `tab-arabic.jpg` | Two people on couch, warm indoor plants setting | `two people couch indoor plants warm` |
| `coming-stories.jpg` | Person reading book, warm soft light | `person reading book warm light` |
| `coming-certification.jpg` | Man studying books at desk | `man studying books desk` |
| `coming-ai.jpg` | Woman with hijab smiling, phone | `woman hijab smiling phone` |
| `final-cta-bg.jpg` | Mosque or Islamic architecture, dark/dramatic | `mosque architecture dramatic dark` |

> **All photos:** Use warm, diverse, real-world people. Avoid stock-photo clichés. Prefer photos where subjects are engaged, smiling, or focused. All from [unsplash.com](https://unsplash.com) — free for commercial use.

---

## PART 8 — DESIGN RULES (Critical for matching wireframe exactly)

| Rule | Value |
|---|---|
| Primary green | `#05966A` |
| Dark hero bg | `#0D3D26` |
| Dark text | `#0D1B2A` |
| Light surface | `#F5F5F0` |
| Body text grey | `#6B7280` |
| Border color | `#E5E7EB` |
| All section max-width | `max-w-6xl mx-auto` |
| Section padding (desktop) | `py-24 px-16` |
| Section padding (mobile) | `py-16 px-6` |
| Card border radius | `rounded-2xl` (20px) |
| Heading font | Nunito Black (900 weight) |
| Logo font | Amiri Bold Italic |
| Button radius | `rounded-full` for pills, `rounded-lg` for square buttons |
| Alternating sections | Photo-right / Photo-left alternation for content sections |
| Section backgrounds | Alternate white → surface (`#F5F5F0`) → white |
| No drop shadows on cards | Cards in wireframe use border + bg only, no heavy shadows |
| Hover on photo cards | `group-hover:scale-105` zoom on image, `duration-500` |

---

## PART 9 — `lib/utils.ts`

```ts
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

Install: `npm install clsx tailwind-merge`

---

*End of Document · Ustad Landing Page · Built for Cursor · May 2026*
