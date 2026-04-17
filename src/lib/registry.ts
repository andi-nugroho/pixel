import { SHADERS_CONFIG } from "./shaders-config";

export interface RegistryItem {
  $schema?: string;
  name: string;
  title?: string;
  description?: string;
  type: "registry:ui";
  category: string;
  files: {
    path: string;
    content: string;
    type: "registry:ui" | "registry:file";
    target?: string;
  }[];
  dependencies: string[];
  devDependencies: string[];
  registryDependencies?: string[];
  tailwind: {
    config: Record<string, unknown>;
  };
}

const COMPONENT_SOURCES: Record<string, string> = {
  "ocean-wave": `"use client";

import { useEffect, useState } from "react";
import { GrainGradient } from "@paper-design/shaders-react";
import { cn } from "@/lib/utils";

interface OceanWaveProps {
  children?: React.ReactNode;
  className?: string;
  speed?: number;
  intensity?: number;
}

export default function OceanWave({
  children,
  className,
  speed = 0.15,
  intensity = 0.2,
}: OceanWaveProps) {
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
          colors={["#0066FF", "#00AAFF", "#004488"]}
          colorBack="#00000000"
          speed={speed}
          scale={0.6}
          rotation={-30}
          offsetX={0.1}
          offsetY={-0.15}
          softness={0.7}
          intensity={intensity}
          noise={0.2}
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
}`,

  "sunset-glow": `"use client";

import { useEffect, useState } from "react";
import { GrainGradient } from "@paper-design/shaders-react";
import { cn } from "@/lib/utils";

interface SunsetGlowProps {
  children?: React.ReactNode;
  className?: string;
  speed?: number;
  intensity?: number;
}

export default function SunsetGlow({
  children,
  className,
  speed = 0.12,
  intensity = 0.18,
}: SunsetGlowProps) {
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
          colors={["#FF6B35", "#FF8E72", "#E83E8C"]}
          colorBack="#00000000"
          speed={speed}
          scale={0.55}
          rotation={45}
          offsetX={-0.1}
          offsetY={0.2}
          softness={0.65}
          intensity={intensity}
          noise={0.18}
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
}`,

  "aurora-dream": `"use client";

import { useEffect, useState } from "react";
import { GrainGradient } from "@paper-design/shaders-react";
import { cn } from "@/lib/utils";

interface AuroraDreamProps {
  children?: React.ReactNode;
  className?: string;
  speed?: number;
  intensity?: number;
}

export default function AuroraDream({
  children,
  className,
  speed = 0.1,
  intensity = 0.22,
}: AuroraDreamProps) {
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
          colors={["#00FF88", "#7B2FFF", "#00BBFF"]}
          colorBack="#00000000"
          speed={speed}
          scale={0.65}
          rotation={-90}
          offsetX={0.15}
          offsetY={0.1}
          softness={0.6}
          intensity={intensity}
          noise={0.24}
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
}`,

  "mesh-gradient": `"use client";

import { useEffect, useState } from "react";
import { GrainGradient } from "@paper-design/shaders-react";
import { cn } from "@/lib/utils";

interface MeshGradientProps {
  children?: React.ReactNode;
  className?: string;
  speed?: number;
  intensity?: number;
}

export default function MeshGradient({
  children,
  className,
  speed = 0.17,
  intensity = 0.16,
}: MeshGradientProps) {
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
          colors={["#9F8EEC", "#E879A8", "#6696EA"]}
          colorBack="#00000000"
          speed={speed}
          scale={0.57}
          rotation={-143}
          offsetX={0.2}
          offsetY={-0.27}
          softness={0.67}
          intensity={intensity}
          noise={0.21}
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
}`,

  "cosmic-dust": `"use client";

import { useEffect, useState } from "react";
import { GrainGradient } from "@paper-design/shaders-react";
import { cn } from "@/lib/utils";

interface CosmicDustProps {
  children?: React.ReactNode;
  className?: string;
  speed?: number;
  intensity?: number;
}

export default function CosmicDust({
  children,
  className,
  speed = 0.08,
  intensity = 0.25,
}: CosmicDustProps) {
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
          colors={["#1A0533", "#6B21A8", "#C084FC"]}
          colorBack="#0A001A"
          speed={speed}
          scale={0.5}
          rotation={60}
          offsetX={-0.2}
          offsetY={0.15}
          softness={0.55}
          intensity={intensity}
          noise={0.28}
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
}`,

  "neon-pulse": `"use client";

import { useEffect, useState } from "react";
import { GrainGradient } from "@paper-design/shaders-react";
import { cn } from "@/lib/utils";

interface NeonPulseProps {
  children?: React.ReactNode;
  className?: string;
  speed?: number;
  intensity?: number;
}

export default function NeonPulse({
  children,
  className,
  speed = 0.2,
  intensity = 0.2,
}: NeonPulseProps) {
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
          colors={["#00FFFF", "#FF00FF", "#0A0A2E"]}
          colorBack="#05051A"
          speed={speed}
          scale={0.48}
          rotation={120}
          offsetX={0.05}
          offsetY={-0.1}
          softness={0.5}
          intensity={intensity}
          noise={0.22}
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
}`,

  "particle-field": `"use client";

import { useEffect, useState } from "react";
import { GrainGradient } from "@paper-design/shaders-react";
import { cn } from "@/lib/utils";

interface ParticleFieldProps {
  children?: React.ReactNode;
  className?: string;
  speed?: number;
  intensity?: number;
}

export default function ParticleField({
  children,
  className,
  speed = 0.1,
  intensity = 0.2,
}: ParticleFieldProps) {
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
          colors={["#0D9488", "#10B981", "#064E3B"]}
          colorBack="#00000000"
          speed={speed}
          scale={0.52}
          rotation={-60}
          offsetX={-0.15}
          offsetY={0.2}
          softness={0.58}
          intensity={intensity}
          noise={0.26}
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
}`,

  "geometric-pattern": `"use client";

import { useEffect, useState } from "react";
import { GrainGradient } from "@paper-design/shaders-react";
import { cn } from "@/lib/utils";

interface GeometricPatternProps {
  children?: React.ReactNode;
  className?: string;
  speed?: number;
  intensity?: number;
}

export default function GeometricPattern({
  children,
  className,
  speed = 0.14,
  intensity = 0.15,
}: GeometricPatternProps) {
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
          colors={["#F59E0B", "#D97706", "#92400E"]}
          colorBack="#00000000"
          speed={speed}
          scale={0.45}
          rotation={75}
          offsetX={0.25}
          offsetY={-0.05}
          softness={0.62}
          intensity={intensity}
          noise={0.15}
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
}`,

  "grid-morph": `"use client";

import { useEffect, useState } from "react";
import { GrainGradient } from "@paper-design/shaders-react";
import { cn } from "@/lib/utils";

interface GridMorphProps {
  children?: React.ReactNode;
  className?: string;
  speed?: number;
  intensity?: number;
}

export default function GridMorph({
  children,
  className,
  speed = 0.12,
  intensity = 0.18,
}: GridMorphProps) {
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
          colors={["#6366F1", "#818CF8", "#334155"]}
          colorBack="#00000000"
          speed={speed}
          scale={0.5}
          rotation={-120}
          offsetX={-0.1}
          offsetY={-0.2}
          softness={0.6}
          intensity={intensity}
          noise={0.19}
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
}`,

  "glitch-wave": `"use client";

import { useEffect, useState } from "react";
import { GrainGradient } from "@paper-design/shaders-react";
import { cn } from "@/lib/utils";

interface GlitchWaveProps {
  children?: React.ReactNode;
  className?: string;
  speed?: number;
  intensity?: number;
}

export default function GlitchWave({
  children,
  className,
  speed = 0.18,
  intensity = 0.22,
}: GlitchWaveProps) {
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
          colors={["#EF4444", "#DC2626", "#1C1917"]}
          colorBack="#0A0000"
          speed={speed}
          scale={0.42}
          rotation={-45}
          offsetX={0.3}
          offsetY={0.1}
          softness={0.45}
          intensity={intensity}
          noise={0.3}
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
}`,

  // NEW UNIQUE SHADERS

  "liquid-chrome": `"use client";

import { useEffect, useState } from "react";
import { GrainGradient } from "@paper-design/shaders-react";
import { cn } from "@/lib/utils";

interface LiquidChromeProps {
  children?: React.ReactNode;
  className?: string;
  speed?: number;
  intensity?: number;
  reflectivity?: number;
}

export default function LiquidChrome({
  children,
  className,
  speed = 0.08,
  intensity = 0.35,
  reflectivity = 0.8,
}: LiquidChromeProps) {
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
        <>
          {/* Base metallic layer */}
          <GrainGradient
            colors={["#E8E8E8", "#A0A0A0", "#505050"]}
            colorBack="#1a1a1a"
            speed={speed}
            scale={0.4}
            rotation={45}
            offsetX={0}
            offsetY={0}
            softness={0.9}
            intensity={intensity * reflectivity}
            noise={0.05}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 0,
            }}
          />
          {/* Highlight layer */}
          <GrainGradient
            colors={["#FFFFFF", "#C0C0C0", "#808080"]}
            colorBack="#00000000"
            speed={speed * 1.5}
            scale={0.3}
            rotation={-20}
            offsetX={0.2}
            offsetY={-0.1}
            softness={0.95}
            intensity={intensity * 0.5}
            noise={0.02}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 1,
              mixBlendMode: "overlay",
            }}
          />
        </>
      )}
      <div style={{ position: "relative", zIndex: 2 }}>{children}</div>
    </div>
  );
}`,

  "plasma-vortex": `"use client";

import { useEffect, useState } from "react";
import { GrainGradient } from "@paper-design/shaders-react";
import { cn } from "@/lib/utils";

interface PlasmaVortexProps {
  children?: React.ReactNode;
  className?: string;
  speed?: number;
  intensity?: number;
  turbulence?: number;
}

export default function PlasmaVortex({
  children,
  className,
  speed = 0.25,
  intensity = 0.3,
  turbulence = 0.6,
}: PlasmaVortexProps) {
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
        <>
          {/* Core vortex */}
          <GrainGradient
            colors={["#FF006E", "#8338EC", "#3A86FF"]}
            colorBack="#0D0221"
            speed={speed}
            scale={0.5}
            rotation={0}
            offsetX={0}
            offsetY={0}
            softness={0.6}
            intensity={intensity}
            noise={turbulence * 0.4}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 0,
            }}
          />
          {/* Outer energy ring */}
          <GrainGradient
            colors={["#FB5607", "#FFBE0B", "#FF006E"]}
            colorBack="#00000000"
            speed={speed * 0.7}
            scale={0.8}
            rotation={180}
            offsetX={-0.1}
            offsetY={0.1}
            softness={0.75}
            intensity={intensity * 0.6}
            noise={turbulence * 0.3}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 1,
              mixBlendMode: "screen",
            }}
          />
        </>
      )}
      <div style={{ position: "relative", zIndex: 2 }}>{children}</div>
    </div>
  );
}`,

  "holographic-foil": `"use client";

import { useEffect, useState } from "react";
import { GrainGradient } from "@paper-design/shaders-react";
import { cn } from "@/lib/utils";

interface HolographicFoilProps {
  children?: React.ReactNode;
  className?: string;
  speed?: number;
  intensity?: number;
  shimmer?: number;
}

export default function HolographicFoil({
  children,
  className,
  speed = 0.12,
  intensity = 0.28,
  shimmer = 0.7,
}: HolographicFoilProps) {
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
        <>
          {/* Rainbow base */}
          <GrainGradient
            colors={["#FF0080", "#7928CA", "#0070F3"]}
            colorBack="#1a1a2e"
            speed={speed}
            scale={0.35}
            rotation={-15}
            offsetX={0}
            offsetY={0}
            softness={0.85}
            intensity={intensity}
            noise={0.08}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 0,
            }}
          />
          {/* Secondary spectrum */}
          <GrainGradient
            colors={["#00DFD8", "#007CF0", "#7928CA"]}
            colorBack="#00000000"
            speed={speed * 1.3}
            scale={0.45}
            rotation={30}
            offsetX={0.15}
            offsetY={-0.1}
            softness={0.9}
            intensity={intensity * shimmer}
            noise={0.05}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 1,
              mixBlendMode: "color-dodge",
            }}
          />
          {/* Shimmer highlights */}
          <GrainGradient
            colors={["#FFFFFF", "#E0E0FF", "#FFE0F0"]}
            colorBack="#00000000"
            speed={speed * 2}
            scale={0.25}
            rotation={60}
            offsetX={-0.2}
            offsetY={0.15}
            softness={0.95}
            intensity={intensity * 0.4 * shimmer}
            noise={0.03}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 2,
              mixBlendMode: "overlay",
            }}
          />
        </>
      )}
      <div style={{ position: "relative", zIndex: 3 }}>{children}</div>
    </div>
  );
}`,

  bioluminescent: `"use client";

import { useEffect, useState } from "react";
import { GrainGradient } from "@paper-design/shaders-react";
import { cn } from "@/lib/utils";

interface BioluminescentProps {
  children?: React.ReactNode;
  className?: string;
  speed?: number;
  intensity?: number;
  pulseRate?: number;
}

export default function Bioluminescent({
  children,
  className,
  speed = 0.06,
  intensity = 0.32,
  pulseRate = 0.5,
}: BioluminescentProps) {
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
        <>
          {/* Deep ocean base */}
          <GrainGradient
            colors={["#001219", "#005F73", "#0A9396"]}
            colorBack="#000508"
            speed={speed * 0.5}
            scale={0.7}
            rotation={0}
            offsetX={0}
            offsetY={0}
            softness={0.8}
            intensity={intensity * 0.7}
            noise={0.15}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 0,
            }}
          />
          {/* Bioluminescent glow */}
          <GrainGradient
            colors={["#94D2BD", "#00F5D4", "#00BBF9"]}
            colorBack="#00000000"
            speed={speed * pulseRate * 2}
            scale={0.4}
            rotation={45}
            offsetX={0.1}
            offsetY={-0.15}
            softness={0.7}
            intensity={intensity}
            noise={0.1}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 1,
              mixBlendMode: "screen",
            }}
          />
          {/* Accent sparks */}
          <GrainGradient
            colors={["#E0AAFF", "#9EF01A", "#70E000"]}
            colorBack="#00000000"
            speed={speed * pulseRate * 3}
            scale={0.2}
            rotation={-30}
            offsetX={-0.2}
            offsetY={0.2}
            softness={0.6}
            intensity={intensity * 0.4}
            noise={0.25}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 2,
              mixBlendMode: "screen",
            }}
          />
        </>
      )}
      <div style={{ position: "relative", zIndex: 3 }}>{children}</div>
    </div>
  );
}`,

  "obsidian-fracture": `"use client";

import { useEffect, useState } from "react";
import { GrainGradient } from "@paper-design/shaders-react";
import { cn } from "@/lib/utils";

interface ObsidianFractureProps {
  children?: React.ReactNode;
  className?: string;
  speed?: number;
  intensity?: number;
  heatLevel?: number;
}

export default function ObsidianFracture({
  children,
  className,
  speed = 0.04,
  intensity = 0.4,
  heatLevel = 0.6,
}: ObsidianFractureProps) {
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
        <>
          {/* Obsidian base */}
          <GrainGradient
            colors={["#0F0F0F", "#1A1A1A", "#2D2D2D"]}
            colorBack="#000000"
            speed={speed * 0.3}
            scale={0.6}
            rotation={0}
            offsetX={0}
            offsetY={0}
            softness={0.5}
            intensity={intensity * 0.5}
            noise={0.3}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 0,
            }}
          />
          {/* Molten core */}
          <GrainGradient
            colors={["#FF4500", "#FF6B00", "#FFD700"]}
            colorBack="#00000000"
            speed={speed * heatLevel * 2}
            scale={0.35}
            rotation={15}
            offsetX={0.05}
            offsetY={0}
            softness={0.4}
            intensity={intensity * heatLevel}
            noise={0.2}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 1,
              mixBlendMode: "hard-light",
            }}
          />
          {/* Heat distortion */}
          <GrainGradient
            colors={["#FF0000", "#FF4500", "#8B0000"]}
            colorBack="#00000000"
            speed={speed * heatLevel * 1.5}
            scale={0.5}
            rotation={-45}
            offsetX={-0.1}
            offsetY={0.1}
            softness={0.6}
            intensity={intensity * heatLevel * 0.3}
            noise={0.15}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 2,
              mixBlendMode: "color-dodge",
            }}
          />
        </>
      )}
      <div style={{ position: "relative", zIndex: 3 }}>{children}</div>
    </div>
  );
}`,

  "quantum-flux": `"use client";

import { useEffect, useState } from "react";
import { GrainGradient } from "@paper-design/shaders-react";
import { cn } from "@/lib/utils";

interface QuantumFluxProps {
  children?: React.ReactNode;
  className?: string;
  speed?: number;
  intensity?: number;
  complexity?: number;
}

export default function QuantumFlux({
  children,
  className,
  speed = 0.15,
  intensity = 0.26,
  complexity = 0.7,
}: QuantumFluxProps) {
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
        <>
          {/* Quantum field base */}
          <GrainGradient
            colors={["#0D1B2A", "#1B263B", "#415A77"]}
            colorBack="#000814"
            speed={speed * 0.5}
            scale={0.55}
            rotation={0}
            offsetX={0}
            offsetY={0}
            softness={0.75}
            intensity={intensity}
            noise={0.12}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 0,
            }}
          />
          {/* Wave function A */}
          <GrainGradient
            colors={["#00F5FF", "#00D4FF", "#0099FF"]}
            colorBack="#00000000"
            speed={speed * complexity}
            scale={0.3}
            rotation={60}
            offsetX={0.2}
            offsetY={-0.2}
            softness={0.65}
            intensity={intensity * 0.7}
            noise={0.08}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 1,
              mixBlendMode: "screen",
            }}
          />
          {/* Wave function B (interference) */}
          <GrainGradient
            colors={["#BF00FF", "#8000FF", "#4000FF"]}
            colorBack="#00000000"
            speed={speed * complexity * 1.2}
            scale={0.3}
            rotation={-60}
            offsetX={-0.2}
            offsetY={0.2}
            softness={0.65}
            intensity={intensity * 0.7}
            noise={0.08}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 2,
              mixBlendMode: "screen",
            }}
          />
          {/* Superposition highlight */}
          <GrainGradient
            colors={["#FFFFFF", "#E0FFFF", "#FFE0FF"]}
            colorBack="#00000000"
            speed={speed * complexity * 2}
            scale={0.2}
            rotation={0}
            offsetX={0}
            offsetY={0}
            softness={0.9}
            intensity={intensity * 0.25}
            noise={0.05}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 3,
              mixBlendMode: "overlay",
            }}
          />
        </>
      )}
      <div style={{ position: "relative", zIndex: 4 }}>{children}</div>
    </div>
  );
}`,

  "ethereal-mist": `"use client";

import { useEffect, useState } from "react";
import { GrainGradient } from "@paper-design/shaders-react";
import { cn } from "@/lib/utils";

interface EtherealMistProps {
  children?: React.ReactNode;
  className?: string;
  speed?: number;
  intensity?: number;
  density?: number;
}

export default function EtherealMist({
  children,
  className,
  speed = 0.05,
  intensity = 0.2,
  density = 0.6,
}: EtherealMistProps) {
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
        <>
          {/* Soft base */}
          <GrainGradient
            colors={["#F8F9FA", "#E9ECEF", "#DEE2E6"]}
            colorBack="#FFFFFF"
            speed={speed * 0.3}
            scale={0.9}
            rotation={0}
            offsetX={0}
            offsetY={0}
            softness={0.98}
            intensity={intensity * 0.4}
            noise={0.03}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 0,
            }}
          />
          {/* Mist layer 1 */}
          <GrainGradient
            colors={["#DDD6FE", "#C4B5FD", "#A78BFA"]}
            colorBack="#00000000"
            speed={speed}
            scale={0.6}
            rotation={-10}
            offsetX={0.1}
            offsetY={0}
            softness={0.95}
            intensity={intensity * density}
            noise={0.06}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 1,
              mixBlendMode: "multiply",
            }}
          />
          {/* Mist layer 2 */}
          <GrainGradient
            colors={["#FBCFE8", "#F9A8D4", "#F472B6"]}
            colorBack="#00000000"
            speed={speed * 0.7}
            scale={0.7}
            rotation={15}
            offsetX={-0.15}
            offsetY={0.1}
            softness={0.95}
            intensity={intensity * density * 0.7}
            noise={0.05}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 2,
              mixBlendMode: "multiply",
            }}
          />
        </>
      )}
      <div style={{ position: "relative", zIndex: 3 }}>{children}</div>
    </div>
  );
}`,

  "solar-flare": `"use client";

import { useEffect, useState } from "react";
import { GrainGradient } from "@paper-design/shaders-react";
import { cn } from "@/lib/utils";

interface SolarFlareProps {
  children?: React.ReactNode;
  className?: string;
  speed?: number;
  intensity?: number;
  eruption?: number;
}

export default function SolarFlare({
  children,
  className,
  speed = 0.2,
  intensity = 0.35,
  eruption = 0.8,
}: SolarFlareProps) {
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
        <>
          {/* Solar surface */}
          <GrainGradient
            colors={["#FF6600", "#FF8800", "#FFAA00"]}
            colorBack="#CC4400"
            speed={speed}
            scale={0.45}
            rotation={0}
            offsetX={0}
            offsetY={0}
            softness={0.5}
            intensity={intensity}
            noise={0.25}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 0,
            }}
          />
          {/* Corona */}
          <GrainGradient
            colors={["#FFCC00", "#FFDD44", "#FFEE88"]}
            colorBack="#00000000"
            speed={speed * eruption * 1.5}
            scale={0.35}
            rotation={30}
            offsetX={0.15}
            offsetY={-0.1}
            softness={0.6}
            intensity={intensity * eruption}
            noise={0.2}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 1,
              mixBlendMode: "screen",
            }}
          />
          {/* Flare burst */}
          <GrainGradient
            colors={["#FFFFFF", "#FFFFCC", "#FFFF88"]}
            colorBack="#00000000"
            speed={speed * eruption * 2}
            scale={0.25}
            rotation={-45}
            offsetX={-0.1}
            offsetY={0.15}
            softness={0.7}
            intensity={intensity * eruption * 0.5}
            noise={0.15}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 2,
              mixBlendMode: "overlay",
            }}
          />
        </>
      )}
      <div style={{ position: "relative", zIndex: 3 }}>{children}</div>
    </div>
  );
}`,
};

