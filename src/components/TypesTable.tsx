import type { IptvType } from "@/lib/iptvTypes";

const priceStyle: Record<IptvType["price"], string> = {
  Gratis: "bg-emerald-500/10 text-emerald-400 ring-emerald-400/20",
  Mellem: "bg-amber-500/10 text-amber-400 ring-amber-400/20",
  Høj: "bg-rose-500/10 text-rose-400 ring-rose-400/20",
};

export function TypesTable({ types }: { types: IptvType[] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-line bg-night-2 shadow-2xl shadow-black/40">
      <table className="w-full min-w-[760px] text-left text-sm">
        <thead className="border-b border-line bg-paper text-xs font-semibold tracking-wide text-muted uppercase">
          <tr>
            <th className="p-5">Type</th>
            <th className="p-5">Kanaler</th>
            <th className="p-5">Sport</th>
            <th className="p-5">Binding</th>
            <th className="p-5">Prisniveau</th>
            <th className="p-5">Bedst til</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-line">
          {types.map((t, i) => (
            <tr key={t.slug} className="transition-colors hover:bg-paper/60">
              <td className="p-5">
                <div className="flex items-center gap-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/10 text-xs font-bold text-white">{i + 1}</span>
                  <div>
                    <p className="font-semibold text-ink">{t.name}</p>
                    <p className="mt-0.5 text-xs text-muted">{t.tagline}</p>
                  </div>
                </div>
              </td>
              <td className="p-5 text-muted">{t.channels}</td>
              <td className="p-5 text-muted">{t.sport}</td>
              <td className="p-5 text-muted">{t.binding}</td>
              <td className="p-5">
                <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${priceStyle[t.price]}`}>{t.price}</span>
              </td>
              <td className="p-5 text-muted">{t.bestFor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
