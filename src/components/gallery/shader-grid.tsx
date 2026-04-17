"use client";

import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

import { SearchBar } from "./search-bar";
import { CategoryTabs } from "./category-tabs";
import { ShaderCard } from "./shader-card";
import {
  SHADERS_CONFIG,
  searchShaders,
  getShadersByCategory,
} from "@/lib/shaders-config";
import { useFavoritesStore } from "@/stores/favorites-store";
import type { CategoryId } from "@/lib/constants";
import { staggerContainer } from "@/lib/animation-tokens";

export function ShaderGrid() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const favorites = useFavoritesStore((s) => s.favorites);

  const handleCategoryChange = useCallback((category: CategoryId) => {
    setActiveCategory(category);
    setSearchQuery("");
  }, []);

  const filteredShaders = useMemo(() => {
    let shaders =
      activeCategory === "favorites"
        ? SHADERS_CONFIG.filter((s) => favorites.includes(s.id))
        : getShadersByCategory(activeCategory);

    if (searchQuery.trim()) {
      const searchResults = searchShaders(searchQuery);
      shaders = shaders.filter((s) => searchResults.some((r) => r.id === s.id));
    }

    return shaders;
  }, [activeCategory, searchQuery, favorites]);

  const categoryCounts = useMemo(() => {
    const counts: Record<CategoryId, number> = {
      all: SHADERS_CONFIG.length,
      gradients: getShadersByCategory("gradients").length,
      geometric: getShadersByCategory("geometric").length,
      decorative: getShadersByCategory("decorative").length,
      effects: getShadersByCategory("effects").length,
      favorites: favorites.length,
    };
    return counts;
  }, [favorites]);

  return (
    <div className="space-y-6">
      {/* Search & Filters */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <CategoryTabs
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
          counts={categoryCounts}
        />
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          className="sm:max-w-xs"
        />
      </div>

      {/* Results Count */}
      {/* <AnimatePresence mode="wait">
        <motion.div
          key={`${activeCategory}-${searchQuery}-${filteredShaders.length}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="text-sm text-muted-foreground"
        >
          {filteredShaders.length} shader
          {filteredShaders.length !== 1 ? "s" : ""}
          {searchQuery && ` matching "${searchQuery}"`}
        </motion.div>
      </AnimatePresence> */}

      {/* Grid */}
      <AnimatePresence mode="wait">
        {filteredShaders.length > 0 ? (
          <motion.div
            key={`grid-${activeCategory}-${searchQuery}`}
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredShaders.map((shader) => (
              <ShaderCard key={shader.id} shader={shader} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="empty"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border py-20"
          >
            <h3 className="text-sm font-semibold">No shaders found</h3>
            <p className="mt-1 text-xs text-muted-foreground">
              {activeCategory === "favorites"
                ? "Start adding favorites by clicking the heart icon on any shader."
                : "Try adjusting your search or filter."}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
