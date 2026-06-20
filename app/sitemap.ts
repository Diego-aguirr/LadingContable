import type { MetadataRoute } from "next";
import { SITE_METADATA } from "@/app/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_METADATA.siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
