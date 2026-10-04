// Sports landing pages. Broadcast rights in Denmark change between seasons,
// so the copy stays generic — add the current rights holder per season once verified.

import type { StaticImageData } from "next/image";
import type { FaqItem } from "@/components/Faq";
import type { Source } from "@/components/Pillar";
import championsLeague from "../../public/images/sport-champions-league.jpg";
import formel1 from "../../public/images/sport-formel-1.jpg";
import haandbold from "../../public/images/sport-haandbold.jpg";
import premierLeague from "../../public/images/sport-premier-league.jpg";
import superliga from "../../public/images/sport-superliga.jpg";

export type Sport = {
  slug: string;
  name: string;
  keyword: string;
  intro: string;
  about: string;
  /** How the competition works — stable facts only, no broadcaster names (rights change). */
  format: string[];
  facts: [string, string][];
  tips: string[];
  faq: FaqItem[];
  /** Primary sources for the facts above. */
  sources: Source[];
  image: StaticImageData;
  imageAlt: string;
};

export const sports: Sport[] = [
  {
    slug: "superliga",
    name: "Superliga",
    keyword: "se Superligaen",
    intro: "Sådan ser du 3F Superliga live på tv, mobil og computer i Danmark.",
    about:
      "Superligaen er Danmarks bedste fodboldrække. Kampene spilles fra sommer til forår og fordeles mellem flere danske tv-kanaler og streamingtjenester, så du skal ofte have mere end ét abonnement for at se alle runder.",
    format: [
      "I det nuværende format spiller 12 hold et grundspil på 22 runder, hvor alle møder hinanden ude og hjemme. Derefter deles ligaen i to: de seks bedste spiller mesterskabsspil, og de seks nederste spiller kvalifikationsspil. Det giver 32 runder i alt.",
      "Sæsonen starter i juli, holder vinterpause fra december til februar og slutter i maj. De fleste runder spilles fra fredag til mandag, så der er kampe på flere dage hver weekend.",
    ],
    facts: [
      ["Antal hold", "12"],
      ["Runder", "22 i grundspillet + 10 i slutspillet = 32"],
      ["Sæson", "Juli–maj, vinterpause december–februar"],
      ["Nedrykning", "Nr. 11 og 12 rykker direkte ned i 1. division"],
      ["Typiske kampdage", "Fredag, lørdag, søndag og mandag"],
    ],
    tips: [
      "Kampene fordeles mellem flere rettighedshavere – tjek, hvem der viser netop dit holds kampe, før du vælger abonnement.",
      "Søndage har ofte flere kampe samtidig. Har du flere skærme i husstanden, kan I følge forskellige kampe.",
      "Brug et netværkskabel til tv'et i de afgørende runder i mesterskabsspillet – live-sport er det, der kræver mest af forbindelsen.",
    ],
    faq: [
      {
        q: "Hvor mange runder er der i Superligaen?",
        a: "I det nuværende format er der 32 runder: 22 i grundspillet og 10 i enten mesterskabsspillet eller kvalifikationsspillet.",
      },
      {
        q: "Hvornår spiller Superligaen?",
        a: "Sæsonen løber fra juli til maj med vinterpause fra december til februar. De fleste kampe spilles fra fredag til mandag.",
      },
      {
        q: "Kan jeg se Superligaen på mobilen?",
        a: "Ja. Tjenesterne med rettigheder til Superligaen har apps, så du kan se live på mobil og tablet – også når du er på farten.",
      },
    ],
    sources: [{ label: "Lex.dk – Superligaen", href: "https://lex.dk/Superligaen" }],
    image: superliga,
    imageAlt: "Fyldt dansk fodboldstadion med flag og røde bengalske lys",
  },
  {
    slug: "champions-league",
    name: "Champions League",
    keyword: "se Champions League",
    intro: "Find ud af, hvordan du ser Champions League lovligt i Danmark.",
    about:
      "Champions League er Europas største klubturnering. Rettighederne i Danmark sælges for flere sæsoner ad gangen og ligger typisk hos en betalingstjeneste, mens enkelte kampe kan blive vist på fri-tv.",
    format: [
      "Siden sæsonen 2024/25 spilles turneringen med en fælles ligafase med 36 hold. Hvert hold spiller otte kampe mod otte forskellige modstandere, og alle samles i én stor tabel.",
      "De otte bedste går direkte i ottendedelsfinalerne. Holdene på plads 9–24 spiller en knockout-playoff om de sidste pladser, mens holdene fra plads 25 og ned er ude. Herefter følger knockoutrunder frem til finalen i slutningen af maj eller starten af juni.",
    ],
    facts: [
      ["Hold i ligafasen", "36"],
      ["Kampe i ligafasen", "8 pr. hold"],
      ["Videre til knockout", "Top 8 direkte, plads 9–24 via playoff"],
      ["Typiske kampdage", "Tirsdag og onsdag aften"],
      ["Finale", "Slutningen af maj eller starten af juni"],
    ],
    tips: [
      "Mange kampe spilles samtidig om aftenen. Vil du følge flere, så se efter en tjeneste med multiskærm eller målshow.",
      "Kampene starter typisk kl. 18.45 eller 21.00 dansk tid – tjek din forbindelse, før kampen går i gang.",
      "Rettighederne gælder ofte for flere sæsoner ad gangen. Tjek, hvem der har dem i den aktuelle aftaleperiode.",
    ],
    faq: [
      {
        q: "Hvor mange hold er med i Champions League?",
        a: "36 hold spiller i ligafasen, der blev indført fra sæsonen 2024/25. Hvert hold spiller otte kampe.",
      },
      {
        q: "Hvornår spilles Champions League?",
        a: "Kampene spilles typisk tirsdag og onsdag aften, med kampstart kl. 18.45 eller 21.00 dansk tid. Finalen spilles i slutningen af maj eller starten af juni.",
      },
      {
        q: "Vises Champions League gratis i Danmark?",
        a: "Som hovedregel kræver Champions League et abonnement. Enkelte kampe kan blive vist på fri-tv, afhængigt af den aktuelle rettighedsaftale.",
      },
    ],
    sources: [
      {
        label: "UEFA – New format for Champions League post-2024: Everything you need to know",
        href: "https://www.uefa.com/uefachampionsleague/news/0268-12157d69ce2d-9f011c70f6fa-1000--new-format-for-champions-league-post-2024-everything-you-ne/",
      },
    ],
    image: championsLeague,
    imageAlt: "Oplyst fodboldstadion set fra luften en aften med europæisk fodbold",
  },
  {
    slug: "premier-league",
    name: "Premier League",
    keyword: "se Premier League",
    intro: "Overblik over, hvordan du ser engelsk fodbold i Danmark.",
    about:
      "Premier League er en af de mest sete ligaer i Danmark. Kampene vises hos en streamingtjeneste eller tv-pakke, og rettighederne kan skifte, når en ny aftale starter.",
    format: [
      "20 hold spiller mod hinanden ude og hjemme, så hver sæson har 38 runder. Sæsonen løber fra august til maj, og de tre nederste hold rykker ned i The Championship.",
      "Engelsk tid er en time efter dansk tid, så de klassiske lørdagskampe kl. 15.00 i England starter kl. 16.00 i Danmark. Derudover spilles der kampe fredag, søndag og mandag – og i perioder også midt på ugen.",
    ],
    facts: [
      ["Antal hold", "20"],
      ["Runder", "38"],
      ["Sæson", "August–maj"],
      ["Nedrykning", "De tre nederste hold"],
      ["Tidsforskel", "England er 1 time efter Danmark"],
    ],
    tips: [
      "Juleperioden byder på mange kampe tæt efter hinanden – et abonnement uden binding gør det let kun at betale, når der er mest fodbold.",
      "Se efter en tjeneste med højdepunkter og genudsendelser, hvis du ikke kan se alle kampe live.",
      "Kampe i 4K kræver omkring 25 Mbit/s pr. skærm. Tjek din forbindelse i vores guide til internethastighed.",
    ],
    faq: [
      {
        q: "Hvor mange runder er der i Premier League?",
        a: "Der er 38 runder. 20 hold møder hinanden både ude og hjemme fra august til maj.",
      },
      {
        q: "Hvad tid spilles Premier League i dansk tid?",
        a: "England er en time efter Danmark. En kamp kl. 15.00 engelsk tid starter derfor kl. 16.00 dansk tid.",
      },
      {
        q: "Kan jeg se Premier League i 4K?",
        a: "Det afhænger af tjenesten med rettighederne. Kræver det 4K, skal du bruge omkring 25 Mbit/s pr. skærm og et tv, der understøtter det.",
      },
    ],
    sources: [],
    image: premierLeague,
    imageAlt: "Engelsk fodboldstadion i regn under projektørlys",
  },
  {
    slug: "formel-1",
    name: "Formel 1",
    keyword: "se Formel 1",
    intro: "Sådan ser du Formel 1 live i Danmark – træning, kvalifikation og løb.",
    about:
      "Formel 1 køres over hele året med løb i hele verden. I Danmark vises sæsonen typisk hos en betalingstjeneste, ofte med alle træninger og kvalifikationer live.",
    format: [
      "2026-sæsonen har 24 grandprixer. Den startede i Melbourne i Australien 6.–8. marts og slutter i Abu Dhabi 6. december. En normal løbsweekend består af tre frie træninger, kvalifikation lørdag og selve løbet søndag.",
      "Ved sprintweekender er programmet anderledes: én træning, sprintkvalifikation, et kortere sprintløb og den almindelige kvalifikation til søndagens grandprix. Løb i Asien og Australien køres ofte tidligt om morgenen dansk tid, mens løb i Amerika ofte køres om aftenen eller natten.",
    ],
    facts: [
      ["Grandprixer i 2026", "24"],
      ["Sæson 2026", "Melbourne 6.–8. marts til Abu Dhabi 6. december"],
      ["Normal weekend", "3 træninger, kvalifikation, løb"],
      ["Sprintweekend", "1 træning, sprintkvalifikation, sprint, kvalifikation, løb"],
      ["Tidspunkter", "Fra tidlig morgen til sen aften dansk tid"],
    ],
    tips: [
      "Med en tjeneste, der har start forfra og genudsendelser, behøver du ikke stå op kl. 6 for at se løb i Asien.",
      "Undgå spoilere ved at slå notifikationer fra i sportsapps, til du har set løbet.",
      "Formel 1 i høj fart afslører hurtigt et ustabilt billede – brug kabel til tv'et, hvis du kan.",
    ],
    faq: [
      {
        q: "Hvor mange løb er der i en Formel 1-sæson?",
        a: "2026-sæsonen har 24 grandprixer fra marts til december. Nogle af weekenderne er sprintweekender, og antallet fastlægges i hver sæsons kalender.",
      },
      {
        q: "Hvad er en sprintweekend i Formel 1?",
        a: "En weekend med et ekstra, kortere sprintløb lørdag. Programmet har kun én fri træning, sprintkvalifikation, sprint, kvalifikation og løbet søndag.",
      },
      {
        q: "Hvornår køres Formel 1 i dansk tid?",
        a: "Det afhænger af, hvor løbet køres. Løb i Asien og Australien ligger ofte tidligt om morgenen, mens løb i Amerika ofte ligger om aftenen eller natten.",
      },
    ],
    sources: [{ label: "Formula 1 – All the key highlights from the 2026 F1 calendar", href: "https://www.formula1.com/en/latest/article/all-the-key-highlights-from-the-2026-f1-calendar.E5wcfIMV1oTFuEUg74H7J" }],
    image: formel1,
    imageAlt: "Formel 1-racerbil med gnister på en oplyst bane om natten",
  },
  {
    slug: "haandbold",
    name: "Håndbold",
    keyword: "se håndbold",
    intro: "Se landsholdet, ligaen og Champions League i håndbold på tv og streaming.",
    about:
      "Håndbold er en af de mest populære sportsgrene i Danmark. Slutrunder med landsholdene vises ofte på dansk fri-tv, mens liga- og klubkampe kan kræve et abonnement.",
    format: [
      "Det danske herrelandshold er blandt verdens bedste med VM-guld fire gange i træk – 2019, 2021, 2023 og 2025, hvor finalen blev vundet 32–26 over Kroatien – og OL-guld i 2016 og 2024. Herrernes VM og EM spilles skiftevis i januar, mens kvindernes slutrunder typisk spilles i december.",
      "I klubhåndbold kan du følge den danske herreliga og kvindeliga fra efterår til forår samt EHF Champions League, hvor herrernes final four afgøres i Köln i juni.",
    ],
    facts: [
      ["Herrelandsholdet, VM-guld", "2019, 2021, 2023 og 2025"],
      ["Herrelandsholdet, OL-guld", "2016 og 2024"],
      ["Herrernes slutrunder", "Januar (VM og EM skiftevis)"],
      ["Kvindernes slutrunder", "Typisk december"],
      ["Champions League final four (herrer)", "Köln, juni"],
    ],
    tips: [
      "Landsholdenes slutrunder vises ofte på fri-tv – tjek programmet, før du betaler for et abonnement.",
      "Liga- og klubkampe ligger oftere bag abonnement. Vælg en kort periode uden binding, hvis du kun vil følge slutspillet.",
      "Håndbold er hurtigt spil med mange scoringer – et stabilt billede i HD giver den bedste oplevelse.",
    ],
    faq: [
      {
        q: "Hvornår spiller herrelandsholdet i håndbold?",
        a: "Herrernes VM og EM spilles skiftevis i januar. Hertil kommer OL hvert fjerde år og kvalifikationskampe i løbet af sæsonen.",
      },
      {
        q: "Hvor mange VM-titler har Danmarks herrelandshold i håndbold?",
        a: "Fire: 2019, 2021, 2023 og 2025. Holdet har desuden vundet OL-guld i 2016 og 2024.",
      },
      {
        q: "Kan jeg se dansk ligahåndbold via streaming?",
        a: "Ja. Den danske herreliga og kvindeliga vises hos tjenester med rettighederne, typisk med apps til smart-tv og mobil.",
      },
    ],
    sources: [{ label: "Lex.dk – Det danske herrelandshold i håndbold", href: "https://lex.dk/det_danske_herrelandshold_i_h%C3%A5ndbold" }],
    image: haandbold,
    imageAlt: "Håndboldspiller i skudhop i en fyldt hal",
  },
];

export function getSport(slug: string) {
  return sports.find((s) => s.slug === slug);
}
