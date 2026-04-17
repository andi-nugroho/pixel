"use client";

import { PreviewCodeBlock } from "./preview-code-block";

const quickStartCode = [
  {
    language: "tsx",
    filename: "app/page.tsx",
    code: `import OceanWave from "@/components/shaders/ocean-wave"

export default function Hero(): JSX.Element {
  return (
    <OceanWave className="min-h-screen">
      <div className="flex items-center justify-center h-full p-8">
        <h1 className="text-5xl font-bold text-white">
          Hello World
        </h1>
      </div>
    </OceanWave>
  )
}`,
  },
  {
    language: "jsx",
    filename: "app/page.jsx",
    code: `import OceanWave from "@/components/shaders/ocean-wave"

export default function Hero() {
  return (
    <OceanWave className="min-h-screen">
      <div className="flex items-center justify-center h-full p-8">
        <h1 className="text-5xl font-bold text-white">
          Hello World
        </h1>
      </div>
    </OceanWave>
  )
}`,
  },
];

export function QuickStartCodeBlock() {
  return (
    <PreviewCodeBlock
      data={quickStartCode}
      defaultLanguage="tsx"
      className="rounded-xl border border-border"
    />
  );
}
