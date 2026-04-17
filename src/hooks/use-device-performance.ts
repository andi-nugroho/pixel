import { useEffect, useState } from "react";

interface DevicePerformanceProfile {
  isLowEndDevice: boolean;
  isSmallScreen: boolean;
  canRenderShaders: boolean;
  maxSimultaneousShaders: number;
  renderQuality: "high" | "medium" | "low";
  dpr: number;
  supportsWebGL2: boolean;
}

/**
 * Detects device performance characteristics to enable adaptive rendering.
 * Optimizes shader rendering quality and complexity based on device capabilities.
 */
export function useDevicePerformance(): DevicePerformanceProfile {
  const [profile, setProfile] = useState<DevicePerformanceProfile>({
    isLowEndDevice: false,
    isSmallScreen: false,
    canRenderShaders: true,
    maxSimultaneousShaders: 6,
    renderQuality: "high",
    dpr: 1,
    supportsWebGL2: false,
  });

  useEffect(() => {
    // Detect screen size
    const isSmallScreen = window.innerWidth < 640; // < sm breakpoint
    const isMediumScreen = window.innerWidth < 1024; // < lg breakpoint

    // Detect device memory and CPU cores (Chrome/Edge only)
    const deviceMemory = (navigator as any).deviceMemory || 8;
    const cores = (navigator as any).hardwareConcurrency || 4;
    const isLowEndDevice = deviceMemory <= 4 || cores <= 2;

    // Detect WebGL support
    const canvas = document.createElement("canvas");
    const supportsWebGL2 = !!canvas.getContext("webgl2");
    const supportsWebGL = !!canvas.getContext("webgl");

    // Detect effective DPR (clamped to avoid excessive rendering)
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Determine render quality based on device characteristics
    let renderQuality: "high" | "medium" | "low" = "high";
    let maxSimultaneousShaders = 6;

    if (isLowEndDevice && isSmallScreen) {
      renderQuality = "low";
      maxSimultaneousShaders = 2;
    } else if (isLowEndDevice || (isSmallScreen && dpr > 1)) {
      renderQuality = "medium";
      maxSimultaneousShaders = 3;
    } else if (isMediumScreen) {
      renderQuality = "medium";
      maxSimultaneousShaders = 4;
    }

    // Ensure WebGL is supported
    const canRenderShaders = supportsWebGL || supportsWebGL2;

    setProfile({
      isLowEndDevice,
      isSmallScreen,
      canRenderShaders,
      maxSimultaneousShaders,
      renderQuality,
      dpr,
      supportsWebGL2,
    });
  }, []);

  return profile;
}
