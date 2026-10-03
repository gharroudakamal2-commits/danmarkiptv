import { currency, type Plan } from "@/lib/plans";
import { WhatsAppIcon, WhatsAppLink } from "@/components/WhatsAppLink";

const delay = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as React.CSSProperties;

const kr = (n: number) => `${n.toLocaleString("da-DK")} ${currency}`;

export function PricingTable({ plans }: { plans: Plan[] }) {
  return (
    <div className="grid gap-5 pt-4 sm:grid-cols-2 lg:grid-cols-4">
      {plans.map((p, i) => (
        <div
          key={p.id}
          data-reveal
          style={delay(i * 100)}
          className={`card-lift relative flex flex-col rounded-2xl border bg-white p-6 ${
            p.popular ? "border-brand shadow-xl shadow-blue-500/15 ring-1 ring-brand" : "border-slate-200"
          }`}
        >
          {p.popular && (
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-3 py-1 text-xs font-semibold whitespace-nowrap text-white">
              Mest populær
            </span>
          )}

          <h3 className="text-lg font-bold">{p.name}</h3>

          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-4xl font-extrabold tracking-tight">{kr(p.price)}</span>
            {p.oldPrice && <span className="text-sm text-muted line-through">{kr(p.oldPrice)}</span>}
          </div>
          <p className="mt-1 text-sm text-muted">
            {p.perMonth ? `≈ ${kr(p.perMonth)}/md. · ` : ""}
            {p.period}
          </p>

          <ul className="mt-6 flex-1 space-y-3 text-sm">
            {p.features.map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-100 text-[10px] font-bold text-emerald-700">
                  ✓
                </span>
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <WhatsAppLink
            intro="Hej! Jeg vil gerne købe et IPTV-abonnement."
            details={[`Plan: ${p.name}`, `Pris: ${kr(p.price)}`]}
            anchor="priser"
            className={`btn-shine mt-8 flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold transition hover:-translate-y-0.5 ${
              p.popular ? "bg-brand text-white hover:bg-brand-dark" : "bg-slate-900 text-white hover:bg-brand"
            }`}
          >
            <WhatsAppIcon />
            Køb nu
          </WhatsAppLink>
        </div>
      ))}
    </div>
  );
}
