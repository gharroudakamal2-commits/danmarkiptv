import Link from "next/link";
import { Icon } from "@/components/Icon";
import { delay } from "@/components/ui";
import { WhatsAppIcon, WhatsAppLink } from "@/components/WhatsAppLink";
import { currency, type Plan } from "@/lib/plans";
import { trust } from "@/lib/trust";

const kr = (n: number) => `${n.toLocaleString("da-DK")} ${currency}`;

export function PricingTable({ plans }: { plans: Plan[] }) {
  return (
    <>
      <div className="grid gap-5 pt-4 sm:grid-cols-2 lg:grid-cols-4">
        {plans.map((p, i) => {
          const featured = p.popular;
          return (
            <div
              key={p.id}
              data-reveal
              data-spotlight
              style={delay(i * 80)}
              className={`relative flex flex-col rounded-2xl p-7 ${
                featured
                  ? "animate-glow bg-night-3 text-white ring-2 ring-brand lg:-my-4 lg:py-11"
                  : "card-lift border border-line bg-night-2"
              }`}
            >
              {featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-3 py-1 text-xs font-semibold whitespace-nowrap text-white shadow-lg shadow-brand/30">
                  Mest populær
                </span>
              )}

              <h3 className={`text-sm font-semibold tracking-wide uppercase ${featured ? "text-rose-300" : "text-muted"}`}>
                {p.name}
              </h3>

              <div className="mt-5 flex items-baseline gap-2">
                <span className="text-4xl font-bold tracking-tight">{kr(p.price)}</span>
                {p.oldPrice && (
                  <span className={`text-sm line-through ${featured ? "text-slate-500" : "text-muted"}`}>{kr(p.oldPrice)}</span>
                )}
              </div>
              <p className={`mt-1 text-sm ${featured ? "text-slate-400" : "text-muted"}`}>
                {p.perMonth ? `Svarer til ${kr(p.perMonth)}/md.` : "Betal for én måned ad gangen"}
              </p>

              <div className={`my-6 h-px ${featured ? "bg-white/10" : "bg-line"}`} />

              <ul className="flex-1 space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Icon name="check" className={`mt-0.5 h-4 w-4 shrink-0 ${featured ? "text-rose-400" : "text-rose-400"}`} />
                    <span className={featured ? "text-slate-200" : "text-ink"}>{f}</span>
                  </li>
                ))}
              </ul>

              <WhatsAppLink
                intro="Hej! Jeg vil gerne købe et IPTV-abonnement."
                details={[`Plan: ${p.name}`, `Pris: ${kr(p.price)}`]}
                anchor="priser"
                className={`mt-8 flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition ${
                  featured ? "bg-brand text-white hover:bg-brand-dark" : "bg-white/10 text-white hover:bg-white/15"
                }`}
              >
                <WhatsAppIcon className="h-4 w-4" />
                Bestil {p.name.toLowerCase()}
              </WhatsAppLink>
            </div>
          );
        })}
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted">
        <span className="flex items-center gap-2"><Icon name="calendarX" className="h-4 w-4 text-rose-400" /> Ingen binding</span>
        <span className="flex items-center gap-2"><Icon name="creditCard" className="h-4 w-4 text-rose-400" /> Samlet pris – ingen gebyrer</span>
        <span className="flex items-center gap-2"><Icon name="refresh" className="h-4 w-4 text-rose-400" /> 14 dages fortrydelsesret</span>
      </div>
      {trust.paymentMethods.length > 0 && (
        <ul aria-label="Betalingsmetoder" className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {trust.paymentMethods.map((m) => (
            <li key={m} className="rounded-md border border-line bg-white/[0.04] px-3 py-1 text-xs font-semibold text-slate-200">
              {m}
            </li>
          ))}
        </ul>
      )}
      <p className="mt-4 text-center text-xs text-muted">
        Ved køb accepterer du vores{" "}
        <Link href="/handelsbetingelser" className="font-medium text-ink underline underline-offset-2 hover:text-rose-400">
          handelsbetingelser
        </Link>
        . Læs om{" "}
        <Link href="/fortrydelsesret" className="font-medium text-ink underline underline-offset-2 hover:text-rose-400">
          fortrydelsesret
        </Link>
        .
      </p>
    </>
  );
}
