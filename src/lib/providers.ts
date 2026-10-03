// Provider data shown in the comparison table and review pages.
// IMPORTANT: verify every field against the provider's own website before going live,
// and re-check prices/channel lists regularly — they change often.
// Replace `url` with your affiliate links once you join each partner program.

export type Provider = {
  slug: string;
  name: string;
  tagline: string;
  type: string;
  free: boolean;
  sport: boolean;
  devices: string[];
  pros: string[];
  cons: string[];
  url: string;
  rating: number; // your own editorial score, 1–5
};

export const providers: Provider[] = [
  {
    slug: "yousee",
    name: "YouSee",
    tagline: "Bredt udvalg af danske kanaler og tv-pakker",
    type: "TV-pakker via bredbånd og app",
    free: false,
    sport: true,
    devices: ["Smart TV", "Tv-boks", "Mobil", "Tablet", "Computer"],
    pros: ["Mange danske kanaler", "Fleksible pakker", "Stor app-dækning"],
    cons: ["Kan blive dyrt med mange tilvalg"],
    url: "https://yousee.dk",
    rating: 4.4,
  },
  {
    slug: "allente",
    name: "Allente",
    tagline: "Nordisk tv-udbyder med streaming og parabol",
    type: "Streaming og satellit",
    free: false,
    sport: true,
    devices: ["Smart TV", "Tv-boks", "Mobil", "Tablet", "Computer"],
    pros: ["Samler streamingtjenester i én pakke", "Gode sportspakker"],
    cons: ["Bindingsperiode på nogle pakker"],
    url: "https://allente.dk",
    rating: 4.2,
  },
  {
    slug: "tv2-play",
    name: "TV 2 Play",
    tagline: "TV 2's kanaler live og on demand",
    type: "Streamingtjeneste",
    free: false,
    sport: true,
    devices: ["Smart TV", "Mobil", "Tablet", "Computer", "Chromecast"],
    pros: ["Live-tv fra TV 2's kanaler", "Ingen binding", "Nem opsætning"],
    cons: ["Kun TV 2's eget indhold"],
    url: "https://play.tv2.dk",
    rating: 4.1,
  },
  {
    slug: "viaplay",
    name: "Viaplay",
    tagline: "Sport, film og serier i én app",
    type: "Streamingtjeneste",
    free: false,
    sport: true,
    devices: ["Smart TV", "Mobil", "Tablet", "Computer"],
    pros: ["Stærkt sportsudbud", "Nordiske serier"],
    cons: ["Sportsrettigheder skifter fra sæson til sæson"],
    url: "https://viaplay.dk",
    rating: 4.0,
  },
  {
    slug: "dr-tv",
    name: "DR TV",
    tagline: "Gratis live-tv og arkiv fra DR",
    type: "Gratis streaming",
    free: true,
    sport: true,
    devices: ["Smart TV", "Mobil", "Tablet", "Computer", "Chromecast"],
    pros: ["Helt gratis", "Live DR1, DR2 og DR Ramasjang", "Stort arkiv"],
    cons: ["Kun DR's kanaler"],
    url: "https://www.dr.dk/drtv",
    rating: 4.3,
  },
];

export function getProvider(slug: string) {
  return providers.find((p) => p.slug === slug);
}
