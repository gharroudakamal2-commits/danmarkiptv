import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Faq } from "@/components/Faq";
import { PageShell } from "@/components/PageShell";
import { Figure, KeyFacts, Sources } from "@/components/Pillar";
import { pageMeta, site } from "@/lib/site";
import { getSport, sports } from "@/lib/sports";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return sports.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = getSport((await params).slug);
  if (!s) return {};
  return {
    title: `Sådan ser du ${s.name} i Danmark (2026)`,
    description: `${s.intro} Få overblik over tv-kanaler, streaming og apps – og se med lovligt.`,
    ...pageMeta(`/sport/${s.slug}`),
  };
}

export default async function SportPage({ params }: Props) {
  const s = getSport((await params).slug);
  if (!s) notFound();

  return (
    <PageShell
      crumbs={[
        { name: "Sport", href: "/sport" },
        { name: s.name, href: `/sport/${s.slug}` },
      ]}
      title={`Sådan ser du ${s.name} i Danmark`}
      intro={s.intro}
      updated={site.updated}
    >
      <div className="prose-da mt-8">
        <Figure src={s.image} alt={s.imageAlt} caption={`Se ${s.name} via IPTV på smart-tv, tv-boks, mobil og computer.`} priority reveal={false} />
        <h2>Om {s.name}</h2>
        <p>{s.about}</p>

        <h2>Sådan er {s.name} skruet sammen</h2>
        {s.format.map((para) => (
          <p key={para}>{para}</p>
        ))}
        <KeyFacts caption={`${s.name} – fakta`} rows={s.facts} />

        <h2>Sådan finder du ud af, hvem der viser {s.name}</h2>
        <p>
          Sportsrettigheder i Danmark sælges for en eller flere sæsoner ad gangen og kan skifte
          udbyder. Sådan finder du den aktuelle rettighedshaver:
        </p>
        <ul>
          <li>Tjek turneringens eller ligaens officielle hjemmeside for tv-oversigt.</li>
          <li>Se tv-programmet i appen hos din tv-udbyder.</li>
          <li>Sammenlign typer af tv-løsninger i vores <Link href="/bedste-iptv-danmark">store IPTV-oversigt</Link>.</li>
        </ul>

        <h2>Tips til at se {s.name}</h2>
        <ul>
          {s.tips.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <p>
          De fleste sportstjenester har apps til smart-tv, mobil og computer. Se vores guide til{" "}
          <Link href="/iptv-pa-smart-tv">IPTV på smart-tv</Link>, og tjek, at dit{" "}
          <Link href="/guides/hvor-hurtigt-internet-til-iptv">internet er hurtigt nok</Link>.
        </p>

        <h2>Undgå ulovlige streams</h2>
        <p>
          Gratis streams af {s.name} på ukendte sider er ulovlige og fyldt med pop-ups og
          malware. <Link href="/er-iptv-lovligt">Læs mere om lovlig IPTV</Link>, eller se
          vores <Link href="/">IPTV Danmark-abonnement</Link> og guiden til <Link href="/iptv-nordic">IPTV Nordic</Link>.
        </p>
      </div>

      <Faq items={s.faq} />

      <Sources items={s.sources} />

      <nav aria-label="Andre sportsgrene" className="mt-16">
        <h2 className="text-xl font-bold text-ink">Andre sportsgrene</h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {sports
            .filter((o) => o.slug !== s.slug)
            .map((o) => (
              <li key={o.slug}>
                <Link
                  href={`/sport/${o.slug}`}
                  className="card-lift group flex items-center gap-4 rounded-xl border border-line bg-night-2 p-3"
                >
                  <Image src={o.image} alt="" sizes="96px" placeholder="blur" className="h-14 w-20 shrink-0 rounded-lg object-cover" />
                  <span className="font-semibold text-ink group-hover:text-rose-400">Sådan ser du {o.name}</span>
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </PageShell>
  );
}
