export type MoodEntry = {
  image: string;
  headline: string;
  message: string;
  button: string;
};

// Each mood has its own mascot pose + copy. Swap an `image` path to change a
// character everywhere it's used; edit `headline`/`message`/`button` to
// change the copy — no JSX/markup changes needed.
export const MOODS = {
  peekaboo: {
    image: "/hello/peekaboo.png",
    headline: "YOU FOUND ME!!!!",
    message: "You seem wonderfully at peace right now. This is the perfect moment to sit quietly with a verse.",
    button: "Show me a verse",
  },
  shy: {
    image: "/hello/shy.png",
    headline: "oh... hi. didn't see you there.",
    message: "Feeling a little shy or withdrawn? That's okay. Small steps count with Allah.",
    button: "Start something small",
  },
  puzzled: {
    image: "/hello/puzzled.png",
    headline: "wait... what?",
    message: "Something's not adding up for you today. Confusion is allowed, clarity is a du'a away.",
    button: "Ask for clarity",
  },
  giggle: {
    image: "/hello/giggle.png",
    headline: "HEEHEE! Sorry, sorry!",
    message: "You're in a good mood and it shows. Joy is a blessing worth naming out loud.",
    button: "Say Alhamdulillah",
  },
  curious: {
    image: "/hello/curious.png",
    headline: "caught me hiding behind books!",
    message: "You're curious today, and that's a gift. Let's feed it.",
    button: "Learn something new",
  },
  sneaky: {
    image: "/hello/sneaky.png",
    headline: "I'm not hiding, YOU'RE hiding.",
    message: "Avoiding something? It's usually smaller than it looks. Start with two minutes.",
    button: "Just start",
  },
  sleepy: {
    image: "/hello/sleepy.png",
    headline: "five more minutes...",
    message: "You're low on energy today, and that's allowed. Rest is worship when the intention is right.",
    button: "Something gentle",
  },
  stubborn: {
    image: "/hello/stubborn.png",
    headline: "nope. not doing it.",
    message: "Resistance usually means it matters. Let's shrink it until it's easy.",
    button: "Make it smaller",
  },
  excited: {
    image: "/hello/excited.png",
    headline: "I've been waiting AGES.",
    message: "Feeling eager today? Perfect. Consistency starts with days like this.",
    button: "Continue my streak",
  },
  silly: {
    image: "/hello/silly.png",
    headline: "BLEHHH! ✨",
    message: "You're feeling silly and light. Hold onto that. It's a mercy.",
    button: "Keep the mood going",
  },
  suspicious: {
    image: "/hello/suspicious.png",
    headline: "I have questions.",
    message: "Questions aren't a weakness in faith. They're how it grows.",
    button: "Ask away",
  },
  welcome: {
    image: "/hello/lumo-welcome.png",
    headline: "I'm Lumo. Nice to meet you!",
    message: "I'll keep you company, reminders, verses, and the occasional bad joke.",
    button: "Nice to meet you too",
  },
} as const;

export type Mood = keyof typeof MOODS;

export const DEFAULT_MOOD: Mood = "welcome";

export const STAR_IMAGE = "/hello/star.png";

export function resolveMood(value: string | string[] | undefined): Mood {
  const key = Array.isArray(value) ? value[0] : value;
  const normalized = key?.toLowerCase();
  return normalized && normalized in MOODS ? (normalized as Mood) : DEFAULT_MOOD;
}
