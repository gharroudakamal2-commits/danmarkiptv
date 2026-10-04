import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { FaqList, FaqSchema, type FaqItem } from "./Faq";
import { Icon } from "./Icon";
import { JsonLd } from "./JsonLd";
import { CtaBand, PageHeader } from "./PageShell";
import { Container } from "./ui";
import { absoluteUrl, site } from "@/lib/site";

export type PillarSection = { id: string; title: string; body: React.ReactNode };

/**
 * Answer-first box. AI Overviews and answer engines quote short, self-contained passages,
 * so every pillar opens with a 40–60 word direct answer.
 */
export function AnswerBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="not-prose mb-10 rounded-2xl border border-rose-400/20 bg-rose-500/[0.07] p-6 sm:p-7">
      <p className="flex items-center gap-2 text-xs font-semibold tracking-wide text-rose-300 uppercase">
        <Icon name="zap" className="h-4 w-4" /> Kort svar
      </p>
      <div className="mt-3 text-lg leading-8 text-ink">{children}</div>
    </div>
  );
}

/** Captioned article image with a slow zoom on hover. */
export function Figure({
  src,
  alt,
  caption,
  priority = false,
  reveal = true,
}: {
  src: StaticImageData;
  alt: string;
  caption: string;
  priority?: boolean;
  /** Fade in on scroll. Turn off for images near the top of the page so they never delay LCP. */
  reveal?: boolean;
}) {
  return (
    <figure data-reveal={reveal || undefined} className="not-prose group my-8 overflow-hidden rounded-2xl ring-1 ring-white/10">
      <div className="overflow-hidden">
        <Image
          src={src}
          alt={alt}
          sizes="(min-width: 1024px) 768px, 100vw"
          placeholder="blur"
          priority={priority}
          className="aspect-[16/9] w-full object-cover transition duration-[1.5s] ease-out group-hover:scale-105"
        />
      </div>
      <figcaption className="border-t border-line bg-night-2 px-4 py-3 text-sm leading-6 text-muted">{caption}</figcaption>
    </figure>
  );
}

/** Two-column fact table — easy for both readers and crawlers to extract. */
export function KeyFacts({ caption, rows }: { caption: string; rows: [string, string][] }) {
  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-line">
      <table className="w-full text-left text-sm">
        <caption className="border-b border-line bg-paper px-5 py-3 text-left text-sm font-semibold text-ink">{caption}</caption>
        <tbody className="divide-y divide-line">
          {rows.map(([k, v]) => (
            <tr key={k}>
              <th scope="row" className="w-2/5 px-5 py-3 font-medium text-ink">{k}</th>
              <td className="px-5 py-3 text-muted">{v}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function PillarPage({
  path,
  crumb,
  title,
  intro,
  description,
  answer,
  sections,
  faq,
  related,
  about,
  image,
}: {
  path: string;
  crumb: string;
  title: string;
  intro: string;
  description: string;
  answer: React.ReactNode;
  sections: PillarSection[];
  faq: FaqItem[];
  related: { href: string; label: string; text: string }[];
  /** Main entity of the page, e.g. { name: "IPTV", sameAs: "https://da.wikipedia.org/wiki/IPTV" } */
  about: { name: string; sameAs?: string }[];
  /** Lead image for the Article schema (falls back to the site OG image). */
  image?: StaticImageData;
}) {
  const updated = new Date(site.updated).toLocaleDateString("da-DK", { day: "numeric", month: "long", year: "numeric" });

  return (
    <>
      <PageHeader crumbs={[{ name: crumb, href: path }]} title={title} intro={intro}>
        <p className="hero-fade mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-400" style={{ "--d": "220ms" } as React.CSSProperties}>
          <span className="flex items-center gap-2"><Icon name="clock" className="h-4 w-4" /> Opdateret {updated}</span>
          <span className="flex items-center gap-2"><Icon name="fileText" className="h-4 w-4" /> Af {site.name}</span>
        </p>
      </PageHeader>

      <Container className="grid gap-12 py-14 lg:grid-cols-[1fr_280px] lg:gap-16">
        <article className="prose-da min-w-0 max-w-3xl">
          <AnswerBox>{answer}</AnswerBox>

          {sections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-24">
              <h2>{s.title}</h2>
              {s.body}
            </section>
          ))}

          <section id="faq" className="scroll-mt-24">
            <h2>Ofte stillede spørgsmål</h2>
            <div className="not-prose mt-6">
              <FaqList items={faq} />
            </div>
          </section>
        </article>

        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-6">
            <nav aria-label="Indhold på siden" className="rounded-2xl border border-line bg-night-2 p-6">
              <p className="text-xs font-semibold tracking-wide text-muted uppercase">På denne side</p>
              <ol className="mt-4 space-y-1 text-sm">
                {[...sections, { id: "faq", title: "Ofte stillede spørgsmål" }].map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="block rounded-md px-2 py-1.5 text-muted transition hover:bg-white/[0.04] hover:text-ink">
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
            <div className="rounded-2xl border border-line bg-night-2 p-6">
              <p className="text-xs font-semibold tracking-wide text-muted uppercase">Læs også</p>
              <ul className="mt-4 space-y-3 text-sm">
                {related.map((r) => (
                  <li key={r.href}>
                    <Link href={r.href} className="group block">
                      <span className="flex items-center justify-between font-medium text-ink group-hover:text-rose-400">
                        {r.label} <Icon name="chevronRight" className="h-4 w-4" />
                      </span>
                      <span className="mt-0.5 block text-xs leading-5 text-muted">{r.text}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </Container>

      <CtaBand />

      <FaqSchema items={faq} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: title,
          description,
          inLanguage: "da-DK",
          datePublished: site.updated,
          dateModified: site.updated,
          mainEntityOfPage: absoluteUrl(path),
          image: absoluteUrl(image ? image.src : "/opengraph-image"),
          author: { "@id": `${site.url}/#organization` },
          publisher: { "@id": `${site.url}/#organization` },
          about: about.map((a) => ({ "@type": "Thing", name: a.name, ...(a.sameAs && { sameAs: a.sameAs }) })),
          articleSection: sections.map((s) => s.title),
        }}
      />
    </>
  );
}
