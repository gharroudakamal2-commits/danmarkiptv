import Link from "next/link";
import { absoluteUrl } from "@/lib/site";
import { Icon } from "./Icon";
import { JsonLd } from "./JsonLd";

type Crumb = { name: string; href: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all = [{ name: "Forside", href: "/" }, ...items];
  return (
    <>
      <nav aria-label="Brødkrummer" className="flex flex-wrap items-center gap-1 text-sm text-slate-400">
        {all.map((c, i) => (
          <span key={c.href} className="flex items-center gap-1">
            {i > 0 && <Icon name="chevronRight" className="h-3.5 w-3.5 text-slate-600" />}
            {i < all.length - 1 ? (
              <Link href={c.href} className="inline-block py-1 transition hover:text-white">{c.name}</Link>
            ) : (
              <span aria-current="page" className="py-1 text-slate-200">{c.name}</span>
            )}
          </span>
        ))}
      </nav>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: all.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.name,
            item: absoluteUrl(c.href),
          })),
        }}
      />
    </>
  );
}
