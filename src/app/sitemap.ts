import type { MetadataRoute } from "next";

const BASE_URL = "https://pixel.devsethi.site";

const shaderSlugs = [
  "ocean-wave",
  "sunset-glow",
  "cosmic-dust",
  "geometric-pattern",
  "glitch-wave",
  "grid-morph",
  "mesh-gradient",
  "neon-pulse",
  "particle-field",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/docs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/docs/installation`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const shaderRoutes: MetadataRoute.Sitemap = shaderSlugs.map((slug) => ({
    url: `${BASE_URL}/docs/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...shaderRoutes];
}
