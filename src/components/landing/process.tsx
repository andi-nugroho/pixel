"use client";

import { useState } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import {
  TerminalAnimationBackgroundGradient,
  TerminalAnimationBlinkingCursor,
  TerminalAnimationCommandBar,
  TerminalAnimationContainer,
  TerminalAnimationContent,
  TerminalAnimationOutput,
  TerminalAnimationRoot,
  TerminalAnimationTrailingPrompt,
  TerminalAnimationWindow,
  type TabContent,
  type TerminalLine,
} from "../ui/terminal-animation";
import { PixelHeading } from "../ui/pixel-heading-word";

const backgroundImage = "/terminal-animation-bg.png";

const shaderTabs: TabContent[] = [
  {
    label: "install",
    command: "npx shadcn add https://pixel.andidelouise.net/r/ocean-wave.json",
    lines: [
      { text: "", delay: 60 },
      {
        text: "✔ Checking registry...",
        color: "text-emerald-400",
        delay: 280,
      },
      { text: "", delay: 60 },
      {
        text: "  Installing ocean-wave shader component",
        color: "text-neutral-400",
        delay: 180,
      },
      { text: "", delay: 80 },
      {
        text: "✔ Created components/shaders/ocean-wave.tsx",
        color: "text-emerald-400",
        delay: 220,
      },
      {
        text: "✔ Updated dependencies",
        color: "text-emerald-400",
        delay: 140,
      },
      { text: "", delay: 60 },
      {
        text: "  Ready to use in your app",
        color: "text-neutral-400",
        delay: 180,
      },
    ],
  },
];

const features = [
  {
    title: "Full source code",
    description: "Customize colors, speeds, and effects",
  },
  {
    title: "Uses Paper Design",
    description: "Clean, lightweight and fast",
  },
  {
    title: "TypeScript ready",
    description: "Full type safety out of the box",
  },
];

