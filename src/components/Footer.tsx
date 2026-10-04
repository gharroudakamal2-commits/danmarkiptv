import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Logo } from "@/components/ui";
import { WhatsAppIcon, WhatsAppLink } from "@/components/WhatsAppLink";
import { guides } from "@/lib/guides";
import { footerColumns, legalLinks, site } from "@/lib/site";
import { sports } from "@/lib/sports";

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

/** Static columns plus the sport and guide pages, so every article is linked site-wide. */
const columns = [
  ...footerColumns.map((c) =>
    c.title === "Guides"
      ? { ...c, links: [...c.links, ...guides.map((g) => ({ href: `/guides/${g.slug}`, label: g.title.split(":")[0].split(" – ")[0] }))] }
      : c,
  ),
  { title: "Sport", links: sports.map((s) => ({ href: `/sport/${s.slug}`, label: s.name })) },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-black/30 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-10 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_2.6fr]">
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

          <div className="grid gap-10 sm:grid-cols-3 lg:grid-cols-5">
            {columns.map((c) => (
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
