import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { article } from "@/content/articles/from-scrolls-to-sales";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}${article.href}`, lastModified: article.published, changeFrequency: "yearly", priority: 0.8 },
  ];
}
