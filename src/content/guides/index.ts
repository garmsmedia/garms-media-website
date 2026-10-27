/**
 * GARMS Playbook guides: one SEO landing page per topic, under /insights/<slug>.
 * This file holds the lightweight metadata used by the homepage hub, the sitemap
 * and related-guide links. Each guide's body lives in ./<slug>.tsx.
 *
 * Rules (AGENTS.md): no em or en dashes in published copy, no invented results,
 * statistics or client work. GARMS MEDIA is a university project.
 */
import type { ReactNode } from "react";

export type GuideMeta = {
  slug: string;
  href: string;
  /** Short label for cards and links. */
  shortTitle: string;
  category: string;
  /** Primary keyword this page targets (a proposed SEO target, not validated search data). */
  keyword: string;
  /** Exact search question used as the page H1. */
  h1: string;
  /** Max 60 characters, used as the absolute <title>. */
  metaTitle: string;
  /** Max 155 characters. */
  metaDescription: string;
  /** One-line card summary. */
  summary: string;
  /** Publication date (ISO). */
  published: string;
};

/** Full guide: metadata plus the page body (defined in ./<slug>.tsx). */
export type Guide = GuideMeta & {
  readTime: string;
  /** The direct answer shown right under the H1: exactly three sentences. */
  answer: [string, string, string];
  /** Plain-language definition shown at the top of the first section. */
  definition: { term: string; text: string };
  /** H2 sections. Titles are questions or steps; bodies use the guide parts. */
  sections: { id: string; title: string; body: ReactNode }[];
  /** Plain-text Q&A (also used for FAQPage structured data). */
  faq: { question: string; answer: string }[];
  /** Real, verifiable references for external factual claims. */
  sources: { title: string; publisher: string; href: string; note: string }[];
  /** Slugs of related guides to suggest at the end. */
  related: string[];
};

const published = "2026-10-27";

export const guides: GuideMeta[] = [
  {
    slug: "social-media-marketing-for-clothing-brands",
    href: "/insights/social-media-marketing-for-clothing-brands",
    shortTitle: "Social media marketing",
    category: "Social Media Marketing",
    keyword: "social media marketing for clothing brands",
    h1: "How Can Independent Clothing Brands Grow Through Social Media Marketing?",
    metaTitle: "Social Media Marketing for Clothing Brands | GARMS MEDIA",
    metaDescription:
      "How independent clothing brands can use social media to build awareness, community, website traffic and sales, with organic vs paid tactics and priorities.",
    summary: "Awareness, community, traffic and sales: what social media can do for your label, and where to start.",
    published,
  },
  {
    slug: "instagram-marketing-for-fashion-brands",
    href: "/insights/instagram-marketing-for-fashion-brands",
    shortTitle: "Instagram marketing",
    category: "Instagram",
    keyword: "Instagram marketing for fashion brands",
    h1: "How Can Clothing Brands Grow on Instagram?",
    metaTitle: "Instagram Marketing for Fashion Brands | GARMS MEDIA",
    metaDescription:
      "Instagram marketing for fashion brands: Reels, product storytelling, profile optimization, creator collabs and the metrics that matter for clothing labels.",
    summary: "Reels, product storytelling, profile basics, creator collabs and the metrics worth tracking.",
    published,
  },
  {
    slug: "content-creation-for-clothing-brands",
    href: "/insights/content-creation-for-clothing-brands",
    shortTitle: "Content creation",
    category: "Content Creation",
    keyword: "content creation for clothing brands",
    h1: "What Content Should Independent Clothing Brands Post on Social Media?",
    metaTitle: "Content Creation for Clothing Brands | GARMS MEDIA",
    metaDescription:
      "What independent clothing brands should post: educational, behind-the-scenes, styling, product demos, UGC, launches and a sample weekly content mix.",
    summary: "Seven content types that work for clothing brands, plus a sample weekly content mix.",
    published,
  },
  {
    slug: "influencer-marketing-for-small-fashion-brands",
    href: "/insights/influencer-marketing-for-small-fashion-brands",
    shortTitle: "Influencer marketing",
    category: "Influencer Marketing",
    keyword: "influencer marketing for small fashion brands",
    h1: "How Can Small Clothing Brands Use Influencer Marketing?",
    metaTitle: "Influencer Marketing for Small Fashion Brands | GARMS MEDIA",
    metaDescription:
      "How small fashion brands can choose creators, work with micro-influencers, compare UGC and partnerships, follow FTC disclosure rules and measure results.",
    summary: "Choosing creators, micro-influencers, UGC vs partnerships, FTC disclosure and measuring results.",
    published,
  },
  {
    slug: "meta-ads-for-clothing-brands",
    href: "/insights/meta-ads-for-clothing-brands",
    shortTitle: "Meta Ads",
    category: "Paid Social",
    keyword: "Meta Ads for clothing brands",
    h1: "How Can Clothing Brands Use Meta Ads to Increase Sales?",
    metaTitle: "Meta Ads for Clothing Brands | GARMS MEDIA",
    metaDescription:
      "How clothing brands can use Meta Ads on Instagram and Facebook: objectives, audiences, creative testing, landing pages, tracking and small budgets.",
    summary: "Objectives, audiences, creative testing, landing pages and tracking, with small budgets in mind.",
    published,
  },
  {
    slug: "social-media-strategy-for-clothing-brands",
    href: "/insights/social-media-strategy-for-clothing-brands",
    shortTitle: "Social media strategy",
    category: "Strategy",
    keyword: "social media strategy for clothing brands",
    h1: "How Do You Build a Social Media Strategy for an Independent Clothing Brand?",
    metaTitle: "Social Media Strategy for Clothing Brands | GARMS MEDIA",
    metaDescription:
      "Build a social media strategy for an independent clothing brand: objectives, target customers, platforms, content pillars, a content calendar and KPIs.",
    summary: "Seven steps from objectives and customers to content pillars, a calendar and KPIs.",
    published,
  },
];

export function guideBySlug(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
