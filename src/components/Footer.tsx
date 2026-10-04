import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Logo } from "@/components/ui";
import { WhatsAppIcon, WhatsAppLink } from "@/components/WhatsAppLink";
import { footerColumns, legalLinks, site } from "@/lib/site";

function Column({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <p className="text-sm font-semibold text-white">{title}</p>
      <ul className="mt-4 space-y-1">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="inline-block py-1 text-sm text-slate-400 transition hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-black/30 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-10 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div className="max-w-sm">
            <Link href="/">
              <Logo dark />
            </Link>
            <p className="mt-5 text-sm leading-6">{site.description}</p>
            <div className="mt-6 space-y-2 text-sm">
              <WhatsAppLink
                intro="Hej! Jeg har et spørgsmål om jeres IPTV-abonnement."
                className="flex items-center gap-2.5 py-1 text-slate-300 hover:text-white"
              >
                <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                {site.whatsapp.display}
              </WhatsAppLink>
              <a href={`mailto:${site.email}`} className="flex items-center gap-2.5 py-1 text-slate-300 hover:text-white">
                <Icon name="mail" className="h-4 w-4 text-rose-400" />
                {site.email}
              </a>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {footerColumns.map((c) => (
              <Column key={c.title} title={c.title} links={c.links} />
            ))}
            <Column title="Juridisk" links={legalLinks} />
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.company.name} · CVR {site.company.cvr} · {site.company.address}
          </p>
          <p>Alle priser er i danske kroner.</p>
        </div>
      </div>
    </footer>
  );
}
