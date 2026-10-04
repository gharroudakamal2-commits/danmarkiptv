import { guides } from "@/lib/guides";
import { currency, plans } from "@/lib/plans";
import { absoluteUrl, site } from "@/lib/site";

export const dynamic = "force-static";

/** llms.txt (https://llmstxt.org): a plain-Markdown map of the site for AI assistants and answer engines. */
export function GET() {
  const from = Math.min(...plans.map((p) => p.perMonth ?? p.price));
  const body = `# ${site.name}

> ${site.name} sælger IPTV-abonnementer i Danmark: live-tv og on demand i HD og 4K på smart-tv, tv-boks, mobil og computer – uden binding, fra ${from} ${currency}/md. Siden har også guides om IPTV, IPTV Nordic og lovlig IPTV.

## Nøglefakta

- IPTV (Internet Protocol Television) er tv, der sendes over internettet og afspilles i en app.
- Anbefalet internethastighed: ca. 10 Mbit/s pr. skærm i HD og 25 Mbit/s i 4K.
- Abonnementer: ${plans.map((p) => `${p.name} (${p.price} ${currency})`).join(", ")}. Ingen binding, 14 dages fortrydelsesret.
- IPTV er lovligt i Danmark, når udbyderen har rettighederne til kanalerne.
- Kontakt: ${site.email}, WhatsApp ${site.whatsapp.display}.

## Vigtigste sider

- [IPTV Danmark – forside](${absoluteUrl("/")}): IPTV-abonnement uden binding.
- [IPTV tv – hvad er IP-tv?](${absoluteUrl("/iptv-tv")}): Hvordan IPTV virker, hvad du skal bruge, begreber og FAQ.
- [IPTV Nordic](${absoluteUrl("/iptv-nordic")}): Nordisk tv over internettet, public service, rejser og valg af udbyder.
- [Priser](${absoluteUrl("/iptv-abonnement")}): Abonnementer og bestilling.
- [Kom i gang](${absoluteUrl("/kom-i-gang")}): Opsætning trin for trin.
- [Er IPTV lovligt?](${absoluteUrl("/er-iptv-lovligt")}): Lovlig vs. ulovlig IPTV i Danmark.
- [Hjælpecenter](${absoluteUrl("/hjaelp")}): Bestilling, opsætning og fejlfinding.

## Guides

${guides.map((g) => `- [${g.title}](${absoluteUrl(`/guides/${g.slug}`)}): ${g.description}`).join("\n")}

## Juridisk

- [Handelsbetingelser](${absoluteUrl("/handelsbetingelser")})
- [Fortrydelsesret](${absoluteUrl("/fortrydelsesret")})
- [Privatlivspolitik](${absoluteUrl("/privatlivspolitik")})
`;
  return new Response(body, { headers: { "Content-Type": "text/markdown; charset=utf-8" } });
}
