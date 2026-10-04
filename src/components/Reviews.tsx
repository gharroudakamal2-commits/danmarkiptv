import { trust } from "@/lib/trust";
import { Container, SectionHeader } from "./ui";

/** Customer reviews + rating. Renders nothing until real data is added in src/lib/trust.ts. */
export function Reviews() {
  if (!trust.rating && trust.reviews.length === 0) return null;

  return (
    <section className="border-t border-line py-24 sm:py-32">
      <Container>
        <SectionHeader
          eyebrow="Anmeldelser"
          title="Det siger vores kunder"
          text={trust.rating ? `${trust.rating.score.toLocaleString("da-DK")} ud af 5 på ${trust.rating.source} – baseret på ${trust.rating.count} anmeldelser.` : undefined}
        />
        {trust.reviews.length > 0 && (
          <div className="mt-14 flex flex-wrap justify-center gap-6">
            {trust.reviews.slice(0, 3).map((r) => (
              <figure key={r.quote} className="w-full rounded-2xl border border-line bg-night-2 p-7 md:w-[calc((100%-3rem)/3)]">
                <blockquote className="leading-7 text-ink">“{r.quote}”</blockquote>
                <figcaption className="mt-5 text-sm text-muted">
                  {r.name}
                  {r.city && `, ${r.city}`}
                </figcaption>
              </figure>
            ))}
          </div>
        )}
        {trust.rating && (
          <p className="mt-10 text-center">
            <a href={trust.rating.url} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-rose-400 hover:underline">
              Læs alle anmeldelser på {trust.rating.source}
            </a>
          </p>
        )}
      </Container>
    </section>
  );
}
