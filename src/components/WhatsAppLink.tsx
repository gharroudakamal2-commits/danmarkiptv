"use client";

import { usePathname } from "next/navigation";
import { absoluteUrl, whatsappUrl } from "@/lib/site";

type Props = {
  /** First line of the pre-filled message. */
  intro: string;
  /** Extra lines, e.g. plan and price. */
  details?: string[];
  /** Section anchor added to the page link, e.g. "priser". */
  anchor?: string;
  className?: string;
  "aria-label"?: string;
  children: React.ReactNode;
};

/** Opens WhatsApp with a pre-filled message that always includes the page the visitor came from. */
export function WhatsAppLink({ intro, details = [], anchor, className, children, ...rest }: Props) {
  const pathname = usePathname();
  const page = absoluteUrl(pathname) + (anchor ? `#${anchor}` : "");
  const text = [intro, "", ...details, `Hjemmeside: ${page}`].join("\n");

  return (
    <a href={whatsappUrl(text)} target="_blank" rel="noopener noreferrer" className={className} aria-label={rest["aria-label"]}>
      {children}
    </a>
  );
}

export function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.3 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.42 9.42 0 0 1-1.44-5.02c0-5.2 4.24-9.44 9.45-9.44 2.52 0 4.9.99 6.68 2.77a9.38 9.38 0 0 1 2.76 6.68c0 5.2-4.24 9.43-9.46 9.43M20.08 3.9A11.3 11.3 0 0 0 12.05.58C5.79.58.7 5.67.7 11.92c0 2 .52 3.95 1.52 5.67L.6 23.5l6.04-1.58a11.33 11.33 0 0 0 5.4 1.38h.01c6.25 0 11.34-5.09 11.35-11.34 0-3.03-1.18-5.88-3.32-8.02" />
    </svg>
  );
}

/** Floating WhatsApp button shown on every page. */
export function WhatsAppFloat() {
  return (
    <WhatsAppLink
      intro="Hej! Jeg har et spørgsmål om jeres IPTV-abonnement."
      aria-label="Kontakt os på WhatsApp"
      className="fixed right-5 bottom-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-600/30 transition hover:-translate-y-0.5 hover:scale-105"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </WhatsAppLink>
  );
}
