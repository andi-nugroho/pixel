"use client";

import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "next-themes";
import { Button } from "./button";

import { HugeiconsIcon } from "@hugeicons/react";
import { Moon02Icon, Sun01Icon } from "@hugeicons/core-free-icons";

interface ThemeToggleProps {
  onMouseEnter?: () => void;
}

const ThemeToggle = ({ onMouseEnter }: ThemeToggleProps) => {
  const { setTheme, resolvedTheme } = useTheme();

  if (!resolvedTheme) return null;

  return (
    <Button
      variant="outline"
      size="icon-lg"
      onMouseEnter={onMouseEnter}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        {resolvedTheme === "dark" ? (
          <motion.div
            key="dark"
            initial={{ rotate: -90, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            exit={{ rotate: 90, scale: 0 }}
            transition={{ duration: 0.2 }}
          >
            <HugeiconsIcon
              icon={Moon02Icon}
              className="w-4 h-4 text-foreground/70"
            />
          </motion.div>
        ) : (
          <motion.div
            key="light"
            initial={{ rotate: -90, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            exit={{ rotate: 90, scale: 0 }}
            transition={{ duration: 0.2 }}
          >
            <HugeiconsIcon
              icon={Sun01Icon}
              className="w-4 h-4 text-foreground/70"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Button>
  );
};

export default ThemeToggle;
