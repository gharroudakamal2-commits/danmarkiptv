import type { Metadata } from "next";
import Link from "next/link";
import type { FaqItem } from "@/components/Faq";
import mapImage from "../../../public/images/pillar-iptv-nordic.jpg";
import travelImage from "../../../public/images/pillar-nordic-travel.jpg";
import { Figure, KeyFacts, PillarPage, type PillarSection } from "@/components/Pillar";
import { pageMeta } from "@/lib/site";

const path = "/iptv-nordic";
const title = "IPTV Nordic: se nordisk tv over internettet";
const description =
  "IPTV Nordic (nordic IPTV) er tv over internettet fra Danmark, Sverige, Norge og Finland. Alt om nordisk IPTV, rejser og valg af lovlig udbyder.";

export const metadata: Metadata = {
  title: "IPTV Nordic – nordisk tv over internettet",
  description,
  ...pageMeta(path, { publishedTime: "2026-10-03" }),
};

const sections: PillarSection[] = [
  {
    id: "hvad-er-iptv-nordic",
    title: "Hvad betyder IPTV Nordic?",
    body: (
      <>
        <p>
          <strong>IPTV Nordic</strong> – eller <em>nordic IPTV</em> – er en samlebetegnelse for
          tv over internettet med fokus på de nordiske lande: Danmark, Sverige, Norge og Finland.
          Begrebet bruges om tjenester, der samler nordiske tv-kanaler, sport og on demand-indhold
          i én app.
        </p>
        <Figure
          src={mapImage}
          alt="Kort over Norden med lysende netværksforbindelser mellem Danmark, Sverige, Norge og Finland under nordlys"
          caption="IPTV Nordic dækker tv over internettet i Danmark, Sverige, Norge og Finland."
        />
        <p>
          Teknisk er der ingen forskel på nordisk IPTV og anden IPTV. Signalet sendes over
          internettet og afspilles i en app. Læs den fulde forklaring i guiden{" "}
          <Link href="/iptv-tv">IPTV tv: hvad er IP-tv?</Link>
        </p>
      </>
    ),
  },
  {
    id: "public-service",
    title: "Nordisk public service-tv, du kan streame gratis",
    body: (
      <>
        <p>
          Hvert nordisk land har en public service-tv-station med en gratis streamingtjeneste.
          Det er en lovlig og gratis måde at se nordisk tv på – men meget af indholdet er
          geoblokeret og kan kun ses i det land, tjenesten hører til.
        </p>
        <div className="not-prose my-6 overflow-x-auto rounded-2xl border border-line">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead className="border-b border-line bg-paper">
              <tr>
                <th className="p-4 font-semibold text-ink">Land</th>
                <th className="p-4 font-semibold text-ink">Public service</th>
                <th className="p-4 font-semibold text-ink">Streamingtjeneste</th>
                <th className="p-4 font-semibold text-ink">Pris</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line text-muted">
              <tr><th scope="row" className="p-4 font-medium text-ink">Danmark</th><td className="p-4">DR</td><td className="p-4">DRTV</td><td className="p-4">Gratis</td></tr>
              <tr><th scope="row" className="p-4 font-medium text-ink">Sverige</th><td className="p-4">SVT</td><td className="p-4">SVT Play</td><td className="p-4">Gratis</td></tr>
              <tr><th scope="row" className="p-4 font-medium text-ink">Norge</th><td className="p-4">NRK</td><td className="p-4">NRK TV</td><td className="p-4">Gratis</td></tr>
              <tr><th scope="row" className="p-4 font-medium text-ink">Finland</th><td className="p-4">Yle</td><td className="p-4">Yle Areena</td><td className="p-4">Gratis</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          Kommercielle kanaler og de fleste sportsrettigheder kræver et abonnement. Rettighederne
          sælges typisk land for land, så det samme program kan ligge hos forskellige udbydere i
          Danmark, Sverige og Norge.
        </p>
      </>
    ),
  },
  {
    id: "paa-rejse",
    title: "Se nordisk tv, når du er på rejse",
    body: (
      <>
        <p>
          Bor du i et EU-land og betaler for en streamingtjeneste, giver EU&apos;s
          portabilitetsforordning (forordning 2017/1128) dig ret til at bruge abonnementet, når du
          midlertidigt opholder dig i et andet EU-land – fx på ferie i Sverige eller Finland.
        </p>
        <Figure
          src={travelImage}
          alt="Tablet med tv i en hyggelig nordisk hytte med nordlys uden for vinduet"
          caption="Betalte abonnementer virker, når du midlertidigt er i et andet EU-land – fx på skiferie i Sverige eller Finland."
        />
        <KeyFacts
          caption="Nordisk tv på rejse – det korte overblik"
          rows={[
            ["Betalt abonnement, rejse i EU", "Virker som hjemme (portabilitetsforordningen)"],
            ["Gratis public service-tv i udlandet", "Ofte geoblokeret – afhænger af tjenesten"],
            ["Rejse til Norge eller uden for EU", "Ingen garanti – afhænger af udbyderens vilkår"],
          ]}
        />
      </>
    ),
  },
  {
    id: "vaelg-udbyder",
    title: "Sådan vælger du en nordisk IPTV-udbyder",
    body: (
      <>
        <p>Brug denne tjekliste, før du betaler for en nordisk IPTV-tjeneste:</p>
        <ul>
          <li><strong>Rettigheder:</strong> Har udbyderen ret til at sende kanalerne? Lovlige udbydere kan oplyse det.</li>
          <li><strong>Virksomhed:</strong> Er der navn, adresse og CVR-nummer (eller tilsvarende) på hjemmesiden?</li>
          <li><strong>Betaling:</strong> Kan du betale sikkert og få en kvittering – ikke kun via kryptovaluta eller gavekort?</li>
          <li><strong>Apps:</strong> Findes appen i den officielle app-butik til din enhed?</li>
          <li><strong>Binding og fortrydelse:</strong> Er det tydeligt, hvor længe du er bundet, og kan du fortryde?</li>
          <li><strong>Support:</strong> Kan du få hjælp, når noget ikke virker?</li>
        </ul>
      </>
    ),
  },
  {
    id: "lovligt",
    title: "Er nordisk IPTV lovligt?",
    body: (
      <>
        <p>
          Nordisk IPTV er lovligt, når tjenesten har rettighederne til det indhold, den sender.
          Tilbud med &quot;alle nordiske kanaler&quot; og tusindvis af internationale kanaler til
          få kroner om måneden er næsten altid ulovlige. De bliver jævnligt blokeret af
          internetudbydere i Danmark, Sverige og Norge, og i Danmark er det også ulovligt at se
          med fra en kilde, du ved eller burde vide er ulovlig.
        </p>
        <p>
          Læs mere i <Link href="/er-iptv-lovligt">er IPTV lovligt i Danmark</Link>.
        </p>
      </>
    ),
  },
  {
    id: "kom-i-gang",
    title: "Kom i gang",
    body: (
      <p>
        Se <Link href="/iptv-abonnement">priserne på vores IPTV-abonnement</Link>, eller følg
        guiden <Link href="/kom-i-gang">kom i gang med IPTV</Link>. Har du spørgsmål om indholdet,
        så <Link href="/kontakt">kontakt os</Link>, før du bestiller.
      </p>
    ),
  },
];

