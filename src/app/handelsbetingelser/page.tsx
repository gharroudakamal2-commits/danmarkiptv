import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell } from "@/components/PageShell";
import { pageMeta, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Handelsbetingelser",
  description: `Handelsbetingelser for køb af IPTV-abonnement hos ${site.name}: bestilling, betaling, levering, fortrydelsesret og klager.`,
  ...pageMeta("/handelsbetingelser"),
};

export default function TermsPage() {
  return (
    <LegalShell
      updated={site.updated}
      crumbs={[{ name: "Handelsbetingelser", href: "/handelsbetingelser" }]}
      title="Handelsbetingelser"
      intro={`Betingelserne gælder, når du køber et IPTV-abonnement hos ${site.name}.`}
    >
      {/* TODO: fill in every bracketed value and have the terms reviewed by a lawyer before launch. */}
      <div>
        <h2>Virksomhedsoplysninger</h2>
        <ul>
          <li><strong>Virksomhed:</strong> {site.company.name}</li>
          <li><strong>CVR:</strong> {site.company.cvr}</li>
          <li><strong>Adresse:</strong> {site.company.address}</li>
          <li><strong>E-mail:</strong> <a href={`mailto:${site.email}`}>{site.email}</a></li>
          <li><strong>WhatsApp:</strong> {site.whatsapp.display}</li>
        </ul>

        <h2>Abonnementer og priser</h2>
        <p>
          Du kan se vores abonnementer og deres indhold på siden{" "}
          <Link href="/iptv-abonnement#priser">IPTV abonnement</Link>. Alle priser er angivet i
          danske kroner og er de samlede priser, du betaler. [Skriv om priserne er inkl. moms.]
        </p>

        <h2>Bestilling og betaling</h2>
        <p>
          Du bestiller ved at skrive til os på WhatsApp eller e-mail. Aftalen er indgået, når vi
          har bekræftet din bestilling skriftligt med abonnement, periode og pris. Du kan betale
          med [betalingsmetoder]. Vi sender en kvittering, når betalingen er modtaget.
        </p>

        <h2>Levering</h2>
        <p>
          Når betalingen er modtaget, sender vi dine login-oplysninger og en vejledning til
          opsætningen via WhatsApp eller e-mail, normalt inden for [antal timer].
        </p>

        <h2>Løbetid og opsigelse</h2>
        <p>
          Abonnementet gælder for den periode, du har betalt for, og fornyes ikke automatisk. Der
          er ingen binding ud over den betalte periode.
        </p>

        <h2>Fortrydelsesret</h2>
        <p>
          Du har 14 dages fortrydelsesret fra den dag, aftalen er indgået. Vil du fortryde, skal du
          give os en klar besked på e-mail eller WhatsApp inden fristen. Du kan bruge
          Forbrugerombudsmandens standardfortrydelsesformular, men det er ikke et krav.
        </p>
        <p>
          Beder du os om at starte abonnementet, før fortrydelsesfristen er udløbet, og fortryder du
          derefter, skal du betale for den del af perioden, du har haft adgang. Resten af beløbet
          tilbagebetaler vi senest 14 dage efter, at vi har modtaget din besked, med samme
          betalingsmiddel som du brugte.
        </p>

        <h2>Krav til udstyr og internet</h2>
        <p>
          Du skal bruge en internetforbindelse på mindst 10 Mbit/s til HD og 25 Mbit/s til 4K samt
          en enhed, der understøtter tjenesten, fx et smart-tv, en tv-boks, en mobil eller en
          computer. Se vores guide til{" "}
          <Link href="/guides/hvor-hurtigt-internet-til-iptv">internethastighed</Link>.
        </p>

        <h2>Fejl og reklamation</h2>
        <p>
          Virker tjenesten ikke som aftalt, har du ret til at reklamere efter dansk lovgivning.
          Kontakt os hurtigst muligt med en beskrivelse af problemet, så hjælper vi dig.
        </p>

        <h2>Klager</h2>
        <p>
          Har du en klage, så kontakt os først på <a href={`mailto:${site.email}`}>{site.email}</a>.
          Finder vi ikke en løsning, kan du klage til Nævnenes Hus, Toldboden 2, 8800 Viborg, via{" "}
          <a href="https://naevneneshus.dk" target="_blank" rel="noopener noreferrer">naevneneshus.dk</a>.
        </p>

        <h2>Persondata</h2>
        <p>
          Vi behandler dine oplysninger efter vores{" "}
          <Link href="/privatlivspolitik">privatlivspolitik</Link>.
        </p>

        <h2>Lovvalg</h2>
        <p>Aftalen er underlagt dansk ret.</p>
      </div>
    </LegalShell>
  );
}
