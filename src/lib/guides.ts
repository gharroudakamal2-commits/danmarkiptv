// Blog/guide articles. Each section renders as an <h2> with paragraphs.
// Add new guides here — they are picked up automatically by /guides and the sitemap.

import type { StaticImageData } from "next/image";
import type { Source } from "@/components/Pillar";
import gratisTv from "../../public/images/guide-gratis-tv.jpg";
import internetHastighed from "../../public/images/guide-internet-hastighed.jpg";
import iptvVsParabol from "../../public/images/guide-iptv-vs-parabol.jpg";

export type Guide = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO date
  image: StaticImageData;
  imageAlt: string;
  imageCaption: string;
  sections: { heading: string; paragraphs: string[] }[];
  /** Primary sources for the guide's factual claims. */
  sources?: Source[];
};

export const guides: Guide[] = [
  {
    slug: "iptv-vs-parabol",
    title: "IPTV vs. parabol: hvad er bedst i Danmark?",
    description:
      "Skal du vælge IPTV eller parabol? Vi sammenligner installation, billedkvalitet, fleksibilitet og pris.",
    date: "2026-10-03",
    image: iptvVsParabol,
    imageAlt: "Dansk murstenshus med parabol på muren og et tv, der lyser i stuen",
    imageCaption: "Parabol på muren, IPTV i stuen – to måder at få tv ind i huset.",
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
      {
        heading: "Hvornår er parabol stadig et godt valg?",
        paragraphs: [
          "Parabol giver mening, hvis du bor et sted med langsomt eller ustabilt internet, fx i landdistrikter uden fiber. Signalet kommer direkte fra satellitten og påvirkes ikke af, hvor mange i husstanden der streamer samtidig.",
          "Har du allerede en parabol og en tv-pakke, du er glad for, er der heller ingen grund til at skifte, før aftalen udløber.",
        ],
      },
      {
        heading: "Kan jeg have både parabol og IPTV?",
        paragraphs: [
          "Ja. Mange bruger parabolen til det store tv i stuen og IPTV til mobil, tablet og andre rum. Det kan være en god løsning i en overgangsperiode, hvis du vil prøve IPTV uden at opsige noget.",
        ],
      },
      {
        heading: "Sådan skifter du fra parabol til IPTV",
        paragraphs: [
          "1) Tjek din internethastighed – mindst 10 Mbit/s pr. skærm i HD. 2) Tjek, at dit tv har appen, eller køb en tv-boks. 3) Start et IPTV-abonnement uden binding, og prøv det i en periode. 4) Opsig parabolaftalen, når du er tilfreds, og husk at tjekke opsigelsesvarslet.",
          "Selve parabolen kan blive siddende eller tages ned. Bor du til leje eller i en andelsboligforening, så tjek reglerne for nedtagning.",
        ],
      },
      {
        heading: "Billedkvalitet i praksis",
        paragraphs: [
          "Med parabol sendes hver kanal i en fast kvalitet, som er den samme, uanset hvad der ellers sker i huset. IPTV tilpasser kvaliteten til din forbindelse: er nettet hurtigt og stabilt, får du HD eller 4K; svinger det, skruer appen ned for at undgå, at billedet fryser.",
          "I praksis betyder det, at IPTV på en god fiber- eller kabelforbindelse ser lige så skarpt ud som parabol – og ofte bedre, fordi mere indhold i dag produceres og sendes i 4K til streaming.",
        ],
      },
      {
        heading: "Hvad koster det over tid?",
        paragraphs: [
          "Parabol kræver en skål, et LNB-hoved, kabler og en modtager eller et tv med indbygget satellittuner, og ofte montering. Derefter betaler du for selve tv-pakken. IPTV kræver ingen installation: du betaler for abonnementet og eventuelt en tv-boks, hvis dit tv ikke har appen.",
          "Har du allerede internet, er IPTV derfor typisk billigst at komme i gang med. Har du allerede en parabol, er den største udgift betalt, og det handler om, hvilken tv-pakke der giver dig mest for pengene.",
        ],
      },
      {
        heading: "Flytning og lejebolig",
        paragraphs: [
          "IPTV flytter med dig: du logger bare ind på det nye internet. En parabol skal tages ned og sættes op igen, og mange lejeboliger og andelsboligforeninger har regler for, hvor og om der må hænge en skål.",
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
    image: internetHastighed,
    imageAlt: "Wifi-router der sender signal til et smart-tv i stuen",
    imageCaption: "En stabil forbindelse fra routeren betyder mere end topfart, når du ser IPTV.",
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
      {
        heading: "Wifi eller netværkskabel?",
        paragraphs: [
          "Et netværkskabel giver den mest stabile forbindelse, fordi signalet ikke forstyrres af vægge, naboers netværk eller andre enheder. Kan du ikke trække kabel, så brug wifi på 5 GHz-båndet tæt på routeren, eller et mesh-netværk i større boliger.",
        ],
      },
      {
        heading: "Sådan tester du din hastighed rigtigt",
        paragraphs: [
          "Test hastigheden på det tidspunkt, du normalt ser tv – typisk om aftenen, hvor nettet er mest belastet. Test så tæt på tv'et som muligt, gerne fra tv'ets egen browser eller en mobil, der står ved siden af det.",
          "Kør testen et par gange. Svinger resultatet meget, er det et tegn på ustabilitet, som giver hakken – også selvom gennemsnittet ser fint ud.",
        ],
      },
      {
        heading: "Kan jeg bruge mobilt bredbånd eller 5G?",
        paragraphs: [
          "Ja, 5G og mobilt bredbånd kan sagtens levere hastighed nok til IPTV i HD. Husk dog, at streaming bruger meget data – omkring 3 GB i timen i HD – så vælg et abonnement med fri data eller rigeligt datamængde.",
        ],
      },
      {
        heading: "Regneeksempel: flere skærme samtidig",
        paragraphs: [
          "Hastighederne skal lægges sammen, når flere ser samtidig. Ser én i 4K i stuen (ca. 25 Mbit/s), og to andre ser i HD på hver deres skærm (ca. 10 Mbit/s hver), skal du bruge omkring 45 Mbit/s – plus luft til mobiler, computere og opdateringer, der kører i baggrunden.",
          "Som tommelfingerregel kan du derfor gange antallet af skærme med hastigheden pr. skærm og lægge 20–30 procent oveni.",
        ],
      },
      {
        heading: "Hvor meget data bruger IPTV?",
        paragraphs: [
          "Netflix oplyser, at streaming bruger op til 1 GB i timen i SD, op til 3 GB i timen i HD og op til 7 GB i timen i 4K. Andre tjenester ligger på samme niveau. På fastnet med fri data betyder det ikke noget, men på mobilt bredbånd med datagrænse kan en weekend med sport hurtigt bruge en stor del af forbruget.",
        ],
      },
      {
        heading: "Fiber, kabel eller DSL?",
        paragraphs: [
          "Fiber giver typisk den højeste og mest stabile hastighed og er det bedste valg til flere 4K-skærme. Kabel-bredbånd (coax) er også fint til IPTV i de fleste husstande. DSL over telefonledningen kan være nok til én eller to HD-skærme, men hastigheden falder, jo længere du bor fra centralen.",
        ],
      },
      {
        heading: "Fem router-tips",
        paragraphs: [
          "1) Placér routeren centralt og frit – ikke i et skab eller bag tv'et. 2) Brug 5 GHz-båndet til tv og boks. 3) Opdater routerens firmware. 4) Overvej et mesh-system i store huse eller huse med tykke vægge. 5) Genstart routeren, hvis billedet pludselig bliver dårligere.",
        ],
      },
    ],
    sources: [
      { label: "Netflix Hjælpecenter – Dataforbrug ved streaming", href: "https://help.netflix.com/en/node/87" },
    ],
  },
  {
    slug: "gratis-tv-i-danmark",
    title: "Gratis tv i Danmark – lovlige muligheder",
    description:
      "Du kan se meget dansk tv gratis og lovligt. Her er dine muligheder – fra public service-streaming til antenne-tv.",
    date: "2026-10-03",
    image: gratisTv,
    imageAlt: "Nordisk hus med tv-antenne på taget en aften",
    imageCaption: "Med en antenne kan du se en række kanaler uden abonnement.",
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
      {
        heading: "Skal jeg betale medielicens?",
        paragraphs: [
          "Nej. Medielicensen blev udfaset og afskaffet i 2022, og DR finansieres i dag over skatten. Du kan derfor se DR's kanaler og DRTV uden at betale licens.",
        ],
      },
      {
        heading: "Gratis film via biblioteket",
        paragraphs: [
          "Mange danske biblioteker giver gratis adgang til streamingtjenesten Filmstriben, hvor du kan låne film og serier med dit lånerkort. Tjek dit lokale biblioteks hjemmeside for, hvor mange film du kan se om måneden.",
        ],
      },
      {
        heading: "Sådan ser du gratis tv på dit smart-tv",
        paragraphs: [
          "Installer DRTV-appen fra tv'ets app-butik, og log ind eller brug den uden login. Mangler appen på dit tv, kan du bruge en Chromecast, Apple TV eller Fire TV Stick. Læs mere i vores guide til IPTV på smart-tv.",
        ],
      },
      {
        heading: "Hvad kan du se gratis på DRTV?",
        paragraphs: [
          "DRTV giver adgang til DR's kanaler live og et stort arkiv af serier, dokumentarer, film og børne-tv uden abonnement. Appen findes til de fleste smart-tv, tv-bokse, mobiler og tablets, og du kan også se i browseren.",
        ],
      },
      {
        heading: "Gratis tv på farten",
        paragraphs: [
          "Med DRTV-appen kan du se live-tv og programmer fra arkivet på mobil og tablet, hvor du har internet. Vil du spare på mobildata, så hent indholdet over wifi, hvis appen giver mulighed for det, eller vælg en lavere billedkvalitet.",
        ],
      },
      {
        heading: "Hvornår giver et abonnement mening?",
        paragraphs: [
          "Gratis tv dækker nyheder, dokumentar, dansk drama og meget børne-tv. Vil du se kommercielle kanaler, de store fodboldturneringer, Formel 1 eller de nyeste film og serier, kræver det et abonnement. Se vores overblik over sport på IPTV, eller sammenlign typer af tv-løsninger i guiden til bedste IPTV i Danmark.",
        ],
      },
    ],
    sources: [
      { label: "DR – Licens bliver til skat: DR's licenskontor lukker", href: "https://www.dr.dk/om-dr/alletidersdr/licens-bliver-til-skat-drs-licenskontor-lukker-efter-naesten-100-aars-arbejde" },
      { label: "Københavns Biblioteker – Filmstriben", href: "https://bibliotek.kk.dk/medier/e-materialer/musik-og-film/filmstriben" },
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((g) => g.slug === slug);
}
