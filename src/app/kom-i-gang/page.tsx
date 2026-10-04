import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import devicesImage from "../../../public/images/home-devices.jpg";
import { FaqSchema, FaqList, type FaqItem } from "@/components/Faq";
import { Icon, type IconName } from "@/components/Icon";
import { CtaBand, PageHeader } from "@/components/PageShell";
import { Container, IconBadge, SectionHeader } from "@/components/ui";
import { pageMeta } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kom i gang med IPTV – trin for trin",
  description:
    "Sådan kommer du i gang med dit IPTV-abonnement: bestil, modtag login, installer appen på smart-tv, tv-boks, mobil eller computer, og se tv på få minutter.",
  ...pageMeta("/kom-i-gang"),
};

const steps: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "layers",
    title: "Vælg og bestil",
    text: "Vælg et abonnement på prissiden, og tryk på Bestil. WhatsApp åbner med en udfyldt besked, så vi ved, hvad du vil have.",
  },
  {
    icon: "creditCard",
    title: "Betal",
    text: "Vi bekræfter bestillingen skriftligt med abonnement, periode og pris. Når du har betalt, får du en kvittering.",
  },
  {
    icon: "mail",
    title: "Modtag login og vejledning",
    text: "Du får dine login-oplysninger og en vejledning til præcis den enhed, du vil se på.",
  },
  {
    icon: "play",
    title: "Installer og se tv",
    text: "Installer appen fra vejledningen, log ind, og begynd at se. Driller noget, så skriv til os.",
  },
];

const devices: { icon: IconName; name: string; points: string[] }[] = [
  {
    icon: "tv",
    name: "Smart-tv",
    points: [
      "Samsung, LG, Android TV og Google TV understøttes typisk.",
      "Installer appen fra tv'ets egen app-butik.",
      "Har dit tv ikke appen, så brug en tv-boks i HDMI-indgangen.",
    ],
  },
  {
    icon: "box",
    name: "Tv-boks",
    points: [
      "Apple TV, Google TV Streamer og Fire TV Stick er gode valg.",
      "Giver ofte en hurtigere og mere stabil oplevelse end ældre smart-tv.",
      "Forbind boksen med netværkskabel, hvis du kan.",
    ],
  },
  {
    icon: "smartphone",
    name: "Mobil og tablet",
    points: [
      "Installer appen fra App Store eller Google Play.",
      "Se hjemme på wifi eller på farten.",
      "Mobildata bruges hurtigt – især i HD.",
    ],
  },
  {
    icon: "monitor",
    name: "Computer",
    points: [
      "Virker på Mac og Windows.",
      "Brug den app eller afspiller, vejledningen angiver.",
      "Tilslut computeren til tv'et med HDMI for stor skærm.",
    ],
  },
];

const requirements = [
  { label: "SD", speed: "5 Mbit/s" },
  { label: "HD", speed: "10 Mbit/s" },
  { label: "4K", speed: "25 Mbit/s" },
];

const faq: FaqItem[] = [
  {
    q: "Hvor lang tid tager det at komme i gang?",
    a: "Når betalingen er modtaget, sender vi login og vejledning. Selve installationen tager typisk få minutter.",
  },
  {
    q: "Skal jeg bruge en bestemt app?",
    a: "Du får en vejledning med den app, der passer til din enhed. Brug altid apps fra officielle app-butikker.",
  },
  {
    q: "Kan jeg skifte enhed senere?",
    a: "Ja. Du kan logge ind på en ny enhed inden for det antal skærme, dit abonnement giver.",
  },
];

export default function GetStartedPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ name: "Kom i gang", href: "/kom-i-gang" }]}
        title="Kom i gang på få minutter"
        intro="Fra bestilling til tv på skærmen – sådan gør du, og det skal du bruge."
      />

      <section className="py-24">
        <Container>
          <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title} className="relative rounded-2xl border border-line p-7">
                <span className="text-5xl font-bold text-line">{String(i + 1).padStart(2, "0")}</span>
                <div className="mt-4"><IconBadge name={s.icon} /></div>
                <h2 className="mt-5 text-lg font-semibold text-ink">{s.title}</h2>
                <p className="mt-2 text-sm leading-6 text-muted">{s.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-paper py-24">
        <Container>
          <SectionHeader eyebrow="Enheder" title="Vejledning til din enhed" text="Du får en detaljeret vejledning, når du bestiller. Her er det vigtigste på forhånd." />
          <div data-reveal className="group relative mt-14 overflow-hidden rounded-3xl ring-1 ring-white/10">
            <Image
              src={devicesImage}
              alt="Bærbar computer, tablet, mobil, streaming-stick og fjernbetjening klar til IPTV"
              sizes="(min-width: 1280px) 1216px, 100vw"
              placeholder="blur"
              className="aspect-[21/9] w-full object-cover transition duration-[2s] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-transparent to-transparent" />
            <p className="absolute bottom-5 left-6 text-sm font-semibold text-white">Ét abonnement – alle dine skærme</p>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {devices.map((d) => (
              <div key={d.name} className="rounded-2xl border border-line bg-night-2 p-8">
                <div className="flex items-center gap-4">
                  <IconBadge name={d.icon} />
                  <h3 className="text-xl font-semibold text-ink">{d.name}</h3>
                </div>
                <ul className="mt-6 space-y-3">
                  {d.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm leading-6 text-muted">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-rose-400" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-muted">
            Læs mere om <Link href="/iptv-pa-smart-tv" className="font-medium text-rose-400 hover:underline">IPTV på smart-tv</Link>,{" "}
            <Link href="/iptv-boks" className="font-medium text-rose-400 hover:underline">tv-bokse</Link> og{" "}
            <Link href="/iptv-app" className="font-medium text-rose-400 hover:underline">apps</Link>.
          </p>
        </Container>
      </section>

      <section className="py-24">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Internet"
              title="Hvor hurtigt internet skal du bruge?"
              text="Hastigheden gælder pr. skærm. Ser flere i husstanden samtidig, skal tallene lægges sammen. Stabilitet betyder mere end topfart."
            />
            <Link href="/guides/hvor-hurtigt-internet-til-iptv" className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-rose-400">
              Læs guiden om internethastighed <Icon name="arrowRight" className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {requirements.map((r) => (
              <div key={r.label} className="rounded-2xl border border-line bg-night-2 p-6 text-center text-white">
                <p className="text-sm font-semibold text-rose-400">{r.label}</p>
                <p className="mt-3 text-2xl font-bold tracking-tight">{r.speed}</p>
                <p className="mt-1 text-xs text-slate-400">pr. skærm</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-24">
        <Container className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-ink">Spørgsmål om opsætning</h2>
          <div className="mt-8">
            <FaqList items={faq} />
          </div>
          <FaqSchema items={faq} />
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
