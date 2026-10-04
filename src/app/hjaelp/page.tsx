import type { Metadata } from "next";
import Link from "next/link";
import { FaqList, FaqSchema, type FaqItem } from "@/components/Faq";
import { Icon, type IconName } from "@/components/Icon";
import { PageHeader } from "@/components/PageShell";
import { Container, IconBadge } from "@/components/ui";
import { WhatsAppIcon, WhatsAppLink } from "@/components/WhatsAppLink";
import { pageMeta, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hjælpecenter – svar på dine spørgsmål",
  description:
    "Hjælp til bestilling, betaling, opsætning og fejlfinding af dit IPTV-abonnement. Find svar, eller kontakt os på WhatsApp og e-mail.",
  ...pageMeta("/hjaelp"),
};

const groups: { id: string; icon: IconName; title: string; items: FaqItem[] }[] = [
  {
    id: "bestilling",
    icon: "creditCard",
    title: "Bestilling og betaling",
    items: [
      {
        q: "Hvordan bestiller jeg?",
        a: "Vælg et abonnement på prissiden, og tryk på Bestil. WhatsApp åbner med en udfyldt besked. Vi bekræfter bestillingen skriftligt og sender betalingsoplysninger.",
        link: { href: "/iptv-abonnement#priser", label: "Se priser" },
      },
      {
        q: "Hvordan kan jeg betale?",
        a: "De mulige betalingsmetoder står i bekræftelsen og i handelsbetingelserne. Du får altid en kvittering, når betalingen er modtaget.",
        link: { href: "/handelsbetingelser", label: "Handelsbetingelser" },
      },
      {
        q: "Er der skjulte gebyrer?",
        a: "Nej. Prisen ved abonnementet er den samlede pris for hele perioden.",
      },
    ],
  },
  {
    id: "opsaetning",
    icon: "settings",
    title: "Opsætning",
    items: [
      {
        q: "Hvordan installerer jeg appen?",
        a: "Du får en vejledning til netop din enhed sammen med dit login. Se også vores Kom i gang-guide for et overblik.",
        link: { href: "/kom-i-gang", label: "Kom i gang-guiden" },
      },
      {
        q: "Hvor mange enheder kan jeg bruge?",
        a: "Antallet af skærme fremgår af dit abonnement. Du kan logge ind på nye enheder, så længe du holder dig inden for antallet.",
      },
      {
        q: "Kan jeg se uden for hjemmet?",
        a: "Ja, du kan se på mobil og tablet, hvor du har en stabil internetforbindelse. Husk, at streaming bruger meget mobildata.",
      },
    ],
  },
  {
    id: "fejlfinding",
    icon: "wifi",
    title: "Fejlfinding",
    items: [
      {
        q: "Billedet hakker eller fryser",
        a: "Genstart router og enhed, brug netværkskabel i stedet for wifi, og luk andre streams i husstanden. Test din hastighed – du skal bruge mindst 10 Mbit/s pr. skærm i HD.",
        link: { href: "/guides/hvor-hurtigt-internet-til-iptv", label: "Guide til internethastighed" },
      },
      {
        q: "Appen kan ikke logge ind",
        a: "Tjek, at brugernavn og adgangskode er tastet præcist som i din besked, og at abonnementet stadig er aktivt. Virker det stadig ikke, så skriv til os.",
        link: { href: "/iptv-app", label: "Når appen driller" },
      },
      {
        q: "En kanal virker ikke",
        a: "Prøv en anden kanal for at se, om fejlen gælder alle. Genstart appen. Gælder det kun én kanal, så skriv til os med kanalens navn og tidspunktet.",
      },
    ],
  },
  {
    id: "abonnement",
    icon: "calendarX",
    title: "Abonnement og fortrydelse",
    items: [
      {
        q: "Fornyes mit abonnement automatisk?",
        a: "Nej. Abonnementet slutter, når den betalte periode udløber. Vil du fortsætte, bestiller du en ny periode.",
      },
      {
        q: "Hvordan fortryder jeg?",
        a: "Du har 14 dages fortrydelsesret. Send os en klar besked på e-mail eller WhatsApp. Læs de fulde regler på siden om fortrydelsesret.",
        link: { href: "/fortrydelsesret", label: "Fortrydelsesret" },
      },
      {
        q: "Kan jeg skifte til en længere periode?",
        a: "Ja. Skriv til os, så finder vi den bedste løsning ud fra den tid, du har tilbage.",
      },
    ],
  },
];

export default function HelpPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ name: "Hjælpecenter", href: "/hjaelp" }]}
        title="Hvordan kan vi hjælpe?"
        intro="Find svar om bestilling, opsætning og fejlfinding – eller kontakt os direkte."
      />

      <Container className="relative z-10 -mt-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((g) => (
            <a
              key={g.id}
              href={`#${g.id}`}
              className="card-lift group flex items-center gap-4 rounded-2xl border border-line bg-night-2 p-5 shadow-xl shadow-black/5"
            >
              <IconBadge name={g.icon} />
              <span className="font-semibold text-ink group-hover:text-rose-400">{g.title}</span>
            </a>
          ))}
        </div>
      </Container>

      <Container className="grid gap-14 py-20 lg:grid-cols-[1fr_300px]">
        <div className="space-y-16">
          {groups.map((g) => (
            <section key={g.id} id={g.id} className="scroll-mt-24">
              <h2 className="flex items-center gap-3 text-2xl font-bold tracking-tight text-ink">
                <Icon name={g.icon} className="h-6 w-6 text-rose-400" />
                {g.title}
              </h2>
              <div className="mt-6">
                <FaqList items={g.items} />
              </div>
            </section>
          ))}
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border border-line bg-night-2 p-7 text-white">
            <h2 className="text-lg font-semibold">Fandt du ikke svaret?</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">Skriv til os – vi hjælper gerne.</p>
            <WhatsAppLink
              intro="Hej! Jeg har brug for hjælp med mit IPTV-abonnement."
              className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#1ebe5b]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </WhatsAppLink>
            <a
              href={`mailto:${site.email}`}
              className="mt-3 flex items-center justify-center gap-2 rounded-xl border border-white/15 px-4 py-3 text-sm font-semibold transition hover:bg-white/10"
            >
              <Icon name="mail" className="h-4 w-4" />
              E-mail
            </a>
          </div>
          <div className="mt-6 rounded-2xl border border-line p-7">
            <h2 className="font-semibold text-ink">Nyttige sider</h2>
            <ul className="mt-4 space-y-1 text-sm">
              {[
                { href: "/kom-i-gang", label: "Kom i gang" },
                { href: "/handelsbetingelser", label: "Handelsbetingelser" },
                { href: "/fortrydelsesret", label: "Fortrydelsesret" },
                { href: "/guides/hvor-hurtigt-internet-til-iptv", label: "Internethastighed" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="flex items-center justify-between py-1.5 text-muted hover:text-rose-400">
                    {l.label} <Icon name="chevronRight" className="h-4 w-4" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </Container>

      <FaqSchema items={groups.flatMap((g) => g.items)} />
    </>
  );
}
