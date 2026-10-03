import { JsonLd } from "./JsonLd";

export type FaqItem = { q: string; a: string };

export function Faq({ items, title = "Ofte stillede spørgsmål" }: { items: FaqItem[]; title?: string }) {
  return (
    <section className="mt-20">
      <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">{title}</h2>
      <div className="mt-6 space-y-3">
        {items.map((item) => (
          <details
            key={item.q}
            className="group rounded-2xl border border-slate-200 bg-white px-5 transition open:border-brand/30 open:shadow-lg open:shadow-blue-500/5 hover:border-slate-300"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-semibold [&::-webkit-details-marker]:hidden">
              {item.q}
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-slate-100 text-brand transition duration-300 group-open:rotate-45 group-open:bg-brand group-open:text-white">
                +
              </span>
            </summary>
            <p className="pb-5 leading-7 text-muted">{item.a}</p>
          </details>
        ))}
      </div>
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
    </section>
  );
}
