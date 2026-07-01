const badges = [
  { icon: "🔒", label: "Secure & Private" },
  { icon: "☾", label: "Islamic Values" },
  { icon: "⚡", label: "Early Access" },
  { icon: "🚀", label: "Launching 2026" },
];

export function TrustBadges() {
  return (
    <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
      {badges.map((badge) => (
        <span
          key={badge.label}
          className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white/85"
        >
          <span aria-hidden>{badge.icon}</span>
          {badge.label}
        </span>
      ))}
    </div>
  );
}
