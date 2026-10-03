import { Breadcrumbs } from "./Breadcrumbs";

type Crumb = { name: string; href: string };

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
  const width = wide ? "max-w-6xl" : "max-w-3xl";
  return (
    <>
      <header className="relative isolate overflow-hidden bg-slate-950 text-white">
        <div className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <div className="absolute -top-24 -right-20 -z-10 h-72 w-72 animate-blob rounded-full bg-brand/40 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 -z-10 h-72 w-72 animate-blob rounded-full bg-cyan-500/20 blur-3xl [animation-delay:-8s]" />
        <div className={`mx-auto px-4 pt-8 pb-14 sm:pb-16 ${width}`}>
          <div className="[&_a]:text-slate-400 [&_a:hover]:text-white [&_nav]:text-slate-500 [&_span.text-ink]:text-slate-200">
            <Breadcrumbs items={crumbs} />
          </div>
          <h1 data-reveal className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">{title}</h1>
          {intro && (
            <p data-reveal style={{ "--reveal-delay": "120ms" } as React.CSSProperties} className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              {intro}
            </p>
          )}
        </div>
      </header>
      <article data-reveal style={{ "--reveal-delay": "200ms" } as React.CSSProperties} className={`mx-auto px-4 pb-12 ${width}`}>
        {children}
      </article>
    </>
  );
}
