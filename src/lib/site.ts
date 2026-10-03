export const site = {
  name: "Danmark IPTV",
  url: "https://danmarkiptv.top",
  locale: "da_DK",
  email: "danmarkiptv64@gmail.com",
  whatsapp: {
    display: "0751039094",
    /** International format without "+" or spaces, used for wa.me links. */
    number: "212751039094",
  },
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

export function whatsappUrl(text?: string) {
  const base = `https://wa.me/${site.whatsapp.number}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}
