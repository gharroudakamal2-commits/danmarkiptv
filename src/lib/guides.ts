// Blog/guide articles. Each section renders as an <h2> with paragraphs.
// Add new guides here — they are picked up automatically by /guides and the sitemap.

export type Guide = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO date
  sections: { heading: string; paragraphs: string[] }[];
};

export const guides: Guide[] = [
  {
    slug: "iptv-vs-parabol",
    title: "IPTV vs. parabol: hvad er bedst i Danmark?",
    description:
      "Skal du vælge IPTV eller parabol? Vi sammenligner installation, billedkvalitet, fleksibilitet og pris.",
    date: "2026-10-03",
    sections: [
      {
        heading: "Den korte forskel",
        paragraphs: [
          "Parabol modtager tv-signalet fra en satellit via en skål på taget eller altanen. IPTV modtager signalet via din internetforbindelse. Begge dele kan give et flot billede, men de passer til forskellige husstande.",
        ],
      },
      {
        heading: "Installation",
        paragraphs: [
          "IPTV kræver kun internet og en app, så du kan komme i gang på få minutter. En parabol skal monteres og indstilles, og mange boligforeninger tillader den ikke.",
        ],
      },
      {
        heading: "Stabilitet og billedkvalitet",
        paragraphs: [
          "Parabol er uafhængig af dit internet, men kan forstyrres af kraftig regn og sne. IPTV afhænger af din forbindelse: med fiber eller et stabilt kabelnet er billedet typisk meget stabilt, også i 4K.",
        ],
      },
      {
        heading: "Fleksibilitet",
        paragraphs: [
          "Med IPTV kan du se det samme abonnement på tv, mobil og computer, starte programmer forfra og se tv uden for hjemmet. Parabol er bundet til det tv, skålen er koblet til.",
        ],
      },
      {
        heading: "Vores anbefaling",
        paragraphs: [
          "Har du et godt bredbånd, er IPTV det mest fleksible valg for de fleste danskere. Parabol giver mest mening i områder med dårligt internet.",
        ],
      },
    ],
  },
  {
    slug: "hvor-hurtigt-internet-til-iptv",
    title: "Hvor hurtigt internet skal du bruge til IPTV?",
    description:
      "Se hvor mange Mbit/s du skal bruge til IPTV i HD og 4K, og få tips til et stabilt billede uden hakken.",
    date: "2026-10-03",
    sections: [
      {
        heading: "Hastighed pr. stream",
        paragraphs: [
          "Som tommelfingerregel skal du bruge omkring 5 Mbit/s til SD, 10 Mbit/s til HD og 25 Mbit/s til 4K pr. skærm. Ser flere i husstanden tv samtidig, skal hastighederne lægges sammen.",
        ],
      },
      {
        heading: "Stabilitet er vigtigere end topfart",
        paragraphs: [
          "Et bredbånd, der svinger meget, giver hakken og lavere billedkvalitet. Fiber og kabel-bredbånd er generelt mere stabile end mobilt bredbånd.",
        ],
      },
      {
        heading: "Tips til et bedre billede",
        paragraphs: [
          "Brug et netværkskabel til tv'et eller tv-boksen, hvis du kan. Placér routeren centralt, og overvej et mesh-netværk i store boliger. Genstart routeren, hvis billedet pludselig bliver dårligere.",
        ],
      },
    ],
  },
  {
    slug: "gratis-tv-i-danmark",
    title: "Gratis tv i Danmark: sådan ser du tv lovligt uden abonnement",
    description:
      "Du kan se meget dansk tv gratis og lovligt. Her er dine muligheder – fra public service-streaming til antenne-tv.",
    date: "2026-10-03",
    sections: [
      {
        heading: "Public service-streaming",
        paragraphs: [
          "Public service-kanalerne kan streames gratis – både live og fra et stort arkiv af serier, dokumentarer og børneprogrammer. Apps findes til de fleste smart-tv, mobiler og tv-bokse.",
        ],
      },
      {
        heading: "Antenne-tv",
        paragraphs: [
          "Med en antenne kan du modtage en række kanaler uden abonnement. Kanaludvalget er begrænset, men det er en billig løsning.",
        ],
      },
      {
        heading: "Gratis prøveperioder",
        paragraphs: [
          "Nogle streamingtjenester tilbyder en gratis prøveperiode for nye kunder. Husk at opsige i tide, hvis du ikke vil fortsætte.",
        ],
      },
      {
        heading: "Pas på 'gratis' IPTV",
        paragraphs: [
          "Tjenester, der lover hundredvis af betalingskanaler gratis eller næsten gratis, er ulovlige. De kan også indeholde malware og misbruge dine oplysninger.",
        ],
      },
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((g) => g.slug === slug);
}
