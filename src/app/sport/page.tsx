import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { PageShell } from "@/components/PageShell";
import { sports } from "@/lib/sports";
import { pageMeta } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sport på IPTV – Se fodbold, F1 og håndbold i Danmark",
  description:
    "Sådan ser du sport via IPTV i Danmark: Superliga, Champions League, Premier League, Formel 1 og håndbold.",
  ...pageMeta("/sport"),
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
            className="card-lift group flex flex-col overflow-hidden rounded-2xl border border-line bg-night-2"
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={s.image}
                alt={s.imageAlt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                placeholder="blur"
                className="object-cover transition duration-[1.5s] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night-2 via-transparent to-transparent" />
            </div>
            <div className="flex flex-1 flex-col p-6 pt-3">
              <h2 className="text-xl font-bold">{s.name}</h2>
              <p className="mt-2 flex-1 text-sm leading-6 text-muted">{s.intro}</p>
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
