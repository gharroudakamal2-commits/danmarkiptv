import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: { formats: ["image/avif", "image/webp"] },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Merged into the "IPTV tv" pillar page so the two don't compete for the same queries.
      { source: "/hvad-er-iptv", destination: "/iptv-tv", permanent: true },
      // Always serve the site without "www" so Google sees one canonical host.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.danmarkiptv.top" }],
        destination: "https://danmarkiptv.top/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
