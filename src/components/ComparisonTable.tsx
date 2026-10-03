import Link from "next/link";
import type { Provider } from "@/lib/providers";

function Stars({ rating }: { rating: number }) {
  return (
    <span className="relative inline-block text-base leading-none tracking-tight text-slate-200" aria-label={`${rating} af 5`}>
      ★★★★★
      <span className="absolute inset-0 overflow-hidden text-amber-400" style={{ width: `${(rating / 5) * 100}%` }}>
        ★★★★★
      </span>
    </span>
  );
}

export function ComparisonTable({ providers }: { providers: Provider[] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60">
      <table className="w-full min-w-[680px] text-left text-sm">
        <thead className="bg-slate-50 text-xs tracking-wide text-muted uppercase">
          <tr>
            <th className="p-4">Udbyder</th>
            <th className="p-4">Type</th>
            <th className="p-4">Sport</th>
            <th className="p-4">Pris</th>
            <th className="p-4">Vores score</th>
            <th className="p-4"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {providers.map((p, i) => (
            <tr
              key={p.slug}
              className={`group transition-colors hover:bg-sky-50/60 ${i === 0 ? "bg-gradient-to-r from-sky-50 to-transparent" : ""}`}
            >
              <td className="relative p-4">
                {i === 0 && <span className="absolute inset-y-0 left-0 w-1 bg-brand" />}
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-slate-900 text-xs font-bold text-white transition group-hover:scale-110 group-hover:bg-brand">
                    {p.name.slice(0, 2).toUpperCase()}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <Link href={`/anmeldelser/${p.slug}`} className="font-bold hover:text-brand">
                        {p.name}
                      </Link>
                      {i === 0 && (
                        <span className="rounded-full bg-brand px-2 py-0.5 text-[10px] font-bold tracking-wide text-white uppercase">
                          Vores favorit
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-muted">{p.tagline}</p>
                  </div>
                </div>
              </td>
              <td className="p-4 text-muted">{p.type}</td>
              <td className="p-4">
                {p.sport ? (
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700">✓</span>
                ) : (
                  "–"
                )}
              </td>
              <td className="p-4">
                <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${p.free ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-700"}`}>
                  {p.free ? "Gratis" : "Abonnement"}
                </span>
              </td>
              <td className="p-4">
                <Stars rating={p.rating} />
                <span className="ml-2 font-semibold">{p.rating.toFixed(1)}</span>
              </td>
              <td className="p-4 text-right">
                <a
                  href={p.url}
                  target="_blank"
                  rel="sponsored nofollow noopener"
                  className={`inline-block rounded-lg px-4 py-2 font-semibold whitespace-nowrap transition hover:-translate-y-0.5 ${
                    i === 0
                      ? "btn-shine bg-brand text-white shadow-md shadow-blue-500/30 hover:bg-brand-dark"
                      : "bg-slate-900 text-white hover:bg-brand"
                  }`}
                >
                  Se tilbud →
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
