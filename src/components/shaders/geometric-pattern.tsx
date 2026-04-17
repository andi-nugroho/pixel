"use client";

import { useEffect, useState } from "react";
import { GrainGradient } from "@paper-design/shaders-react";
import { cn } from "@/lib/utils";

interface GeometricPatternProps {
  children?: React.ReactNode;
  className?: string;
  speed?: number;
  intensity?: number;
  "data-quality"?: "high" | "medium" | "low";
  "data-reduce-animation"?: boolean;
  "data-reduced-quality"?: boolean;
}

export default function GeometricPattern({
  children,
  className,
  speed = 0.14,
  intensity = 0.15,
  "data-quality": qualityLevel = "high",
  "data-reduce-animation": reduceAnimation = false,
  "data-reduced-quality": reducedQuality = false,
}: GeometricPatternProps) {
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
    reducedQuality || qualityLevel === "low" ? 0.3 : 0.45;
  const adaptiveNoise =
    qualityLevel === "low" ? 0.08 : 0.15;

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{ position: "relative" }}
    >
      {ready && (
        <GrainGradient
          colors={["#F59E0B", "#D97706", "#92400E"]}
          colorBack="#00000000"
          speed={adaptiveSpeed}
          scale={adaptiveScale}
          rotation={75}
          offsetX={0.25}
          offsetY={-0.05}
          softness={0.62}
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
