import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { pageMeta, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Om os",
  description: `Om ${site.name}: hvem vi er, hvad vi sælger, og hvordan du kontakter os.`,
  ...pageMeta("/om-os"),
};

export default function AboutPage() {
  return (
    <PageShell
      crumbs={[{ name: "Om os", href: "/om-os" }]}
      title={`Om ${site.name}`}
      intro="IPTV-abonnement uden binding – og guides til at få mest muligt ud af tv over internettet."
    >
      <div className="prose-da mt-10">
        {/* TODO: add real names, photos and experience — Google rewards real authors (E-E-A-T). */}
        <p>
          {site.name} drives af {site.company.name} (CVR {site.company.cvr}). Vi sælger
          IPTV-abonnementer til live-tv og on demand, som du kan se på smart-tv, tv-boks, mobil og
          computer.
        </p>
        <h2>Sådan tjener vi penge</h2>
        <p>
          Vi tjener penge på de abonnementer, vi sælger. Vores guides og sammenligninger er skrevet
          af os som udbyder, så de er ikke uafhængige – men vi forsøger altid at give et retvisende
          billede af dine muligheder.
        </p>
        <h2>Kontakt</h2>
        <p>
          {site.company.name}, {site.company.address}. Skriv til{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>, eller se flere muligheder på{" "}
          <Link href="/kontakt">kontaktsiden</Link>. Læs også vores{" "}
          <Link href="/handelsbetingelser">handelsbetingelser</Link>.
        </p>
      </div>
    </PageShell>
  );
}
