import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { ButtonLink, Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Siden findes ikke",
  robots: { index: false },
};

const popular = [
  { href: "/iptv-abonnement", label: "Priser og abonnementer" },
  { href: "/kom-i-gang", label: "Kom i gang" },
  { href: "/hjaelp", label: "Hjælpecenter" },
  { href: "/guides", label: "Guides om IPTV" },
];

export default function NotFound() {
  return (
    <section className="relative text-white">
      <Container className="max-w-2xl py-24 text-center sm:py-32">
        <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold tracking-wider text-slate-300">
          <span className="h-1.5 w-1.5 rounded-full bg-rose-500" /> FEJL 404 · INTET SIGNAL
        </p>
        <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">Siden findes ikke</h1>
        <p className="mt-4 text-lg text-slate-300">
          Siden er flyttet eller findes ikke længere. Prøv en af disse:
        </p>
        <div className="mt-10 grid gap-3 text-left sm:grid-cols-2">
          {popular.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-5 py-4 font-medium transition hover:border-white/20 hover:bg-white/10"
            >
              {p.label}
              <Icon name="arrowRight" className="h-4 w-4 text-rose-400 transition group-hover:translate-x-0.5" />
            </Link>
          ))}
        </div>
        <div className="mt-10">
          <ButtonLink href="/" size="lg">Til forsiden</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
