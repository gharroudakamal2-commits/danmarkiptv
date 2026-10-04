import { ogSize, renderOgImage } from "@/lib/og";
import { updatedLabel } from "@/lib/site";

export const alt = "IPTV Danmark – IPTV-abonnement til smart-tv, boks og mobil";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({ eyebrow: `Opdateret ${updatedLabel()}`, title: "IPTV-abonnement til smart-tv, boks og mobil" });
}
