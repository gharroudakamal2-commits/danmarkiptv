import type { Metadata } from "next";
import Link from "next/link";
import { Faq } from "@/components/Faq";
import type { IconName } from "@/components/Icon";
import { PageShell } from "@/components/PageShell";
import { KeyFacts } from "@/components/Pillar";
import { IconBadge } from "@/components/ui";
import { pageMeta, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "IPTV app – De bedste tv-apps i Danmark",
  description:
    "Hvilken IPTV app skal du bruge? Se hvilke danske tv-apps der virker på smart-tv, mobil, tablet og tv-boks.",
  ...pageMeta("/iptv-app"),
};

const platforms: { icon: IconName; name: string; text: string }[] = [
  { icon: "tv", name: "Smart-tv", text: "Hent appen i tv'ets egen app-butik og log ind." },
  { icon: "box", name: "Tv-boks", text: "Tv-bokse har deres egne app-butikker med de fleste tv-apps." },
  { icon: "smartphone", name: "Mobil", text: "Hent appen i App Store eller Google Play." },
  { icon: "monitor", name: "Computer", text: "De fleste tjenester kan ses direkte i browseren." },
  { icon: "cast", name: "Cast", text: "Start programmet på mobilen, og send det til tv'et." },
  { icon: "tablet", name: "Tablet", text: "Perfekt til at se tv i køkkenet eller på farten." },
];

export default function AppPage() {
  return (
    <PageShell
      wide
      crumbs={[{ name: "IPTV app", href: "/iptv-app" }]}
      title="IPTV app: de bedste tv-apps i Danmark"
      intro="Med en IPTV app kan du se live-tv og on demand på alle dine skærme. Her er de enheder, du kan bruge, og hvordan du kommer i gang."
      updated={site.updated}
    >
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {platforms.map((p) => (
          <div key={p.name} className="card-lift group rounded-2xl border border-line bg-night-2 p-6">
            <IconBadge name={p.icon} />
            <h2 className="mt-5 text-lg font-semibold">{p.name}</h2>
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

        <h2>Hvad er en IPTV app?</h2>
        <p>
          En IPTV app er det program, du ser tv i. Appen henter kanalerne over internettet, viser
          programguiden og afspiller live-tv og on demand. Den samme app findes typisk til
          smart-tv, tv-bokse, mobil, tablet og computer, så du kan logge ind med samme konto på
          alle dine enheder.
        </p>

        <h2>Det skal en god IPTV app kunne</h2>
        <ul>
          <li><strong>Programguide (EPG):</strong> Et overblik over, hvad der sendes nu og senere.</li>
          <li><strong>Start forfra og spol:</strong> Se et program fra begyndelsen, selvom det er gået i gang.</li>
          <li><strong>Flere skærme:</strong> Se på flere enheder i husstanden samtidig.</li>
          <li><strong>Cast og AirPlay:</strong> Send billedet fra mobilen til tv&apos;et.</li>
          <li><strong>Stabil afspilning:</strong> Appen skal tilpasse billedkvaliteten, når forbindelsen svinger.</li>
        </ul>

        <h2>Dataforbrug på mobil</h2>
        <p>
          Ser du tv på mobilnettet, bruger det data. Netflix oplyser følgende maksimale forbrug pr. time,
          og andre tjenester ligger på samme niveau (<a href="https://help.netflix.com/en/node/87" target="_blank" rel="noopener noreferrer">kilde: Netflix Hjælpecenter</a>):
        </p>
        <KeyFacts
          caption="Omtrentligt dataforbrug pr. time"
          rows={[
            ["SD", "Op til 1 GB"],
            ["HD", "Op til 3 GB"],
            ["4K", "Op til 7 GB"],
          ]}
        />

        <h2>Når appen driller</h2>
        <ol>
          <li>Luk appen helt, og åbn den igen.</li>
          <li>Tjek, at appen og enheden er opdateret.</li>
          <li>Genstart enheden og routeren.</li>
          <li>Afinstaller og geninstaller appen.</li>
          <li>Virker det stadig ikke, så se vores <Link href="/hjaelp">hjælpecenter</Link>.</li>
        </ol>

        <h2>Brug kun apps fra officielle app-butikker</h2>
        <p>
          Apps, du skal installere fra ukendte hjemmesider (såkaldte APK-filer), bruges ofte til
          ulovlig IPTV og kan indeholde malware. Hold dig til App Store, Google Play og tv&apos;ets
          egen app-butik.
        </p>
        <p>
          Se også vores guides til <Link href="/iptv-pa-smart-tv">IPTV på smart-tv</Link> og{" "}
          <Link href="/iptv-boks">IPTV-bokse</Link>. Vil du forstå, hvordan det hele hænger sammen,
          så læs den store guide <Link href="/iptv-tv">IPTV tv: hvad er IP-tv?</Link>
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
