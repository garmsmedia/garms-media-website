import type { IconName } from "@/components/ui/Icon";

export type Service = {
  /** Stable value used by the contact form dropdown. */
  id: string;
  title: string;
  description: string;
  icon: IconName;
};

export const services: Service[] = [
  {
    id: "strategy",
    title: "Social Media Strategy",
    description:
      "A clear plan for which platforms, which audiences and which content pillars move your brand forward — mapped to your drops and seasons.",
    icon: "compass",
  },
  {
    id: "content",
    title: "Content Creation",
    description:
      "Lookbook-level photo, short-form video and carousels that look like your brand, not like a template.",
    icon: "camera",
  },
  {
    id: "community",
    title: "Community Management",
    description:
      "Replies, DMs and conversations handled in your voice, so followers feel like part of the crew.",
    icon: "chat",
  },
  {
    id: "ugc-influencer",
    title: "UGC & Influencer Marketing",
    description:
      "Finding creators who genuinely fit your culture and turning their content into social proof.",
    icon: "users",
  },
  {
    id: "paid-social",
    title: "Paid Social Advertising",
    description:
      "Targeted Meta and TikTok campaigns built around launches, restocks and retargeting — with budgets you control.",
    icon: "target",
  },
  {
    id: "analytics",
    title: "Analytics & Optimization",
    description:
      "Simple reports on what drives clicks, carts and sales, and what we change next because of it.",
    icon: "chart",
  },
];

/** Extra dropdown option for the contact form. */
export const serviceOptions = [
  ...services.map((s) => ({ value: s.id, label: s.title })),
  { value: "not-sure", label: "Not sure yet — let's talk" },
];
