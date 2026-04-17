"use client";

import { useState, Suspense, useMemo } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { getShaderComponent } from "@/components/shaders";
import type { BundledLanguage } from "@/components/kibo-ui/code-block";
import {
  CodeBlock,
  CodeBlockBody,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockFilename,
  CodeBlockFiles,
  CodeBlockHeader,
  CodeBlockItem,
  CodeBlockSelect,
  CodeBlockSelectContent,
  CodeBlockSelectItem,
  CodeBlockSelectTrigger,
  CodeBlockSelectValue,
} from "@/components/kibo-ui/code-block";
import { generateShaderUsageCode } from "@/lib/shader-code-examples";

interface ShaderDemoProps {
  shaderId: string;
  shaderName: string;
}

const tabs = [
  { id: "preview", label: "Preview" },
  { id: "code", label: "Code" },
] as const;

type TabId = (typeof tabs)[number]["id"];

export function ShaderDemo({ shaderId, shaderName }: ShaderDemoProps) {
  const [activeTab, setActiveTab] = useState<TabId>("preview");
  const ShaderComponent = useMemo(
    () => getShaderComponent(shaderId),
    [shaderId],
  );
  const usageCodeData = generateShaderUsageCode(shaderId, shaderName);

  return (
    <div className="overflow-hidden rounded-xl border border-border">
      {/* Tab Bar */}
      <div className="flex items-center border-b border-border bg-muted/30">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "relative px-4 py-2.5 text-sm font-medium transition-colors",
              activeTab === tab.id
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.div
                layoutId={`demo-tab-${shaderId}`}
                className="absolute inset-x-0 bottom-0 h-0.5 bg-primary"
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {activeTab === "preview" ? (
          <div className="relative h-[400px]">
            {ShaderComponent ? (
              <Suspense
                fallback={
                  <div className="flex h-full items-center justify-center bg-muted/20">
                    <div className="text-sm text-muted-foreground">
                      Loading shader...
                    </div>
                  </div>
                }
              >
                <ShaderComponent className="h-full w-full">
                  <div className="flex h-full items-center justify-center p-8">
                    <div className="text-center">
                      <h2 className="text-3xl font-bold text-white drop-shadow-lg">
                        {shaderName}
                      </h2>
                      <p className="mt-2 text-sm text-white/70 drop-shadow">
                        Beautiful shader background
                      </p>
                    </div>
                  </div>
                </ShaderComponent>
              </Suspense>
            ) : (
              <div className="flex h-full items-center justify-center bg-muted/20">
                <p className="text-sm text-muted-foreground">
                  Shader not found
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="p-0">
            <CodeBlock
              data={usageCodeData}
              defaultValue={usageCodeData[0].language}
              className="border-0 rounded-none"
            >
              <CodeBlockHeader>
                <CodeBlockFiles>
                  {(item) => (
                    <CodeBlockFilename
                      key={item.language}
                      value={item.language}
                    >
                      {item.filename}
                    </CodeBlockFilename>
                  )}
                </CodeBlockFiles>
                <CodeBlockSelect>
                  <CodeBlockSelectTrigger>
                    <CodeBlockSelectValue />
                  </CodeBlockSelectTrigger>
                  <CodeBlockSelectContent>
                    {(item) => (
                      <CodeBlockSelectItem
                        key={item.language}
                        value={item.language}
                      >
                        {item.language}
                      </CodeBlockSelectItem>
                    )}
                  </CodeBlockSelectContent>
                </CodeBlockSelect>
                <CodeBlockCopyButton />
              </CodeBlockHeader>
              <CodeBlockBody>
                {(item) => (
                  <CodeBlockItem key={item.language} value={item.language}>
                    <CodeBlockContent
                      language={item.language as BundledLanguage}
                    >
                      {item.code}
                    </CodeBlockContent>
                  </CodeBlockItem>
                )}
              </CodeBlockBody>
            </CodeBlock>
          </div>
        )}
      </motion.div>
    </div>
  );
}
