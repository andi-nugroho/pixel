import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface ShaderPlaceholderProps {
  className?: string;
  showAnimation?: boolean;
}

/**
 * Lightweight placeholder for deferred shader loading.
 * Renders a minimal gradient skeleton while awaiting shader load.
 * Improves perceived performance and reduces layout shift.
 */
export function ShaderPlaceholder({
  className,
  showAnimation = true,
}: ShaderPlaceholderProps) {
  return (
    <div className={cn("relative overflow-hidden rounded-xl bg-muted/20", className)}>
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-muted/30 to-muted/10" />

      {/* Shimmer animation (only on initial load) */}
      {showAnimation && (
        <motion.div
          className="absolute inset-0 bg-linear-to-r from-transparent via-muted/30 to-transparent"
          animate={{
            x: ["--100%", "100%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      )}

      {/* Minimal spinner for extra visual feedback */}
      <div className="flex h-full items-center justify-center">
        <motion.div
          className="h-4 w-4 rounded-full border-2 border-muted-foreground/20 border-t-muted-foreground"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </div>
  );
}
