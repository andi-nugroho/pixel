"use client";

import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { CopyCheckIcon, CopyIcon } from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language = "bash" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <pre className="bg-muted rounded-lg p-4 overflow-x-auto text-sm">
        <code className={cn(`language-${language}`)}>{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-0 p-2 rounded-md bg-background border opacity-0 group-hover:opacity-100 transition-opacity hover:bg-accent"
        aria-label="Copy code"
      >
        {copied ? (
          <HugeiconsIcon
            icon={CopyCheckIcon}
            className="h-3.5 w-3.5 text-primary"
          />
        ) : (
          <HugeiconsIcon icon={CopyIcon} className="h-3.5 w-3.5 text-primary" />
        )}
      </button>
    </div>
  );
}
