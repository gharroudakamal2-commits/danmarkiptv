import type { Metadata } from "next";
import Link from "next/link";
import { Faq } from "@/components/Faq";
import { PageShell } from "@/components/PageShell";
import { pageMeta } from "@/lib/site";

export const metadata: Metadata = {
  title: "IPTV på smart-tv – Samsung, LG, Android TV og Philips",
  description:
    "Sådan ser du IPTV på dit smart-tv. Trin-for-trin guide til Samsung, LG, Android TV, Google TV og Philips.",
  ...pageMeta("/iptv-pa-smart-tv"),
};

const brands = [
  {
    name: "Samsung (Tizen)",
    steps: "Tryk på Home, vælg Apps, søg efter tjenesten, og tryk Installer. Log ind med din konto.",
  },
  {
    name: "LG (webOS)",
    steps: "Åbn LG Content Store fra Home-menuen, søg efter appen, installer den, og log ind.",
  },
  {
    name: "Android TV / Google TV (Sony, Philips, TCL m.fl.)",
    steps: "Åbn Google Play Butik på tv'et, søg efter appen, og installer. Mange apps understøtter også Chromecast indbygget.",
  },
  {
    name: "Ældre smart-tv",
    steps: "Findes appen ikke til dit tv, kan du tilslutte en Chromecast, Apple TV eller Fire TV Stick til HDMI-indgangen.",
  },
];

export default function SmartTvPage() {
  return (
    <PageShell
      crumbs={[{ name: "IPTV på smart-tv", href: "/iptv-pa-smart-tv" }]}
      title="IPTV på smart-tv"
      intro="De fleste nye fjernsyn kan vise IPTV direkte via en app. Her er guiden til de mest udbredte tv-mærker i Danmark."
    >
      <div className="mt-10 grid gap-4">
        {brands.map((b) => (
          <section key={b.name} className="card-lift rounded-2xl border border-line bg-night-2 p-6">
            <h2 className="text-xl font-bold">{b.name}</h2>
            <p className="mt-2 leading-7 text-muted">{b.steps}</p>
          </section>
        ))}
      </div>

      <div className="prose-da mt-12">
        <h2>Tips til det bedste billede</h2>
        <ul>
          <li>Forbind tv&apos;et med netværkskabel i stedet for wifi, hvis det er muligt.</li>
          <li>Opdater tv&apos;ets software og apps jævnligt.</li>
          <li>Tjek at dit internet er hurtigt nok – se <Link href="/guides/hvor-hurtigt-internet-til-iptv">hvor hurtigt internet du skal bruge</Link>.</li>
        </ul>
        <p>
          Find de apps, der virker på dit tv, i vores <Link href="/iptv-app">oversigt over IPTV apps</Link>.
          Ny i IPTV? Start med guiden <Link href="/iptv-tv">IPTV tv: hvad er IP-tv?</Link>
        </p>
      </div>

      <Faq
        items={[
          {
            q: "Kan alle smart-tv vise IPTV?",
            a: "De fleste smart-tv fra de seneste år kan. Har dit tv ikke den app, du skal bruge, kan du tilslutte en tv-boks.",
          },
          {
            q: "Skal jeg have en tv-boks til IPTV?",
            a: "Nej, ikke hvis dit smart-tv har appen. En boks kan dog give en hurtigere og mere stabil oplevelse på ældre tv.",
          },
        ]}
      />
    </PageShell>
  );
}
