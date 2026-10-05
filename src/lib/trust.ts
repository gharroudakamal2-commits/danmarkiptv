// Trust signals shown on the home page. Every block stays hidden until it has real data.
// Only add facts you can document: invented reviews, ratings or customer numbers are illegal
// under Danish marketing law (markedsføringsloven) and are removed by review platforms.

export const trust = {
  /** e.g. { source: "Trustpilot", score: 4.6, count: 312, url: "https://dk.trustpilot.com/review/iptvtv.top" } */
  rating: null as null | { source: string; score: number; count: number; url: string },

  /** Real customer quotes with permission, e.g. { quote: "…", name: "Mette", city: "Aarhus" }. Max 3 shown. */
  reviews: [] as { quote: string; name: string; city?: string }[],

  /** Payment methods you actually accept, e.g. ["MobilePay", "Visa", "Mastercard"]. */
  paymentMethods: [] as string[],

  /** A trial or guarantee you actually offer, e.g. "Gratis prøve i 24 timer". */
  offer: null as null | string,
};
