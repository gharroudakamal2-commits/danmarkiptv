import { ogSize, renderOgImage } from "@/lib/og";

export const alt = "IPTV Danmark – Find den bedste lovlige IPTV";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({ eyebrow: "Opdateret 2026", title: "IPTV Danmark: find den bedste lovlige IPTV" });
}
