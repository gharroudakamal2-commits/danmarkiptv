"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Icon } from "@/components/Icon";
import { ButtonLink, Logo } from "@/components/ui";
import { WhatsAppIcon, WhatsAppLink } from "@/components/WhatsAppLink";
import { nav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      {/* Announcement bar */}
      <div className="border-b border-line bg-black/30 text-xs text-slate-300">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-6 lg:px-8">
          <p className="flex items-center gap-2">
            <Icon name="calendarX" className="h-3.5 w-3.5 text-rose-400" />
            Ingen binding – vælg 1, 3, 6 eller 12 måneder
          </p>
          <div className="hidden items-center gap-5 sm:flex">
            <Link href="/hjaelp" className="hover:text-white">Hjælpecenter</Link>
            <Link href="/kontakt" className="hover:text-white">Kontakt</Link>
            <WhatsAppLink
              intro="Hej! Jeg har et spørgsmål om jeres IPTV-abonnement."
              className="flex items-center gap-1.5 font-medium text-white hover:text-rose-300"
            >
              <WhatsAppIcon className="h-3.5 w-3.5" />
              {site.whatsapp.display}
            </WhatsAppLink>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 border-b transition-all duration-300 ${
          scrolled || open ? "border-line bg-night/80 shadow-lg shadow-black/30 backdrop-blur-xl" : "border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
          <Link href="/">
            <Logo />
          </Link>

          <nav aria-label="Hovedmenu" className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                  isActive(item.href) ? "bg-brand-soft text-rose-400" : "text-muted hover:bg-paper hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <ButtonLink href="/kontakt" variant="outline">Kontakt</ButtonLink>
            <ButtonLink href="/iptv-abonnement#priser">Se priser</ButtonLink>
          </div>

          <button
            type="button"
            aria-label={open ? "Luk menu" : "Åbn menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="grid h-10 w-10 place-items-center rounded-lg text-ink hover:bg-paper lg:hidden"
          >
            <Icon name={open ? "x" : "menu"} className="h-6 w-6" />
          </button>
        </div>

        <div
          inert={!open}
          className={`grid overflow-hidden transition-all duration-300 lg:hidden ${
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <nav aria-label="Mobilmenu" className="min-h-0">
            <div className="mx-auto flex max-w-7xl flex-col gap-1 border-t border-line px-4 pt-3 pb-5 sm:px-6">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between rounded-lg px-3 py-3 font-medium ${
                    isActive(item.href) ? "bg-brand-soft text-rose-400" : "text-ink hover:bg-paper"
                  }`}
                >
                  {item.label}
                  <Icon name="chevronRight" className="h-4 w-4 text-slate-400" />
                </Link>
              ))}
              <div className="mt-3 grid grid-cols-2 gap-2">
                <ButtonLink href="/iptv-abonnement#priser">Se priser</ButtonLink>
                <WhatsAppLink
                  intro="Hej! Jeg har et spørgsmål om jeres IPTV-abonnement."
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  WhatsApp
                </WhatsAppLink>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
