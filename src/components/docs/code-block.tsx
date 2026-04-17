"use client";

import { CopyButton } from "./copy-button";


interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({
  code,
  language = "tsx",
  filename,
}: CodeBlockProps) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-code">
      {filename && (
        <div className="flex items-center border-b border-border px-4 py-2">
          <span className="font-mono text-xs text-muted-foreground">
            {filename}
          </span>
        </div>
      )}

      <div className="relative">
        <pre className="overflow-x-auto overscroll-x-contain p-4">
          <code
            data-language={language}
            className="font-mono text-sm leading-relaxed text-foreground/90"
          >
            {code}
          </code>
        </pre>

        <CopyButton className="absolute right-0 top-2" text={code} />
      </div>
    </div>
  );
}
