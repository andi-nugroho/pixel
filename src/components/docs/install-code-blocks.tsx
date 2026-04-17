"use client";

import { PreviewCodeBlock } from "./preview-code-block";
import { CodeBlock } from "./code-block";

const usageCode = [
  {
    language: "tsx",
    filename: "app/page.tsx",
    code: `import OceanWave from "@/components/shaders/ocean-wave"

export default function Page(): JSX.Element {
  return (
    <OceanWave className="min-h-screen">
      <YourContent />
    </OceanWave>
  )
}`,
  },
  {
    language: "jsx",
    filename: "app/page.jsx",
    code: `import OceanWave from "@/components/shaders/ocean-wave"

export default function Page() {
  return (
    <OceanWave className="min-h-screen">
      <YourContent />
    </OceanWave>
  )
}`,
  },
];

export function InstallUsageCodeBlock() {
  return (
    <PreviewCodeBlock
      data={usageCode}
      defaultLanguage="tsx"
      className="rounded-xl border border-border"
    />
  );
}

export function InstallStructureCodeBlock() {
  return (
    <CodeBlock
      code={`your-project/
├── components/
│   └── shaders/
│       ├── ocean-wave.tsx
│       ├── sunset-glow.tsx
│       └── ...
├── package.json
└── ...`}
      language="bash"
      filename="Project Structure"
    />
  );
}
