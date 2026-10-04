import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell } from "@/components/PageShell";
import { pageMeta, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fortrydelsesret",
  description: `Sådan fortryder du dit køb hos ${site.name}: 14 dages fortrydelsesret, tilbagebetaling og standardfortrydelsesformular.`,
  ...pageMeta("/fortrydelsesret"),
};

export default function WithdrawalPage() {
  return (
    <LegalShell
      updated={site.updated}
      crumbs={[{ name: "Fortrydelsesret", href: "/fortrydelsesret" }]}
      title="Fortrydelsesret"
      intro="Du har 14 dages fortrydelsesret, når du køber et abonnement hos os. Her kan du se, hvordan du bruger den."
    >
      {/* TODO: have this page reviewed by a lawyer together with the sales terms before launch. */}
      <h2>Fristen</h2>
      <p>
        Du kan fortryde dit køb i 14 dage. Fristen løber fra den dag, aftalen er indgået – det vil
        sige den dag, vi har bekræftet din bestilling skriftligt.
      </p>

      <h2>Sådan fortryder du</h2>
      <p>
        Giv os en klar besked om, at du vil fortryde, inden fristen udløber. Skriv til{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> eller på WhatsApp ({site.whatsapp.display}).
        Du kan bruge standardfortrydelsesformularen nedenfor, men det er ikke et krav.
      </p>

      <h2>Hvis abonnementet allerede er startet</h2>
      <p>
        Beder du os om at starte abonnementet, før fortrydelsesfristen er udløbet, og fortryder
        du derefter, skal du betale et beløb, der svarer til den del af perioden, du har haft
        adgang, frem til du gav os besked. Resten af beløbet får du tilbage.
      </p>

      <h2>Tilbagebetaling</h2>
      <p>
        Vi tilbagebetaler beløbet senest 14 dage efter, at vi har modtaget din besked. Vi bruger
        samme betalingsmiddel, som du betalte med, medmindre vi aftaler andet. Det koster dig
        ikke noget.
      </p>

      <h2>Standardfortrydelsesformular</h2>
      <p>Udfyld og returner kun formularen, hvis du vil fortryde aftalen.</p>
      <div className="my-6 rounded-2xl border border-line bg-paper p-6 text-sm leading-7 text-ink">
        <p>
          Til: {site.company.name}, {site.company.address}, {site.email}
        </p>
        <p className="mt-4">
          Jeg/vi (*) meddeler herved, at jeg/vi (*) ønsker at gøre fortrydelsesretten gældende i
          forbindelse med min/vores (*) købeaftale om levering af følgende tjenesteydelse (*):
        </p>
        <ul className="mt-4 space-y-2">
          <li>Abonnement og periode: ______________________</li>
          <li>Bestilt den (*) / bekræftet den (*): ______________________</li>
          <li>Forbrugerens/forbrugernes navn: ______________________</li>
          <li>Forbrugerens/forbrugernes adresse: ______________________</li>
          <li>Forbrugerens/forbrugernes underskrift (kun hvis formularen sendes på papir): ______________________</li>
          <li>Dato: ______________________</li>
        </ul>
        <p className="mt-4 text-muted">(*) Det ikke relevante udstreges.</p>
      </div>

      <p>
        Se også vores <Link href="/handelsbetingelser">handelsbetingelser</Link>.
      </p>
    </LegalShell>
  );
}
