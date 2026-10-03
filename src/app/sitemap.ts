import type { MetadataRoute } from "next";
import { guides } from "@/lib/guides";
import { absoluteUrl } from "@/lib/site";
import { sports } from "@/lib/sports";

const staticPaths = [
  { path: "/", priority: 1 },
  { path: "/bedste-iptv-danmark", priority: 0.9 },
  { path: "/iptv-abonnement", priority: 0.9 },
  { path: "/iptv-app", priority: 0.8 },
  { path: "/iptv-pa-smart-tv", priority: 0.8 },
  { path: "/iptv-boks", priority: 0.8 },
  { path: "/hvad-er-iptv", priority: 0.8 },
  { path: "/er-iptv-lovligt", priority: 0.8 },
  { path: "/sport", priority: 0.7 },
  { path: "/guides", priority: 0.6 },
  { path: "/om-os", priority: 0.3 },
  { path: "/kontakt", priority: 0.3 },
  { path: "/dmca", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    ...staticPaths.map(({ path, priority }) => ({
      url: absoluteUrl(path),
      lastModified: now,
      priority,
    })),
    ...sports.map((s) => ({
      url: absoluteUrl(`/sport/${s.slug}`),
      lastModified: now,
      priority: 0.7,
    })),
    ...guides.map((g) => ({
      url: absoluteUrl(`/guides/${g.slug}`),
      lastModified: new Date(g.date),
      priority: 0.6,
    })),
  ];
}
