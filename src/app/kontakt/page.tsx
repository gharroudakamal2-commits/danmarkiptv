import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { PageHeader } from "@/components/PageShell";
import { Container, IconBadge } from "@/components/ui";
import { WhatsAppIcon, WhatsAppLink } from "@/components/WhatsAppLink";
import { pageMeta, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description: `Kontakt ${site.name} på WhatsApp eller e-mail – spørgsmål før køb, hjælp til opsætning eller dit abonnement.`,
  ...pageMeta("/kontakt"),
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ name: "Kontakt", href: "/kontakt" }]}
        title="Kontakt os"
        intro="Spørgsmål før du køber, hjælp til opsætning eller noget med dit abonnement? Vi er klar til at hjælpe."
      />

      <Container className="relative z-10 -mt-8 pb-24">
        <div className="grid gap-5 lg:grid-cols-3">
          <WhatsAppLink
            intro="Hej! Jeg har et spørgsmål om jeres IPTV-abonnement."
            className="card-lift group flex flex-col rounded-2xl border border-line bg-night-2 p-8 shadow-xl shadow-black/5"
          >
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-emerald-500/10 text-[#1ebe5b] ring-1 ring-emerald-600/10">
              <WhatsAppIcon className="h-5 w-5" />
            </span>
            <span className="mt-6 text-sm text-muted">WhatsApp – hurtigste svar</span>
            <span className="mt-1 text-xl font-semibold text-ink group-hover:text-rose-400">{site.whatsapp.display}</span>
            <span className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-rose-400">
              Start en chat <Icon name="arrowRight" className="h-4 w-4" />
            </span>
          </WhatsAppLink>

          <a
            href={`mailto:${site.email}`}
            className="card-lift group flex flex-col rounded-2xl border border-line bg-night-2 p-8 shadow-xl shadow-black/5"
          >
            <IconBadge name="mail" />
            <span className="mt-6 text-sm text-muted">E-mail</span>
            <span className="mt-1 truncate text-xl font-semibold text-ink group-hover:text-rose-400">{site.email}</span>
            <span className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-rose-400">
              Skriv en e-mail <Icon name="arrowRight" className="h-4 w-4" />
            </span>
          </a>

          <Link
            href="/hjaelp"
            className="card-lift group flex flex-col rounded-2xl border border-line bg-night-2 p-8 shadow-xl shadow-black/5"
          >
            <IconBadge name="help" />
            <span className="mt-6 text-sm text-muted">Selvbetjening</span>
            <span className="mt-1 text-xl font-semibold text-ink group-hover:text-rose-400">Hjælpecenter</span>
            <span className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-rose-400">
              Find svar <Icon name="arrowRight" className="h-4 w-4" />
            </span>
          </Link>
        </div>

        <div className="mt-12 rounded-2xl bg-paper p-8">
          <h2 className="font-semibold text-ink">Virksomhedsoplysninger</h2>
          <dl className="mt-4 grid gap-4 text-sm sm:grid-cols-3">
            <div>
              <dt className="text-muted">Virksomhed</dt>
              <dd className="mt-1 font-medium text-ink">{site.company.name}</dd>
            </div>
            <div>
              <dt className="text-muted">CVR</dt>
              <dd className="mt-1 font-medium text-ink">{site.company.cvr}</dd>
            </div>
            <div>
              <dt className="text-muted">Adresse</dt>
              <dd className="mt-1 font-medium text-ink">{site.company.address}</dd>
            </div>
          </dl>
        </div>
      </Container>
    </>
  );
}
