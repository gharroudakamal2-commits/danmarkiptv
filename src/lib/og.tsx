import { ImageResponse } from "next/og";
import { site } from "./site";

export const ogSize = { width: 1200, height: 630 };

/** Shared social-share image: dark navy card with the site's blue/cyan glow. */
export function renderOgImage({ title, eyebrow }: { title: string; eyebrow: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          color: "white",
          background: "#07090f",
          backgroundImage:
            "radial-gradient(circle at 85% 0%, rgba(225,29,72,0.5), transparent 50%), radial-gradient(circle at 0% 100%, rgba(255,138,91,0.18), transparent 45%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "linear-gradient(135deg, #f43f5e, #be123c)",
              fontSize: 26,
              fontWeight: 800,
            }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" style={{ marginLeft: 4 }}>
              <path d="M7 4.5v15l12-7.5z" fill="white" />
            </svg>
          </div>
          <div style={{ fontSize: 32, fontWeight: 700 }}>{site.name}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 26, fontWeight: 600, color: "#fb7185", letterSpacing: 2, textTransform: "uppercase" }}>
            {eyebrow}
          </div>
          <div style={{ fontSize: title.length > 45 ? 60 : 76, fontWeight: 800, lineHeight: 1.1, maxWidth: 1000 }}>
            {title}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 26, color: "#cbd5e1" }}>
          <div style={{ width: 14, height: 14, borderRadius: 7, background: "#e11d48" }} />
          danmarkiptv.top · IPTV-abonnement uden binding
        </div>
      </div>
    ),
    ogSize,
  );
}
