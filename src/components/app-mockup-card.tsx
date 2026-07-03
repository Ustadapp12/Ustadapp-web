const stats = [
  { value: "220", label: "XP today" },
  { value: "7", label: "Day streak" },
  { value: "3", label: "Surahs" },
];

export function AppMockupCard({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full max-w-sm rounded-3xl bg-white p-5 text-[#0d1b2a] shadow-[0_24px_60px_rgba(0,0,0,0.3)] ${className}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#05966a] text-xs font-bold text-white">1</span>
          <span className="text-sm font-bold">UstadApp</span>
        </div>
        <span className="flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-600">
          🔥 7 day streak
        </span>
      </div>

      <div className="mt-4 rounded-2xl bg-[#f3f0e6] px-4 py-5 text-center">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">Al-Fatiha · Ayah 1</p>
        <p lang="ar" className="arabic mt-2 text-2xl font-bold leading-relaxed text-[#0d1b2a]">
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </p>
        <p className="mt-1 text-xs text-gray-500">Bismillah ir-rahman ir-raheem</p>
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between text-xs font-semibold text-gray-500">
          <span>Surah progress</span>
          <span className="text-[#05966a]">62%</span>
        </div>
        <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-gray-100">
          <div className="h-full rounded-full bg-gradient-to-r from-[#05966a] to-[#0fb989]" style={{ width: "62%" }} />
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2 text-center">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-xl bg-gray-50 py-2.5">
            <p className="text-base font-black text-[#0d1b2a]">{stat.value}</p>
            <p className="text-[10px] text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
