import type { CategoryId } from "@/lib/constants";

export interface ShaderConfig {
  id: string;
  name: string;
  description: string;
  category: Exclude<CategoryId, "all" | "favorites">;
  tags: string[];
  colors: string[];
  performanceRating: "low" | "medium" | "high";
  dependencies: string[];
  props: ShaderPropConfig[];
  defaultProps: Record<string, unknown>;
}

export interface ShaderPropConfig {
  name: string;
  type: string;
  default: string;
  description: string;
  required: boolean;
}

export const SHADERS_CONFIG: ShaderConfig[] = [
  {
    id: "ocean-wave",
    name: "Ocean Wave",
    description:
      "Flowing blue gradient waves inspired by deep ocean currents. Perfect for hero sections and landing pages.",
    category: "gradients",
    tags: ["gradient", "wave", "blue", "animated", "ocean"],
    colors: ["#0066FF", "#00AAFF", "#004488"],
    performanceRating: "low",
    dependencies: ["@paper-design/shaders-react"],
    props: [
      {
        name: "children",
        type: "React.ReactNode",
        default: "-",
        description: "Content to render above the shader background",
        required: false,
      },
      {
        name: "className",
        type: "string",
        default: '""',
        description: "Additional CSS classes for the container",
        required: false,
      },
      {
        name: "speed",
        type: "number",
        default: "0.15",
        description: "Animation speed of the wave",
        required: false,
      },
      {
        name: "intensity",
        type: "number",
        default: "0.2",
        description: "Visual intensity of the grain effect",
        required: false,
      },
    ],
    defaultProps: {
      speed: 0.15,
      intensity: 0.2,
    },
  },
  {
    id: "sunset-glow",
    name: "Sunset Glow",
    description:
      "Warm orange and pink gradients that evoke golden hour. Ideal for creative portfolios and warm-themed sites.",
    category: "gradients",
    tags: ["gradient", "warm", "orange", "pink", "sunset"],
    colors: ["#FF6B35", "#FF8E72", "#E83E8C"],
    performanceRating: "low",
    dependencies: ["@paper-design/shaders-react"],
    props: [
      {
        name: "children",
        type: "React.ReactNode",
        default: "-",
        description: "Content to render above the shader background",
        required: false,
      },
      {
        name: "className",
        type: "string",
        default: '""',
        description: "Additional CSS classes for the container",
        required: false,
      },
      {
        name: "speed",
        type: "number",
        default: "0.12",
        description: "Animation speed",
        required: false,
      },
      {
        name: "intensity",
        type: "number",
        default: "0.18",
        description: "Visual intensity of the grain effect",
        required: false,
      },
    ],
    defaultProps: {
      speed: 0.12,
      intensity: 0.18,
    },
  },
  {
    id: "aurora-dream",
    name: "Aurora Dream",
    description:
      "Vibrant multicolor aurora borealis effect with flowing gradients. Great for creative and artistic projects.",
    category: "gradients",
    tags: ["gradient", "aurora", "multicolor", "vibrant", "animated"],
    colors: ["#00FF88", "#7B2FFF", "#00BBFF"],
    performanceRating: "medium",
    dependencies: ["@paper-design/shaders-react"],
    props: [
      {
        name: "children",
        type: "React.ReactNode",
        default: "-",
        description: "Content to render above the shader background",
        required: false,
      },
      {
        name: "className",
        type: "string",
        default: '""',
        description: "Additional CSS classes for the container",
        required: false,
      },
      {
        name: "speed",
        type: "number",
        default: "0.1",
        description: "Animation speed",
        required: false,
      },
      {
        name: "intensity",
        type: "number",
        default: "0.22",
        description: "Visual intensity of the grain effect",
        required: false,
      },
    ],
    defaultProps: {
      speed: 0.1,
      intensity: 0.22,
    },
  },
  {
    id: "mesh-gradient",
    name: "Mesh Gradient",
    description:
      "Modern mesh-style gradient with smooth purple and pink transitions. Perfect for SaaS and modern web applications.",
    category: "gradients",
    tags: ["gradient", "mesh", "purple", "pink", "modern"],
    colors: ["#9F8EEC", "#E879A8", "#6696EA"],
    performanceRating: "low",
    dependencies: ["@paper-design/shaders-react"],
    props: [
      {
        name: "children",
        type: "React.ReactNode",
        default: "-",
        description: "Content to render above the shader background",
        required: false,
      },
      {
        name: "className",
        type: "string",
        default: '""',
        description: "Additional CSS classes for the container",
        required: false,
      },
      {
        name: "speed",
        type: "number",
        default: "0.17",
        description: "Animation speed",
        required: false,
      },
      {
        name: "intensity",
        type: "number",
        default: "0.16",
        description: "Visual intensity of the grain effect",
        required: false,
      },
    ],
    defaultProps: {
      speed: 0.17,
      intensity: 0.16,
    },
  },
  {
    id: "cosmic-dust",
    name: "Cosmic Dust",
    description:
      "Deep space-themed shader with dark purple and starlight accents. Ideal for dark-themed applications.",
    category: "decorative",
    tags: ["space", "dark", "cosmic", "purple", "animated"],
    colors: ["#1A0533", "#6B21A8", "#C084FC"],
    performanceRating: "medium",
    dependencies: ["@paper-design/shaders-react"],
    props: [
      {
        name: "children",
        type: "React.ReactNode",
        default: "-",
        description: "Content to render above the shader background",
        required: false,
      },
      {
        name: "className",
        type: "string",
        default: '""',
        description: "Additional CSS classes for the container",
        required: false,
      },
      {
        name: "speed",
        type: "number",
        default: "0.08",
        description: "Animation speed",
        required: false,
      },
      {
        name: "intensity",
        type: "number",
        default: "0.25",
        description: "Visual intensity of the grain effect",
        required: false,
      },
    ],
    defaultProps: {
      speed: 0.08,
      intensity: 0.25,
    },
  },
  {
    id: "neon-pulse",
    name: "Neon Pulse",
    description:
      "Glowing neon-inspired shader with pulsing cyan and magenta. Perfect for gaming sites and creative portfolios.",
    category: "effects",
    tags: ["neon", "glow", "cyan", "magenta", "pulse"],
    colors: ["#00FFFF", "#FF00FF", "#0A0A2E"],
    performanceRating: "medium",
    dependencies: ["@paper-design/shaders-react"],
    props: [
      {
        name: "children",
        type: "React.ReactNode",
        default: "-",
        description: "Content to render above the shader background",
        required: false,
      },
      {
        name: "className",
        type: "string",
        default: '""',
        description: "Additional CSS classes for the container",
        required: false,
      },
      {
        name: "speed",
        type: "number",
        default: "0.2",
        description: "Animation speed",
        required: false,
      },
      {
        name: "intensity",
        type: "number",
        default: "0.2",
        description: "Visual intensity of the grain effect",
        required: false,
      },
    ],
    defaultProps: {
      speed: 0.2,
      intensity: 0.2,
    },
  },
  {
    id: "particle-field",
    name: "Particle Field",
    description:
      "Floating particle-style gradient creating a sense of depth. Great for tech-focused landing pages.",
    category: "decorative",
    tags: ["particles", "depth", "teal", "emerald", "animated"],
    colors: ["#0D9488", "#10B981", "#064E3B"],
    performanceRating: "medium",
    dependencies: ["@paper-design/shaders-react"],
    props: [
      {
        name: "children",
        type: "React.ReactNode",
        default: "-",
        description: "Content to render above the shader background",
        required: false,
      },
      {
        name: "className",
        type: "string",
        default: '""',
        description: "Additional CSS classes for the container",
        required: false,
      },
      {
        name: "speed",
        type: "number",
        default: "0.1",
        description: "Animation speed",
        required: false,
      },
      {
        name: "intensity",
        type: "number",
        default: "0.2",
        description: "Visual intensity of the grain effect",
        required: false,
      },
    ],
    defaultProps: {
      speed: 0.1,
      intensity: 0.2,
    },
  },
  {
    id: "geometric-pattern",
    name: "Geometric Pattern",
    description:
      "Structured geometric gradient with warm amber tones. Ideal for corporate and professional designs.",
    category: "geometric",
    tags: ["geometric", "pattern", "amber", "structured", "warm"],
    colors: ["#F59E0B", "#D97706", "#92400E"],
    performanceRating: "low",
    dependencies: ["@paper-design/shaders-react"],
    props: [
      {
        name: "children",
        type: "React.ReactNode",
        default: "-",
        description: "Content to render above the shader background",
        required: false,
      },
      {
        name: "className",
        type: "string",
        default: '""',
        description: "Additional CSS classes for the container",
        required: false,
      },
      {
        name: "speed",
        type: "number",
        default: "0.14",
        description: "Animation speed",
        required: false,
      },
      {
        name: "intensity",
        type: "number",
        default: "0.15",
        description: "Visual intensity of the grain effect",
        required: false,
      },
    ],
    defaultProps: {
      speed: 0.14,
      intensity: 0.15,
    },
  },
  {
    id: "grid-morph",
    name: "Grid Morph",
    description:
      "Morphing grid-inspired gradient with cool indigo and slate tones. Perfect for developer tools and dashboards.",
    category: "geometric",
    tags: ["grid", "morph", "indigo", "slate", "technical"],
    colors: ["#6366F1", "#818CF8", "#334155"],
    performanceRating: "low",
    dependencies: ["@paper-design/shaders-react"],
    props: [
      {
        name: "children",
        type: "React.ReactNode",
        default: "-",
        description: "Content to render above the shader background",
        required: false,
      },
      {
        name: "className",
        type: "string",
        default: '""',
        description: "Additional CSS classes for the container",
        required: false,
      },
      {
        name: "speed",
        type: "number",
        default: "0.12",
        description: "Animation speed",
        required: false,
      },
      {
        name: "intensity",
        type: "number",
        default: "0.18",
        description: "Visual intensity of the grain effect",
        required: false,
      },
    ],
    defaultProps: {
      speed: 0.12,
      intensity: 0.18,
    },
  },
  {
    id: "glitch-wave",
    name: "Glitch Wave",
    description:
      "Digital distortion-style shader with bold red and dark accents. Great for edgy, modern designs.",
    category: "effects",
    tags: ["glitch", "digital", "red", "distortion", "bold"],
    colors: ["#EF4444", "#DC2626", "#1C1917"],
    performanceRating: "medium",
    dependencies: ["@paper-design/shaders-react"],
    props: [
      {
        name: "children",
        type: "React.ReactNode",
        default: "-",
        description: "Content to render above the shader background",
        required: false,
      },
      {
        name: "className",
        type: "string",
        default: '""',
        description: "Additional CSS classes for the container",
        required: false,
      },
      {
        name: "speed",
        type: "number",
        default: "0.18",
        description: "Animation speed",
        required: false,
      },
      {
        name: "intensity",
        type: "number",
        default: "0.22",
        description: "Visual intensity of the grain effect",
        required: false,
      },
    ],
    defaultProps: {
      speed: 0.18,
      intensity: 0.22,
    },
  },
];

export function getShaderById(id: string): ShaderConfig | undefined {
  return SHADERS_CONFIG.find((s) => s.id === id);
}

export function getShadersByCategory(category: CategoryId): ShaderConfig[] {
  if (category === "all") return SHADERS_CONFIG;
  if (category === "favorites") return [];
  return SHADERS_CONFIG.filter((s) => s.category === category);
}

export function searchShaders(query: string): ShaderConfig[] {
  const lower = query.toLowerCase().trim();
  if (!lower) return SHADERS_CONFIG;

  return SHADERS_CONFIG.filter(
    (shader) =>
      shader.name.toLowerCase().includes(lower) ||
      shader.description.toLowerCase().includes(lower) ||
      shader.tags.some((tag) => tag.includes(lower)) ||
      shader.category.includes(lower),
  );
}
