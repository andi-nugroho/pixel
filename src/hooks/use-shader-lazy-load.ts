import { useEffect, useState, useCallback } from "react";
import { useDevicePerformance } from "./use-device-performance";
import { useIntersectionObserver } from "./use-intersection-observer";

interface UseShaderLazyLoadOptions {
  threshold?: number;
  rootMargin?: string;
  shouldLoadImmediately?: boolean;
}

interface ShaderLoadState {
  shouldRender: boolean;
  isVisible: boolean;
  isLoading: boolean;
  isError: boolean;
  ref: React.RefObject<HTMLDivElement>;
  // Performance-adaptive quality level
  qualityLevel: "high" | "medium" | "low";
  // Whether to reduce animation complexity
  reduceAnimation: boolean;
  // Whether to reduce geometry/texture complexity
  reducedQuality: boolean;
}

/**
 * Hook for efficient shader component lazy loading with device-aware performance optimization.
 * 
 * - Defers rendering until in viewport
 * - Adapts quality based on device capabilities
 * - Reduces animation complexity on low-end devices
 * - Prevents off-screen WebGL context waste
 */
export function useShaderLazyLoad(
  options: UseShaderLazyLoadOptions = {}
): ShaderLoadState {
  const {
    threshold = 0.15,
    rootMargin = "100px",
    shouldLoadImmediately = false,
  } = options;

  const { ref, isVisible, hasBeenVisible } = useIntersectionObserver({
    threshold,
    rootMargin,
    freezeOnceVisible: true,
  });

  const performance = useDevicePerformance();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // Determine if we should render based on visibility and device performance
  const shouldRender = shouldLoadImmediately || hasBeenVisible;

  // Simulate loading state for better UX (can be enhanced with actual async loading)
  useEffect(() => {
    if (shouldRender && !isLoading) {
      setIsLoading(true);
      // Minimal debounce to allow React renders to batch
      const timer = requestAnimationFrame(() => {
        setIsLoading(false);
      });
      return () => cancelAnimationFrame(timer);
    }
  }, [shouldRender, isLoading]);

  return {
    shouldRender,
    isVisible,
    isLoading,
    isError,
    ref,
    qualityLevel: performance.renderQuality,
    reduceAnimation: performance.isLowEndDevice || performance.isSmallScreen,
    reducedQuality: performance.isLowEndDevice,
  };
}