const faq: FaqItem[] = [
  {
    q: "Hvad er IPTV Nordic?",
    a: "IPTV Nordic (nordic IPTV) er tv over internettet med fokus på kanaler og indhold fra Danmark, Sverige, Norge og Finland. Teknisk er det almindelig IPTV, der afspilles i en app.",
  },
  {
    q: "Kan jeg se svensk og norsk tv i Danmark?",
    a: "Delvist. SVT Play og NRK TV er gratis, men meget indhold er geoblokeret uden for Sverige og Norge. Kommercielle nordiske kanaler kræver et abonnement hos en udbyder med rettigheder i Danmark.",
  },
  {
    q: "Virker mit tv-abonnement, når jeg er i Sverige eller Norge?",
    a: "I Sverige og Finland: ja. Betalte abonnementer skal virke, når du midlertidigt er i et andet EU-land, efter EU's portabilitetsforordning. Norge er ikke med i EU, så dér afhænger det af udbyderens vilkår. Gratis tjenester kan være geoblokeret.",
  },
  {
    q: "Er nordisk IPTV lovligt?",
    a: "Ja, når udbyderen har rettighederne til kanalerne. Billige tilbud med alle nordiske og tusindvis af internationale kanaler er næsten altid ulovlige.",
  },
  {
    q: "Skal jeg bruge VPN til nordisk IPTV?",
    a: "Nej, ikke til en lovlig tjeneste i dit hjemland. Brug af VPN til at omgå geoblokering kan stride mod tjenestens vilkår.",
  },
];

export default function IptvNordicPillar() {
  return (
    <PillarPage
      path={path}
      crumb="IPTV Nordic"
      title={title}
      intro="Alt om nordisk IPTV: hvad begrebet dækker, hvilke kanaler du kan se gratis, hvad der gælder på rejser, og hvordan du vælger en lovlig udbyder."
      description={description}
      answer={
        <>
          IPTV Nordic (nordic IPTV) er tv over internettet med kanaler og indhold fra Danmark,
          Sverige, Norge og Finland. Public service-tv fra DR, SVT, NRK og Yle kan streames gratis,
          men er ofte geoblokeret. Kommercielle kanaler og sport kræver et abonnement – og en lovlig
          udbyder skal have rettighederne til det, den sender.
        </>
      }
      sections={sections}
      faq={faq}
      image={mapImage}
      about={[
        { name: "IPTV", sameAs: "https://da.wikipedia.org/wiki/IPTV" },
        { name: "Norden", sameAs: "https://da.wikipedia.org/wiki/Norden" },
      ]}
      related={[
        { href: "/", label: "IPTV Danmark", text: "Vores IPTV-abonnement uden binding" },
        { href: "/iptv-tv", label: "IPTV tv", text: "Hvad er IPTV, og hvordan virker det?" },
        { href: "/er-iptv-lovligt", label: "Er IPTV lovligt?", text: "Lovlig vs. ulovlig IPTV" },
        { href: "/sport", label: "Sport på IPTV", text: "Superliga, Champions League, F1 og håndbold" },
        { href: "/guides/gratis-tv-i-danmark", label: "Gratis tv i Danmark", text: "Se tv lovligt uden abonnement" },
      ]}
    />
  );
}
