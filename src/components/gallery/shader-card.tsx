"use client";

import { Suspense, useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Heart, Copy, Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { getShaderComponent } from "@/components/shaders";
import { ShaderContainer } from "@/components/shaders/shader-container";
import { ShaderPlaceholder } from "@/components/shaders/shader-placeholder";
import { BASE_URL } from "@/lib/constants";
import type { ShaderConfig } from "@/lib/shaders-config";
import { staggerItem } from "@/lib/animation-tokens";
import { useFavoritesStore } from "@/stores/favorites-store";
import { usePackageManagerStore } from "@/stores/package-manager-store";

interface ShaderCardProps {
  shader: ShaderConfig;
}

const perfColors: Record<string, string> = {
  low: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  medium: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  high: "bg-red-500/10 text-red-600 dark:text-red-400",
};

const perfLabels: Record<string, string> = {
  low: "Light",
  medium: "Medium",
  high: "Heavy",
};

export function ShaderCard({ shader }: ShaderCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const toggleFavorite = useFavoritesStore((s) => s.toggleFavorite);
  const isFavorited = useFavoritesStore((s) => s.favorites.includes(shader.id));
  const manager = usePackageManagerStore((s) => s.manager);
  const { state: copyState, copy } = useCopyToClipboard();

  const ShaderComponent = useMemo(
    () => getShaderComponent(shader.id),
    [shader.id],
  );
  
  const pmCommands: Record<string, string> = {
    pnpm: `pnpm dlx shadcn add ${BASE_URL}/r/${shader.id}.json`,
    npm: `npx shadcn add ${BASE_URL}/r/${shader.id}.json`,
    yarn: `yarn dlx shadcn add ${BASE_URL}/r/${shader.id}.json`,
    bun: `bunx --bun shadcn add ${BASE_URL}/r/${shader.id}.json`,
  };

  return (
    <motion.div variants={staggerItem}>
      <motion.div
        className="group relative overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-border/80"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{
          boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
        }}
        transition={{ duration: 0.2 }}
      >
        {/* Preview Area */}
        <div className="relative aspect-16/10 overflow-hidden">
          {ShaderComponent ? (
            <ShaderContainer
              className="h-full w-full"
              fallback={<ShaderPlaceholder className="h-full w-full" />}
            >
              <Suspense
                fallback={
                  <div className="flex h-full items-center justify-center bg-muted/20">
                    <div className="size-4 animate-spin rounded-full border-2 border-muted-foreground/20 border-t-muted-foreground" />
                  </div>
                }
              >
                <ShaderComponent className="h-full w-full">
                  <div className="flex h-full items-center justify-center p-6">
                    {/* <span className="text-lg font-semibold text-white drop-shadow-lg">
                      {shader.name}
                      hulap
                    </span> */}
                  </div>
                </ShaderComponent>
              </Suspense>
            </ShaderContainer>
          ) : (
            <div className="flex h-full items-center justify-center bg-muted/20">
              <span className="text-xs text-muted-foreground">Preview</span>
            </div>
          )}

          {/* Hover Overlay */}
          <motion.div
            initial={false}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.15 }}
            className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"
          />

          {/* Favorite Button */}
          <motion.button
            initial={false}
            animate={{
              opacity: isHovered || isFavorited ? 1 : 0,
              scale: isHovered || isFavorited ? 1 : 0.8,
            }}
            transition={{ duration: 0.15 }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleFavorite(shader.id);
            }}
            className="absolute right-2 top-2 z-10 rounded-full bg-black/30 p-1.5 backdrop-blur-sm transition-colors hover:bg-black/50"
            aria-label={
              isFavorited ? "Remove from favorites" : "Add to favorites"
            }
          >
            <Heart
              className={cn(
                "size-4 transition-colors",
                isFavorited ? "fill-red-500 text-red-500" : "text-white/80",
              )}
            />
          </motion.button>

          {/* Copy Install Button */}
          <motion.button
            initial={false}
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 8,
            }}
            transition={{ duration: 0.15 }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              copy(pmCommands[manager]);
            }}
            className="absolute bottom-2 right-2 z-10 flex items-center gap-1.5 rounded-lg bg-black/40 px-2.5 py-1.5 text-xs font-medium text-white backdrop-blur-sm transition-colors hover:bg-black/60"
            aria-label="Copy install command"
          >
            {copyState === "done" ? (
              <Check className="size-3" />
            ) : (
              <Copy className="size-3" />
            )}
            {copyState === "done" ? "Copied!" : "Copy"}
          </motion.button>
        </div>

        {/* Card Info */}
        <Link href={`/docs/${shader.id}`}>
          <div className="space-y-2.5 p-4">
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-semibold leading-tight">
                  {shader.name}
                </h3>
                <p className="mt-1 line-clamp-2 text-xs text-muted-foreground leading-relaxed">
                  {shader.description}
                </p>
              </div>
              <ArrowRight className="size-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            </div>

            <div className="flex items-center justify-between">
              {/* Color Palette */}
              <div className="flex items-center gap-1">
                {shader.colors.map((color) => (
                  <div
                    key={color}
                    className="size-3 rounded-full border border-border/50"
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>

              {/* Performance Badge */}
              <span
                className={cn(
                  "rounded-full px-2 py-0.5 text-[10px] font-medium",
                  perfColors[shader.performanceRating],
                )}
              >
                {perfLabels[shader.performanceRating]}
              </span>
            </div>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
}
