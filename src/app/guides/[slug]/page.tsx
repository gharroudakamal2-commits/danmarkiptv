import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/PageShell";
import { getGuide, guides } from "@/lib/guides";
import { absoluteUrl, site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const g = getGuide((await params).slug);
  if (!g) return {};
  return {
    title: g.title,
    description: g.description,
    alternates: { canonical: `/guides/${g.slug}` },
    openGraph: { type: "article", publishedTime: g.date },
  };
}

export default async function GuidePage({ params }: Props) {
  const g = getGuide((await params).slug);
  if (!g) notFound();

  const related = guides.filter((x) => x.slug !== g.slug);

  return (
    <PageShell
      crumbs={[
        { name: "Guides", href: "/guides" },
        { name: g.title, href: `/guides/${g.slug}` },
      ]}
      title={g.title}
      intro={g.description}
    >
      <p className="mt-3 text-sm text-muted">
        Opdateret {new Date(g.date).toLocaleDateString("da-DK", { day: "numeric", month: "long", year: "numeric" })}
      </p>

      <div className="prose-da mt-8">
        {g.sections.map((s) => (
          <section key={s.heading}>
            <h2>{s.heading}</h2>
            {s.paragraphs.map((p) => <p key={p}>{p}</p>)}
          </section>
        ))}
        <p>
          Klar til at vælge? Se <Link href="/bedste-iptv-danmark">bedste IPTV i Danmark</Link>.
        </p>
      </div>

      {related.length > 0 && (
        <aside className="mt-12 rounded-xl bg-slate-50 p-6">
          <p className="font-bold">Læs også</p>
          <ul className="mt-2 space-y-1 text-sm">
            {related.map((r) => (
              <li key={r.slug}>
                <Link href={`/guides/${r.slug}`} className="text-brand hover:underline">{r.title}</Link>
              </li>
            ))}
          </ul>
        </aside>
      )}

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: g.title,
          description: g.description,
          datePublished: g.date,
          dateModified: g.date,
          inLanguage: "da-DK",
          mainEntityOfPage: absoluteUrl(`/guides/${g.slug}`),
          author: { "@type": "Organization", name: site.name },
          publisher: { "@type": "Organization", name: site.name },
        }}
      />
    </PageShell>
  );
}
