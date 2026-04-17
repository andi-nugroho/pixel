function toPascalCase(str: string): string {
  return str
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("");
}

export interface ShaderCodeExample {
  language: string;
  filename: string;
  code: string;
}

export function generateShaderUsageCode(
  shaderId: string,
  shaderName: string,
): ShaderCodeExample[] {
  const componentName = toPascalCase(shaderId);

  const tsxCode = `import ${componentName} from "@/components/shaders/${shaderId}"

export default function Hero() {
  return (
    <${componentName} className="min-h-[400px]">
      <div className="flex items-center justify-center h-full p-8">
        <h1 className="text-4xl font-bold">
          ${shaderName}
        </h1>
      </div>
    </${componentName}>
  )
}`;

  const jsxCode = `import ${componentName} from "@/components/shaders/${shaderId}"

export default function Hero() {
  return (
    <${componentName} className="min-h-[400px]">
      <div className="flex items-center justify-center h-full p-8">
        <h1 className="text-4xl font-bold">
          ${shaderName}
        </h1>
      </div>
    </${componentName}>
  )
}`;

  return [
    {
      language: "tsx",
      filename: `Hero.tsx`,
      code: tsxCode,
    },
    {
      language: "jsx",
      filename: `Hero.jsx`,
      code: jsxCode,
    },
  ];
}

export function generateShaderComponentCode(
  shaderId: string,
): ShaderCodeExample[] {
  const componentName = toPascalCase(shaderId);

  // For shaders, the TSX version has typed props, JSX doesn't
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
  speed = 0.15,
  intensity = 0.2,
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
          // ... shader configuration
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
  speed = 0.15,
  intensity = 0.2,
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
          // ... shader configuration
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
      filename: `${shaderId}.tsx`,
      code: tsxCode,
    },
    {
      language: "jsx",
      filename: `${shaderId}.jsx`,
      code: jsxCode,
    },
  ];
}
