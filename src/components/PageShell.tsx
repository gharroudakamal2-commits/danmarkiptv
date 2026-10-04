import Image from "next/image";
import Link from "next/link";
import ctaImage from "../../public/images/home-cta.jpg";
import { legalLinks } from "@/lib/site";
import { Breadcrumbs } from "./Breadcrumbs";
import { Icon } from "./Icon";
import { Aurora, ButtonLink, Container } from "./ui";

type Crumb = { name: string; href: string };

/** Dark page header shared by every inner page. No reveal animation: it is above the fold. */
export function PageHeader({ crumbs, title, intro, children }: { crumbs: Crumb[]; title: string; intro?: string; children?: React.ReactNode }) {
  return (
    <header className="relative isolate overflow-hidden text-white">
      <Aurora />
      <Container className="pt-8 pb-16 sm:pb-20">
        <div className="hero-fade">
          <Breadcrumbs items={crumbs} />
        </div>
        <h1 className="hero-rise mt-8 max-w-4xl text-4xl font-bold tracking-tight text-balance sm:text-5xl" style={{ "--d": "60ms" } as React.CSSProperties}>
          {title}
        </h1>
        {intro && (
          <p className="hero-rise mt-5 max-w-3xl text-lg leading-8 text-slate-300" style={{ "--d": "140ms" } as React.CSSProperties}>
            {intro}
          </p>
        )}
        {children}
      </Container>
    </header>
  );
}

export function PageShell({
  crumbs,
  title,
  intro,
  wide = false,
  children,
}: {
  crumbs: Crumb[];
  title: string;
  intro?: string;
  wide?: boolean;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHeader crumbs={crumbs} title={title} intro={intro} />
      <Container className="relative z-10 pb-24">
        <article className={wide ? "" : "max-w-3xl"}>{children}</article>
      </Container>
      <CtaBand />
    </>
  );
}

/** Legal pages: header + sticky sidebar with every legal document. */
export function LegalShell({
  crumbs,
  title,
  intro,
  updated,
  children,
}: {
  crumbs: Crumb[];
  title: string;
  intro?: string;
  updated: string;
  children: React.ReactNode;
}) {
  const current = crumbs[crumbs.length - 1]?.href;
  return (
    <>
      <PageHeader crumbs={crumbs} title={title} intro={intro}>
        <p className="mt-6 flex items-center gap-2 text-sm text-slate-400">
          <Icon name="clock" className="h-4 w-4" />
          Senest opdateret{" "}
          {new Date(updated).toLocaleDateString("da-DK", { day: "numeric", month: "long", year: "numeric" })}
        </p>
      </PageHeader>
      <Container className="grid gap-12 py-14 lg:grid-cols-[240px_1fr] lg:gap-16">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <p className="text-xs font-semibold tracking-wide text-muted uppercase">Juridiske dokumenter</p>
          <nav aria-label="Juridiske dokumenter" className="mt-3 flex flex-col gap-0.5">
            {legalLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={l.href === current ? "page" : undefined}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                  l.href === current ? "bg-brand-soft text-rose-400" : "text-muted hover:bg-paper hover:text-ink"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </aside>
        <article className="prose-da max-w-3xl">{children}</article>
      </Container>
    </>
  );
}

/** Closing call-to-action shown at the bottom of inner pages. */
export function CtaBand() {
  return (
    <section className="px-4 pb-20 sm:px-6 lg:px-8">
      <div data-reveal className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-3xl bg-night-2 px-6 py-16 text-center text-white ring-1 ring-white/10 sm:px-12">
        <Image src={ctaImage} alt="" fill sizes="(min-width: 1280px) 1280px, 100vw" className="-z-20 animate-kenburns object-cover opacity-60" />
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-night/80 via-night/40 to-night/80" />
        <Aurora />
        <div className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">Klar til at komme i gang?</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
          Vælg en periode uden binding, og bestil direkte via WhatsApp.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/iptv-abonnement#priser" size="lg" arrow>Se priser</ButtonLink>
          <ButtonLink href="/hjaelp" size="lg" variant="ghostDark">Hjælpecenter</ButtonLink>
        </div>
      </div>
    </section>
  );
}
