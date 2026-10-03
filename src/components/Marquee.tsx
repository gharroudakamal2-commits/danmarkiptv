const items = [
  "Samsung Smart TV",
  "LG webOS",
  "Apple TV",
  "Google TV",
  "Chromecast",
  "Fire TV Stick",
  "Android TV",
  "iPhone & iPad",
  "Android",
  "Mac & PC",
];

export function Marquee() {
  return (
    <section aria-label="Understøttede enheder" className="border-y border-slate-200 bg-slate-50 py-5">
      <p className="mb-3 text-center text-xs font-semibold tracking-widest text-muted uppercase">
        Se IPTV på alle dine enheder
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-10 hover:[animation-play-state:paused]">
          {[...items, ...items].map((item, i) => (
            <span
              key={i}
              aria-hidden={i >= items.length}
              className="flex items-center gap-2 text-lg font-bold whitespace-nowrap text-slate-400 transition hover:text-brand"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand/60" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
