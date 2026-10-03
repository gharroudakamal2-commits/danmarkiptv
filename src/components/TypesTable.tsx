import type { IptvType } from "@/lib/iptvTypes";

const priceStyle: Record<IptvType["price"], string> = {
  Gratis: "bg-emerald-100 text-emerald-700",
  Lav: "bg-sky-100 text-sky-700",
  Mellem: "bg-blue-100 text-blue-700",
  Høj: "bg-slate-200 text-slate-700",
};

export function TypesTable({ types }: { types: IptvType[] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60">
      <table className="w-full min-w-[720px] text-left text-sm">
        <thead className="bg-slate-50 text-xs tracking-wide text-muted uppercase">
          <tr>
            <th className="p-4">Type</th>
            <th className="p-4">Kanaler</th>
            <th className="p-4">Sport</th>
            <th className="p-4">Binding</th>
            <th className="p-4">Prisniveau</th>
            <th className="p-4">Bedst til</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {types.map((t, i) => (
            <tr key={t.slug} className="group transition-colors hover:bg-sky-50/60">
              <td className="p-4">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-slate-900 text-xs font-bold text-white transition group-hover:scale-110 group-hover:bg-brand">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-bold">{t.name}</p>
                    <p className="text-xs text-muted">{t.tagline}</p>
                  </div>
                </div>
              </td>
              <td className="p-4 text-muted">{t.channels}</td>
              <td className="p-4">
                {t.sport ? (
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700">✓</span>
                ) : (
                  "–"
                )}
              </td>
              <td className="p-4 text-muted">{t.binding}</td>
              <td className="p-4">
                <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${priceStyle[t.price]}`}>{t.price}</span>
              </td>
              <td className="p-4 text-muted">{t.bestFor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
