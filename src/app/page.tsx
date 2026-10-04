import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import ctaImage from "../../public/images/home-cta.jpg";
import familyImage from "../../public/images/home-family.jpg";
import supportImage from "../../public/images/home-support.jpg";
import catBorn from "../../public/images/cat-born.jpg";
import catDokumentar from "../../public/images/cat-dokumentar.jpg";
import catFilm from "../../public/images/cat-film.jpg";
import catNyheder from "../../public/images/cat-nyheder.jpg";
import catSport from "../../public/images/cat-sport.jpg";
import { FaqList, FaqSchema, type FaqItem } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { Icon, type IconName } from "@/components/Icon";
import { AnswerBox, KeyFacts } from "@/components/Pillar";
import { PricingTable } from "@/components/PricingTable";
import { Reviews } from "@/components/Reviews";
import { Aurora, ButtonLink, Container, IconBadge, SectionHeader, delay } from "@/components/ui";
import { WhatsAppIcon, WhatsAppLink } from "@/components/WhatsAppLink";
import { currency, plans } from "@/lib/plans";
import { absoluteUrl, pageMeta, site } from "@/lib/site";
import { sports } from "@/lib/sports";

const fromPerMonth = Math.min(...plans.map((p) => p.perMonth ?? p.price));

export const metadata: Metadata = {
  description: `IPTV Danmark: dansk IPTV-abonnement uden binding. Se live-tv og film i HD og 4K på smart-tv, tv-boks og mobil – fra ${fromPerMonth} kr./md.`,
  ...pageMeta("/"),
};

const devices: { icon: IconName; name: string }[] = [
  { icon: "tv", name: "Smart-tv" },
  { icon: "box", name: "Apple TV" },
  { icon: "box", name: "Google TV" },
  { icon: "cast", name: "Fire TV Stick" },
  { icon: "smartphone", name: "iPhone og Android" },
  { icon: "tablet", name: "iPad og tablet" },
  { icon: "monitor", name: "Mac og pc" },
];

const included: { icon: IconName; title: string; text: string }[] = [
  { icon: "tv", title: "Live-tv og on demand", text: "Samme indhold i alle abonnementer." },
  { icon: "monitorPlay", title: "HD og 4K", text: "Når din forbindelse er hurtig nok." },
  { icon: "wifi", title: "Kun internet kræves", text: "Ingen parabol og intet kabel-tv-stik." },
  { icon: "headset", title: "Hjælp til opsætning", text: "Via WhatsApp og e-mail." },
];

const steps: { icon: IconName; title: string; text: string }[] = [
  { icon: "layers", title: "Vælg abonnement", text: "1, 3, 6 eller 12 måneder – uden binding ud over den periode, du betaler for." },
  { icon: "message", title: "Bestil", text: "Tryk på Bestil. Beskeden er udfyldt på forhånd med abonnement og pris." },
  { icon: "play", title: "Se tv", text: "Du får login og en vejledning til din enhed – og hjælp, hvis noget driller." },
];

const categories: { icon: IconName; name: string; image: StaticImageData; alt: string }[] = [
  { icon: "trophy", name: "Sport", image: catSport, alt: "Fodboldkamp live på et fyldt stadion i projektørlys" },
  { icon: "film", name: "Film og serier", image: catFilm, alt: "Biografsal med røde sæder og lysende lærred" },
  { icon: "smile", name: "Børn og familie", image: catBorn, alt: "Børneværelse med bamser og en tablet med børne-tv" },
  { icon: "newspaper", name: "Nyheder", image: catNyheder, alt: "Moderne tv-nyhedsstudie med kameraer og skærme" },
  { icon: "globe", name: "Dokumentar", image: catDokumentar, alt: "Vandfald i en tåget nordisk skov" },
];

