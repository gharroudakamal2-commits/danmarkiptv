import { Icon } from "./Icon";
import { JsonLd } from "./JsonLd";

export type FaqItem = { q: string; a: string };

/** FAQPage structured data. Emit once per page, even when the page shows several FAQ groups. */
export function FaqSchema({ items }: { items: FaqItem[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      }}
    />
  );
}

/** Accordion list only — no heading, no schema. */
export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-line rounded-2xl border border-line bg-night-2">
      {items.map((item) => (
        <details key={item.q} className="group px-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-semibold text-ink">
            {item.q}
            <Icon name="chevronDown" className="h-5 w-5 shrink-0 text-muted transition duration-300 group-open:rotate-180 group-open:text-rose-400" />
          </summary>
          <p className="-mt-1 pb-6 leading-7 text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

export function Faq({ items, title = "Ofte stillede spørgsmål" }: { items: FaqItem[]; title?: string }) {
  return (
    <section className="mt-20">
      <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">{title}</h2>
      <div className="mt-6">
        <FaqList items={items} />
      </div>
      <FaqSchema items={items} />
    </section>
  );
}