// Preview component map for dynamic rendering
export const SHADER_PREVIEWS: Record<
  string,
  React.ComponentType<{
    children?: React.ReactNode;
    className?: string;
  }>
> = {};

export function getShaderComponentCode(id: string): string {
  return COMPONENT_SOURCES[id] || "// Component not found";
}

export function generateRegistryItem(shaderId: string): RegistryItem | null {
  const shader = SHADERS_CONFIG.find((s) => s.id === shaderId);
  const source = getShaderComponentCode(shaderId);

  if (!shader || source === "// Component not found") return null;

  return {
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    name: shader.id,
    title: shader.name,
    description: shader.description,
    type: "registry:ui",
    category: shader.category,
    files: [
      {
        path: `${shader.id}.tsx`,
        content: source,
        type: "registry:file",
        target: `components/shaders/${shader.id}.tsx`,
      },
    ],
    dependencies: shader.dependencies,
    devDependencies: [],
    registryDependencies: [],
    tailwind: {
      config: {},
    },
  };
}

// Generate all registry items for API endpoint
export function generateFullRegistry(): RegistryItem[] {
  return SHADERS_CONFIG.map((shader) => generateRegistryItem(shader.id)).filter(
    (item): item is RegistryItem => item !== null,
  );
}

// Get shader IDs that have source code available
export function getAvailableShaderIds(): string[] {
  return Object.keys(COMPONENT_SOURCES);
}

// Check if a shader has source code
export function hasShaderSource(id: string): boolean {
  return id in COMPONENT_SOURCES;
}
