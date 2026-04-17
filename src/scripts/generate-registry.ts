import {
  existsSync,
  mkdirSync,
  readdirSync,
  unlinkSync,
  writeFileSync,
} from "fs";
import { join } from "path";
import { SHADERS_CONFIG } from "../lib/shaders-config";
import { generateRegistryItem } from "../lib/registry";

const OUTPUT_DIR = join(process.cwd(), "public", "r");

function main() {
  if (!existsSync(OUTPUT_DIR)) {
    mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const expectedIds = new Set(SHADERS_CONFIG.map((shader) => shader.id));
  const staleFiles = readdirSync(OUTPUT_DIR).filter((fileName) => {
    if (!fileName.endsWith(".json")) {
      return false;
    }

    const id = fileName.replace(/\.json$/, "");
    return !expectedIds.has(id);
  });

  for (const staleFile of staleFiles) {
    const stalePath = join(OUTPUT_DIR, staleFile);
    unlinkSync(stalePath);
    console.log(`🧹 Removed stale registry file: ${stalePath}`);
  }

  let generated = 0;
  let failed = 0;

  for (const shader of SHADERS_CONFIG) {
    const registryItem = generateRegistryItem(shader.id);

    if (!registryItem) {
      console.error(`❌ Failed to generate registry for: ${shader.id}`);
      failed++;
      continue;
    }

    const outputPath = join(OUTPUT_DIR, `${shader.id}.json`);
    writeFileSync(outputPath, JSON.stringify(registryItem, null, 2), "utf8");
    console.log(`✅ Generated: ${outputPath}`);
    generated++;
  }

  console.log(
    `\n📦 Registry generation complete: ${generated} generated, ${failed} failed`,
  );

  if (failed > 0) {
    process.exitCode = 1;
  }
}

try {
  main();
} catch (error) {
  console.error("❌ Registry generation failed with an unexpected error:", error);
  process.exitCode = 1;
}
