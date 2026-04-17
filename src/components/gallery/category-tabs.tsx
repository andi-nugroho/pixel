"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { CATEGORIES, type CategoryId } from "@/lib/constants";
import { useFavoritesStore } from "@/stores/favorites-store";

interface CategoryTabsProps {
  activeCategory: CategoryId;
  onCategoryChange: (category: CategoryId) => void;
  counts: Record<CategoryId, number>;
}

export function CategoryTabs({
  activeCategory,
  onCategoryChange,
  counts,
}: CategoryTabsProps) {
  const favoritesCount = useFavoritesStore((s) => s.favorites.length);

  return (
    <div className="overflow-x-auto lg:overflow-hidden scrollbar-thin">
      <div className="flex items-center gap-1 pb-1">
        {CATEGORIES.map((category) => {
          const isActive = activeCategory === category.id;
          const count =
            category.id === "favorites"
              ? favoritesCount
              : (counts[category.id] ?? 0);

          return (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={cn(
                "relative flex cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="category-bg"
                  className="absolute inset-0 rounded-lg bg-accent"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                {category.label}
                {count > 0 && (
                  <span
                    className={cn(
                      "rounded-full px-1.5 py-0.5 text-[10px] font-semibold tabular-nums",
                      isActive
                        ? "bg-foreground/10 text-foreground"
                        : "bg-muted text-muted-foreground",
                    )}
                  >
                    {count}
                  </span>
                )}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
