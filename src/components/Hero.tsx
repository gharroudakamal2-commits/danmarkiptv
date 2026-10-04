import Image from "next/image";
import Link from "next/link";
import heroImage from "../../public/images/home-hero.jpg";
import { Icon, type IconName } from "./Icon";
import { Aurora, ButtonLink, Container } from "./ui";
import { currency, plans } from "@/lib/plans";
import { updatedLabel } from "@/lib/site";
import { trust } from "@/lib/trust";

const highlights: { icon: IconName; label: string }[] = [
  { icon: "calendarX", label: "Ingen binding" },
  { icon: "monitorPlay", label: "HD og 4K" },
  { icon: "layers", label: "Alle enheder" },
  { icon: "message", label: "Hjælp via WhatsApp" },
];

/** Lowest monthly price across the plans, used as the "fra X kr./md." anchor. */
const fromPerMonth = Math.min(...plans.map((p) => p.perMonth ?? p.price));

const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden text-white">
      {/* Full-bleed photo with a slow cinematic zoom */}
      <div aria-hidden className="absolute inset-0 -z-20 overflow-hidden">
        <Image
          src={heroImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="animate-kenburns object-cover object-[70%_center] will-change-transform"
        />
      </div>
      {/* Overlays keep the text readable: dark on the left, fading into the page at the bottom */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-night via-night/85 to-night/10" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-night via-transparent to-night/40" />
      <Aurora />

      <Container className="relative grid min-h-[38rem] items-center pt-16 pb-24 sm:pt-20 lg:min-h-[44rem] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:pt-24 lg:pb-28">
        <div className="min-w-0">
          <p className="hero-fade inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300 backdrop-blur" style={d(0)}>
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-rose-500" />
            </span>
            {trust.offer ?? `Ingen binding · Opdateret ${updatedLabel()}`}
          </p>

          <h1 className="hero-rise mt-6 text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]" style={d(80)}>
            IPTV Danmark: <span className="text-gradient">alt dit tv</span> på alle skærme
          </h1>

          <p className="hero-rise mt-6 max-w-lg text-lg leading-8 text-slate-200" style={d(160)}>
            Live-tv og film på smart-tv, tv-boks, mobil og computer. Vælg en periode, og kom i gang
            på få minutter.
          </p>

          <div className="hero-fade mt-9 flex flex-wrap items-center gap-x-6 gap-y-4" style={d(260)}>
            <ButtonLink href="/iptv-abonnement#priser" size="lg" arrow>
              Se priser
            </ButtonLink>
            <Link href="/kom-i-gang" className="group flex items-center gap-1.5 text-sm font-semibold text-slate-200 hover:text-white">
              Sådan virker det
              <Icon name="arrowRight" className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
          </div>

          <p className="hero-fade mt-5 text-sm text-slate-300" style={d(340)}>
            Fra <strong className="font-semibold text-white">{fromPerMonth} {currency}/md.</strong> · Ingen binding
            {trust.rating && (
              <>
                {" · "}
                <a href={trust.rating.url} target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-white">
                  ★ {trust.rating.score.toLocaleString("da-DK")} på {trust.rating.source} ({trust.rating.count} anmeldelser)
                </a>
              </>
            )}
          </p>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-8 text-sm text-slate-200">
            {highlights.map((t, i) => (
              <li key={t.label} className="hero-fade flex items-center gap-2" style={d(420 + i * 70)}>
                <Icon name={t.icon} className="h-4 w-4 text-rose-400" />
                {t.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Floating status chips over the photo (desktop) */}
        <div aria-hidden className="relative hidden h-full lg:block">
          <div className="hero-fade absolute top-[22%] right-[8%]" style={d(500)}>
            <div className="flex animate-float items-center gap-2 rounded-xl border border-white/15 bg-night/70 px-3.5 py-2.5 text-xs font-semibold shadow-2xl backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-rose-500" />
              </span>
              LIVE nu
            </div>
          </div>
          <div className="hero-fade absolute top-[52%] left-[6%]" style={d(650)}>
            <div className="flex animate-float items-center gap-2 rounded-xl border border-white/15 bg-night/70 px-3.5 py-2.5 text-xs font-semibold shadow-2xl backdrop-blur-md [animation-delay:-2s]">
              <Icon name="monitorPlay" className="h-4 w-4 text-rose-400" /> HD og 4K
            </div>
          </div>
          <div className="hero-fade absolute right-[14%] bottom-[16%]" style={d(800)}>
            <div className="flex animate-float items-center gap-2 rounded-xl border border-white/15 bg-night/70 px-3.5 py-2.5 text-xs font-semibold shadow-2xl backdrop-blur-md [animation-delay:-4s]">
              <Icon name="layers" className="h-4 w-4 text-rose-400" /> Tv · Mobil · Tablet · Pc
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
