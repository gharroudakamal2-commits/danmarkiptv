import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppFloat } from "@/components/WhatsAppLink";
import { PointerSpotlight, RevealObserver } from "@/components/Motion";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const viewport: Viewport = { themeColor: "#07090f" };

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "IPTV Danmark – IPTV-abonnement til smart-tv, boks og mobil",
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: site.locale,
    siteName: site.name,
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="da" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Enables scroll-reveal styles only when JS runs, so content never stays hidden. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <RevealObserver />
        <PointerSpotlight />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": `${site.url}/#organization`,
                name: site.name,
                url: site.url,
                email: site.email,
                logo: { "@type": "ImageObject", url: `${site.url}/apple-icon`, width: 180, height: 180 },
                description: site.description,
                areaServed: { "@type": "Country", name: "Danmark" },
                contactPoint: {
                  "@type": "ContactPoint",
                  contactType: "customer support",
                  email: site.email,
                  telephone: `+${site.whatsapp.number}`,
                  availableLanguage: ["da"],
                },
              },
              {
                "@type": "WebSite",
                "@id": `${site.url}/#website`,
                name: site.name,
                url: site.url,
                inLanguage: "da-DK",
                publisher: { "@id": `${site.url}/#organization` },
              },
            ],
          }}
        />
      </body>
    </html>
  );
}
