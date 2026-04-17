"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Logo from "../ui/logo";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { GithubIcon, NewTwitterIcon } from "@hugeicons/core-free-icons";

export function Footer() {
  return (
    <footer className="relative">
      <div
        className={cn(
          "mx-auto max-w-6xl px-2 lg:border-x",
          "dark:bg-[radial-gradient(35%_80%_at_15%_0%,--theme(--color-foreground/.1),transparent)]",
        )}
      >
        <div className="absolute inset-x-0 h-px w-full bg-border" />
        <div className="grid max-w-5xl grid-cols-6 gap-6 p-4">
          <div className="col-span-6 flex flex-col gap-4 pt-5 md:col-span-4">
            <Logo />
            <p className="max-w-sm text-balance text-muted-foreground text-sm">
              Explore beautiful background shaders.
            </p>
            <div className="flex items-center gap-4">
              <Button size={"icon-lg"} variant={"outline"}>
                <Link href={"https://x.com/andidelouise"} target="_blank">
                  <HugeiconsIcon icon={NewTwitterIcon} />
                </Link>
              </Button>
              <Button size={"icon-lg"} variant={"outline"}>
                <Link href={"https://github.com/andi-nugroho"} target="_blank">
                  <HugeiconsIcon icon={GithubIcon} />
                </Link>
              </Button>
            </div>
          </div>
          <div className="col-span-3 w-full md:col-span-1">
            <span className="text-muted-foreground text-xs">Resources</span>
            <div className="mt-2 flex flex-col gap-2">
              <Link href={"/docs"} className="text-xs">
                Documentation
              </Link>
              <Link
                href={"/"}
                className="text-xs text-muted-foreground pointer-events-none"
              >
                Templates
              </Link>
              <Link
                href={"https://github.com/andi-nugroho/pixel"}
                className="text-xs"
              >
                GitHub
              </Link>
            </div>
          </div>
          <div className="col-span-3 w-full md:col-span-1 py-10">
            <Button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
            >
              Back to Top
            </Button>{" "}
          </div>
        </div>
        <div className="absolute inset-x-0 h-px w-full bg-border" />
        <div className="flex max-w-4xl flex-col justify-between gap-2 py-4">
          <p className="text-center font-light text-muted-foreground text-sm">
            Open Source | {new Date().getFullYear()} Created by{" "}
            <Link href={"https://andidelouise.net"} target="_blank" className="text-foreground underline">
              Andi Nugroho
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
