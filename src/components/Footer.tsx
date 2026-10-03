import Link from "next/link";
import { guides } from "@/lib/guides";
import { footerLinks, site } from "@/lib/site";
import { sports } from "@/lib/sports";

const linkClass = "hover:text-brand";

function Column({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <p className="font-bold">{title}</p>
      <ul className="mt-2 space-y-1 text-sm text-muted">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className={linkClass}>{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-1">
          <p className="font-bold">{site.name}</p>
          <p className="mt-2 text-sm text-muted">{site.description}</p>
        </div>
        <Column title="IPTV" links={footerLinks} />
        <Column
          title="Sport"
          links={sports.map((s) => ({ href: `/sport/${s.slug}`, label: s.name }))}
        />
        <Column
          title="Guides"
          links={guides.map((g) => ({ href: `/guides/${g.slug}`, label: g.title }))}
        />
        <Column
          title="Info"
          links={[
            { href: "/om-os", label: "Om os" },
            { href: "/kontakt", label: "Kontakt" },
            { href: "/privatlivspolitik", label: "Privatlivspolitik" },
            { href: "/cookies", label: "Cookies" },
            { href: "/dmca", label: "Ophavsret & DMCA" },
          ]}
        />
      </div>
      <p className="border-t border-slate-200 px-4 py-4 text-center text-xs text-muted">
        © {new Date().getFullYear()} {site.name}. Siden kan indeholde affiliate-links. Vi
        anbefaler kun lovlige tjenester.
      </p>
    </footer>
  );
}
