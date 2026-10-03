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
          background: "#0b1120",
          backgroundImage:
            "radial-gradient(circle at 15% 10%, rgba(37,99,235,0.55), transparent 45%), radial-gradient(circle at 90% 90%, rgba(34,211,238,0.35), transparent 45%)",
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
              background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
              fontSize: 26,
              fontWeight: 800,
            }}
          >
            DK
          </div>
          <div style={{ fontSize: 32, fontWeight: 700 }}>{site.name}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 26, fontWeight: 600, color: "#67e8f9", letterSpacing: 2, textTransform: "uppercase" }}>
            {eyebrow}
          </div>
          <div style={{ fontSize: title.length > 45 ? 60 : 76, fontWeight: 800, lineHeight: 1.1, maxWidth: 1000 }}>
            {title}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 26, color: "#cbd5e1" }}>
          <div style={{ width: 14, height: 14, borderRadius: 7, background: "#ef4444" }} />
          danmarkiptv.top · Uafhængig guide til lovlig IPTV
        </div>
      </div>
    ),
    ogSize,
  );
}
