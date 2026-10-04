import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell } from "@/components/PageShell";
import { pageMeta, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Brugsvilkår",
  description: `Brugsvilkår for ${site.name}: personlig brug, antal skærme, deling, tilgængelighed og ansvar.`,
  ...pageMeta("/brugsvilkaar"),
};

export default function TermsOfUsePage() {
  return (
    <LegalShell
      updated={site.updated}
      crumbs={[{ name: "Brugsvilkår", href: "/brugsvilkaar" }]}
      title="Brugsvilkår"
      intro="Vilkårene gælder for din brug af hjemmesiden og af dit abonnement. De supplerer handelsbetingelserne."
    >
      {/* TODO: have the terms reviewed by a lawyer before launch. */}
      <h2>Personlig brug</h2>
      <p>
        Abonnementet er til privat brug i din egen husstand. Du må se på det antal skærme samtidig,
        som dit abonnement giver.
      </p>

      <h2>Login og deling</h2>
      <ul>
        <li>Dine login-oplysninger er personlige. Pas på dem, og del dem ikke uden for husstanden.</li>
        <li>Du må ikke videresælge, udleje eller på anden måde give andre adgang til abonnementet.</li>
        <li>Du må ikke optage, kopiere eller videresende indhold til andre.</li>
        <li>Du må ikke forsøge at omgå tekniske begrænsninger, fx antallet af skærme.</li>
      </ul>

      <h2>Hvis vilkårene ikke overholdes</h2>
      <p>
        Overtræder du vilkårene væsentligt, kan vi lukke adgangen til abonnementet efter at have
        givet dig besked. Det påvirker ikke de rettigheder, du har efter dansk
        forbrugerlovgivning.
      </p>

      <h2>Tilgængelighed og ændringer</h2>
      <p>
        Vi arbejder for, at tjenesten er stabil, men kan ikke garantere, at den altid er
        tilgængelig uden afbrydelser, fx ved vedligeholdelse eller fejl hos tredjepart.
        Indholdet kan ændre sig i løbet af perioden. Er tjenesten væsentligt ringere end aftalt,
        kan du reklamere efter{" "}
        <Link href="/handelsbetingelser">handelsbetingelserne</Link>.
      </p>

      <h2>Hjemmesiden</h2>
      <p>
        Tekster, design og grafik på {site.name} tilhører {site.company.name} og må ikke kopieres
        uden tilladelse. Læs også vores <Link href="/ansvarsfraskrivelse">ansvarsfraskrivelse</Link>.
      </p>

      <h2>Ansvar</h2>
      <p>
        Vi er ikke ansvarlige for indirekte tab, fx tabt arbejdstid, medmindre andet følger af
        ufravigelig lovgivning. Vi er heller ikke ansvarlige for fejl i dit eget udstyr eller din
        internetforbindelse.
      </p>

      <h2>Ændring af vilkårene</h2>
      <p>
        Vi kan ændre vilkårene. Væsentlige ændringer får du besked om, inden de træder i kraft,
        og de gælder ikke for en periode, du allerede har betalt for.
      </p>

      <h2>Lovvalg</h2>
      <p>Vilkårene er underlagt dansk ret.</p>
    </LegalShell>
  );
}
