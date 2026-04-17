"use client";

import React, { useMemo } from "react";
import { useShaderLazyLoad } from "@/hooks/use-shader-lazy-load";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface ShaderContainerProps {
  children: React.ReactNode;
  className?: string;
  fallback?: React.ReactNode;
  animationDelay?: number;
}

/**
 * High-performance wrapper for shader components that implements:
 * - Lazy loading (defers rendering until in viewport)
 * - Device-aware quality adaptation
 * - Smooth fallback states
 * - Optimized animation performance
 */
export function ShaderContainer({
  children,
  className,
  fallback,
  animationDelay = 0,
}: ShaderContainerProps) {
  const {
    shouldRender,
    isVisible,
    isLoading,
    ref,
    qualityLevel,
    reduceAnimation,
    reducedQuality,
  } = useShaderLazyLoad({
    threshold: 0.15,
    rootMargin: "100px",
  });

  // Memoize quality-reduced children to avoid unnecessary re-renders
  const renderedChildren = useMemo(() => {
    if (!shouldRender) {
      return null;
    }

    return React.cloneElement(children as React.ReactElement, {
      // Pass performance hints to shader components
      "data-quality": qualityLevel,
      "data-reduce-animation": reduceAnimation,
      "data-reduced-quality": reducedQuality,
    } as any);
  }, [shouldRender, children, qualityLevel, reduceAnimation, reducedQuality]);

  return (
    <div
      ref={ref}
      className={cn("relative w-full", className)}
      data-visible={isVisible}
      data-loaded={shouldRender}
    >
      {/* Fallback placeholder while loading */}
      {!shouldRender && fallback ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {fallback}
        </motion.div>
      ) : null}

      {/* Actual shader content */}
      {shouldRender ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.3,
            delay: animationDelay,
          }}
        >
          {renderedChildren}
        </motion.div>
      ) : null}
    </div>
  );
}
