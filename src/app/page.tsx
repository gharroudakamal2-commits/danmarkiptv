import type { Metadata } from "next";
import Link from "next/link";
import { Faq, type FaqItem } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { PricingTable } from "@/components/PricingTable";
import { TypesTable } from "@/components/TypesTable";
import { guides } from "@/lib/guides";
import { iptvTypes } from "@/lib/iptvTypes";
import { plans } from "@/lib/plans";
import { sports } from "@/lib/sports";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const faq: FaqItem[] = [
  {
    q: "Hvad er IPTV?",
    a: "IPTV (Internet Protocol Television) betyder, at tv sendes via internettet i stedet for antenne, kabel eller parabol. Du ser kanalerne i en app på dit smart-tv, en tv-boks, mobil eller computer.",
  },
  {
    q: "Er IPTV lovligt i Danmark?",
    a: "Ja, IPTV er lovligt, når tjenesten har rettighederne til de kanaler, den sender. Billige tjenester med tusindvis af kanaler til få kroner er næsten altid ulovlige, og det er også ulovligt at se med fra en ulovlig kilde.",
  },
  {
    q: "Hvad er den bedste IPTV i Danmark?",
    a: "Det afhænger af, hvad du vil se. Vil du have mange danske kanaler, er en tv-pakke fra en stor udbyder ofte bedst. Er du mest til sport, skal du vælge efter, hvem der har rettighederne til din liga. Ser du mest nyheder og dokumentar, kan gratis public service-streaming være nok.",
  },
  {
    q: "Kan jeg se IPTV på mit smart-tv?",
    a: "Ja. De fleste danske tv-tjenester har apps til Samsung, LG, Android TV og Apple TV. Du kan også bruge en Chromecast eller Fire TV Stick, hvis dit tv er ældre.",
  },
  {
    q: "Hvor hurtigt internet skal jeg have til IPTV?",
    a: "Som tommelfingerregel skal du bruge mindst 10 Mbit/s pr. HD-stream og 25 Mbit/s til 4K. En kablet forbindelse eller stærk wifi giver det mest stabile billede.",
  },
];

const features = [
  { icon: "📡", title: "Ingen parabol eller kabel", text: "Alt du skal bruge er internet og en app. Klar på få minutter." },
  { icon: "⏪", title: "Start forfra & spol", text: "Gik du glip af starten? Mange tjenester lader dig starte programmet forfra." },
  { icon: "📱", title: "Alle skærme", text: "Se det samme abonnement på tv, mobil, tablet og computer." },
  { icon: "⚽", title: "Live sport", text: "Superliga, Champions League, F1 og håndbold – live i HD og 4K." },
  { icon: "🔒", title: "Lovligt og sikkert", text: "Vi anbefaler kun tjenester med rettighederne i orden." },
  { icon: "💸", title: "Fra 0 kr.", text: "Public service-tv kan streames gratis, og mange tjenester kan opsiges løbende." },
];

const steps = [
  { title: "Vælg hvad du vil se", text: "Danske kanaler, sport, film eller børne-tv – start med dit behov." },
  { title: "Sammenlign udbydere", text: "Brug vores tabel til at se type, sport og pris side om side." },
  { title: "Tjek dine enheder", text: "Sørg for at tjenesten har en app til dit smart-tv eller din boks." },
  { title: "Start abonnement", text: "Mange tjenester har ingen binding, så du kan prøve dig frem." },
];

