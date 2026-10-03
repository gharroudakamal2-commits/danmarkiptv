import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description: `Kontakt ${site.name} med spørgsmål, rettelser eller samarbejde.`,
  alternates: { canonical: "/kontakt" },
};

export default function ContactPage() {
  return (
    <PageShell
      crumbs={[{ name: "Kontakt", href: "/kontakt" }]}
      title="Kontakt os"
      intro="Har du spørgsmål, rettelser eller forslag til samarbejde? Skriv til os."
    >
      <div className="-mt-6 grid gap-4 sm:grid-cols-2">
        <WhatsAppLink
          intro="Hej! Jeg har et spørgsmål om jeres IPTV-abonnement."
          className="card-lift group relative flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60"
        >
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-emerald-50 text-2xl transition group-hover:scale-110">💬</span>
          <span className="min-w-0">
            <span className="block text-sm text-muted">WhatsApp</span>
            <span className="text-lg font-bold group-hover:text-brand">{site.whatsapp.display}</span>
          </span>
        </WhatsAppLink>
        <a
          href={`mailto:${site.email}`}
          className="card-lift group relative flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60"
        >
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-sky-50 text-2xl transition group-hover:scale-110">✉️</span>
          <span className="min-w-0">
            <span className="block text-sm text-muted">E-mail</span>
            <span className="block truncate text-lg font-bold group-hover:text-brand">{site.email}</span>
          </span>
        </a>
      </div>
    </PageShell>
  );
}
