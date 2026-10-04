import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/PageShell";
import { Figure, Sources } from "@/components/Pillar";
import { getGuide, guides } from "@/lib/guides";
import { absoluteUrl, pageMeta, site } from "@/lib/site";

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
    ...pageMeta(`/guides/${g.slug}`, { publishedTime: g.date }),
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
        <Figure src={g.image} alt={g.imageAlt} caption={g.imageCaption} priority reveal={false} />
        {g.sections.map((s) => (
          <section key={s.heading}>
            <h2>{s.heading}</h2>
            {s.paragraphs.map((p) => <p key={p}>{p}</p>)}
          </section>
        ))}
        <p>
          Vil du vide mere? Læs den store guide <Link href="/iptv-tv">IPTV tv: hvad er IP-tv?</Link>, eller
          se <Link href="/bedste-iptv-danmark">bedste IPTV i Danmark</Link>.
        </p>
      </div>

      <Sources items={g.sources ?? []} />

      {related.length > 0 && (
        <aside className="mt-12 rounded-xl bg-paper p-6">
          <p className="font-bold">Læs også</p>
          <ul className="mt-2 space-y-1 text-sm">
            {related.map((r) => (
              <li key={r.slug}>
                <Link href={`/guides/${r.slug}`} className="font-medium text-rose-400 hover:underline">{r.title}</Link>
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
          image: [absoluteUrl(g.image.src), absoluteUrl(`/guides/${g.slug}/opengraph-image`)],
          author: { "@id": `${site.url}/#organization` },
          publisher: { "@id": `${site.url}/#organization` },
        }}
      />
    </PageShell>
  );
}
