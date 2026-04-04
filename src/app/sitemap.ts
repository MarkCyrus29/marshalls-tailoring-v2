import type { MetadataRoute } from "next";
import { siteUrl, sitemapRoutes } from "@/lib/site";

/**
 * Next.js serves this at /sitemap.xml (indexable, GSC-friendly).
 * Extend `sitemapRoutes` in `@/lib/site` when new marketing pages ship.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const base = siteUrl.endsWith("/") ? siteUrl : `${siteUrl}/`;

  return sitemapRoutes.map((route) => ({
    url: new URL(route.path, base).href,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