export function TerminalProcess() {
  const [animationKey, setAnimationKey] = useState(0);

  return (
    <section className="py-16 sm:py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 sm:mb-16 md:mb-20 text-center">
          <PixelHeading
            initialFont="square"
            hoverFont="circle"
            className="text-2xl font-medium tracking-tight sm:text-3xl md:text-4xl lg:text-5xl"
          >
            Install in seconds
          </PixelHeading>
        </div>

        {/* Main grid */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center">
          {/* Terminal */}
          <div className="min-w-0 order-2 lg:order-1">
            <div className="relative">
              {/* Glow effect behind terminal */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl blur-2xl opacity-60" />

              <TerminalAnimationRoot
                key={animationKey}
                alwaysDark={true}
                backgroundImage={backgroundImage}
                className="relative w-full min-w-0 overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl shadow-black/20"
                defaultActiveTab={0}
                hideCursorOnComplete={false}
                tabs={shaderTabs}
              >
                {!backgroundImage && <TerminalAnimationBackgroundGradient />}

                <TerminalAnimationContainer className="max-w-none px-0 pt-0 pb-0">
                  <TerminalAnimationWindow
                    className="rounded-xl sm:rounded-2xl border border-white/[0.08] bg-neutral-950/95 backdrop-blur-xl"
                    animateOnVisible={true}
                  >
                    {/* Window header */}
                    <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-3 sm:px-5 sm:py-3.5">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1.5">
                          <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#ff5f57]" />
                          <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#febc2e]" />
                          <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#28c840]" />
                        </div>
                      </div>
                      <div className="text-[10px] sm:text-xs text-neutral-500 font-medium">
                        Terminal
                      </div>
                      <div className="w-12" />
                    </div>

                    <TerminalAnimationContent className="relative min-h-[200px] sm:min-h-[240px] md:min-h-[260px] px-4 py-4 sm:px-5 sm:py-5 md:px-6 md:py-6">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="select-none font-mono text-emerald-400 text-xs sm:text-sm flex-shrink-0">
                          ~
                        </span>
                        <span className="select-none font-mono text-neutral-500 text-xs sm:text-sm flex-shrink-0">
                          $
                        </span>
                        <div className="min-w-0 overflow-x-auto scrollbar-none">
                          <TerminalAnimationCommandBar
                            className="font-mono text-neutral-200 text-xs sm:text-sm whitespace-nowrap"
                            cursor={
                              <TerminalAnimationBlinkingCursor className="bg-neutral-200" />
                            }
                          />
                        </div>
                      </div>

                      <TerminalAnimationOutput
                        className="mt-3 sm:mt-4 space-y-0.5"
                        renderLine={(
                          line: TerminalLine,
                          _i: number,
                          visible: boolean,
                        ) => {
                          if (!visible) return null;
                          return (
                            <div className="leading-relaxed min-w-0">
                              <span
                                className={cn(
                                  "font-mono text-xs sm:text-sm break-all sm:break-normal",
                                  line.color ?? "text-neutral-400",
                                )}
                              >
                                {line.text || "\u00A0"}
                              </span>
                            </div>
                          );
                        }}
                      />

                      <TerminalAnimationTrailingPrompt className="mt-3 sm:mt-4 flex items-center gap-2">
                        <span className="select-none font-mono text-emerald-400 text-xs sm:text-sm">
                          ~
                        </span>
                        <span className="select-none font-mono text-neutral-500 text-xs sm:text-sm">
                          $
                        </span>
                        <TerminalAnimationBlinkingCursor className="bg-neutral-200" />
                      </TerminalAnimationTrailingPrompt>
                    </TerminalAnimationContent>

                    {/* Replay button */}
                    <div className="flex justify-center border-t border-white/[0.06] py-3 sm:py-4">
                      <button
                        className="group flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 sm:px-4 sm:py-2 font-mono text-[10px] sm:text-xs text-neutral-400 transition-all hover:border-white/[0.15] hover:bg-white/[0.05] hover:text-neutral-200 active:scale-[0.98]"
                        onClick={() => setAnimationKey((prev) => prev + 1)}
                        type="button"
                      >
                        <svg
                          className="size-3 sm:size-3.5 transition-transform group-hover:rotate-180 duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                          />
                        </svg>
                        Replay
                      </button>
                    </div>
                  </TerminalAnimationWindow>
                </TerminalAnimationContainer>
              </TerminalAnimationRoot>
            </div>
          </div>

          {/* Right side content */}
          <div className="flex flex-col justify-center space-y-6 sm:space-y-8 order-1 lg:order-2">
            {/* File structure */}
            <div className="group rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-4 sm:p-6 min-w-0 overflow-x-auto transition-all hover:border-border hover:bg-card/80">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <div className="flex items-center justify-center h-6 w-6 sm:h-7 sm:w-7 rounded-md bg-primary/10">
                  <svg
                    className="size-3.5 sm:size-4 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                    />
                  </svg>
                </div>
                <p className="text-xs sm:text-sm font-medium text-foreground">
                  Project Structure
                </p>
              </div>
              <div className="font-mono text-[11px] sm:text-xs text-muted-foreground whitespace-nowrap space-y-0.5 pl-1">
                <div className="text-foreground/80">your-project/</div>
                <div className="pl-4 text-muted-foreground/70">
                  ├── components/
                </div>
                <div className="pl-8 text-muted-foreground/70">
                  └── shaders/
                </div>
                <div className="pl-12 flex items-center gap-2">
                  <span className="text-primary font-medium">
                    ├── ocean-wave.tsx
                  </span>
                  <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-1.5 py-0.5 text-[9px] sm:text-[10px] font-medium text-emerald-500 ring-1 ring-inset ring-emerald-500/20">
                    new
                  </span>
                </div>
                <div className="pl-12 text-muted-foreground/60">
                  ├── sunset-glow.tsx
                </div>
                <div className="pl-12 text-muted-foreground/60">└── ...</div>
                <div className="pl-4 text-muted-foreground/60">
                  ├── package.json
                </div>
                <div className="pl-4 text-muted-foreground/60">└── ...</div>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl border border-transparent transition-all border-border/50 bg-muted/30"
                >
                  <div className="flex-shrink-0 flex items-center justify-center h-8 w-8 sm:h-9 sm:w-9 rounded-lg bg-primary/10 ring-1 ring-primary/20 group-hover:bg-primary/15 group-hover:ring-primary/30 transition-all">
                    <svg
                      className="size-4 sm:size-4.5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div className="min-w-0 pt-0.5">
                    <p className="text-sm sm:text-base font-medium text-foreground">
                      {feature.title}
                    </p>
                    <p className="mt-0.5 text-xs sm:text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
