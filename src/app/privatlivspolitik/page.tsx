import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privatlivspolitik",
  alternates: { canonical: "/privatlivspolitik" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <PageShell crumbs={[{ name: "Privatlivspolitik", href: "/privatlivspolitik" }]} title="Privatlivspolitik">
      <div className="prose-da mt-10">
        {/* TODO: replace with a full GDPR policy (company details, analytics, cookies) before launch. */}
        <p>
          {site.name} indsamler kun de oplysninger, der er nødvendige for at drive siden. Hvis vi
          bruger statistik- eller marketingcookies, beder vi først om dit samtykke.
        </p>
        <p>Spørgsmål om dine data kan sendes til {site.email}.</p>
      </div>
    </PageShell>
  );
}
