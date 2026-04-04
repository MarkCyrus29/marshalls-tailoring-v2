import type { MetadataRoute } from "next";

/** Canonical origin — override in env for previews/staging. */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://marshallstailoring.com";

/** Add paths here as you add pages; the sitemap picks them up automatically. */
export const sitemapRoutes: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"];
  priority: number;
}> = [{ path: "/", changeFrequency: "weekly", priority: 1 }];
