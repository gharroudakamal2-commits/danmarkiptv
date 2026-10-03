import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { sports } from "@/lib/sports";

export const metadata: Metadata = {
  title: "Sport på IPTV – Se fodbold, F1 og håndbold i Danmark",
  description:
    "Sådan ser du sport via IPTV i Danmark: Superliga, Champions League, Premier League, Formel 1 og håndbold.",
  alternates: { canonical: "/sport" },
};

export default function SportHubPage() {
  return (
    <PageShell
      wide
      crumbs={[{ name: "Sport", href: "/sport" }]}
      title="Sport på IPTV i Danmark"
      intro="Sportsrettighederne i Danmark er fordelt mellem flere udbydere. Vælg din sport, og se hvordan du ser den lovligt."
    >
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sports.map((s) => (
          <Link
            key={s.slug}
            href={`/sport/${s.slug}`}
            className="card-lift group rounded-2xl border border-slate-200 bg-white p-6"
          >
            <h2 className="text-xl font-bold">{s.name}</h2>
            <p className="mt-2 text-sm leading-6 text-muted">{s.intro}</p>
            <span className="mt-4 inline-block text-sm font-semibold text-brand">Læs guiden →</span>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}
