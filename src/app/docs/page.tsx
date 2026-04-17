import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { CodeBlockCommand } from "@/components/docs/code-block-command";
import { convertNpmCommand } from "@/lib/convert-npm-command";
import { QuickStartCodeBlock } from "@/components/docs/quick-start-code-block";

export const metadata: Metadata = {
  title: "Getting Started",
  description:
    "Learn how to install and use Pixel shader backgrounds in your React and Next.js projects.",
  openGraph: {
    title: "Documentation | Pixel",
    description:
      "Browse the full Pixel documentation. Learn how to install, configure, and use GPU-powered shader components.",
    url: "https://pixel.devsethi.site/docs",
  },
  alternates: {
    canonical: "/docs",
  },
};

export default function DocsPage() {
  return (
    <div className="max-w-3xl space-y-10 pb-14">
      <div className="space-y-4">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <span className="hover:text-foreground transition-colors cursor-pointer">
            Documentation
          </span>
          <ChevronRight className="size-3.5" />
          <span className="font-medium text-foreground">Getting Started</span>
        </div>
        <h2 className="scroll-m-20 text-2xl font-medium tracking-tight text-foreground lg:text-3xl">
          Getting Started
        </h2>
        <p className="text-base text-muted-foreground leading-8">
          Pixel provides production-ready WebGL shader backgrounds. Follow this
          guide to add high-performance visuals to your application in minutes.
        </p>
      </div>

      <hr className="border-border/60" />

      {/* Prerequisites Section */}
      <div className="space-y-6">
        <h3 className="scroll-m-20 text-xl font-medium tracking-tight">
          Prerequisites
        </h3>
        <div className="grid gap-4 sm:grid-cols-3">
          <RequirementCard text="React 18+ or Next.js" />
          <RequirementCard text="Tailwind CSS installed" />
          <RequirementCard text="shadcn/ui initialized" />
        </div>
      </div>

      <div className="space-y-8 pt-6">
        <h2 className="scroll-m-20 text-2xl font-medium tracking-tight">
          Installation
        </h2>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-14">
            <TimelineStep number="1" title="Add a shader component">
              <p className="text-muted-foreground leading-7">
                Use the CLI to add a specific shader to your project. This will
                install necessary dependencies (like three.js) automatically.
              </p>

              <div className="mt-6 rounded-xl border bg-zinc-950 dark:bg-zinc-900 shadow-sm overflow-hidden">
                <CodeBlockCommand
                  {...convertNpmCommand(
                    "npx shadcn add https://pixel.devsethi.site/r/ocean-wave.json",
                  )}
                />
              </div>
            </TimelineStep>

            <TimelineStep number="2" title="Import and use">
              <p className="text-muted-foreground leading-7">
                Import the component into your page or layout. The component
                fills its parent container by default.
              </p>

              <div className="mt-6 rounded-xl border bg-zinc-950 dark:bg-zinc-900 shadow-sm overflow-hidden">
                <QuickStartCodeBlock />
              </div>
            </TimelineStep>
          </div>
        </div>
      </div>

      <div className="space-y-6 pt-10">
        <h3 className="scroll-m-20 text-xl font-medium tracking-tight">
          What&apos;s Next?
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          <Link
            href="/"
            className="group relative flex flex-col justify-between overflow-hidden rounded-xl border bg-background p-6 hover:border-foreground/20 hover:bg-muted/50 transition-all duration-200"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-medium text-foreground">
                Browse Gallery
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Explore our collection of liquid, grain, and geometric shaders.
              </p>
            </div>
            <ArrowRight className="absolute bottom-6 right-6 size-4 opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 text-primary" />
          </Link>

          <div className="group relative flex flex-col justify-between overflow-hidden rounded-xl border bg-background p-6 opacity-60 cursor-not-allowed">
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                Coming Soon
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 font-medium text-foreground">
                Customization
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Learn how to tweak uniforms, colors, and performance settings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RequirementCard({
  text,
  subtext,
}: {
  text: string;
  subtext?: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-xl border bg-card p-4 text-sm font-medium shadow-sm transition-all hover:border-foreground/20">
      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary mt-0.5">
        <Check className="h-3 w-3" />
      </div>
      <div className="flex flex-col gap-0.5">
        <span className="text-foreground">{text}</span>
        {subtext && (
          <span className="text-xs text-muted-foreground font-normal">
            {subtext}
          </span>
        )}
      </div>
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
      <div className="absolute left-0 top-0 flex size-8 items-center justify-center rounded-full border bg-background text-sm font-semibold shadow-sm ring-4 ring-background">
        {number}
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold tracking-tight text-foreground">
          {title}
        </h3>
        {children}
      </div>
    </div>
  );
}
