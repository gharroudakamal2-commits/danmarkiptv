// Subscription plans shown in the pricing table.
// PLACEHOLDER VALUES — replace names, prices, features and links with your real plans.

export type Plan = {
  id: string;
  name: string;
  period: string;
  price: number;
  /**
   * Price before discount, shown struck through. Optional. Danish law requires this to be the
   * lowest price actually charged for the plan in the previous 30 days — never an invented one.
   */
  oldPrice?: number;
  /** Shown as "≈ X kr./md." under the price. */
  perMonth?: number;
  features: string[];
  popular?: boolean;
};

export const currency = "kr.";

export const plans: Plan[] = [
  {
    id: "1-maned",
    name: "1 måned",
    period: "1 måned",
    price: 99,
    features: ["Live-tv og on demand", "HD og 4K", "1 skærm", "Ingen binding", "Support via e-mail"],
  },
  {
    id: "3-maneder",
    name: "3 måneder",
    period: "3 måneder",
    price: 269,
    perMonth: 90,
    features: ["Live-tv og on demand", "HD og 4K", "1 skærm", "Ingen binding", "Support via e-mail"],
  },
  {
    id: "6-maneder",
    name: "6 måneder",
    period: "6 måneder",
    price: 499,
    perMonth: 83,
    features: ["Live-tv og on demand", "HD og 4K", "2 skærme", "Ingen binding", "Prioriteret support"],
    popular: true,
  },
  {
    id: "12-maneder",
    name: "12 måneder",
    period: "12 måneder",
    price: 899,
    perMonth: 75,
    features: ["Live-tv og on demand", "HD og 4K", "2 skærme", "Ingen binding", "Prioriteret support"],
  },
];
