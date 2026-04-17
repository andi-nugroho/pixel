import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { PackageManager } from "@/lib/constants";

interface PackageManagerState {
  manager: PackageManager;
  setManager: (manager: PackageManager) => void;
}

export const usePackageManagerStore = create<PackageManagerState>()(
  persist(
    (set) => ({
      manager: "pnpm",
      setManager: (manager) => set({ manager }),
    }),
    {
      name: "pixel-package-manager",
    },
  ),
);
