import dynamic from "next/dynamic";
import type { ComponentType } from "react";

interface ShaderComponentProps {
  children?: React.ReactNode;
  className?: string;
  speed?: number;
  intensity?: number;
}

const shaderComponents: Record<string, ComponentType<ShaderComponentProps>> = {
  "ocean-wave": dynamic(() => import("./ocean-wave"), { ssr: false }),
  "sunset-glow": dynamic(() => import("./sunset-glow"), { ssr: false }),
  "aurora-dream": dynamic(() => import("./aurora-dream"), { ssr: false }),
  "mesh-gradient": dynamic(() => import("./mesh-gradient"), { ssr: false }),
  "cosmic-dust": dynamic(() => import("./cosmic-dust"), { ssr: false }),
  "neon-pulse": dynamic(() => import("./neon-pulse"), { ssr: false }),
  "particle-field": dynamic(() => import("./particle-field"), {
    ssr: false,
  }),
  "geometric-pattern": dynamic(() => import("./geometric-pattern"), {
    ssr: false,
  }),
  "grid-morph": dynamic(() => import("./grid-morph"), { ssr: false }),
  "glitch-wave": dynamic(() => import("./glitch-wave"), { ssr: false }),
};

export function getShaderComponent(
  id: string,
): ComponentType<ShaderComponentProps> | null {
  return shaderComponents[id] || null;
}

export type { ShaderComponentProps };
