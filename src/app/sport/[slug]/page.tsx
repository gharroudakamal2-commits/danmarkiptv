import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Faq } from "@/components/Faq";
import { PageShell } from "@/components/PageShell";
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
    description: s.intro,
    alternates: { canonical: `/sport/${s.slug}` },
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
    >
      <div className="prose-da mt-8">
        <h2>Om {s.name}</h2>
        <p>{s.about}</p>

        <h2>Sådan finder du ud af, hvem der viser {s.name}</h2>
        <ul>
          <li>Tjek turneringens eller ligaens officielle hjemmeside for tv-oversigt.</li>
          <li>Se tv-programmet i appen hos din tv-udbyder.</li>
          <li>Sammenlign udbyderne i vores <Link href="/bedste-iptv-danmark">store IPTV-oversigt</Link>.</li>
        </ul>

        <h2>Se {s.name} på alle skærme</h2>
        <p>
          De fleste sportstjenester har apps til smart-tv, mobil og computer. Se vores guide til{" "}
          <Link href="/iptv-pa-smart-tv">IPTV på smart-tv</Link>, og sørg for, at dit{" "}
          <Link href="/guides/hvor-hurtigt-internet-til-iptv">internet er hurtigt nok</Link> til live-sport.
        </p>

        <h2>Undgå ulovlige streams</h2>
        <p>
          Gratis streams af {s.name} på ukendte sider er ulovlige og fyldt med pop-ups og
          malware. <Link href="/er-iptv-lovligt">Læs mere om lovlig IPTV</Link>.
        </p>
      </div>

      <Faq
        items={[
          {
            q: `Hvor kan jeg ${s.keyword} gratis?`,
            a: "Enkelte store kampe og slutrunder vises på fri-tv. Ellers kræver det et abonnement hos den udbyder, der har rettighederne.",
          },
          {
            q: `Kan jeg ${s.keyword} på mobilen?`,
            a: "Ja, de fleste udbydere med sportsrettigheder har en app, hvor du kan se live på mobil og tablet.",
          },
        ]}
      />
    </PageShell>
  );
}
