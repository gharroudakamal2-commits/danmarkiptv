import Link from "next/link";
import { guides } from "@/lib/guides";
import { iptvTypes } from "@/lib/iptvTypes";
import { sports } from "@/lib/sports";
import { CountUp } from "./Motion";

const channels = [
  { name: "News", show: "Nyheder", color: "from-rose-500 to-red-600" },
  { name: "Sport", show: "Sport live", color: "from-sky-500 to-blue-600" },
  { name: "Film", show: "Film & serier", color: "from-violet-500 to-purple-600" },
  { name: "Kids", show: "Børne-tv", color: "from-amber-400 to-orange-500" },
];

const stats = [
  { to: iptvTypes.length, suffix: "", label: "typer af tv-løsninger" },
  { to: guides.length + sports.length, suffix: "", label: "guides om IPTV og sport" },
  { to: 100, suffix: "%", label: "lovlige tjenester" },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 text-white">
      {/* Animated background */}
      <div className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]" />
      <div className="absolute -top-32 -left-32 -z-10 h-[28rem] w-[28rem] animate-blob rounded-full bg-blue-600/40 blur-3xl" />
      <div className="absolute top-20 -right-40 -z-10 h-[30rem] w-[30rem] animate-blob rounded-full bg-cyan-500/25 blur-3xl [animation-delay:-6s]" />
      <div className="absolute -bottom-40 left-1/3 -z-10 h-[26rem] w-[26rem] animate-blob rounded-full bg-violet-600/25 blur-3xl [animation-delay:-12s]" />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 py-20 sm:py-28 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <div data-reveal className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold tracking-wide backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
            </span>
            LIVE · Opdateret oktober 2026
          </div>

          <h1 data-reveal style={{ "--reveal-delay": "100ms" } as React.CSSProperties} className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl">
            IPTV Danmark: <span className="text-gradient">find den bedste</span> lovlige IPTV
          </h1>

          <p data-reveal style={{ "--reveal-delay": "200ms" } as React.CSSProperties} className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Vi sammenligner de lovlige IPTV- og streamingtjenester i Danmark, så du kan se danske
            kanaler, sport og film på smart-tv, boks og mobil – uden at betale for meget.
          </p>

          <div data-reveal style={{ "--reveal-delay": "300ms" } as React.CSSProperties} className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/bedste-iptv-danmark"
              className="btn-shine rounded-xl bg-brand px-6 py-3.5 font-semibold shadow-lg shadow-blue-600/40 transition hover:-translate-y-0.5 hover:bg-brand-dark"
            >
              Se bedste IPTV i Danmark →
            </Link>
            <Link
              href="/hvad-er-iptv"
              className="rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 font-semibold backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              Hvad er IPTV?
            </Link>
          </div>

          <dl data-reveal style={{ "--reveal-delay": "400ms" } as React.CSSProperties} className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="text-xs leading-5 text-slate-400">{s.label}</dt>
                <dd className="order-first text-3xl font-extrabold tracking-tight">
                  <CountUp to={s.to} suffix={s.suffix} />
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* TV mockup */}
        <div data-reveal style={{ "--reveal-delay": "250ms" } as React.CSSProperties} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="animate-float">
            <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-3 shadow-2xl shadow-blue-900/40 backdrop-blur">
              <div className="relative aspect-video overflow-hidden rounded-xl bg-gradient-to-br from-slate-800 via-slate-900 to-black">
                <div className="absolute inset-x-0 h-1/4 animate-scan bg-gradient-to-b from-transparent via-white/5 to-transparent" />
                <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-md bg-red-600 px-2 py-0.5 text-[10px] font-bold tracking-wider">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" /> LIVE
                </div>
                <div className="absolute top-3 right-3 rounded-md bg-black/50 px-2 py-0.5 text-[10px] font-semibold">4K HDR</div>
                <div className="grid h-full place-items-center">
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur transition hover:scale-110">
                    <span className="ml-1 text-2xl">▶</span>
                  </div>
                </div>
                <div className="absolute inset-x-3 bottom-3">
                  <div className="h-1 overflow-hidden rounded-full bg-white/15">
                    <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
                  </div>
                </div>
              </div>
              <div className="mt-3 grid grid-cols-4 gap-2">
                {channels.map((c) => (
                  <div key={c.name} className="group cursor-default rounded-lg bg-white/5 p-2 transition hover:bg-white/10">
                    <div className={`grid h-8 place-items-center rounded-md bg-gradient-to-br ${c.color} text-xs font-bold transition group-hover:scale-105`}>
                      {c.name}
                    </div>
                    <p className="mt-1.5 truncate text-[10px] text-slate-400">{c.show}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating badges */}
          <div className="absolute -top-5 -left-4 animate-float rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-xs font-semibold backdrop-blur-md [animation-delay:-2s] sm:-left-8">
            ✓ 100% lovligt
          </div>
          <div className="absolute -right-3 -bottom-5 animate-float rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-xs font-semibold backdrop-blur-md [animation-delay:-4s] sm:-right-6">
            📺 Smart TV · Mobil · Boks
          </div>
        </div>
      </div>
    </section>
  );
}
