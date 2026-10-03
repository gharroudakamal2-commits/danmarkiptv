import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Om os",
  description: `Om ${site.name}: hvem vi er, og hvordan vi tester og sammenligner IPTV i Danmark.`,
  alternates: { canonical: "/om-os" },
};

export default function AboutPage() {
  return (
    <PageShell
      crumbs={[{ name: "Om os", href: "/om-os" }]}
      title={`Om ${site.name}`}
      intro="En uafhængig guide til tv og streaming i Danmark."
    >
      <div className="prose-da mt-10">
        {/* TODO: add real names, photos and experience — Google rewards real authors (E-E-A-T). */}
        <p>
          {site.name} er en uafhængig guide til tv og streaming i Danmark. Vi tester og
          sammenligner lovlige IPTV-tjenester, så du nemt kan finde den løsning, der passer til dig.
        </p>
        <h2>Sådan tjener vi penge</h2>
        <p>
          Nogle links på siden er affiliate-links. Hvis du køber via dem, kan vi få en provision
          uden ekstra omkostning for dig. Det påvirker ikke vores vurderinger.
        </p>
      </div>
    </PageShell>
  );
}
