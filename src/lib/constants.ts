export const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export const SITE_CONFIG = {
  name: "Pixel",
  description:
    "Beautiful, production-ready shader backgrounds for React & Next.js. Install with shadcn CLI.",
  url: BASE_URL,
  ogImage: `${BASE_URL}/og.png`,
  github: "https://github.com/andi-nugroho/pixel",
  author: "Andi Nugroho",
} as const;

export const CATEGORIES = [
  { id: "all", label: "All", icon: "grid" },
  { id: "gradients", label: "Gradients", icon: "palette" },
  { id: "geometric", label: "Geometric", icon: "hexagon" },
  { id: "decorative", label: "Decorative", icon: "sparkles" },
  { id: "effects", label: "Effects", icon: "zap" },
  { id: "favorites", label: "Favorites", icon: "heart" },
] as const;

export type CategoryId = (typeof CATEGORIES)[number]["id"];

export const PACKAGE_MANAGERS = ["pnpm", "npm", "yarn", "bun"] as const;
export type PackageManager = (typeof PACKAGE_MANAGERS)[number];
