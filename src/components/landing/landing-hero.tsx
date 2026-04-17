import { ArrowUpRightIcon } from "lucide-react";

import { PixelParagraphInverse } from "../ui/pixel-paragraph-words-inverse";
import {
  Announcement,
  AnnouncementTag,
  AnnouncementTitle,
} from "@/components/kibo-ui/announcement";
import { CodeBlockCommand } from "../ui/code-block-command";
import HeroActions from "./hero-actions";
import { HeroShaderBackground } from "./hero-shader";

const DESCRIPTION_TEXT =
  "Production-ready shader components for React & Next.js. Copy and paste with shadcn CLI. Open source.";

const PLAIN_WORDS = ["shader", "components", "shadcn", "CLI"];

const CLI_COMMANDS = {
  pnpm: "pnpm dlx shadcn add https://pixel.andidelouise.net/r/ocean-wave.json",
  yarn: "yarn shadcn add https://pixel.andidelouise.net/r/ocean-wave.json",
  npm: "npx shadcn add https://pixel.andidelouise.net/r/ocean-wave.json",
  bun: "bunx --bun shadcn add https://pixel.andidelouise.net/r/ocean-wave.json",
} as const;

export function LandingHero() {
  return (
    <section className="relative min-h-svh overflow-hidden border-b border-border">
      <HeroShaderBackground />

      <div className="relative z-10 mx-auto flex min-h-svh max-w-6xl items-center px-2">
        <div className="w-full max-w-2xl space-y-8 py-24">
          <div>
            <Announcement className="h-7">
              <AnnouncementTag>Latest update</AnnouncementTag>
              <AnnouncementTitle>
                New Shader
                <ArrowUpRightIcon
                  className="shrink-0 text-muted-foreground"
                  size={16}
                />
              </AnnouncementTitle>
            </Announcement>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <h1 className="text-4xl tracking-tight sm:text-5xl md:text-6xl">
              <span className="font-pixel-square">Beautiful Shader</span>
              <br />
              <span className="font-pixel-square">Backgrounds</span>
            </h1>
          </div>

          {/* Description */}
          <div>
            <PixelParagraphInverse
              text={DESCRIPTION_TEXT}
              plainWords={PLAIN_WORDS}
              as="p"
              pixelFont="square"
              plainFont="sans"
              className="max-w-xl text-base leading-relaxed lg:text-muted-foreground text-foreground sm:text-lg"
              plainWordClassName="text-foreground"
            />
          </div>

          {/* CLI Command */}
          <div className="w-full max-w-xl">
            <CodeBlockCommand {...CLI_COMMANDS} />
          </div>

          {/* Actions */}
          <div>
            <HeroActions />
          </div>
        </div>
      </div>
    </section>
  );
}
