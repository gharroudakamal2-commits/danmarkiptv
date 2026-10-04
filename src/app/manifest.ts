import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: "DK IPTV",
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#07090f",
    theme_color: "#e11d48",
    lang: "da",
    icons: [
      { src: "/icon", sizes: "64x64", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
