import { useEffect, useRef, useState, useCallback } from "react";

interface UseIntersectionObserverOptions {
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
  freezeOnceVisible?: boolean;
}

interface IntersectionState {
  isVisible: boolean;
  hasBeenVisible: boolean;
}

/**
 * Custom hook to detect if an element is in the viewport using Intersection Observer API.
 * Optimizes performance by allowing deferred loading of heavy components.
 * 
 * @param options - Configuration for the Intersection Observer
 * @returns { ref, ...IntersectionState } - Ref to attach to element and visibility state
 */
export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
): IntersectionState & { ref: React.RefObject<HTMLDivElement> } {
  const {
    threshold = 0.1,
    root = null,
    rootMargin = "50px",
    freezeOnceVisible = false,
  } = options;

  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasBeenVisible(true);

          // Optionally unobserve after visibility to save observer resources
          if (freezeOnceVisible && ref.current) {
            observer.unobserve(ref.current);
          }
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold,
        root,
        rootMargin,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, [threshold, root, rootMargin, freezeOnceVisible]);

  return {
    ref: ref as React.RefObject<HTMLDivElement>,
    isVisible,
    hasBeenVisible,
  };
}
