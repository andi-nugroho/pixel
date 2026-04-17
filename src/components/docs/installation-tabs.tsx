"use client";

import { CodeBlockCommand } from "./code-block-command";
import { convertNpmCommand } from "@/lib/convert-npm-command";
import { CodeBlock } from "./code-block";
import { BASE_URL } from "@/lib/constants";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

interface InstallationTabsProps {
  shaderId: string;
  componentCode: string;
  dependencies?: string[];
}

function toPascalCase(str: string): string {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}

export function InstallationTabs({
  shaderId,
  componentCode,
  dependencies = ["@paper-design/shaders-react"],
}: InstallationTabsProps) {
  const registryUrl = `${BASE_URL}/r/${shaderId}.json`;

  return (
    <Tabs defaultValue="cli" className="w-full space-y-4">
      <TabsList>
        <TabsTrigger value="cli">CLI</TabsTrigger>
        <TabsTrigger value="manual">Manual</TabsTrigger>
      </TabsList>

      <TabsContent value="cli">
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">
            Run the following command to install the shader component:
          </p>
          <CodeBlockCommand
            {...convertNpmCommand(`npx shadcn add ${registryUrl}`)}
          />
        </div>
      </TabsContent>

      <TabsContent value="manual">
        <div className="space-y-6">
          {/* Step 1 */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">
              Step 1: Install dependencies
            </h4>
            <CodeBlockCommand
              {...convertNpmCommand(`npm install ${dependencies.join(" ")}`)}
            />
          </div>

          {/* Step 2 */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">
              Step 2: Copy the component
            </h4>
            <p className="text-sm text-muted-foreground">
              Copy the following code into{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
                components/shaders/{shaderId}.tsx
              </code>
            </p>
            <CodeBlock
              code={componentCode}
              language="tsx"
              filename={`components/shaders/${shaderId}.tsx`}
            />
          </div>

          {/* Step 3 */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Step 3: Import and use</h4>
            <CodeBlock
              code={`import ${toPascalCase(shaderId)} from "@/components/shaders/${shaderId}"

export default function Page() {
  return (
    <${toPascalCase(shaderId)} className="min-h-screen">
      <div className="p-8">
        <h1>Your content here</h1>
      </div>
    </${toPascalCase(shaderId)}>
  )
}`}
              language="tsx"
            />
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}
