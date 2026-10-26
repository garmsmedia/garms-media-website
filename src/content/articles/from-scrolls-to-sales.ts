/**
 * "From Scrolls to Sales" article: metadata and the data behind its visuals.
 * The article body itself lives in src/app/insights/from-scrolls-to-sales/page.tsx.
 *
 * Source of truth: the approved article text supplied by the GARMS team.
 * Rules: no em dashes in published copy, no invented results, conversion figures
 * are planning objectives and a mathematical illustration only.
 */

export const article = {
  slug: "from-scrolls-to-sales",
  href: "/insights/from-scrolls-to-sales",
  kicker: "The GARMS Playbook",
  category: "Fashion Marketing",
  readTime: "5 min read",
  /** Publication date of this page (ISO). */
  published: "2026-10-20",
  title: "From Scrolls to Sales.",
  subtitle:
    "How independent clothing brands can turn online attention into real business opportunities.",
  seoTitle: "From Scrolls to Sales: Social Media Marketing for Clothing Brands",
  description:
    "How independent clothing brands can turn online attention into real business opportunities. A practical look at social media marketing for clothing brands and the inbound funnel GARMS MEDIA plans to use.",
  /** Homepage preview copy. */
  summary:
    "Likes are nice. Orders and real conversations are better. Learn how a conversion funnel works, how GARMS MEDIA plans to connect with independent clothing brand owners, and how the same ideas can help your own brand grow online.",
  takeaways: [
    { title: "Get Discovered", body: "Answer the questions your audience is already searching for." },
    { title: "Build Trust", body: "Show your culture, your thinking and your work, without overpromising." },
    { title: "Convert Interest", body: "Make the next step simple, and focus on the conversions that matter." },
  ],
};

/** Six-stage funnel shown in the article (a tailored proposal sits between call and client). */
export const funnelStages = [
  { label: "Search", note: "Google or ChatGPT" },
  { label: "Article", note: "Helpful content" },
  { label: "Website", note: "GARMS MEDIA" },
  { label: "Enquiry", note: "Free consultation" },
  { label: "Discovery Call", note: "Understand the brand" },
  { label: "Client", note: "After a tailored proposal" },
];

export const bant = [
  { letter: "B", title: "Budget", question: "Is there a realistic budget for marketing support?" },
  { letter: "A", title: "Authority", question: "Are we speaking with someone who can make or influence the decision?" },
  { letter: "N", title: "Need", question: "Is there a specific marketing challenge we could help address?" },
  { letter: "T", title: "Timing", question: "Is the brand looking to make changes within a reasonable timeframe?" },
];

/** Initial conversion objectives (planning targets, not achieved results). */
export const benchmarks = [
  { from: "Website visitor", to: "Enquiry", rate: 2, basis: "Classroom benchmark" },
  { from: "Enquiry", to: "Marketing qualified lead", rate: 30, basis: "Classroom benchmark" },
  { from: "MQL", to: "Sales qualified lead", rate: 40, basis: "Planning assumption" },
  { from: "SQL", to: "Paying client", rate: 20, basis: "Planning assumption" },
];

/** 1,000 visitors run through the objectives above (illustration only). */
export const journey = [
  { value: "1,000", label: "Website visitors" },
  { value: "20", label: "Enquiries" },
  { value: "6", label: "MQLs" },
  { value: "2 to 3", label: "SQLs", detail: "2.4 in theory" },
  { value: "0.48", label: "Paying clients", detail: "Expected value" },
];
