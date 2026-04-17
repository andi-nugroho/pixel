"use client";

import { ShaderDemo } from "@/components/docs/shader-demo";
import { InstallationTabs } from "@/components/docs/installation-tabs";
import { PropsTable } from "@/components/docs/props-table";
import type { ShaderConfig } from "@/lib/shaders-config";
import { motion } from "motion/react";
import { getShaderComponentCode } from "@/lib/registry";

interface ShaderDocContentProps {
  shader: ShaderConfig;
}

export function ShaderDocContent({ shader }: ShaderDocContentProps) {
  const componentCode = getShaderComponentCode(shader.id);

  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-3xl pb-14 space-y-10"
    >
      {/* Header */}
      <div className="space-y-4">
        {/* <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary" className="text-xs capitalize">
            {shader.category}
          </Badge>
          <Badge variant="outline" className="text-xs">
            {perfLabels[shader.performanceRating]}
          </Badge>
        </div> */}

        <h1 className="text-2xl font-medium tracking-tight">{shader.name}</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {shader.description}
        </p>

        {/* Tags */}
        {/* <div className="flex flex-wrap gap-1.5">
          {shader.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-muted px-2.5 py-0.5 text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div> */}
      </div>

      {/* Preview */}
      <section className="space-y-4">
        <h2 className="text-lg font-medium">Preview</h2>
        <ShaderDemo shaderId={shader.id} shaderName={shader.name} />
      </section>

      {/* Installation */}
      <section className="space-y-4">
        <h2 className="text-lg font-medium">Installation</h2>
        <InstallationTabs
          shaderId={shader.id}
          componentCode={componentCode}
          dependencies={shader.dependencies}
        />
      </section>

      {/* Props */}
      <section className="space-y-4">
        <h2 className="text-lg font-medium">Props</h2>
        <PropsTable props={shader.props} />
      </section>

      {/* Color Palette */}
      <section className="space-y-4">
        <h2 className="text-lg font-medium">Color Palette</h2>
        <div className="flex flex-wrap items-center gap-3">
          {shader.colors.map((color) => (
            <div key={color} className="flex items-center gap-2">
              <div
                className="size-8 rounded-lg border border-border shadow-sm"
                style={{ backgroundColor: color }}
              />
              <span className="font-mono text-xs text-muted-foreground">
                {color}
              </span>
            </div>
          ))}
        </div>
      </section>
    </motion.article>
  );
}
