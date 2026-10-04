import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { pageMeta, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Om os",
  description: `Om ${site.name}: hvem vi er, hvad vi sælger, hvordan vi tjener penge, og hvordan du kontakter os om dit IPTV-abonnement uden binding.`,
  ...pageMeta("/om-os"),
};

export default function AboutPage() {
  return (
    <PageShell
      crumbs={[{ name: "Om os", href: "/om-os" }]}
      title={`Om ${site.name}`}
      intro="IPTV-abonnement uden binding – og guides til at få mest muligt ud af tv over internettet."
      updated={site.updated}
    >
      <div className="prose-da mt-10">
        <h2>Hvem vi er</h2>
        <p>
          {site.name} drives af {site.company.name} (CVR {site.company.cvr}), {site.company.address}.
          Vi sælger IPTV-abonnementer til live-tv og on demand, som du kan se på smart-tv, tv-boks,
          mobil og computer, og vi skriver guides om tv over internettet i Danmark.
        </p>
        {/* TODO: add the real people behind the site – name, role, experience and a photo for each.
            Named, verifiable people are the strongest trust signal for Google and for customers. */}

        <h2>Det lover vi dig</h2>
        <ul>
          <li><strong>Ingen binding:</strong> du betaler for den periode, du vælger, og abonnementet fornyes ikke automatisk.</li>
          <li><strong>Fast pris:</strong> prisen ved abonnementet er den samlede pris – uden oprettelse eller gebyrer.</li>
          <li><strong>14 dages fortrydelsesret:</strong> se reglerne under <Link href="/fortrydelsesret">fortrydelsesret</Link>.</li>
          <li><strong>Hjælp til opsætning:</strong> via WhatsApp og e-mail, og i vores <Link href="/hjaelp">hjælpecenter</Link>.</li>
        </ul>

        <h2>Sådan skriver vi vores guides</h2>
        <p>
          Vores guides skal hjælpe dig med at træffe et godt valg – også når svaret er, at gratis
          tv er nok. Derfor arbejder vi efter faste principper:
        </p>
        <ul>
          <li><strong>Primære kilder:</strong> fakta om lovgivning, sport og tekniske forhold tjekkes mod officielle kilder, og vi linker til dem under &quot;Kilder&quot;.</li>
          <li><strong>Datoer:</strong> hver side viser, hvornår den sidst er opdateret.</li>
          <li><strong>Ingen gætværk om rettigheder:</strong> sportsrettigheder skifter, så vi nævner kun en rettighedshaver, når vi har kunnet bekræfte den.</li>
          <li><strong>AI som hjælpeværktøj:</strong> vi bruger AI-værktøjer til at skrive og strukturere tekster. Fakta tjekkes mod de kilder, vi linker til.</li>
        </ul>

        <h2>Sådan tjener vi penge</h2>
        <p>
          Vi tjener penge på de abonnementer, vi sælger. Vores guides og sammenligninger er skrevet
          af os som udbyder, så de er ikke uafhængige – men vi forsøger altid at give et retvisende
          billede af dine muligheder, også de gratis. Læs mere i vores{" "}
          <Link href="/ansvarsfraskrivelse">ansvarsfraskrivelse</Link>.
        </p>

        <h2>Har du fundet en fejl?</h2>
        <p>
          Skriv til <a href={`mailto:${site.email}`}>{site.email}</a> med et link til siden og en
          beskrivelse af fejlen. Vi retter faktuelle fejl hurtigst muligt og opdaterer datoen på siden.
        </p>

        <h2>Kontakt</h2>
        <p>
          {site.company.name}, {site.company.address}. Skriv til{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>, eller se flere muligheder på{" "}
          <Link href="/kontakt">kontaktsiden</Link>. Læs også vores{" "}
          <Link href="/handelsbetingelser">handelsbetingelser</Link>.
        </p>
      </div>
    </PageShell>
  );
}
