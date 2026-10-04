import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { AnswerBox, KeyFacts, Sources } from "@/components/Pillar";
import { Faq } from "@/components/Faq";
import { pageMeta, site } from "@/lib/site";

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
      updated={site.updated}
    >
      <div className="prose-da mt-10">
        <AnswerBox>
          Ja. IPTV er en almindelig teknologi, som store danske tv-udbydere også bruger. En
          IPTV-tjeneste er i orden, når den har aftaler med rettighedshaverne om de kanaler og
          programmer, den sender. Tjenester uden de aftaler er piratkopiering – og i Danmark må du
          heller ikke selv se med fra en kilde, du ved eller burde vide, er ulovlig.
        </AnswerBox>

        <h2>Sådan genkender du en piratkopieret tjeneste</h2>
        <ul>
          <li>Tusindvis af kanaler fra hele verden til en urealistisk lav pris</li>
          <li>Betaling via kryptovaluta, gavekort eller overførsel til en privatperson</li>
          <li>Ingen virksomhed, adresse, CVR-nummer eller kundeservice</li>
          <li>Apps, der skal hentes som APK-filer uden for de officielle app-butikker</li>
        </ul>

        <h2>Hvad siger loven?</h2>
        <p>
          Ifølge Kulturministeriet kræver lovlig streaming, at filmen eller programmet er
          tilgængeligt med rettighedshavernes tilladelse (<a href="https://kum.dk/kulturomraader/ophavsret/film" target="_blank" rel="noopener noreferrer">kilde: Kulturministeriet</a>).
          Ophavsretsloven gælder altså ikke kun for dem, der udbyder indholdet, men også for dig
          som seer, når kilden åbenlyst ikke har rettighederne.
        </p>

        <h2>Med og uden rettigheder – forskellen</h2>
        <KeyFacts
          caption="Tjeneste med rettigheder vs. piratkopi"
          rows={[
            ["Aftaler", "Med rettigheder: aftaler med kanalerne · Piratkopi: ingen"],
            ["Afsender", "Med rettigheder: navn, adresse og CVR · Piratkopi: anonym"],
            ["Betaling", "Med rettigheder: sikker betaling og kvittering · Piratkopi: krypto, gavekort, privatoverførsel"],
            ["Apps", "Med rettigheder: officielle app-butikker · Piratkopi: APK-filer fra ukendte sider"],
            ["Pris", "Med rettigheder: realistisk · Piratkopi: tusindvis af kanaler for få kroner"],
            ["Drift", "Med rettigheder: stabil drift og support · Piratkopi: lukkes og blokeres jævnligt"],
          ]}
        />

        <h2>Sådan bliver piratkopierede tjenester blokeret</h2>
        <p>
          Når en dansk domstol har afgjort, at en internetudbyder skal DNS-blokere en hjemmeside,
          blokerer alle medlemmer af Teleindustrien den samme side – typisk inden for syv
          arbejdsdage. Med såkaldt dynamisk blokering følger blokeringen med, når tjenesten flytter
          til en ny adresse (<a href="https://www.teleindu.dk/blokeringer-ved-rettighedskraenkelser/" target="_blank" rel="noopener noreferrer">kilde: Teleindustrien</a>).
          Derfor kan en tjeneste pludselig holde op med at virke – og pengene er som regel tabt.
        </p>

        <h2>Hvad risikerer du som seer?</h2>
        <ul>
          <li>At tjenesten bliver blokeret eller lukket, og at du mister det beløb, du har betalt.</li>
          <li>At dine betalingsoplysninger bliver misbrugt.</li>
          <li>Malware fra apps, der ikke kommer fra officielle app-butikker.</li>
          <li>At du selv overtræder ophavsretsloven.</li>
        </ul>

        <h2>Har du købt et abonnement, der viste sig at være piratkopi?</h2>
        <ul>
          <li>Stop med at bruge tjenesten, og afinstaller apps fra ukendte kilder.</li>
          <li>Har du betalt med kort, så kontakt din bank, og hold øje med kontoudtoget.</li>
          <li>Skift adgangskoder, hvis du har genbrugt dem hos tjenesten.</li>
        </ul>

        <h2>Alternativer med rettighederne i orden</h2>
        <p>
          Der findes mange prisvenlige muligheder – fra gratis public service-streaming til fulde
          tv-pakker. Se <Link href="/bedste-iptv-danmark">vores sammenligning</Link>, læs om{" "}
          <Link href="/iptv-tv">hvad IPTV er</Link>, eller om <Link href="/iptv-nordic">IPTV Nordic</Link>.
        </p>

        <p className="text-sm">
          <em>Denne side er generel information og ikke juridisk rådgivning.</em>
        </p>
      </div>

      <Faq
        items={[
          {
            q: "Er det ulovligt at se ulovlig IPTV i Danmark?",
            a: "Ja. Lovlig streaming kræver rettighedshavernes tilladelse, og du må ikke se med fra en kilde, du ved eller burde vide, mangler den tilladelse.",
          },
          {
            q: "Er IPTV-bokse ulovlige?",
            a: "Nej, selve boksen er i orden. Det afgørende er, hvilken tjeneste du bruger på den. Bokse solgt med forudinstallerede piratkopierede tjenester er ikke i orden.",
          },
          {
            q: "Hvordan bliver ulovlige IPTV-tjenester blokeret?",
            a: "Når en domstol har afgjort, at en side skal DNS-blokeres, blokerer de danske internetudbydere i Teleindustrien den, typisk inden for syv arbejdsdage – også når siden flytter til en ny adresse.",
          },
        ]}
      />

      <Sources
        items={[
          { label: "Kulturministeriet – Ophavsret: film", href: "https://kum.dk/kulturomraader/ophavsret/film" },
          { label: "Teleindustrien – Blokeringer ved rettighedskrænkelser", href: "https://www.teleindu.dk/blokeringer-ved-rettighedskraenkelser/" },
        ]}
      />
    </PageShell>
  );
}
