export interface ComponentCodeExample {
  language: string;
  filename: string;
  code: string;
}

interface ShaderConfig {
  id: string;
  name: string;
  colors: string[];
  speed: number;
  intensity: number;
  scale: number;
  rotation: number;
  offsetX: number;
  offsetY: number;
  softness: number;
  noise: number;
  colorBack: string;
}

export function generateShaderComponentCode(
  config: ShaderConfig,
): ComponentCodeExample[] {
  const componentName = config.id
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("");

  const tsxCode = `"use client";

import { useEffect, useState } from "react";
import { GrainGradient } from "@paper-design/shaders-react";
import { cn } from "@/lib/utils";

interface ${componentName}Props {
  children?: React.ReactNode;
  className?: string;
  speed?: number;
  intensity?: number;
}

export default function ${componentName}({
  children,
  className,
  speed = ${config.speed},
  intensity = ${config.intensity},
}: ${componentName}Props) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{ position: "relative" }}
    >
      {ready && (
        <GrainGradient
          colors={[${config.colors.map((c) => `"${c}"`).join(",")}]}
          colorBack="${config.colorBack}"
          speed={speed}
          scale=${config.scale}
          rotation=${config.rotation}
          offsetX={${config.offsetX}}
          offsetY={${config.offsetY}}
          softness=${config.softness}
          intensity={intensity}
          noise=${config.noise}
          shape="wave"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        />
      )}
      <div style={{ position: "relative", zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
}`;

  const jsxCode = `"use client";

import { useEffect, useState } from "react";
import { GrainGradient } from "@paper-design/shaders-react";
import { cn } from "@/lib/utils";

export default function ${componentName}({
  children,
  className,
  speed = ${config.speed},
  intensity = ${config.intensity},
}) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{ position: "relative" }}
    >
      {ready && (
        <GrainGradient
          colors={[${config.colors.map((c) => `"${c}"`).join(",")}]}
          colorBack="${config.colorBack}"
          speed={speed}
          scale=${config.scale}
          rotation=${config.rotation}
          offsetX={${config.offsetX}}
          offsetY={${config.offsetY}}
          softness=${config.softness}
          intensity={intensity}
          noise=${config.noise}
          shape="wave"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        />
      )}
      <div style={{ position: "relative", zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
}`;

  return [
    {
      language: "tsx",
      filename: `${config.id}.tsx`,
      code: tsxCode,
    },
    {
      language: "jsx",
      filename: `${config.id}.jsx`,
      code: jsxCode,
    },
  ];
}

export const SHADER_COMPONENT_CONFIGS: Record<string, ShaderConfig> = {
  "ocean-wave": {
    id: "ocean-wave",
    name: "Ocean Wave",
    colors: ["#0066FF", "#00AAFF", "#004488"],
    speed: 0.15,
    intensity: 0.2,
    scale: 0.6,
    rotation: -30,
    offsetX: 0.1,
    offsetY: -0.15,
    softness: 0.7,
    noise: 0.2,
    colorBack: "#00000000",
  },
  "sunset-glow": {
    id: "sunset-glow",
    name: "Sunset Glow",
    colors: ["#FF6B35", "#FF8E72", "#E83E8C"],
    speed: 0.12,
    intensity: 0.18,
    scale: 0.55,
    rotation: 45,
    offsetX: -0.1,
    offsetY: 0.2,
    softness: 0.65,
    noise: 0.18,
    colorBack: "#00000000",
  },
  "aurora-dream": {
    id: "aurora-dream",
    name: "Aurora Dream",
    colors: ["#00FF88", "#7B2FFF", "#00BBFF"],
    speed: 0.1,
    intensity: 0.22,
    scale: 0.65,
    rotation: -90,
    offsetX: 0.15,
    offsetY: 0.1,
    softness: 0.6,
    noise: 0.24,
    colorBack: "#00000000",
  },
  "mesh-gradient": {
    id: "mesh-gradient",
    name: "Mesh Gradient",
    colors: ["#9F8EEC", "#E879A8", "#6696EA"],
    speed: 0.17,
    intensity: 0.16,
    scale: 0.57,
    rotation: -143,
    offsetX: 0.2,
    offsetY: -0.27,
    softness: 0.67,
    noise: 0.21,
    colorBack: "#00000000",
  },
  "cosmic-dust": {
    id: "cosmic-dust",
    name: "Cosmic Dust",
    colors: ["#1A0533", "#6B21A8", "#C084FC"],
    speed: 0.08,
    intensity: 0.25,
    scale: 0.5,
    rotation: 60,
    offsetX: -0.2,
    offsetY: 0.15,
    softness: 0.55,
    noise: 0.28,
    colorBack: "#0A001A",
  },
  "neon-pulse": {
    id: "neon-pulse",
    name: "Neon Pulse",
    colors: ["#00FFFF", "#FF00FF", "#0A0A2E"],
    speed: 0.2,
    intensity: 0.2,
    scale: 0.48,
    rotation: 120,
    offsetX: 0.05,
    offsetY: -0.1,
    softness: 0.5,
    noise: 0.22,
    colorBack: "#05051A",
  },
  "particle-field": {
    id: "particle-field",
    name: "Particle Field",
    colors: ["#0D9488", "#10B981", "#064E3B"],
    speed: 0.1,
    intensity: 0.2,
    scale: 0.52,
    rotation: -60,
    offsetX: -0.15,
    offsetY: 0.2,
    softness: 0.58,
    noise: 0.26,
    colorBack: "#00000000",
  },
  "geometric-pattern": {
    id: "geometric-pattern",
    name: "Geometric Pattern",
    colors: ["#F59E0B", "#D97706", "#92400E"],
    speed: 0.14,
    intensity: 0.15,
    scale: 0.45,
    rotation: 75,
    offsetX: 0.25,
    offsetY: -0.05,
    softness: 0.62,
    noise: 0.15,
    colorBack: "#00000000",
  },
  "grid-morph": {
    id: "grid-morph",
    name: "Grid Morph",
    colors: ["#6366F1", "#818CF8", "#334155"],
    speed: 0.12,
    intensity: 0.18,
    scale: 0.5,
    rotation: -120,
    offsetX: -0.1,
    offsetY: -0.2,
    softness: 0.6,
    noise: 0.19,
    colorBack: "#00000000",
  },
  "glitch-wave": {
    id: "glitch-wave",
    name: "Glitch Wave",
    colors: ["#EF4444", "#DC2626", "#1C1917"],
    speed: 0.18,
    intensity: 0.22,
    scale: 0.42,
    rotation: -45,
    offsetX: 0.3,
    offsetY: 0.1,
    softness: 0.45,
    noise: 0.3,
    colorBack: "#0A0000",
  },
};

export function getComponentCodeForShader(
  shaderId: string,
): ComponentCodeExample[] {
  const config = SHADER_COMPONENT_CONFIGS[shaderId];
  if (!config) {
    return [];
  }
  return generateShaderComponentCode(config);
}
