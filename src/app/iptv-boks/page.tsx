import type { Metadata } from "next";
import Link from "next/link";
import { Faq } from "@/components/Faq";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "IPTV boks – Bedste tv-boks til IPTV i Danmark",
  description:
    "Hvilken IPTV boks skal du vælge? Sammenlign Apple TV, Google TV Streamer, Fire TV Stick og Chromecast.",
  alternates: { canonical: "/iptv-boks" },
};

const boxes = [
  {
    name: "Apple TV 4K",
    good: "Hurtig, stabil og med lang softwaresupport.",
    for: "Dig der vil have den bedste oplevelse og bruger iPhone.",
  },
  {
    name: "Google TV Streamer / Chromecast med Google TV",
    good: "Stort app-udvalg via Google Play og indbygget Chromecast.",
    for: "Android-brugere og dig der vil have mange apps.",
  },
  {
    name: "Amazon Fire TV Stick",
    good: "Billig og nem at sætte i tv'ets HDMI-indgang.",
    for: "Dig der vil opgradere et ældre tv for få penge.",
  },
  {
    name: "Udbyderens egen boks",
    good: "Nogle tv-udbydere leverer deres egen boks med optagelse og fjernbetjening.",
    for: "Dig der vil have alt fra én udbyder.",
  },
];

export default function BoxPage() {
  return (
    <PageShell
      crumbs={[{ name: "IPTV boks", href: "/iptv-boks" }]}
      title="IPTV boks: bedste tv-boks til IPTV"
      intro="En IPTV boks gør et almindeligt tv smart og giver ofte en hurtigere og mere stabil oplevelse end tv'ets egne apps."
    >
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {boxes.map((b) => (
          <section key={b.name} className="card-lift rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-bold">{b.name}</h2>
            <p className="mt-2 text-sm leading-6 text-muted">{b.good}</p>
            <p className="mt-2 text-sm leading-6"><strong>God til:</strong> {b.for}</p>
          </section>
        ))}
      </div>

      <div className="prose-da mt-12">
        <h2>Undgå &quot;fuldt loadede&quot; IPTV-bokse</h2>
        <p>
          Bokse, der sælges med færdiginstallerede apps og &quot;alle kanaler gratis&quot;, giver
          adgang til ulovligt indhold. Salg af den slags bokse er ulovligt, og de kan blive
          blokeret uden varsel. Køb en almindelig boks, og brug lovlige{" "}
          <Link href="/iptv-app">IPTV apps</Link>.
        </p>
      </div>

      <Faq
        items={[
          {
            q: "Hvad er den bedste IPTV boks?",
            a: "Apple TV 4K er generelt den hurtigste og mest stabile. Google TV og Fire TV er billigere alternativer med et stort app-udvalg.",
          },
          {
            q: "Er IPTV-bokse lovlige i Danmark?",
            a: "Ja, selve boksen er lovlig. Bokse med forudinstalleret ulovligt indhold er derimod ulovlige.",
          },
        ]}
      />
    </PageShell>
  );
}
