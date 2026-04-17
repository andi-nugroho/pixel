import type { Metadata } from "next";
import { CodeBlockCommand } from "@/components/docs/code-block-command";
import { convertNpmCommand } from "@/lib/convert-npm-command";
import {
  InstallUsageCodeBlock,
  InstallStructureCodeBlock,
} from "@/components/docs/install-code-blocks";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Installation",
  description: "How to install Pixel shader components in your project.",
  openGraph: {
    title: "Installation | Pixel",
    description: "Step-by-step installation guide for Pixel shader components.",
    url: "https://pixel.andidelouise.net/docs/installation",
  },
  alternates: {
    canonical: "/docs/installation",
  },
};

export default function InstallationPage() {
  return (
    <div className="max-w-3xl space-y-10 pb-14">
      <div className="space-y-4">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <span className="hover:text-foreground transition-colors cursor-pointer">
            Documentation
          </span>
          <ChevronRight className="size-3.5" />
          <span className="font-medium text-foreground">Installation</span>
        </div>
        <h2 className="scroll-m-20 lg:text-3xl text-2xl font-medium tracking-tight text-foreground">
          Installation
        </h2>
        <p className="lg:text-lg text-sm text-muted-foreground">
          There are two ways to install Pixel shader components: using the
          shadcn CLI (recommended) or manual installation.
        </p>
      </div>

      <hr className="border-border/60" />

      <section className="space-y-4">
        <h3 className="scroll-m-20 text-xl font-medium tracking-tight">
          Method 1: shadcn CLI (Recommended)
        </h3>
        <p className="text-muted-foreground leading-7">
          The easiest way to add a shader component is using the shadcn CLI.
          This handles dependencies and places the component in your project
          automatically.
        </p>

        <div className="rounded-xl overflow-hidden border bg-zinc-950 dark:bg-zinc-900 shadow-sm">
          <CodeBlockCommand
            {...convertNpmCommand(
              "npx shadcn add https://pixel.andidelouise.net/r/ocean-wave.json",
            )}
          />
        </div>

        <p className="text-sm text-muted-foreground bg-muted/50 p-4 rounded-lg border">
          This will install the required dependencies and create the component
          file at{" "}
          <code className="font-semibold text-foreground">
            components/shaders/ocean-wave.tsx
          </code>
          .
        </p>
      </section>

      <hr className="border-border/60" />

      <section className="space-y-8">
        <h3 className="scroll-m-20 text-xl font-medium tracking-tight">
          Method 2: Manual Installation
        </h3>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-14">
            <TimelineStep number="1" title="Install dependencies">
              <p className="text-muted-foreground leading-7">
                All shader components require the Paper Design shaders library.
                Install it using your package manager:
              </p>
              <div className="mt-4 rounded-xl overflow-hidden border bg-zinc-950 dark:bg-zinc-900 shadow-sm">
                <CodeBlockCommand
                  {...convertNpmCommand(
                    "npm install @paper-design/shaders-react",
                  )}
                />
              </div>
            </TimelineStep>

            <TimelineStep number="2" title="Copy the component">
              <p className="text-muted-foreground leading-7">
                Browse the{" "}
                <Link
                  href="/docs"
                  className="font-medium underline underline-offset-4 hover:text-primary"
                >
                  shader documentation
                </Link>{" "}
                and copy the component code into your project. Each shader doc
                includes a full copy-paste component.
              </p>
            </TimelineStep>

            <TimelineStep number="3" title="Import and use">
              <p className="text-muted-foreground leading-7">
                Import the component and wrap your content with it. It will fill
                the parent container by default.
              </p>
              <div className="mt-4 rounded-xl overflow-hidden border bg-zinc-950 dark:bg-zinc-900 shadow-sm">
                <InstallUsageCodeBlock />
              </div>
            </TimelineStep>
          </div>
        </div>
      </section>

      <hr className="border-border/60" />

      <section className="space-y-6">
        <h2 className="scroll-m-20 text-xl font-medium tracking-tight">
          Project Structure
        </h2>
        <p className="text-muted-foreground leading-7">
          After installation, your project will include shader components in the
          following structure:
        </p>

        <div className="rounded-xl overflow-hidden border bg-zinc-950 dark:bg-zinc-900 shadow-sm">
          <InstallStructureCodeBlock />
        </div>
      </section>
    </div>
  );
}

function TimelineStep({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative pl-14">
      <div className="absolute left-0 top-0 flex size-8 items-center justify-center rounded-full border bg-background text-sm font-semibold shadow-sm ring-4 ring-background z-10">
        {number}
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-medium tracking-tight text-foreground">
          {title}
        </h3>
        <div className="text-base">{children}</div>
      </div>
    </div>
  );
}
