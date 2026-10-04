import type { MetadataRoute } from "next";
import { guides } from "@/lib/guides";
import { absoluteUrl, site } from "@/lib/site";
import { sports } from "@/lib/sports";

const staticPaths = [
  { path: "/", priority: 1 },
  { path: "/bedste-iptv-danmark", priority: 0.9 },
  { path: "/iptv-abonnement", priority: 0.9 },
  { path: "/kom-i-gang", priority: 0.8 },
  { path: "/hjaelp", priority: 0.7 },
  { path: "/iptv-app", priority: 0.8 },
  { path: "/iptv-pa-smart-tv", priority: 0.8 },
  { path: "/iptv-boks", priority: 0.8 },
  { path: "/iptv-tv", priority: 0.9 },
  { path: "/iptv-nordic", priority: 0.9 },
  { path: "/er-iptv-lovligt", priority: 0.8 },
  { path: "/sport", priority: 0.7 },
  { path: "/guides", priority: 0.6 },
  { path: "/om-os", priority: 0.3 },
  { path: "/kontakt", priority: 0.3 },
  { path: "/handelsbetingelser", priority: 0.2 },
  { path: "/fortrydelsesret", priority: 0.2 },
  { path: "/brugsvilkaar", priority: 0.2 },
  { path: "/ansvarsfraskrivelse", priority: 0.2 },
  { path: "/dmca", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  // A fixed date (not "now"): Google ignores lastmod values that change on every build.
  const updated = new Date(site.updated);
  return [
    ...staticPaths.map(({ path, priority }) => ({
      url: absoluteUrl(path),
      lastModified: updated,
      priority,
    })),
    ...sports.map((s) => ({
      url: absoluteUrl(`/sport/${s.slug}`),
      lastModified: updated,
      priority: 0.7,
    })),
    ...guides.map((g) => ({
      url: absoluteUrl(`/guides/${g.slug}`),
      lastModified: new Date(g.date),
      priority: 0.6,
    })),
  ];
}
