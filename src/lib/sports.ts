// Sports landing pages. Broadcast rights in Denmark change between seasons,
// so the copy stays generic — add the current rights holder per season once verified.

export type Sport = {
  slug: string;
  name: string;
  keyword: string;
  intro: string;
  about: string;
};

export const sports: Sport[] = [
  {
    slug: "superliga",
    name: "Superliga",
    keyword: "se Superligaen",
    intro: "Sådan ser du 3F Superliga live på tv, mobil og computer i Danmark.",
    about:
      "Superligaen er Danmarks bedste fodboldrække med kampe fra sommer til forår. Kampene fordeles mellem flere danske tv-kanaler og streamingtjenester, så du skal ofte have mere end ét abonnement for at se alle runder.",
  },
  {
    slug: "champions-league",
    name: "Champions League",
    keyword: "se Champions League",
    intro: "Find ud af, hvordan du ser Champions League lovligt i Danmark.",
    about:
      "Champions League er Europas største klubturnering. Rettighederne i Danmark sælges for flere sæsoner ad gangen og ligger typisk hos en betalingstjeneste, mens enkelte kampe kan blive vist på fri-tv.",
  },
  {
    slug: "premier-league",
    name: "Premier League",
    keyword: "se Premier League",
    intro: "Overblik over, hvordan du ser engelsk fodbold i Danmark.",
    about:
      "Premier League er en af de mest sete ligaer i Danmark. Kampene vises hos en streamingtjeneste eller tv-pakke, og rettighederne kan skifte, når en ny aftale starter.",
  },
  {
    slug: "formel-1",
    name: "Formel 1",
    keyword: "se Formel 1",
    intro: "Sådan ser du Formel 1 live i Danmark – træning, kvalifikation og løb.",
    about:
      "Formel 1 køres over hele året med løb i hele verden. I Danmark vises sæsonen typisk hos en betalingstjeneste, ofte med alle træninger og kvalifikationer live.",
  },
  {
    slug: "haandbold",
    name: "Håndbold",
    keyword: "se håndbold",
    intro: "Se landsholdet, ligaen og Champions League i håndbold på tv og streaming.",
    about:
      "Håndbold er en af de mest populære sportsgrene i Danmark. Slutrunder med landsholdene vises ofte på dansk fri-tv, mens liga- og klubkampe kan kræve et abonnement.",
  },
];

export function getSport(slug: string) {
  return sports.find((s) => s.slug === slug);
}
