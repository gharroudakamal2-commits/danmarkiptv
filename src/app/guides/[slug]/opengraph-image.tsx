import { getGuide, guides } from "@/lib/guides";
import { ogSize, renderOgImage } from "@/lib/og";

export const alt = "Guide om IPTV i Danmark";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const g = getGuide((await params).slug);
  return renderOgImage({ eyebrow: "Guide", title: g?.title ?? "Guides om IPTV" });
}
