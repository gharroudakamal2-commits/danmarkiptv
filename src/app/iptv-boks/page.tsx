import type { Metadata } from "next";
import Link from "next/link";
import { Faq } from "@/components/Faq";
import { PageShell } from "@/components/PageShell";
import { KeyFacts } from "@/components/Pillar";
import { pageMeta, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "IPTV boks – Bedste tv-boks til IPTV i Danmark",
  description:
    "Hvilken IPTV boks skal du vælge? Sammenlign Apple TV, Google TV Streamer, Fire TV Stick og Chromecast.",
  ...pageMeta("/iptv-boks"),
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
      updated={site.updated}
    >
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {boxes.map((b) => (
          <section key={b.name} className="card-lift rounded-2xl border border-line bg-night-2 p-6">
            <h2 className="text-lg font-bold">{b.name}</h2>
            <p className="mt-2 text-sm leading-6 text-muted">{b.good}</p>
            <p className="mt-2 text-sm leading-6"><strong>God til:</strong> {b.for}</p>
          </section>
        ))}
      </div>

      <div className="prose-da mt-12">
        <h2>Hvad er en IPTV boks?</h2>
        <p>
          En IPTV boks – også kaldet tv-boks eller streamingboks – er en lille enhed, du sætter i
          tv&apos;ets HDMI-indgang. Den har sin egen app-butik, så du kan installere tv- og
          streamingapps på et tv, der ikke selv har dem, eller hvis tv&apos;ets egne apps er
          langsomme. Boksen styres med sin egen fjernbetjening og forbindes til internettet via
          wifi eller netværkskabel.
        </p>

        <h2>Sådan vælger du den rigtige tv-boks</h2>
        <ul>
          <li><strong>4K og HDR:</strong> Har du et 4K-tv, så vælg en boks, der understøtter 4K og HDR.</li>
          <li><strong>Netværksstik:</strong> En boks med kabelstik (ethernet) giver det mest stabile billede til live-tv og sport.</li>
          <li><strong>Wifi:</strong> Uden kabel bør boksen understøtte 5 GHz-wifi eller nyere wifi-standarder.</li>
          <li><strong>App-butik:</strong> Tjek, at de apps, du vil bruge, findes i boksens officielle app-butik.</li>
          <li><strong>Fjernbetjening:</strong> Stemmestyring og tænd/sluk af tv&apos;et via HDMI-CEC gør hverdagen nemmere.</li>
          <li><strong>Opdateringer:</strong> Vælg et mærke, der leverer softwareopdateringer i mange år.</li>
        </ul>

        <KeyFacts
          caption="Tv-boks eller smart-tv-apps?"
          rows={[
            ["Hastighed", "Boksen er ofte hurtigere end ældre smart-tv"],
            ["App-udvalg", "Bokse har typisk flere og nyere apps"],
            ["Opdateringer", "Bokse opdateres ofte længere end tv'ets egne apps"],
            ["Pris", "Smart-tv-apps er gratis – en boks koster ekstra"],
            ["Bedst til", "Ældre tv eller tv med langsomme apps"],
          ]}
        />

        <h2>Sådan sætter du boksen op</h2>
        <ol>
          <li>Sæt boksen i en ledig HDMI-indgang på tv&apos;et, og tilslut strøm.</li>
          <li>Vælg den rigtige HDMI-kilde med tv&apos;ets fjernbetjening.</li>
          <li>Forbind boksen til internettet – helst med kabel.</li>
          <li>Log ind på boksens konto, og installer opdateringer.</li>
          <li>Installer tv-appen fra den officielle app-butik, og log ind.</li>
        </ol>
        <p>
          Se hele forløbet i guiden <Link href="/kom-i-gang">kom i gang med IPTV</Link>.
        </p>

        <h2>Undgå &quot;fuldt loadede&quot; IPTV-bokse</h2>
        <p>
          Bokse, der sælges med færdiginstallerede apps og &quot;alle kanaler gratis&quot;, giver
          adgang til ulovligt indhold. Salg af den slags bokse er ulovligt, og de kan blive
          blokeret uden varsel. Køb en almindelig boks, og brug lovlige{" "}
          <Link href="/iptv-app">IPTV apps</Link>.
        </p>
        <p>
          Læs mere om, hvad du skal bruge, i guiden <Link href="/iptv-tv">IPTV tv: hvad er IP-tv?</Link>,
          eller se vores <Link href="/">IPTV Danmark-abonnement</Link>.
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
