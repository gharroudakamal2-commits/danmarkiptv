import type { Metadata } from "next";
import Link from "next/link";
import { Faq } from "@/components/Faq";
import { PageShell } from "@/components/PageShell";
import { PricingTable } from "@/components/PricingTable";
import { TypesTable } from "@/components/TypesTable";
import { iptvTypes } from "@/lib/iptvTypes";
import { plans } from "@/lib/plans";

export const metadata: Metadata = {
  title: "IPTV abonnement – Sammenlign priser og pakker",
  description:
    "Find det rigtige IPTV abonnement i Danmark. Sammenlign tv-pakker, streamingtjenester, binding og gratis muligheder.",
  alternates: { canonical: "/iptv-abonnement" },
};

export default function SubscriptionPage() {
  return (
    <PageShell
      wide
      crumbs={[{ name: "IPTV abonnement", href: "/iptv-abonnement" }]}
      title="IPTV abonnement i Danmark"
      intro="Et IPTV abonnement giver dig adgang til live-tv og on demand via internettet. Her er, hvad du skal kigge efter, og hvilke lovlige abonnementer der findes."
    >
      <div className="mt-10">
        <TypesTable types={iptvTypes} />
      </div>

      <section id="priser" className="mt-16 scroll-mt-24">
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Priser</h2>
        <p className="mt-2 text-muted">Enkle priser uden binding. Jo længere periode, jo lavere månedspris.</p>
        <div className="mt-8">
          <PricingTable plans={plans} />
        </div>
      </section>

      <div className="prose-da mt-14 max-w-3xl">
        <h2>Typer af IPTV abonnementer</h2>
        <h3>Tv-pakker</h3>
        <p>
          Klassiske tv-pakker med mange danske og udenlandske kanaler, som du ser via en app eller
          tv-boks. Godt valg, hvis du vil have et bredt kanaludvalg samlet ét sted.
        </p>
        <h3>Streamingtjenester med live-tv</h3>
        <p>
          Streamingtjenester med live-tv kombinerer live-kanaler med indhold on demand. De kan
          ofte opsiges løbende og er nemme at komme i gang med.
        </p>
        <h3>Gratis tv</h3>
        <p>
          Public service-kanalerne kan streames gratis og lovligt. Læs mere i vores guide til{" "}
          <Link href="/guides/gratis-tv-i-danmark">gratis tv i Danmark</Link>.
        </p>

        <h2>Det skal du kigge efter</h2>
        <ul>
          <li><strong>Kanaler:</strong> Er de kanaler, du ser mest, med i pakken?</li>
          <li><strong>Sport:</strong> Har udbyderen rettighederne til din liga i denne sæson?</li>
          <li><strong>Binding:</strong> Kan du opsige løbende, eller er der en bindingsperiode?</li>
          <li><strong>Antal skærme:</strong> Hvor mange kan se samtidig?</li>
          <li><strong>Apps:</strong> Virker tjenesten på dit <Link href="/iptv-pa-smart-tv">smart-tv</Link> eller din <Link href="/iptv-boks">tv-boks</Link>?</li>
        </ul>

        <h2>Hvorfor ikke vælge et billigt IPTV abonnement fra nettet?</h2>
        <p>
          Abonnementer med tusindvis af kanaler til næsten ingen penge er ulovlige og bliver
          jævnligt lukket. Læs mere om <Link href="/er-iptv-lovligt">hvornår IPTV er lovligt</Link>.
        </p>
      </div>

      <div className="max-w-3xl">
        <Faq
          items={[
            {
              q: "Hvad koster et IPTV abonnement i Danmark?",
              a: "Prisen afhænger af kanaludvalget. Streamingtjenester med færre kanaler er billigst, mens store tv-pakker med sport koster mest. Public service-streaming er gratis.",
            },
            {
              q: "Kan jeg dele mit IPTV abonnement?",
              a: "De fleste udbydere tillader flere skærme i samme husstand. Deling med andre husstande er typisk ikke tilladt efter vilkårene.",
            },
          ]}
        />
      </div>
    </PageShell>
  );
}
