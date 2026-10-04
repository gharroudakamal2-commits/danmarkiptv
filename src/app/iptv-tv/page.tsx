import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import devicesImage from "../../../public/images/home-devices.jpg";
import type { FaqItem } from "@/components/Faq";
import diagramImage from "../../../public/images/pillar-iptv-tv.jpg";
import { Figure, KeyFacts, PillarPage, type PillarSection } from "@/components/Pillar";
import { pageMeta } from "@/lib/site";

const path = "/iptv-tv";
const title = "IPTV tv: hvad er IP-tv, og hvordan virker det?";
const description =
  "IPTV tv (ip tv) er tv over internettet. Se hvordan IPTV virker, hvad du skal bruge, og hvor hurtigt internet der kræves i HD og 4K.";

export const metadata: Metadata = {
  title: "IPTV tv – hvad er IP-tv, og hvordan virker det?",
  description,
  ...pageMeta(path, { publishedTime: "2026-10-03" }),
};

const sections: PillarSection[] = [
  {
    id: "hvad-er-iptv",
    title: "Hvad er IPTV-tv?",
    body: (
      <>
        <p>
          IPTV står for <strong>Internet Protocol Television</strong>. Det betyder, at tv-signalet
          sendes som data over et IP-netværk – det samme netværk, du bruger til internettet – i
          stedet for som radiosignal via antenne, kabel-tv-net eller satellit. Mange skriver det
          også som <em>ip tv</em>, <em>IP-tv</em> eller <em>iptv tv</em>.
        </p>
        <p>Der findes to hovedtyper:</p>
        <ul>
          <li>
            <strong>Lukket IPTV:</strong> leveres af en bredbåndsudbyder over dens eget net,
            typisk med en tv-boks. Signalet går ikke over det åbne internet.
          </li>
          <li>
            <strong>IPTV via apps (OTT):</strong> streames over det åbne internet til en app på
            smart-tv, tv-boks, mobil eller computer. Det er den mest udbredte form i dag.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "hvordan-virker-iptv",
    title: "Hvordan virker IPTV?",
    body: (
      <>
        <Figure
          src={diagramImage}
          alt="Diagram over IPTV: server sender tv via internettet til router, smart-tv, mobil og bærbar"
          caption="Sådan når IPTV frem: fra udbyderens server, via internettet og din router, til tv, mobil og computer."
        />
        <ol>
          <li>Tv-kanalen eller programmet kodes til et digitalt videoformat.</li>
          <li>Udbyderen sender videoen fra sine servere, ofte via et netværk af servere tæt på seerne.</li>
          <li>Videoen sendes i små pakker over din internetforbindelse.</li>
          <li>Appen på din enhed samler pakkerne og afspiller billedet i SD, HD eller 4K.</li>
        </ol>
        <p>
          Fordi signalet er digitalt og går begge veje, kan du ofte starte et program forfra, spole
          og se det samme abonnement på flere skærme. Appen tilpasser billedkvaliteten til din
          forbindelse, så billedet ikke fryser, når hastigheden svinger.
        </p>
      </>
    ),
  },
  {
    id: "sammenligning",
    title: "IPTV sammenlignet med antenne, kabel og parabol",
    body: (
      <div className="not-prose my-6 overflow-x-auto rounded-2xl border border-line">
        <table className="w-full min-w-[620px] text-left text-sm">
          <thead className="border-b border-line bg-paper">
            <tr>
              <th className="p-4 font-semibold text-ink">Løsning</th>
              <th className="p-4 font-semibold text-ink">Signalet kommer via</th>
              <th className="p-4 font-semibold text-ink">Se på mobil</th>
              <th className="p-4 font-semibold text-ink">Typisk binding</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line text-muted">
            <tr><th scope="row" className="p-4 font-medium text-ink">IPTV</th><td className="p-4">Internettet</td><td className="p-4">Ja</td><td className="p-4">Ofte ingen</td></tr>
            <tr><th scope="row" className="p-4 font-medium text-ink">Antenne</th><td className="p-4">Jordbaseret sendenet</td><td className="p-4">Nej</td><td className="p-4">Afhænger af pakken</td></tr>
            <tr><th scope="row" className="p-4 font-medium text-ink">Kabel-tv</th><td className="p-4">Kabel-tv-stik i boligen</td><td className="p-4">Kun via app</td><td className="p-4">Ofte</td></tr>
            <tr><th scope="row" className="p-4 font-medium text-ink">Parabol</th><td className="p-4">Satellit</td><td className="p-4">Nej</td><td className="p-4">Ofte</td></tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    id: "hvad-skal-du-bruge",
    title: "Hvad skal du bruge til IPTV?",
    body: (
      <>
        <p>Du skal bruge tre ting: en internetforbindelse, en enhed med en app og et abonnement.</p>
        <figure className="not-prose my-8 overflow-hidden rounded-2xl ring-1 ring-white/10">
          <Image
            src={devicesImage}
            alt="Enheder du kan se IPTV på: bærbar, tablet, mobil og streaming-stick med fjernbetjening"
            sizes="(min-width: 1024px) 768px, 100vw"
            placeholder="blur"
            className="aspect-[16/9] w-full object-cover"
          />
          <figcaption className="border-t border-line bg-night-2 px-4 py-2.5 text-xs text-muted">
            IPTV virker på bærbar, tablet, mobil og tv via en streaming-stick eller et smart-tv.
          </figcaption>
        </figure>
        <ul>
          <li>
            <strong>Enhed:</strong> et <Link href="/iptv-pa-smart-tv">smart-tv</Link>, en{" "}
            <Link href="/iptv-boks">tv-boks</Link> som Apple TV, Google TV eller Fire TV, en mobil,
            tablet eller computer.
          </li>
          <li>
            <strong>App:</strong> fra en officiel app-butik. Læs mere om{" "}
            <Link href="/iptv-app">IPTV apps</Link>.
          </li>
          <li>
            <strong>Internet:</strong> stabilitet betyder mere end topfart.
          </li>
        </ul>
        <KeyFacts
          caption="Anbefalet internethastighed pr. skærm"
          rows={[
            ["SD", "Ca. 5 Mbit/s"],
            ["HD (720p–1080p)", "Ca. 10 Mbit/s"],
            ["4K", "Ca. 25 Mbit/s"],
            ["Flere skærme samtidig", "Læg hastighederne sammen"],
          ]}
        />
        <p>
          Se flere tips i guiden{" "}
          <Link href="/guides/hvor-hurtigt-internet-til-iptv">hvor hurtigt internet skal du bruge til IPTV</Link>.
        </p>
      </>
    ),
  },
  {
    id: "begreber",
    title: "Vigtige IPTV-begreber",
    body: (
      <dl className="not-prose my-6 grid gap-4 sm:grid-cols-2">
        {[
          ["EPG", "Elektronisk programguide – tv-oversigten i appen, der viser, hvad der sendes nu og senere."],
          ["Live-tv", "Kanaler, der sendes i realtid, præcis som på almindeligt tv."],
          ["VOD", "Video on demand – film og serier, du selv vælger, hvornår du vil se."],
          ["Catch-up / start forfra", "Mulighed for at se et program, der allerede er gået i gang eller er sendt."],
          ["Buffering", "Når afspilningen venter på data. Skyldes oftest ustabilt internet eller wifi."],
          ["4K / HDR", "Højere opløsning og bedre kontrast. Kræver en hurtig forbindelse og et tv, der understøtter det."],
        ].map(([term, def]) => (
          <div key={term} className="rounded-2xl border border-line bg-night-2 p-5">
            <dt className="font-semibold text-ink">{term}</dt>
            <dd className="mt-1.5 text-sm leading-6 text-muted">{def}</dd>
          </div>
        ))}
      </dl>
    ),
  },
  {
    id: "fordele-ulemper",
    title: "Fordele og ulemper ved IPTV",
    body: (
      <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-emerald-400/20 bg-emerald-500/[0.06] p-6">
          <h3 className="font-semibold text-emerald-300">Fordele</h3>
          <ul className="mt-3 list-none space-y-2 pl-0 text-sm leading-6 text-muted">
            <li>Kræver ingen parabol, antenne eller kabel-tv-stik</li>
            <li>Se på tv, mobil, tablet og computer</li>
            <li>Start forfra, spol og on demand</li>
            <li>Ofte ingen binding</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-amber-400/20 bg-amber-500/[0.06] p-6">
          <h3 className="font-semibold text-amber-300">Ulemper</h3>
          <ul className="mt-3 list-none space-y-2 pl-0 text-sm leading-6 text-muted">
            <li>Afhænger af en stabil internetforbindelse</li>
            <li>Bruger meget data – især i 4K</li>
            <li>Ældre tv kan kræve en tv-boks</li>
            <li>Mange ulovlige tjenester på markedet</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "lovligt",
    title: "Er IPTV lovligt?",
    body: (
      <p>
        Ja. IPTV som teknologi er lovligt og bruges af store danske tv-udbydere. En tjeneste er
        dog kun lovlig, hvis den har rettighederne til de kanaler, den sender. Tjenester med
        tusindvis af kanaler til næsten ingen penge er næsten altid ulovlige. Læs mere på{" "}
        <Link href="/er-iptv-lovligt">er IPTV lovligt i Danmark</Link>.
      </p>
    ),
  },
  {
    id: "kom-i-gang",
    title: "Sådan kommer du i gang med IPTV",
    body: (
      <p>
        Vælg et abonnement, installer appen på din enhed, og log ind. Følg vores{" "}
        <Link href="/kom-i-gang">trin-for-trin-guide</Link>, eller se{" "}
        <Link href="/iptv-abonnement">priserne på vores IPTV-abonnement</Link>.
      </p>
    ),
  },
];

const faq: FaqItem[] = [
  {
    q: "Hvad er IPTV-tv?",
    a: "IPTV-tv (Internet Protocol Television, også kaldet ip tv) er tv, der sendes over internettet i stedet for via antenne, kabel eller parabol. Du ser kanalerne i en app på smart-tv, tv-boks, mobil eller computer.",
  },
  {
    q: "Hvad er forskellen på IPTV og streaming?",
    a: "IPTV bruges ofte om live-tv-kanaler over internettet, mens streaming dækker alt video over internettet, også film og serier on demand. Mange tjenester tilbyder i dag begge dele i samme app.",
  },
  {
    q: "Hvad betyder EPG i IPTV?",
    a: "EPG står for elektronisk programguide. Det er tv-oversigten i appen, der viser, hvad der sendes nu og senere på hver kanal.",
  },
  {
    q: "Skal jeg bruge VPN til IPTV?",
    a: "Nej. En lovlig IPTV-tjeneste kræver ikke VPN. En VPN kan gøre billedet mindre stabilt, og den gør ikke ulovligt indhold lovligt.",
  },
  {
    q: "Kan jeg se IPTV på et gammelt tv?",
    a: "Ja, hvis tv'et har en HDMI-indgang. Tilslut en tv-boks som Apple TV, Google TV eller Fire TV Stick, og installer appen på den.",
  },
  {
    q: "Hvor hurtigt internet skal jeg bruge til IPTV?",
    a: "Cirka 10 Mbit/s pr. skærm i HD og 25 Mbit/s i 4K. Ser flere i husstanden samtidig, skal hastighederne lægges sammen.",
  },
];

export default function IptvTvPillar() {
  return (
    <PillarPage
      path={path}
      crumb="IPTV tv"
      title={title}
      intro="Den komplette guide til IPTV: hvad det er, hvordan det virker, og hvad du skal bruge for at se tv over internettet."
      description={description}
      answer={
        <>
          IPTV-tv (Internet Protocol Television, også skrevet <em>ip tv</em>) er tv, der sendes over
          internettet i stedet for via antenne, kabel eller parabol. Du ser live-kanaler og on demand
          i en app på smart-tv, tv-boks, mobil eller computer. Det kræver kun en stabil forbindelse –
          cirka 10 Mbit/s pr. skærm i HD og 25 Mbit/s i 4K.
        </>
      }
      sections={sections}
      faq={faq}
      image={diagramImage}
      about={[
        { name: "IPTV", sameAs: "https://da.wikipedia.org/wiki/IPTV" },
        { name: "Internet Protocol Television", sameAs: "https://en.wikipedia.org/wiki/Internet_Protocol_television" },
      ]}
      related={[
        { href: "/", label: "IPTV Danmark", text: "Vores IPTV-abonnement uden binding" },
        { href: "/iptv-nordic", label: "IPTV Nordic", text: "Nordisk tv over internettet" },
        { href: "/iptv-pa-smart-tv", label: "IPTV på smart-tv", text: "Guide til Samsung, LG og Android TV" },
        { href: "/iptv-boks", label: "IPTV boks", text: "Den bedste tv-boks til IPTV" },
        { href: "/er-iptv-lovligt", label: "Er IPTV lovligt?", text: "Lovlig vs. ulovlig IPTV" },
      ]}
    />
  );
}
