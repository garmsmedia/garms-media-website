import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { article } from "@/content/articles/from-scrolls-to-sales";
import { guides } from "@/content/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}${article.href}`, lastModified: article.published, changeFrequency: "yearly", priority: 0.8 },
    ...guides.map((guide) => ({
      url: `${site.url}${guide.href}`,
      lastModified: guide.updated ?? guide.published,
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
  ];
}
