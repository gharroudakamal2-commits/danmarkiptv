import type { Metadata } from "next";
import Link from "next/link";
import { Faq } from "@/components/Faq";
import { Icon, type IconName } from "@/components/Icon";
import { CtaBand, PageHeader } from "@/components/PageShell";
import { PricingTable } from "@/components/PricingTable";
import { Container, IconBadge, SectionHeader } from "@/components/ui";
import { plans } from "@/lib/plans";
import { pageMeta } from "@/lib/site";

export const metadata: Metadata = {
  title: "IPTV abonnement – Priser uden binding",
  description:
    "Se priserne på vores IPTV abonnement: 1, 3, 6 eller 12 måneder uden binding. Live-tv og on demand i HD og 4K på smart-tv, boks og mobil.",
  ...pageMeta("/iptv-abonnement"),
};

const included: { icon: IconName; title: string; text: string }[] = [
  { icon: "tv", title: "Live-tv og on demand", text: "Samme indhold i alle perioder." },
  { icon: "monitorPlay", title: "HD og 4K", text: "Afhænger af din internetforbindelse." },
  { icon: "layers", title: "Alle enheder", text: "Smart-tv, tv-boks, mobil, tablet og computer." },
  { icon: "headset", title: "Hjælp til opsætning", text: "Via WhatsApp og e-mail." },
];

const order = [
  "Vælg periode, og tryk på Bestil. WhatsApp åbner med en udfyldt besked.",
  "Vi bekræfter bestillingen skriftligt med abonnement, periode og pris.",
  "Du betaler og modtager en kvittering.",
  "Du får login og en vejledning til din enhed.",
];

export default function SubscriptionPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ name: "IPTV abonnement", href: "/iptv-abonnement" }]}
        title="IPTV abonnement uden binding"
        intro="Vælg 1, 3, 6 eller 12 måneder. Samme indhold i alle abonnementer – jo længere periode, jo lavere pris pr. måned."
      />

      <section id="priser" aria-labelledby="priser-titel" className="scroll-mt-24 bg-paper py-20">
        <Container>
          <h2 id="priser-titel" className="sr-only">Priser</h2>
          <PricingTable plans={plans} />
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <SectionHeader eyebrow="Inkluderet" title="Alle abonnementer indeholder" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {included.map((f) => (
              <div key={f.title} className="rounded-2xl border border-line p-6">
                <IconBadge name={f.icon} />
                <h3 className="mt-5 font-semibold text-ink">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-muted">{f.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-24">
        <Container className="grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHeader align="left" eyebrow="Bestilling" title="Sådan bestiller du" />
            <ol className="mt-10 space-y-6">
              {order.map((s, i) => (
                <li key={s} className="flex gap-4">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/10 text-sm font-bold text-white">{i + 1}</span>
                  <p className="pt-1 leading-7 text-ink">{s}</p>
                </li>
              ))}
            </ol>
            <p className="mt-8 text-sm leading-6 text-muted">
              Læs de fulde <Link href="/handelsbetingelser" className="font-medium text-rose-400 hover:underline">handelsbetingelser</Link>{" "}
              og reglerne om <Link href="/fortrydelsesret" className="font-medium text-rose-400 hover:underline">fortrydelsesret</Link>.
            </p>
          </div>
          <div className="rounded-3xl bg-paper p-8 sm:p-10">
            <h3 className="text-lg font-semibold text-ink">Inden du bestiller</h3>
            <ul className="mt-6 space-y-4 text-sm leading-6">
              {[
                ["wifi", "Internet på mindst 10 Mbit/s pr. skærm i HD – 25 Mbit/s til 4K."],
                ["tv", "Et smart-tv, en tv-boks, mobil, tablet eller computer."],
                ["info", "Tjek, at din enhed er understøttet, i guiden Kom i gang."],
              ].map(([icon, text]) => (
                <li key={text} className="flex gap-3">
                  <Icon name={icon as IconName} className="mt-0.5 h-5 w-5 shrink-0 text-rose-400" />
                  <span className="text-muted">{text}</span>
                </li>
              ))}
            </ul>
            <Link href="/kom-i-gang" className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-rose-400">
              Kom i gang-guiden <Icon name="arrowRight" className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      <Container className="pb-24">
        <div className="max-w-3xl">
          <Faq
            items={[
              {
                q: "Hvad er forskellen på abonnementerne?",
                a: "Indholdet er det samme. Forskellen er perioden, prisen pr. måned og antallet af skærme, der fremgår af hvert abonnement.",
              },
              {
                q: "Fornyes abonnementet automatisk?",
                a: "Nej. Abonnementet gælder for den periode, du har betalt for. Vil du fortsætte, bestiller du en ny periode.",
              },
              {
                q: "Kan jeg dele mit abonnement?",
                a: "Abonnementet er til brug i din egen husstand på det antal skærme, abonnementet giver. Deling med andre husstande er ikke tilladt – se brugsvilkårene.",
              },
              {
                q: "Kan jeg fortryde?",
                a: "Ja, du har 14 dages fortrydelsesret. Har du bedt os starte abonnementet med det samme, betaler du for den del af perioden, du har haft adgang.",
              },
            ]}
          />
        </div>
      </Container>

      <CtaBand />
    </>
  );
}
