import type { Metadata } from "next";
import Link from "next/link";
import { Faq } from "@/components/Faq";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "IPTV app – De bedste tv-apps i Danmark",
  description:
    "Hvilken IPTV app skal du bruge? Se hvilke danske tv-apps der virker på smart-tv, mobil, tablet og tv-boks.",
  alternates: { canonical: "/iptv-app" },
};

const platforms = [
  { icon: "📺", name: "Smart-tv", text: "Hent appen i tv'ets egen app-butik og log ind." },
  { icon: "📦", name: "Tv-boks", text: "Tv-bokse har deres egne app-butikker med de fleste tv-apps." },
  { icon: "📱", name: "Mobil", text: "Hent appen i App Store eller Google Play." },
  { icon: "💻", name: "Computer", text: "De fleste tjenester kan ses direkte i browseren." },
  { icon: "🪄", name: "Cast", text: "Start programmet på mobilen, og send det til tv'et." },
  { icon: "📲", name: "Tablet", text: "Perfekt til at se tv i køkkenet eller på farten." },
];

export default function AppPage() {
  return (
    <PageShell
      wide
      crumbs={[{ name: "IPTV app", href: "/iptv-app" }]}
      title="IPTV app: de bedste tv-apps i Danmark"
      intro="Med en IPTV app kan du se live-tv og on demand på alle dine skærme. Her er de enheder, du kan bruge, og hvordan du kommer i gang."
    >
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {platforms.map((p) => (
          <div key={p.name} className="card-lift group rounded-2xl border border-slate-200 bg-white p-6">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-sky-50 text-2xl transition duration-300 group-hover:scale-110 group-hover:rotate-6">
              {p.icon}
            </div>
            <h2 className="mt-4 text-lg font-bold">{p.name}</h2>
            <p className="mt-2 text-sm leading-6 text-muted">{p.text}</p>
          </div>
        ))}
      </div>

      <div className="prose-da mt-14 max-w-3xl">
        <h2>Sådan installerer du en IPTV app</h2>
        <ul>
          <li><strong>Smart-tv:</strong> Åbn app-butikken på dit tv, søg efter udbyderens navn, og log ind.</li>
          <li><strong>Mobil og tablet:</strong> Hent appen i App Store eller Google Play.</li>
          <li><strong>Tv-boks:</strong> Apple TV, Google TV og Fire TV har egne app-butikker.</li>
          <li><strong>Chromecast:</strong> Start programmet i appen på mobilen, og tryk på cast-ikonet.</li>
        </ul>

        <h2>Brug kun apps fra officielle app-butikker</h2>
        <p>
          Apps, du skal installere fra ukendte hjemmesider (såkaldte APK-filer), bruges ofte til
          ulovlig IPTV og kan indeholde malware. Hold dig til App Store, Google Play og tv&apos;ets
          egen app-butik.
        </p>
        <p>
          Se også vores guides til <Link href="/iptv-pa-smart-tv">IPTV på smart-tv</Link> og{" "}
          <Link href="/iptv-boks">IPTV-bokse</Link>.
        </p>
      </div>

      <div className="max-w-3xl">
        <Faq
          items={[
            {
              q: "Hvad er den bedste IPTV app?",
              a: "Den bedste app er den fra den udbyder, hvis indhold du vil se. Alle de store danske tjenester har deres egen app.",
            },
            {
              q: "Er IPTV-afspillere som VLC lovlige?",
              a: "Ja, selve afspillerne er lovlige. Det er indholdet, du afspiller, der afgør om det er lovligt.",
            },
          ]}
        />
      </div>
    </PageShell>
  );
}
