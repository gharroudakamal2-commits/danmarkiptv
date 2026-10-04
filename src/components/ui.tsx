import Link from "next/link";
import { Icon } from "./Icon";

export const delay = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as React.CSSProperties;

export function Container({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export function SectionHeader({
  eyebrow,
  title,
  text,
  align = "center",
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "center" | "left";
  dark?: boolean;
}) {
  return (
    <div data-reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className="inline-flex items-center gap-2 rounded-full border border-rose-400/20 bg-rose-500/10 px-3 py-1 text-xs font-semibold tracking-wide text-rose-300">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-rose-400" />
          </span>
          {eyebrow}
        </p>
      )}
      <h2 className={`mt-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl ${dark ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
      {text && <p className={`mt-4 text-lg leading-8 ${dark ? "text-slate-400" : "text-muted"}`}>{text}</p>}
    </div>
  );
}

const buttonStyles = {
  primary: "btn-sheen bg-brand text-white shadow-lg shadow-brand/25 hover:bg-brand-dark hover:shadow-brand/40",
  dark: "bg-white/10 text-white hover:bg-white/15",
  light: "bg-white text-night hover:bg-slate-200",
  outline: "border border-line bg-white/[0.03] text-ink hover:border-white/20 hover:bg-white/[0.07]",
  ghostDark: "border border-white/15 bg-white/5 text-white hover:bg-white/10",
} as const;

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  arrow = false,
  className = "",
  children,
}: {
  href: string;
  variant?: keyof typeof buttonStyles;
  size?: "md" | "lg";
  arrow?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const sizing = size === "lg" ? "px-6 py-3.5 text-base" : "px-4 py-2.5 text-sm";
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition ${sizing} ${buttonStyles[variant]} ${className}`}
    >
      {children}
      {arrow && <Icon name="arrowRight" className="h-4 w-4 transition group-hover:translate-x-0.5" />}
    </Link>
  );
}

/** Brand mark: red rounded square with a play symbol, plus the wordmark. */
export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-rose-500 to-brand-dark shadow-md shadow-brand/30">
        <svg viewBox="0 0 24 24" className="ml-0.5 h-4 w-4 fill-white" aria-hidden>
          <path d="M7 4.5v15l12-7.5z" />
        </svg>
      </span>
      <span className={`text-lg font-bold tracking-tight ${dark ? "text-white" : "text-ink"}`}>
        Danmark<span className="text-rose-400">IPTV</span>
      </span>
    </span>
  );
}

export function IconBadge({ name, tone = "light" }: { name: Parameters<typeof Icon>[0]["name"]; tone?: "light" | "dark" }) {
  return (
    <span
      className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${
        tone === "dark" ? "bg-white/5 text-rose-400 ring-1 ring-white/10" : "bg-brand-soft text-rose-400 ring-1 ring-brand/10"
      }`}
    >
      <Icon name={name} className="h-5 w-5" />
    </span>
  );
}

/** Slowly drifting colour glow. Place inside a `relative isolate` parent. */
export function Aurora() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden [mask-image:linear-gradient(to_bottom,black_55%,transparent)]">
      <div className="absolute -top-48 right-[-10%] h-[36rem] w-[36rem] animate-aurora rounded-full bg-brand/25 blur-[120px] will-change-transform" />
      <div className="absolute top-1/3 -left-48 h-[28rem] w-[28rem] animate-aurora rounded-full bg-orange-500/10 blur-[120px] will-change-transform [animation-delay:-6s]" />
      <div className="absolute -bottom-48 left-1/3 h-[30rem] w-[30rem] animate-aurora rounded-full bg-fuchsia-600/10 blur-[120px] will-change-transform [animation-delay:-12s]" />
    </div>
  );
}