const comparison = [
  { label: "Det kræver", iptv: "Internet og en app", cable: "Kabel-tv-stik i boligen", dish: "Parabol med fri sigt mod syd" },
  { label: "Installation", iptv: "Få minutter", cable: "Tekniker eller selvinstallation", dish: "Montering og indstilling" },
  { label: "Binding", iptv: "Ingen", cable: "Ofte", dish: "Ofte" },
  { label: "Se på mobil og tablet", iptv: "Ja", cable: "Kun via app", dish: "Nej" },
  { label: "Påvirkes af vejret", iptv: "Nej", cable: "Nej", dish: "Ja, ved kraftig regn og sne" },
];

const faq: FaqItem[] = [
  {
    q: "Er IPTV lovligt i Danmark?",
    a: "Ja, IPTV er lovligt i Danmark, når tjenesten har rettighederne til de kanaler, den sender. Tilbud med tusindvis af kanaler til næsten ingen penge er næsten altid ulovlige, og det er også ulovligt at se med fra en kilde, man ved eller burde vide er ulovlig.",
  },
  {
    q: "Hvad er IPTV?",
    a: "IPTV (Internet Protocol Television) betyder, at tv sendes via internettet i stedet for antenne, kabel eller parabol. Du ser kanalerne i en app på dit smart-tv, en tv-boks, mobil eller computer.",
  },
  {
    q: "Hvordan bestiller jeg?",
    a: "Vælg et abonnement, og tryk på Bestil. WhatsApp åbner med en udfyldt besked, og vi svarer med betaling og vejledning. Du kan også skrive til os på e-mail.",
  },
  {
    q: "Er der binding?",
    a: "Nej. Du betaler for den periode, du vælger – 1, 3, 6 eller 12 måneder – og abonnementet fornyes ikke automatisk.",
  },
  {
    q: "Hvilke enheder virker det på?",
    a: "Smart-tv, tv-bokse som Apple TV, Google TV og Fire TV, mobiler, tablets og computere. Du får en vejledning til din enhed, når du bestiller.",
  },
  {
    q: "Hvor hurtigt internet skal jeg bruge?",
    a: "Som tommelfingerregel mindst 10 Mbit/s pr. skærm i HD og 25 Mbit/s i 4K. Et netværkskabel eller stærkt wifi giver det mest stabile billede.",
  },
  {
    q: "Kan jeg fortryde mit køb?",
    a: "Ja, du har 14 dages fortrydelsesret. Har du bedt os om at starte abonnementet med det samme, betaler du kun for den del af perioden, du har haft adgang.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Devices */}
      <section aria-label="Understøttede enheder" className="border-y border-line bg-black/20">
        <Container className="flex flex-col items-center gap-6 py-8 lg:flex-row lg:justify-between">
          <p className="shrink-0 text-sm font-semibold text-ink">Virker på alle dine enheder</p>
          <div className="fade-x w-full overflow-hidden lg:max-w-4xl">
            <ul className="flex w-max animate-marquee gap-12 hover:[animation-play-state:paused]">
              {[...devices, ...devices].map((d, i) => (
                <li key={i} aria-hidden={i >= devices.length} className="flex items-center gap-2.5 text-sm whitespace-nowrap text-muted transition hover:text-white">
                  <Icon name={d.icon} className="h-5 w-5 text-slate-300" />
                  {d.name}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Pricing + what's included */}
      <section id="priser" className="scroll-mt-24 py-24 sm:py-32">
        <Container>
          <SectionHeader
            eyebrow="Priser"
            title="Vælg den periode, der passer dig"
            text="Samme indhold i alle abonnementer. Jo længere periode, jo lavere pris pr. måned."
          />
          <div className="mt-16">
            <PricingTable plans={plans} />
          </div>
          <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {included.map((f, i) => (
              <div key={f.title} data-spotlight data-reveal style={delay(i * 80)} className="flex gap-4 bg-night p-6">
                <IconBadge name={f.icon} />
                <div>
                  <h3 className="font-semibold text-ink">{f.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Reviews />

      {/* How it works */}
      <section className="border-t border-line py-24 sm:py-32">
        <Container>
          <SectionHeader eyebrow="Sådan virker det" title="Fra bestilling til tv på få minutter" />
          <ol className="relative mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
            <li aria-hidden data-reveal="line" className="absolute top-7 right-[16%] left-[16%] hidden h-px bg-gradient-to-r from-rose-500/0 via-rose-500/60 to-rose-500/0 md:block" />
            {steps.map((s, i) => (
              <li key={s.title} data-reveal style={delay(i * 120)} className="relative text-center">
                <span className="group relative mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-night-3 text-white shadow-lg ring-1 ring-white/10 outline-8 outline-night transition duration-300 hover:-translate-y-1 hover:ring-rose-400/40">
                  <Icon name={s.icon} className="h-6 w-6" />
                  <span className="absolute -top-2 -right-2 grid h-6 w-6 place-items-center rounded-full bg-brand text-xs font-bold text-white">
                    {i + 1}
                  </span>
                </span>
                <h3 className="mt-6 text-lg font-semibold text-ink">{s.title}</h3>
                <p className="mx-auto mt-2 max-w-xs leading-7 text-muted">{s.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-14 text-center">
            <ButtonLink href="/kom-i-gang" variant="outline" arrow>Se hele guiden</ButtonLink>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="border-y border-line bg-black/20 py-24 sm:py-32">
        <Container>
          <SectionHeader eyebrow="Indhold" title="Noget for hele husstanden" text="Live-tv og on demand samlet i én app – fra aftenens kamp til børnenes favoritter." />
          <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-5">
            {categories.map((c, i) => (
              <div
                key={c.name}
                data-reveal
                className={`group btn-sheen relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-2xl bg-night-2 p-5 ring-1 ring-white/10 transition duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/50 hover:ring-white/25 ${
                  i === 4 ? "col-span-2 aspect-[3/2] md:col-span-1 md:aspect-[3/4]" : ""
                }`}
                style={delay(i * 70)}
              >
                <Image
                  src={c.image}
                  alt={c.alt}
                  fill
                  sizes="(min-width: 768px) 20vw, 50vw"
                  placeholder="blur"
                  className="-z-10 object-cover transition duration-[1.5s] ease-out group-hover:scale-110"
                />
                <Icon name={c.icon} className="absolute top-5 left-5 h-7 w-7 text-white/80 transition duration-500 group-hover:scale-110 group-hover:-rotate-6" />
                {c.name === "Sport" && (
                  <span className="absolute top-5 right-5 flex items-center gap-1.5 rounded bg-black/40 px-2 py-0.5 text-[10px] font-bold tracking-wider text-white backdrop-blur">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-rose-500" />
                    </span>
                    LIVE
                  </span>
                )}
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/85 via-black/20 to-black/30" />
                <p className="relative text-lg font-semibold">{c.name}</p>
                <p className="relative mt-1 flex items-center gap-1 text-xs text-white/70 opacity-0 transition duration-300 group-hover:opacity-100">
                  Live og on demand <Icon name="arrowRight" className="h-3 w-3" />
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {sports.map((s) => (
              <Link
                key={s.slug}
                href={`/sport/${s.slug}`}
                className="group flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-white/20 hover:bg-white/[0.07]"
              >
                {s.name}
                <Icon name="arrowRight" className="h-3.5 w-3.5 text-rose-400 transition group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Comparison */}
      <section className="py-24 sm:py-32">
        <Container>
          <SectionHeader eyebrow="Sammenligning" title="IPTV, kabel-tv eller parabol?" text="Sådan adskiller tv over internettet sig fra de klassiske løsninger." />
          <div className="mx-auto mt-14 max-w-5xl overflow-x-auto rounded-2xl border border-line">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-line bg-paper">
                  <th className="p-5 font-medium text-muted"><span className="sr-only">Egenskab</span></th>
                  <th className="bg-brand-soft p-5 font-semibold text-rose-400">{site.name}</th>
                  <th className="p-5 font-semibold text-ink">Kabel-tv</th>
                  <th className="p-5 font-semibold text-ink">Parabol</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {comparison.map((r, i) => (
                  <tr key={r.label} data-reveal style={delay(150 + i * 90)} className="transition-colors hover:bg-white/[0.02]">
                    <th scope="row" className="p-5 font-medium text-ink">{r.label}</th>
                    <td className="bg-brand-soft/50 p-5 font-medium text-ink">{r.iptv}</td>
                    <td className="p-5 text-muted">{r.cable}</td>
                    <td className="p-5 text-muted">{r.dish}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* IPTV Danmark — answer-first SEO/GEO content for the focus keyword */}
      <section id="iptv-danmark" className="border-t border-line py-24 sm:py-32">
        <Container className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div data-reveal className="prose-da min-w-0">
            <SectionHeader align="left" eyebrow="Guide" title="IPTV Danmark: det skal du vide" />
            <div className="mt-8">
              <AnswerBox>
                IPTV i Danmark er tv, der sendes over internettet i stedet for via antenne, kabel
                eller parabol. Med et dansk IPTV-abonnement ser du live-tv og film i en app på
                smart-tv, tv-boks, mobil og computer. Det kræver kun en stabil forbindelse – cirka 10
                Mbit/s pr. skærm i HD – og er lovligt, når udbyderen har rettighederne.
              </AnswerBox>
            </div>
            <h3>Hvorfor vælger flere danskere IPTV?</h3>
            <p>
              IPTV kræver hverken parabol eller kabel-tv-stik, og du kan se det samme abonnement på
              alle skærme i husstanden. Mange IPTV-udbydere i Danmark tilbyder abonnementer uden
              binding, så du kan vælge en periode, der passer dig.
            </p>
            <h3>Hvad koster IPTV i Danmark?</h3>
            <p>
              Prisen afhænger af kanaludvalg, periode og antal skærme. Hos {site.name} starter et
              abonnement uden binding fra {fromPerMonth} kr. om måneden ved længere perioder. Se alle{" "}
              <Link href="/iptv-abonnement">priser på IPTV-abonnement</Link>.
            </p>
            <h3>Sådan vælger du en stabil IPTV-udbyder</h3>
            <ul>
              <li>Udbyderen oplyser navn, adresse og CVR-nummer.</li>
              <li>Du kan betale sikkert og har 14 dages fortrydelsesret.</li>
              <li>Appen findes i den officielle app-butik til din enhed.</li>
              <li>Du kan få hjælp, når noget ikke virker.</li>
            </ul>
            <p>
              Vil du vide mere om teknikken, så læs <Link href="/iptv-tv">IPTV tv: hvad er IP-tv?</Link>.
              Ser du også svensk, norsk eller finsk tv, så læs om <Link href="/iptv-nordic">IPTV Nordic</Link>.
            </p>
          </div>
          <div data-reveal style={delay(120)} className="lg:pt-24">
            <figure className="group relative mb-8 overflow-hidden rounded-2xl ring-1 ring-white/10">
              <Image
                src={familyImage}
                alt="Familie ser IPTV på et stort fladskærms-tv i en hyggelig dansk stue"
                sizes="(min-width: 1024px) 40vw, 100vw"
                placeholder="blur"
                className="aspect-[4/3] w-full object-cover transition duration-[1.5s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night/70 via-transparent to-transparent" />
              <figcaption className="absolute bottom-4 left-4 flex items-center gap-2 rounded-lg bg-night/70 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
                <Icon name="tv" className="h-4 w-4 text-rose-400" /> IPTV på hele husstandens skærme
              </figcaption>
            </figure>
            <KeyFacts
              caption="IPTV Danmark – fakta"
              rows={[
                ["Hvad er det?", "Tv over internettet i en app"],
                ["Det kræver", "Internet og smart-tv, tv-boks, mobil eller computer"],
                ["Internethastighed", "Ca. 10 Mbit/s i HD, 25 Mbit/s i 4K pr. skærm"],
                ["Binding hos os", "Ingen – 1, 3, 6 eller 12 måneder"],
                ["Pris hos os", `Fra ${fromPerMonth} kr./md.`],
                ["Fortrydelsesret", "14 dage"],
                ["Lovligt?", "Ja, når udbyderen har rettighederne"],
              ]}
            />
          </div>
        </Container>
      </section>

      {/* FAQ + support */}
      <section className="border-t border-line py-24 sm:py-32">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <div data-reveal className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-sm font-semibold text-rose-400">FAQ</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">Ofte stillede spørgsmål</h2>
            <p className="mt-4 leading-7 text-muted">
              Find flere svar i <Link href="/hjaelp" className="font-medium text-rose-400 hover:underline">hjælpecentret</Link>,
              eller skriv til os.
            </p>
            <div data-spotlight className="mt-8 overflow-hidden rounded-2xl border border-line bg-night-2">
              <div className="group relative overflow-hidden">
                <Image
                  src={supportImage}
                  alt="Kunde skriver med support på mobilen, mens tv'et lyser i stuen"
                  sizes="(min-width: 1024px) 35vw, 100vw"
                  placeholder="blur"
                  className="aspect-[16/9] w-full object-cover transition duration-[1.5s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night-2 via-night-2/10 to-transparent" />
              </div>
              <div className="p-6 pt-2">
                <p className="font-semibold text-ink">Brug for hjælp?</p>
                <p className="mt-1 text-sm text-muted">Spørgsmål før køb eller hjælp til opsætning.</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <WhatsAppLink
                    intro="Hej! Jeg har et spørgsmål om jeres IPTV-abonnement."
                    className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1ebe5b]"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    WhatsApp
                  </WhatsAppLink>
                  <a
                    href={`mailto:${site.email}`}
                    className="inline-flex items-center gap-2 rounded-xl border border-line px-4 py-2.5 text-sm font-semibold text-ink transition hover:border-white/20 hover:bg-white/[0.06]"
                  >
                    <Icon name="mail" className="h-4 w-4" />
                    E-mail
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div data-reveal style={delay(100)}>
            <FaqList items={faq} />
          </div>
        </Container>
        <FaqSchema items={faq} />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": `${site.url}/#service`,
            name: "IPTV-abonnement – IPTV Danmark",
            serviceType: "IPTV",
            description: "IPTV-abonnement uden binding med live-tv og on demand i HD og 4K på smart-tv, tv-boks, mobil og computer.",
            provider: { "@id": `${site.url}/#organization` },
            areaServed: { "@type": "Country", name: "Danmark" },
            availableLanguage: "da",
            url: absoluteUrl("/iptv-abonnement"),
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "IPTV-abonnementer",
              itemListElement: plans.map((p) => ({
                "@type": "Offer",
                name: `IPTV-abonnement ${p.name}`,
                price: p.price,
                priceCurrency: currency === "kr." ? "DKK" : currency,
                availability: "https://schema.org/InStock",
                url: absoluteUrl("/iptv-abonnement#priser"),
              })),
            },
          }}
        />
      </section>

      {/* Final CTA + legal notice */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div data-reveal className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-3xl bg-night-2 px-6 py-20 text-center text-white ring-1 ring-white/10 sm:px-12">
          <Image
            src={ctaImage}
            alt=""
            fill
            sizes="(min-width: 1280px) 1280px, 100vw"
            className="-z-20 animate-kenburns object-cover opacity-60"
          />
          <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-night/80 via-night/40 to-night/80" />
          <Aurora />
          <div className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-5xl">Klar til at se tv på din måde?</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">Vælg en periode uden binding, og kom i gang i dag.</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <ButtonLink href="#priser" size="lg" arrow>Se priser</ButtonLink>
            <ButtonLink href="/kom-i-gang" size="lg" variant="ghostDark">Sådan virker det</ButtonLink>
          </div>
        </div>
        <p className="mx-auto mt-10 flex max-w-3xl items-start justify-center gap-3 text-center text-sm leading-6 text-muted">
          <Icon name="alert" className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
          <span>
            <strong className="text-ink">Pas på ulovlig IPTV.</strong> Tilbud med tusindvis af kanaler til næsten
            ingen penge er næsten altid ulovlige, og du risikerer selv at bryde loven ved at se med.{" "}
            <Link href="/er-iptv-lovligt" className="font-medium text-rose-400 hover:underline">Er IPTV lovligt?</Link>
          </span>
        </p>
      </section>
    </>
  );
}
