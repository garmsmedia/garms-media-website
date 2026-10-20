/**
 * SPECULATIVE WORK — not commissioned client campaigns.
 *
 * Each concept renders a typographic mockup built from `slides`.
 * To use real GARMS artwork instead, drop an image in /public/concepts/ and set
 * `image` (e.g. "/concepts/followers-to-customers.jpg") plus `imageAlt`.
 * Never add client names, results or metrics here.
 */

export type Concept = {
  id: string;
  title: string;
  platform: "Instagram" | "TikTok";
  format: string;
  /** Planned number of slides — shown as "1/N" on the mockup. */
  slideCount: number;
  objective: string;
  /** Short lines shown on the mockup "slides". First slide is the cover. */
  slides: string[];
  /** Mockup colour scheme. */
  tone: "ink" | "paper" | "flame";
  image?: string;
  imageAlt?: string;
};

export const concepts: Concept[] = [
  {
    id: "followers-to-customers",
    title: "From Followers to Customers",
    platform: "Instagram",
    format: "Educational carousel · 8 slides",
    slideCount: 8,
    objective:
      "Show independent streetwear founders how to turn likes and comments into real relationships — and real orders.",
    slides: ["From followers", "to customers", "Engage → trust → buy"],
    tone: "ink",
  },
  {
    id: "one-product-three-ideas",
    title: "One Product, Three Content Ideas",
    platform: "Instagram",
    format: "Carousel · 6 slides",
    slideCount: 6,
    objective:
      "Take one oversized hoodie and turn it into three formats — styling, storytelling and a creator collab — to prove one drop can fuel weeks of content.",
    slides: ["1 hoodie", "3 ideas", "Style · Story · Collab"],
    tone: "flame",
  },
  {
    id: "build-your-brand-online",
    title: "Build Your Brand Online",
    platform: "TikTok",
    format: "Educational photo slideshow · 7 slides",
    slideCount: 7,
    objective:
      "A starter guide for new clothing labels: where to begin on social, what to post first and how to grow a community from zero.",
    slides: ["Build your", "brand online", "Start here →"],
    tone: "paper",
  },
];
