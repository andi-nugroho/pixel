"use client";

import { CheckIcon, CopyIcon, CircleXIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import type { Variants, HTMLMotionProps } from "motion/react";
import type { ComponentProps } from "react";

import { Button } from "@/components/ui/button";
import type { CopyState } from "@/hooks/use-copy-to-clipboard";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { cn } from "@/lib/utils";

const motionIconVariants: Variants = {
  initial: { opacity: 0, scale: 0.8, filter: "blur(2px)" },
  animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
  exit: { opacity: 0, scale: 0.8 },
};

const motionIconProps: HTMLMotionProps<"span"> = {
  variants: motionIconVariants,
  initial: "initial",
  animate: "animate",
  exit: "exit",
  transition: { duration: 0.15, ease: "easeOut" },
};

function CopyStateIcon({ state }: { state: CopyState }) {
  return (
    <AnimatePresence mode="popLayout" initial={false}>
      {state === "idle" ? (
        <motion.span key="idle" {...motionIconProps}>
          <CopyIcon className="size-3 sm:size-3.5" />
        </motion.span>
      ) : state === "done" ? (
        <motion.span key="done" {...motionIconProps}>
          <CheckIcon className="size-3 sm:size-3.5" strokeWidth={3} />
        </motion.span>
      ) : (
        <motion.span key="error" {...motionIconProps}>
          <CircleXIcon className="size-3 sm:size-3.5" />
        </motion.span>
      )}
    </AnimatePresence>
  );
}

export interface CopyButtonProps extends ComponentProps<typeof Button> {
  text: string | (() => string);
  onCopySuccess?: (text: string) => void;
  onCopyError?: (error: Error) => void;
}

export function CopyButton({
  text,
  onCopySuccess,
  onCopyError,
  onClick,
  className,
  ...props
}: CopyButtonProps) {
  const { state, copy } = useCopyToClipboard({
    onCopySuccess,
    onCopyError,
  });

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={(e) => {
        copy(text);
        onClick?.(e);
      }}
      aria-label="Copy to clipboard"
      className={cn(
        "size-6 sm:size-7 rounded-md touch-manipulation",
        "hover:bg-muted/50 active:bg-muted/70",
        "transition-colors",
        className,
      )}
      {...props}
    >
      <CopyStateIcon state={state} />
    </Button>
  );
}