const delay = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as React.CSSProperties;

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div data-reveal className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-semibold tracking-widest text-brand uppercase">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-lg leading-8 text-muted">{text}</p>}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />

      <div className="mx-auto max-w-6xl px-4">
        {/* Comparison */}
        <section className="mt-24">
          <SectionTitle
            eyebrow="Sammenligning"
            title="Sammenlign typer af IPTV i Danmark"
            text="Fra fulde tv-pakker til gratis streaming – se hvilken type tv-løsning der passer til dig."
          />
          <div data-reveal style={delay(100)} className="mt-10">
            <TypesTable types={iptvTypes} />
          </div>
        </section>

        {/* Pricing */}
        <section id="priser" className="mt-28 scroll-mt-24">
          <SectionTitle
            eyebrow="Priser"
            title="Vælg dit abonnement"
            text="Enkle priser uden binding. Jo længere periode, jo lavere månedspris."
          />
          <div className="mt-12">
            <PricingTable plans={plans} />
          </div>
        </section>

        {/* Features */}
        <section className="mt-28">
          <SectionTitle
            eyebrow="Fordele"
            title="Hvorfor vælge IPTV?"
            text="IPTV er den mest fleksible måde at se tv på i Danmark i dag."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <div key={f.title} data-reveal style={delay(i * 80)} className="card-lift group rounded-2xl border border-slate-200 bg-white p-6">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-sky-50 text-2xl transition duration-300 group-hover:scale-110 group-hover:rotate-6">
                  {f.icon}
                </div>
                <h3 className="mt-4 text-lg font-bold">{f.title}</h3>
                <p className="mt-2 leading-7 text-muted">{f.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What is IPTV */}
        <section className="mt-28 grid items-center gap-10 lg:grid-cols-2">
          <div data-reveal className="prose-da">
            <p className="text-sm font-semibold tracking-widest text-brand uppercase">Guide</p>
            <h2 className="!mt-2 !text-3xl !font-extrabold sm:!text-4xl">Hvad er IPTV, og hvordan virker det i Danmark?</h2>
            <p>
              IPTV står for Internet Protocol Television. I stedet for at modtage tv via antenne,
              kabel eller parabol, streames kanalerne til dig over din internetforbindelse. Du
              behøver altså ikke et tv-stik i væggen – kun internet og en app.
            </p>
            <p>
              I Danmark bruger flere og flere IPTV, fordi det er fleksibelt: du kan se live-tv,
              starte et program forfra og se det samme abonnement på både tv, mobil og computer.
            </p>
            <p>
              <Link href="/hvad-er-iptv">Læs hele guiden: Hvad er IPTV?</Link>
            </p>
          </div>
          <div data-reveal style={delay(150)} className="relative">
            <div className="absolute inset-0 -z-10 rotate-3 rounded-3xl bg-gradient-to-br from-sky-200 to-cyan-100" />
            <ol className="space-y-4 rounded-3xl bg-white p-6 shadow-xl ring-1 ring-slate-200 sm:p-8">
              {["Udbyderen sender kanalen fra sin server", "Signalet streames via dit bredbånd", "Appen på dit tv afspiller i HD eller 4K"].map((t, i) => (
                <li key={t} className="flex items-center gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-blue-500 to-brand-dark font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="font-medium">{t}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Steps */}
        <section className="mt-28">
          <SectionTitle eyebrow="Kom i gang" title="Sådan vælger du IPTV i 4 trin" />
          <ol className="relative mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <li aria-hidden className="absolute top-9 right-[12%] left-[12%] hidden h-0.5 bg-gradient-to-r from-sky-200 via-brand to-sky-200 lg:block" />
            {steps.map((s, i) => (
              <li key={s.title} data-reveal style={delay(i * 120)} className="card-lift relative rounded-2xl border border-slate-200 bg-white p-6 text-center">
                <span className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-brand text-sm font-bold text-white ring-8 ring-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{s.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Sport */}
        <section className="mt-28">
          <SectionTitle eyebrow="Sport" title="Se live sport via IPTV" text="Find ud af, hvordan du ser din yndlingssport lovligt i Danmark." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {sports.map((s, i) => (
              <Link
                key={s.slug}
                href={`/sport/${s.slug}`}
                data-reveal
                style={delay(i * 80)}
                className="group relative overflow-hidden rounded-2xl bg-slate-900 p-5 text-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/20"
              >
                <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-brand/40 blur-2xl transition duration-500 group-hover:scale-150" />
                <p className="relative text-lg font-bold">{s.name}</p>
                <p className="relative mt-6 text-sm font-semibold text-cyan-300 transition group-hover:translate-x-1">Se guiden →</p>
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* Legal CTA */}
      <section className="relative isolate mt-28 overflow-hidden bg-slate-950 py-20 text-white">
        <div className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="absolute top-1/2 left-1/2 -z-10 h-80 w-80 -translate-x-1/2 -translate-y-1/2 animate-blob rounded-full bg-brand/30 blur-3xl" />
        <div data-reveal className="mx-auto max-w-3xl px-4 text-center">
          <p className="text-sm font-semibold tracking-widest text-cyan-400 uppercase">Vigtigt</p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Pas på ulovlig IPTV</h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            Tilbud med &quot;20.000 kanaler for 99 kr.&quot; er næsten altid ulovlige. De bliver
            jævnligt lukket, du kan miste dine penge, og du risikerer selv at bryde loven.
          </p>
          <Link
            href="/er-iptv-lovligt"
            className="btn-shine mt-8 inline-block rounded-xl bg-white px-6 py-3.5 font-semibold text-ink transition hover:-translate-y-0.5"
          >
            Læs: Er IPTV lovligt i Danmark?
          </Link>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4">
        {/* Guides */}
        <section className="mt-24">
          <SectionTitle eyebrow="Guides" title="Seneste guides" />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {guides.map((g, i) => (
              <Link key={g.slug} href={`/guides/${g.slug}`} data-reveal style={delay(i * 100)} className="card-lift group rounded-2xl border border-slate-200 bg-white p-6">
                <div className="h-1.5 w-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-20" />
                <h3 className="mt-5 text-lg font-bold transition group-hover:text-brand">{g.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{g.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <div data-reveal className="mx-auto max-w-3xl">
          <Faq items={faq} />
        </div>
      </div>
    </>
  );
}
