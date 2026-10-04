import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell } from "@/components/PageShell";
import { pageMeta, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ansvarsfraskrivelse",
  description: `Ansvarsfraskrivelse for indholdet på ${site.name}: guides, eksterne links og varemærker.`,
  ...pageMeta("/ansvarsfraskrivelse"),
};

export default function DisclaimerPage() {
  return (
    <LegalShell
      updated={site.updated}
      crumbs={[{ name: "Ansvarsfraskrivelse", href: "/ansvarsfraskrivelse" }]}
      title="Ansvarsfraskrivelse"
      intro="Om de oplysninger, guides og links, du finder på hjemmesiden."
    >
      <h2>Generel information</h2>
      <p>
        Guides og artikler på {site.name} er generel information om tv, streaming og IPTV. De er
        ikke juridisk eller teknisk rådgivning. Vi gør vores bedste for, at oplysningerne er
        korrekte og opdaterede, men forhold som sportsrettigheder, priser hos andre og
        lovgivning kan ændre sig.
      </p>

      <h2>Vi sælger selv IPTV-abonnementer</h2>
      <p>
        {site.name} sælger IPTV-abonnementer. Vores guides og sammenligninger er skrevet af os
        som udbyder og er derfor ikke uafhængige. Læs mere <Link href="/om-os">om os</Link>.
      </p>

      <h2>Eksterne links</h2>
      <p>
        Hjemmesiden kan linke til andre hjemmesider, fx myndigheder og app-butikker. Vi har ikke
        kontrol over deres indhold og er ikke ansvarlige for det.
      </p>

      <h2>Varemærker</h2>
      <p>
        Navne som Apple TV, Google TV, Fire TV, Chromecast, Samsung, LG, Android og WhatsApp er
        varemærker, der tilhører deres respektive ejere. Vi nævner dem kun for at beskrive, hvilke
        enheder og tjenester der kan bruges. {site.name} er ikke tilknyttet eller godkendt af
        disse virksomheder.
      </p>

      <h2>Fejl og mangler</h2>
      <p>
        Finder du en fejl på siden, så skriv til <a href={`mailto:${site.email}`}>{site.email}</a>,
        så retter vi den.
      </p>
    </LegalShell>
  );
}
