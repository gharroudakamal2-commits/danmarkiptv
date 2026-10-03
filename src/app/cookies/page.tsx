import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookiepolitik",
  alternates: { canonical: "/cookies" },
  robots: { index: false, follow: true },
};

export default function CookiesPage() {
  return (
    <PageShell crumbs={[{ name: "Cookies", href: "/cookies" }]} title="Cookiepolitik">
      <div className="prose-da mt-6">
        {/* TODO: list every cookie you set (analytics, affiliate tracking) before launch. */}
        <p>
          {site.name} bruger kun nødvendige cookies, som får siden til at fungere. Hvis vi
          tilføjer statistik- eller marketingcookies, beder vi om dit samtykke først, og du kan
          altid trække det tilbage.
        </p>
        <h2>Affiliate-links</h2>
        <p>
          Når du klikker på et link til en udbyder, kan udbyderen eller et affiliate-netværk sætte
          cookies for at registrere, at du kom fra os. Det sker på deres side og efter deres
          cookiepolitik.
        </p>
        <p>Spørgsmål kan sendes til {site.email}.</p>
      </div>
    </PageShell>
  );
}
