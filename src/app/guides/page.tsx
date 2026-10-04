import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { PageShell } from "@/components/PageShell";
import { guides } from "@/lib/guides";
import { pageMeta } from "@/lib/site";

export const metadata: Metadata = {
  title: "Guides om IPTV og tv i Danmark",
  description:
    "Praktiske guides om IPTV i Danmark: vælg den rigtige tjeneste, find det internet du skal bruge, og se tv lovligt på smart-tv, boks og mobil.",
  ...pageMeta("/guides"),
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
            className="card-lift group flex flex-col overflow-hidden rounded-2xl border border-line bg-night-2"
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={g.image}
                alt={g.imageAlt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                placeholder="blur"
                className="object-cover transition duration-[1.5s] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night-2 via-transparent to-transparent" />
            </div>
            <div className="flex flex-1 flex-col p-6 pt-3">
              <h2 className="text-lg font-bold">{g.title}</h2>
              <p className="mt-2 flex-1 text-sm leading-6 text-muted">{g.description}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-rose-400">
                Læs guiden <Icon name="arrowRight" className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}
