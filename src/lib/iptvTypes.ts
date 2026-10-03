// Generic types of TV solutions — deliberately brand-free.

export type IptvType = {
  slug: string;
  name: string;
  tagline: string;
  channels: string;
  sport: boolean;
  binding: string;
  price: "Gratis" | "Lav" | "Mellem" | "Høj";
  bestFor: string;
  pros: string[];
  cons: string[];
};

export const iptvTypes: IptvType[] = [
  {
    slug: "tv-pakke",
    name: "Tv-pakke via bredbånd",
    tagline: "Mange danske og udenlandske kanaler samlet ét sted",
    channels: "Mange",
    sport: true,
    binding: "Ofte 0–6 mdr.",
    price: "Høj",
    bestFor: "Familier der vil have et bredt kanaludvalg",
    pros: ["Stort kanaludvalg", "Tv-boks og app følger ofte med", "Mulighed for tilvalgspakker"],
    cons: ["Dyrest af løsningerne", "Kan have bindingsperiode"],
  },
  {
    slug: "streaming-live",
    name: "Streamingtjeneste med live-tv",
    tagline: "Live-kanaler og on demand i én app",
    channels: "Få–mellem",
    sport: true,
    binding: "Typisk ingen",
    price: "Mellem",
    bestFor: "Dig der vil have fleksibilitet uden binding",
    pros: ["Nem opsætning", "Kan opsiges løbende", "Se på alle skærme"],
    cons: ["Færre kanaler end en fuld tv-pakke"],
  },
  {
    slug: "sport",
    name: "Sportsstreaming",
    tagline: "Fokus på live sport i HD og 4K",
    channels: "Få",
    sport: true,
    binding: "Typisk ingen",
    price: "Mellem",
    bestFor: "Sportsfans der følger bestemte ligaer",
    pros: ["Mange live-kampe", "Ofte 4K", "Start-forfra og highlights"],
    cons: ["Rettigheder skifter mellem sæsoner"],
  },
  {
    slug: "gratis",
    name: "Gratis public service-streaming",
    tagline: "Gratis live-tv og arkiv uden abonnement",
    channels: "Få",
    sport: true,
    binding: "Ingen",
    price: "Gratis",
    bestFor: "Dig der primært ser nyheder, dokumentar og børne-tv",
    pros: ["Helt gratis", "Stort arkiv", "Apps til de fleste enheder"],
    cons: ["Begrænset kanaludvalg"],
  },
];
