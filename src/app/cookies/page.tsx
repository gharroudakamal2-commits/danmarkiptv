import type { Metadata } from "next";
import { LegalShell } from "@/components/PageShell";
import { pageMeta, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookiepolitik",
  ...pageMeta("/cookies"),
  robots: { index: false, follow: true },
};

export default function CookiesPage() {
  return (
    <LegalShell updated={site.updated} crumbs={[{ name: "Cookies", href: "/cookies" }]} title="Cookiepolitik">
      <div>
        {/* TODO: if you add analytics or ads, list every cookie here and add a consent banner. */}
        <p>
          {site.name} sætter ingen cookies. Hvis vi senere tilføjer statistik- eller
          marketingcookies, beder vi om dit samtykke først, og du kan altid trække det tilbage.
        </p>
        <h2>WhatsApp</h2>
        <p>
          Når du klikker på en WhatsApp-knap, åbnes WhatsApp, som drives af Meta. WhatsApp kan
          sætte egne cookies efter sin egen cookie- og privatlivspolitik.
        </p>
        <p>Spørgsmål kan sendes til {site.email}.</p>
      </div>
    </LegalShell>
  );
}
