import type { Metadata } from "next";

export const site = {
  name: "Danmark IPTV",
  url: "https://danmarkiptv.top",
  locale: "da_DK",
  email: "danmarkiptv64@gmail.com",
  /** Last content update. Drives the hero badge, OG image and sitemap dates. */
  updated: "2026-10-03",
  whatsapp: {
    display: "+212 751 039 094",
    /** International format without "+" or spaces, used for wa.me links. */
    number: "212751039094",
  },
  description:
    "IPTV-abonnement i Danmark: live-tv og on demand på smart-tv, tv-boks og mobil – uden binding. Bestil direkte via WhatsApp, og læs vores guides til IPTV.",
  /**
   * Seller details. Danish law (e-handelsloven § 7) requires name, address and CVR to be easy to
   * find on any site that sells online. TODO: replace every bracketed value before launch.
   */
  company: {
    name: "[Firmanavn]",
    cvr: "[CVR-nummer]",
    address: "[Adresse, postnummer og by]",
  },
};

export const nav = [
  { href: "/iptv-abonnement", label: "Priser" },
  { href: "/kom-i-gang", label: "Kom i gang" },
  { href: "/iptv-tv", label: "IPTV tv" },
  { href: "/iptv-nordic", label: "IPTV Nordic" },
  { href: "/sport", label: "Sport" },
  { href: "/hjaelp", label: "Hjælp" },
];

export const footerColumns = [
  {
    title: "Tjenesten",
    links: [
      { href: "/iptv-abonnement", label: "Priser og abonnementer" },
      { href: "/kom-i-gang", label: "Kom i gang" },
      { href: "/hjaelp", label: "Hjælpecenter" },
      { href: "/iptv-pa-smart-tv", label: "IPTV på smart-tv" },
      { href: "/iptv-boks", label: "IPTV boks" },
      { href: "/iptv-app", label: "IPTV app" },
    ],
  },
  {
    title: "Guides",
    links: [
      { href: "/iptv-tv", label: "IPTV tv – hvad er IPTV?" },
      { href: "/iptv-nordic", label: "IPTV Nordic" },
      { href: "/bedste-iptv-danmark", label: "Bedste IPTV i Danmark" },
      { href: "/er-iptv-lovligt", label: "Er IPTV lovligt?" },
      { href: "/sport", label: "Sport på IPTV" },
      { href: "/guides", label: "Alle guides" },
    ],
  },
  {
    title: "Virksomhed",
    links: [
      { href: "/om-os", label: "Om os" },
      { href: "/kontakt", label: "Kontakt" },
    ],
  },
];

/** Every legal page, in the order shown in the footer and the legal sidebar. */
export const legalLinks = [
  { href: "/handelsbetingelser", label: "Handelsbetingelser" },
  { href: "/fortrydelsesret", label: "Fortrydelsesret" },
  { href: "/brugsvilkaar", label: "Brugsvilkår" },
  { href: "/privatlivspolitik", label: "Privatlivspolitik" },
  { href: "/cookies", label: "Cookiepolitik" },
  { href: "/ansvarsfraskrivelse", label: "Ansvarsfraskrivelse" },
  { href: "/dmca", label: "Ophavsret & DMCA" },
];

export function whatsappUrl(text?: string) {
  const base = `https://wa.me/${site.whatsapp.number}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}

/** Danish "month year" label for the last content update, e.g. "oktober 2026". */
export function updatedLabel() {
  return new Date(site.updated).toLocaleDateString("da-DK", { month: "long", year: "numeric" });
}

/**
 * Canonical URL plus Open Graph defaults for a page. Next.js replaces (not merges) a parent's
 * `openGraph`, so every page that sets its own must repeat the site-wide fields.
 */
export function pageMeta(
  path: string,
  article?: { publishedTime: string; modifiedTime?: string },
): Pick<Metadata, "alternates" | "openGraph"> {
  const base = { locale: site.locale, siteName: site.name, url: path };
  // Overriding `openGraph` also drops the inherited root share image, so name it explicitly.
  // Articles keep their own segment-level opengraph-image file instead.
  const image = { url: "/opengraph-image", width: 1200, height: 630, alt: site.name };
  return {
    alternates: { canonical: path },
    openGraph: article ? { ...base, type: "article", ...article } : { ...base, type: "website", images: [image] },
  };
}
