import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Hvad er IPTV? Sådan virker internet-tv i Danmark",
  description:
    "Hvad er IPTV, og hvordan virker det? Få en enkel forklaring på internet-tv, hvad du skal bruge, og hvordan du kommer i gang i Danmark.",
  alternates: { canonical: "/hvad-er-iptv" },
};

export default function WhatIsIptvPage() {
  return (
    <PageShell
      crumbs={[{ name: "Hvad er IPTV?", href: "/hvad-er-iptv" }]}
      title="Hvad er IPTV?"
      intro="En enkel forklaring på internet-tv, hvad du skal bruge, og hvordan du kommer i gang i Danmark."
    >
      <div className="prose-da mt-10">
        <p>
          IPTV (Internet Protocol Television) er tv, der sendes over internettet. I stedet for
          et antennesignal, kabel-tv eller en parabol modtager du kanalerne som en datastrøm,
          som en app på dit tv eller din boks afspiller.
        </p>

        <h2>Sådan virker IPTV</h2>
        <p>
          Tv-udbyderen sender sine kanaler fra en server via internettet til din enhed. Fordi
          signalet er digitalt og går begge veje, kan du ofte starte programmer forfra, spole
          tilbage og se tv på flere skærme med samme abonnement.
        </p>

        <h2>Hvad skal du bruge?</h2>
        <ul>
          <li>En stabil internetforbindelse (mindst 10 Mbit/s til HD)</li>
          <li>Et smart-tv, en tv-boks (fx Apple TV, Chromecast eller Fire TV) eller en mobil</li>
          <li>Et abonnement hos en lovlig udbyder</li>
        </ul>

        <h2>IPTV vs. kabel-tv og parabol</h2>
        <p>
          Kabel-tv kræver et stik i væggen, og parabol kræver en skål på taget. IPTV kræver kun
          internet. Til gengæld afhænger billedkvaliteten af din forbindelse, så en kablet
          netværksforbindelse til tv&apos;et er en god idé.
        </p>

        <h2>Kom i gang</h2>
        <p>
          Se vores sammenligning af <Link href="/bedste-iptv-danmark">bedste IPTV i Danmark</Link>,
          og læs om <Link href="/er-iptv-lovligt">hvornår IPTV er lovligt</Link>, før du vælger.
        </p>
      </div>
    </PageShell>
  );
}
