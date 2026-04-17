"use client";

import { useEffect, useState } from "react";
import { GrainGradient } from "@paper-design/shaders-react";
import { cn } from "@/lib/utils";

interface NeonPulseProps {
  children?: React.ReactNode;
  className?: string;
  speed?: number;
  intensity?: number;
  "data-quality"?: "high" | "medium" | "low";
  "data-reduce-animation"?: boolean;
  "data-reduced-quality"?: boolean;
}

export default function NeonPulse({
  children,
  className,
  speed = 0.2,
  intensity = 0.2,
  "data-quality": qualityLevel = "high",
  "data-reduce-animation": reduceAnimation = false,
  "data-reduced-quality": reducedQuality = false,
}: NeonPulseProps) {
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
    reducedQuality || qualityLevel === "low" ? 0.32 : 0.48;
  const adaptiveNoise =
    qualityLevel === "low" ? 0.12 : 0.22;

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{ position: "relative" }}
    >
      {ready && (
        <GrainGradient
          colors={["#00FFFF", "#FF00FF", "#0A0A2E"]}
          colorBack="#05051A"
          speed={adaptiveSpeed}
          scale={adaptiveScale}
          rotation={120}
          offsetX={0.05}
          offsetY={-0.1}
          softness={0.5}
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
