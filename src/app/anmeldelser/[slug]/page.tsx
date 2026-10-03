import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/PageShell";
import { getProvider, providers } from "@/lib/providers";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return providers.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getProvider((await params).slug);
  if (!p) return {};
  return {
    title: `${p.name} anmeldelse 2026 – Er det værd at betale for?`,
    description: `Læs vores anmeldelse af ${p.name}: ${p.tagline.toLowerCase()}. Fordele, ulemper, enheder og vores samlede score.`,
    alternates: { canonical: `/anmeldelser/${p.slug}` },
  };
}

export default async function ReviewPage({ params }: Props) {
  const p = getProvider((await params).slug);
  if (!p) notFound();

  return (
    <PageShell
      crumbs={[
        { name: "Bedste IPTV", href: "/bedste-iptv-danmark" },
        { name: `${p.name} anmeldelse`, href: `/anmeldelser/${p.slug}` },
      ]}
      title={`${p.name} anmeldelse`}
      intro={p.tagline}
    >
      <div className="relative -mt-6 flex flex-wrap items-center gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60">
        <div>
          <p className="text-sm text-muted">Vores score</p>
          <p className="text-3xl font-extrabold">{p.rating.toFixed(1)}<span className="text-lg text-muted"> / 5</span></p>
        </div>
        <div>
          <p className="text-sm text-muted">Type</p>
          <p className="font-semibold">{p.type}</p>
        </div>
        <a
          href={p.url}
          target="_blank"
          rel="sponsored nofollow noopener"
          className="btn-shine ml-auto rounded-xl bg-brand px-6 py-3 font-semibold text-white shadow-md shadow-blue-500/30 transition hover:-translate-y-0.5 hover:bg-brand-dark"
        >
          Gå til {p.name}
        </a>
      </div>

      <div className="prose-da mt-8">
        <h2>Fordele</h2>
        <ul>{p.pros.map((x) => <li key={x}>{x}</li>)}</ul>
        <h2>Ulemper</h2>
        <ul>{p.cons.map((x) => <li key={x}>{x}</li>)}</ul>
        <h2>Enheder</h2>
        <p>{p.name} virker på: {p.devices.join(", ")}.</p>
        <h2>Konklusion</h2>
        <p>
          {/* TODO: write a unique 500+ word review per provider — thin pages won't rank. */}
          {p.name} er et godt valg, hvis du leder efter {p.tagline.toLowerCase()}. Sammenlign med
          andre udbydere i vores <Link href="/bedste-iptv-danmark">store IPTV-sammenligning</Link>.
        </p>
      </div>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Review",
          itemReviewed: { "@type": "Organization", name: p.name, url: p.url },
          reviewRating: { "@type": "Rating", ratingValue: p.rating, bestRating: 5, worstRating: 1 },
          author: { "@type": "Organization", name: site.name },
          inLanguage: "da-DK",
        }}
      />
    </PageShell>
  );
}
