import type { Metadata } from "next";
import { LegalShell } from "@/components/PageShell";
import { pageMeta, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ophavsret & DMCA",
  description: `Sådan anmelder du krænkelse af ophavsret eller varemærker på ${site.name}.`,
  ...pageMeta("/dmca"),
};

const requirements = [
  "Dit navn, din adresse, dit telefonnummer og din e-mail.",
  "En beskrivelse af det beskyttede værk eller varemærke, som du mener er krænket.",
  "Den præcise URL på vores side, hvor indholdet findes.",
  "En erklæring om, at du i god tro mener, at brugen ikke er tilladt af rettighedshaveren, dennes repræsentant eller loven.",
  "En erklæring om, at oplysningerne er korrekte, og at du er rettighedshaveren eller har fuldmagt til at handle på dennes vegne.",
  "Din fysiske eller elektroniske underskrift.",
];

export default function DmcaPage() {
  return (
    <LegalShell
      updated={site.updated}
      crumbs={[{ name: "Ophavsret & DMCA", href: "/dmca" }]}
      title="Ophavsret & DMCA"
      intro="Vi respekterer ophavsret og varemærker. Her kan du se, hvordan du anmelder indhold, som du mener krænker dine rettigheder."
    >
      <div>
        <h2>Hvad vi gør</h2>
        <p>
          Vi tager ophavsret alvorligt. Modtager vi en gyldig anmeldelse om indhold på
          hjemmesiden eller i vores tjeneste, undersøger vi den og fjerner det pågældende indhold
          hurtigst muligt.
        </p>

        <h2>Sådan sender du en anmeldelse</h2>
        <p>Send en e-mail til <a href={`mailto:${site.email}`}>{site.email}</a> med følgende:</p>
        <ol className="mb-4 list-decimal space-y-2 pl-6 text-muted marker:font-bold marker:text-rose-400">
          {requirements.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ol>

        <h2>Behandling</h2>
        <p>
          Vi bekræfter modtagelsen og behandler anmeldelsen, normalt inden for 2 hverdage. Er
          anmeldelsen gyldig, fjerner eller ændrer vi indholdet og giver dig besked.
        </p>

        <h2>Modanmeldelse</h2>
        <p>
          Mener du, at indhold er fjernet ved en fejl, kan du sende en modanmeldelse til samme
          e-mail med en begrundelse og dine kontaktoplysninger.
        </p>

        <h2>Lovgrundlag</h2>
        <p>
          Anmeldelser behandles efter dansk ophavsretslov og EU&apos;s retsakt om digitale
          tjenester (DSA). Vi modtager også anmeldelser i formatet efter den amerikanske Digital
          Millennium Copyright Act (DMCA).
        </p>
        <p className="text-sm">
          <em>Bevidst falske anmeldelser kan medføre erstatningsansvar.</em>
        </p>
      </div>
    </LegalShell>
  );
}
