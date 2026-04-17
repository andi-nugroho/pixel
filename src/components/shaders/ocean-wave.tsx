"use client";

import { useEffect, useState } from "react";
import { GrainGradient } from "@paper-design/shaders-react";
import { cn } from "@/lib/utils";

interface OceanWaveProps {
  children?: React.ReactNode;
  className?: string;
  speed?: number;
  intensity?: number;
  // Performance hints from ShaderContainer
  "data-quality"?: "high" | "medium" | "low";
  "data-reduce-animation"?: boolean;
  "data-reduced-quality"?: boolean;
}

export default function OceanWave({
  children,
  className,
  speed = 0.15,
  intensity = 0.2,
  "data-quality": qualityLevel = "high",
  "data-reduce-animation": reduceAnimation = false,
  "data-reduced-quality": reducedQuality = false,
}: OceanWaveProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  // Adaptive parameters based on device quality
  const adaptiveSpeed = reduceAnimation ? speed * 0.6 : speed;
  const adaptiveIntensity =
    qualityLevel === "low" ? intensity * 0.7 : intensity;
  const adaptiveScale =
    reducedQuality || qualityLevel === "low" ? 0.4 : 0.6;
  const adaptiveNoise =
    qualityLevel === "low" ? 0.1 : 0.2;

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{ position: "relative" }}
    >
      {ready && (
        <GrainGradient
          colors={["#0066FF", "#00AAFF", "#004488"]}
          colorBack="#00000000"
          speed={adaptiveSpeed}
          scale={adaptiveScale}
          rotation={-30}
          offsetX={0.1}
          offsetY={-0.15}
          softness={0.7}
          intensity={adaptiveIntensity}
          noise={adaptiveNoise}
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
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
}
