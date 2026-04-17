"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const GrainGradientShader = dynamic(
  () =>
    import("@paper-design/shaders-react").then((mod) => ({
      default: mod.GrainGradient,
    })),
  { ssr: false }
);

const SHADER_CONFIG = {
  colors: ["#00FF88", "#7B2FFF", "#00BBFF"] as [string, string, string],
  colorBack: "#00000000",
  speed: 0.1,
  scale: 0.65,
  rotation: -90,
  offsetX: 0.15,
  offsetY: 0.1,
  softness: 0.6,
  intensity: 0.22,
  noise: 0.24,
  shape: "wave" as const,
} as const;

const SHADER_STYLE: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 0,
};

export function HeroShaderBackground() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setReady(true), 500);
    return () => window.clearTimeout(timer);
  }, []);

  if (!ready) {
    return null;
  }

  return <GrainGradientShader {...SHADER_CONFIG} style={SHADER_STYLE} />;
}
