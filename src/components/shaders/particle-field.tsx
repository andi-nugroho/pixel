"use client";

import { useEffect, useState } from "react";
import { GrainGradient } from "@paper-design/shaders-react";
import { cn } from "@/lib/utils";

interface ParticleFieldProps {
  children?: React.ReactNode;
  className?: string;
  speed?: number;
  intensity?: number;
  "data-quality"?: "high" | "medium" | "low";
  "data-reduce-animation"?: boolean;
  "data-reduced-quality"?: boolean;
}

export default function ParticleField({
  children,
  className,
  speed = 0.1,
  intensity = 0.2,
  "data-quality": qualityLevel = "high",
  "data-reduce-animation": reduceAnimation = false,
  "data-reduced-quality": reducedQuality = false,
}: ParticleFieldProps) {
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
    reducedQuality || qualityLevel === "low" ? 0.35 : 0.52;
  const adaptiveNoise =
    qualityLevel === "low" ? 0.16 : 0.26;

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{ position: "relative" }}
    >
      {ready && (
        <GrainGradient
          colors={["#0D9488", "#10B981", "#064E3B"]}
          colorBack="#00000000"
          speed={adaptiveSpeed}
          scale={adaptiveScale}
          rotation={-60}
          offsetX={-0.15}
          offsetY={0.2}
          softness={0.58}
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
