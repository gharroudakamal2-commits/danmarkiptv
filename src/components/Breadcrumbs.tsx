import Link from "next/link";
import { absoluteUrl } from "@/lib/site";
import { JsonLd } from "./JsonLd";

type Crumb = { name: string; href: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all = [{ name: "Forside", href: "/" }, ...items];
  return (
    <>
      <nav aria-label="Brødkrummer" className="mb-6 text-sm text-muted">
        {all.map((c, i) => (
          <span key={c.href}>
            {i > 0 && <span className="mx-2">/</span>}
            {i < all.length - 1 ? (
              <Link href={c.href} className="hover:text-brand">{c.name}</Link>
            ) : (
              <span className="text-ink">{c.name}</span>
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
