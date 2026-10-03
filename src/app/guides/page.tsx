import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { guides } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Guides om IPTV og tv i Danmark",
  description: "Guides og tips om IPTV, streaming, internet og tv-bokse i Danmark.",
  alternates: { canonical: "/guides" },
};

export default function GuidesPage() {
  return (
    <PageShell
      wide
      crumbs={[{ name: "Guides", href: "/guides" }]}
      title="Guides om IPTV"
      intro="Praktiske guides til at vælge, sætte op og få mest muligt ud af IPTV i Danmark."
    >
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {guides.map((g) => (
          <Link
            key={g.slug}
            href={`/guides/${g.slug}`}
            className="card-lift group rounded-2xl border border-slate-200 bg-white p-6"
          >
            <h2 className="text-lg font-bold">{g.title}</h2>
            <p className="mt-2 text-sm leading-6 text-muted">{g.description}</p>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}
