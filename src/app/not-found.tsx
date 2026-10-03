import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Siden findes ikke",
  robots: { index: false },
};

const popular = [
  { href: "/bedste-iptv-danmark", label: "Bedste IPTV i Danmark" },
  { href: "/iptv-abonnement", label: "IPTV abonnement" },
  { href: "/iptv-pa-smart-tv", label: "IPTV på smart-tv" },
  { href: "/sport", label: "Sport på IPTV" },
];

export default function NotFound() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 text-white">
      <div className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="absolute top-1/2 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 animate-blob rounded-full bg-brand/40 blur-3xl" />
      <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:py-32">
        <p className="text-gradient text-8xl font-extrabold tracking-tight sm:text-9xl">404</p>
        <div className="mx-auto mt-4 inline-flex items-center gap-2 rounded-md bg-red-600 px-2.5 py-1 text-xs font-bold tracking-wider">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" /> INTET SIGNAL
        </div>
        <h1 className="mt-6 text-3xl font-extrabold sm:text-4xl">Siden findes ikke</h1>
        <p className="mt-4 text-lg text-slate-300">
          Siden er flyttet eller findes ikke længere. Prøv en af vores mest populære sider:
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {popular.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-semibold backdrop-blur transition hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-white/10"
            >
              {p.label} →
            </Link>
          ))}
        </div>
        <Link
          href="/"
          className="btn-shine mt-8 inline-block rounded-xl bg-brand px-6 py-3.5 font-semibold shadow-lg shadow-blue-600/40 transition hover:-translate-y-0.5 hover:bg-brand-dark"
        >
          Til forsiden
        </Link>
      </div>
    </section>
  );
}
