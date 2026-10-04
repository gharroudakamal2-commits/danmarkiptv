import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Faq } from "@/components/Faq";
import { pageMeta } from "@/lib/site";

export const metadata: Metadata = {
  title: "Er IPTV lovligt i Danmark? Det skal du vide",
  description:
    "IPTV er lovligt, når udbyderen har rettighederne. Lær at kende forskel på lovlig og ulovlig IPTV i Danmark, og hvad du risikerer.",
  ...pageMeta("/er-iptv-lovligt"),
};

export default function LegalPage() {
  return (
    <PageShell
      crumbs={[{ name: "Er IPTV lovligt?", href: "/er-iptv-lovligt" }]}
      title="Er IPTV lovligt i Danmark?"
      intro="Lær at kende forskel på lovlig og ulovlig IPTV, og hvad du risikerer."
    >
      <div className="prose-da mt-10">
        <p>
          <strong>Kort svar:</strong> IPTV som teknologi er helt lovligt. Det er den samme
          teknik, som store danske tv-udbydere bruger. Men en IPTV-tjeneste er kun lovlig, hvis
          den har rettighederne til de kanaler og programmer, den sender.
        </p>

        <h2>Sådan kender du ulovlig IPTV</h2>
        <ul>
          <li>Tusindvis af kanaler fra hele verden til en meget lav pris</li>
          <li>Betaling via kryptovaluta, gavekort eller private overførsler</li>
          <li>Ingen dansk virksomhed, CVR-nummer eller kundeservice</li>
          <li>Du skal installere apps uden for den officielle app-butik</li>
        </ul>

        <h2>Hvad risikerer du?</h2>
        <p>
          Ulovlige tjenester bliver jævnligt blokeret af danske internetudbydere og lukket af
          myndighederne. Du kan miste det beløb, du har betalt, og dine betalingsoplysninger kan
          blive misbrugt. Efter dansk ophavsret er det heller ikke tilladt at se med fra en
          kilde, du ved eller burde vide er ulovlig.
        </p>

        <h2>Lovlige alternativer</h2>
        <p>
          Der findes mange lovlige og prisvenlige muligheder – fra gratis public service-streaming til fulde
          tv-pakker. Se <Link href="/bedste-iptv-danmark">vores sammenligning</Link>, læs om{" "}
          <Link href="/iptv-tv">hvad IPTV er</Link>, eller om lovlig <Link href="/iptv-nordic">IPTV Nordic</Link>.
        </p>

        <p className="text-sm">
          <em>Denne side er generel information og ikke juridisk rådgivning.</em>
        </p>
      </div>

      <Faq
        items={[
          {
            q: "Er det ulovligt at se ulovlig IPTV i Danmark?",
            a: "Ja. Ophavsretsloven tillader ikke, at man ser eller kopierer indhold fra en kilde, man ved eller burde vide er ulovlig.",
          },
          {
            q: "Er IPTV-bokse ulovlige?",
            a: "Nej, selve boksen er lovlig. Det afgørende er, hvilken tjeneste du bruger på den.",
          },
        ]}
      />
    </PageShell>
  );
}
