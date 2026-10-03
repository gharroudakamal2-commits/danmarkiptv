export const site = {
  name: "Danmark IPTV",
  url: "https://danmarkiptv.top",
  locale: "da_DK",
  email: "kontakt@danmarkiptv.top",
  description:
    "Uafhængig guide til IPTV i Danmark. Vi sammenligner lovlige tv- og streamingtjenester, så du finder den bedste IPTV-løsning til din smart-tv, boks eller app.",
};

export const nav = [
  { href: "/bedste-iptv-danmark", label: "Bedste IPTV" },
  { href: "/iptv-abonnement", label: "Abonnement" },
  { href: "/iptv-pa-smart-tv", label: "Smart TV" },
  { href: "/sport", label: "Sport" },
  { href: "/guides", label: "Guides" },
  { href: "/er-iptv-lovligt", label: "Er IPTV lovligt?" },
];

export const footerLinks = [
  { href: "/hvad-er-iptv", label: "Hvad er IPTV?" },
  { href: "/iptv-app", label: "IPTV app" },
  { href: "/iptv-boks", label: "IPTV boks" },
  { href: "/iptv-pa-smart-tv", label: "IPTV på smart-tv" },
  { href: "/iptv-abonnement", label: "IPTV abonnement" },
  { href: "/guides", label: "Alle guides" },
];

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}
