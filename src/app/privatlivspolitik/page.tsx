import type { Metadata } from "next";
import { LegalShell } from "@/components/PageShell";
import { pageMeta, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privatlivspolitik",
  ...pageMeta("/privatlivspolitik"),
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalShell updated={site.updated} crumbs={[{ name: "Privatlivspolitik", href: "/privatlivspolitik" }]} title="Privatlivspolitik">
      {/* TODO: fill in the bracketed company details and have the policy reviewed before launch. */}
      <div>
        <h2>Dataansvarlig</h2>
        <p>
          {site.company.name}, CVR {site.company.cvr}, {site.company.address}. Du kan kontakte os
          om dine data på <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>

        <h2>Hvilke oplysninger vi behandler</h2>
        <ul>
          <li>Navn, telefonnummer og e-mail, når du skriver til os eller køber et abonnement.</li>
          <li>Indholdet af de beskeder, du sender os på WhatsApp eller e-mail.</li>
          <li>Oplysninger om dit køb: abonnement, periode, pris og betaling.</li>
        </ul>
        <p>Hjemmesiden sætter ingen cookies og bruger ikke statistik- eller annonceværktøjer.</p>

        <h2>Formål og retsgrundlag</h2>
        <ul>
          <li>
            <strong>Levering af dit abonnement og kundeservice</strong> – for at opfylde aftalen
            med dig (GDPR art. 6, stk. 1, litra b).
          </li>
          <li>
            <strong>Bogføring</strong> – fordi bogføringsloven kræver det (GDPR art. 6, stk. 1,
            litra c).
          </li>
        </ul>

        <h2>Hvem vi deler oplysningerne med</h2>
        <p>
          Vi bruger WhatsApp (Meta) til kommunikation og [betalingsudbyder] til betaling. WhatsApp
          kan overføre oplysninger til lande uden for EU, herunder USA, på grundlag af EU&apos;s
          standardkontraktbestemmelser eller EU-U.S. Data Privacy Framework. Vi sælger aldrig dine
          oplysninger.
        </p>

        <h2>Hvor længe vi gemmer oplysningerne</h2>
        <p>
          Beskeder og kundeoplysninger gemmer vi, så længe du er kunde, og op til 12 måneder
          derefter. Regnskabsmateriale gemmer vi i 5 år efter regnskabsårets udløb, som
          bogføringsloven kræver.
        </p>

        <h2>Dine rettigheder</h2>
        <p>
          Du har ret til at få indsigt i, rette og slette dine oplysninger, til at begrænse eller
          gøre indsigelse mod behandlingen og til at få dine oplysninger udleveret (dataportabilitet).
          Skriv til <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
        <p>
          Du kan klage over vores behandling til Datatilsynet, Carl Jacobsens Vej 35, 2500 Valby,{" "}
          <a href="https://www.datatilsynet.dk" target="_blank" rel="noopener noreferrer">datatilsynet.dk</a>.
        </p>
      </div>
    </LegalShell>
  );
}
