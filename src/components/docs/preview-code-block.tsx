"use client";

import type { BundledLanguage } from "@/components/kibo-ui/code-block";
import {
  CodeBlock,
  CodeBlockBody,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockHeader,
  CodeBlockItem,
  CodeBlockSelect,
  CodeBlockSelectContent,
  CodeBlockSelectItem,
  CodeBlockSelectTrigger,
  CodeBlockSelectValue,
} from "@/components/kibo-ui/code-block";
import { cn } from "@/lib/utils";

export interface PreviewCodeData {
  language: string;
  filename: string;
  code: string;
}

interface PreviewCodeBlockProps {
  data: PreviewCodeData[];
  defaultLanguage?: string;
  className?: string;
}

export function PreviewCodeBlock({
  data,
  defaultLanguage,
  className,
}: PreviewCodeBlockProps) {
  const defaultValue = defaultLanguage ?? data[0]?.language ?? "tsx";

  return (
    <CodeBlock
      data={data}
      defaultValue={defaultValue}
      className={cn("rounded-none border-0", className)}
    >
      <CodeBlockHeader className="border-b border-border px-2">
        <div className="flex-1" />
        <CodeBlockSelect>
          <CodeBlockSelectTrigger className="h-7 gap-1.5 rounded-md border-none bg-transparent px-2 text-xs font-medium text-muted-foreground shadow-none hover:bg-accent hover:text-accent-foreground transition-colors">
            <CodeBlockSelectValue placeholder="Language" />
          </CodeBlockSelectTrigger>
          <CodeBlockSelectContent>
            {(item) => (
              <CodeBlockSelectItem key={item.language} value={item.language}>
                {item.language === "tsx"
                  ? "TypeScript"
                  : item.language === "jsx"
                    ? "JavaScript"
                    : item.language}
              </CodeBlockSelectItem>
            )}
          </CodeBlockSelectContent>
        </CodeBlockSelect>
        <CodeBlockCopyButton />
      </CodeBlockHeader>
      <CodeBlockBody>
        {(item) => (
          <CodeBlockItem
            key={item.language}
            value={item.language}
            lineNumbers={true}
          >
            <CodeBlockContent language={item.language as BundledLanguage}>
              {item.code}
            </CodeBlockContent>
          </CodeBlockItem>
        )}
      </CodeBlockBody>
    </CodeBlock>
  );
}
