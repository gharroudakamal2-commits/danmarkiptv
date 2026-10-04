import type { Metadata } from "next";
import Link from "next/link";
import { Faq } from "@/components/Faq";
import { PageShell } from "@/components/PageShell";
import { TypesTable } from "@/components/TypesTable";
import { iptvTypes } from "@/lib/iptvTypes";
import { pageMeta, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Bedste IPTV i Danmark 2026 – Sådan vælger du rigtigt",
  description:
    "Hvad er den bedste IPTV i Danmark? Sammenlign tv-pakker, streaming med live-tv, sportsstreaming og gratis løsninger på kanaler, sport, binding og pris.",
  ...pageMeta("/bedste-iptv-danmark"),
};

export default function BestIptvPage() {
  return (
    <PageShell
      wide
      crumbs={[{ name: "Bedste IPTV i Danmark", href: "/bedste-iptv-danmark" }]}
      title="Bedste IPTV i Danmark (2026)"
      intro="Den bedste IPTV afhænger af, hvad du vil se. Her sammenligner vi de fire typer af lovlige tv-løsninger i Danmark på kanaler, sport, binding og pris."
      updated={site.updated}
    >
      <div className="-mt-6">
        <TypesTable types={iptvTypes} />
      </div>

      <div className="prose-da mt-14 max-w-3xl">
        <p className="text-sm">
          <em>
            Bemærk: {site.name} sælger selv <Link href="/iptv-abonnement">IPTV-abonnementer</Link>.
            Sammenligningen dækker generelle typer af tv-løsninger og nævner ikke andre udbydere.
          </em>
        </p>
        <h2>Sådan har vi vurderet</h2>
        <ul>
          <li><strong>Kanaler:</strong> Hvor mange danske kanaler og hvilke typer indhold der er med.</li>
          <li><strong>Sport:</strong> Fodbold, håndbold, F1 og andre populære sportsgrene.</li>
          <li><strong>Enheder:</strong> Apps til smart-tv, tv-boks og mobil.</li>
          <li><strong>Pris og binding:</strong> Hvad får du for pengene, og kan du opsige løbende.</li>
        </ul>

        {iptvTypes.map((t, i) => (
          <section key={t.slug}>
            <h2>{i + 1}. {t.name}</h2>
            <p>
              {t.tagline}. <strong>Bedst til:</strong> {t.bestFor.toLowerCase()}.
            </p>
            <h3>Fordele</h3>
            <ul>{t.pros.map((x) => <li key={x}>{x}</li>)}</ul>
            <h3>Ulemper</h3>
            <ul>{t.cons.map((x) => <li key={x}>{x}</li>)}</ul>
          </section>
        ))}

        <h2>Næste skridt</h2>
        <p>
          Tjek at din løsning virker på dit <Link href="/iptv-pa-smart-tv">smart-tv</Link>, og at
          dit <Link href="/guides/hvor-hurtigt-internet-til-iptv">internet er hurtigt nok</Link>. Se
          også vores <Link href="/">IPTV Danmark-abonnement</Link> og guiden til{" "}
          <Link href="/iptv-nordic">IPTV Nordic</Link>.
        </p>
      </div>

      <div className="max-w-3xl">
        <Faq
          items={[
            {
              q: "Hvilken IPTV er bedst til sport i Danmark?",
              a: "Sportsrettighederne er fordelt mellem flere udbydere og skifter jævnligt. Tjek, hvem der viser netop din liga i denne sæson, før du vælger abonnement.",
            },
            {
              q: "Findes der gratis IPTV i Danmark?",
              a: "Ja. Public service-kanalerne kan streames gratis og lovligt. Gratis tilbud med mange betalingskanaler er derimod typisk ulovlige.",
            },
            {
              q: "Kan jeg opsige min IPTV når som helst?",
              a: "Mange streamingtjenester kan opsiges løbende, mens nogle tv-pakker har binding. Læs altid vilkårene, før du tilmelder dig.",
            },
          ]}
        />
      </div>
    </PageShell>
  );
}
