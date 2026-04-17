<div align="center">
  <img src="public/logo.svg" alt="Pixel Logo" width="80" height="80" />

# Pixel

Open-source, production-focused shader backgrounds for React and Next.js.
<br />
A collection of shader components that uses Paper Design shaders with shadcn-compatible registry.

[![Live Demo](https://img.shields.io/badge/Live_Demo-Visit_Site-black?style=for-the-badge)](https://pixel.andidelouise.net)
[![GitHub Stars](https://img.shields.io/github/stars/andi-nugroho/pixel?style=for-the-badge&logo=github&color=yellow)](https://github.com/andi-nugroho/pixel)

</div>

![Landing Page](/public/og-image.png)

- Docs: https://pixel.andidelouise.net/docs
- Installation guide: https://pixel.andidelouise.net/docs/installation

## Why Pixel

- Production-ready shader components with practical props and defaults
- Built on top of `@paper-design/shaders-react` for high-quality GLSL shader effects
- Copy-paste and CLI install flow via shadcn registry JSON
- Category-based gallery with search and favorites support
- Documentation pages for each shader with preview, install tabs, and prop tables
- Next.js App Router architecture with static and dynamic docs routes

## Paper Design Integration

Pixel uses Paper Design's shader runtime (`@paper-design/shaders-react`) as the rendering engine behind each visual background.

What this gives you:

- Performant WebGL-based shader rendering with a React-first API
- Rich visual effects without writing raw shader boilerplate in each app
- Component-driven props that map cleanly to docs and registry metadata

In this project, each shader component is wrapped and standardized so users can install it quickly via the registry and customize it through documented props.

## Current Shader Library

Pixel currently ships 10 shader components:

- ocean-wave
- sunset-glow
- aurora-dream
- mesh-gradient
- cosmic-dust
- neon-pulse
- particle-field
- geometric-pattern
- grid-morph
- glitch-wave

Registry JSON files are generated in public/r for CLI consumption.

## Tech Stack

- Framework: Next.js 16 (App Router) + React 19 + TypeScript
- Styling: Tailwind CSS v4 + shadcn/ui component patterns
- Animation/UI: motion, Radix UI primitives, vaul (drawer), sonner (toast)
- Shader runtime: @paper-design/shaders-react
- State: zustand, jotai
- Tooling: pnpm, ESLint (Next core web vitals + TypeScript), PostCSS

Core ecosystem packages used by the project include:

- `next`, `react`, `react-dom`, `typescript`
- `@paper-design/shaders-react`
- `tailwindcss`, `class-variance-authority`, `clsx`, `tailwind-merge`
- `zustand`, `jotai`
- `framer-motion` / `motion`
- `@radix-ui/*`, `vaul`, `sonner`

## Architecture Overview

Top-level runtime flow:

1. Home page renders hero + shader gallery.
2. Docs pages render installation and per-shader documentation.
3. Registry endpoint returns JSON used by shadcn CLI.
4. Registry generator script emits static JSON files under public/r.

Important directories:

- src/app: App Router pages, layouts, metadata, sitemap, robots, API routes
- src/components/shaders: Shader components and shader resolver/index
- src/components/gallery: Gallery UI and shader cards
- src/components/docs: Docs UI blocks, demos, install snippets, props tables
- src/lib/shaders-config.ts: Canonical shader metadata (id, category, props, defaults)
- src/lib/registry.ts: Registry JSON and code generation logic
- src/scripts/generate-registry.ts: Static registry generation script
- public/r: Generated registry files, one per shader

## Local Development

### Prerequisites

- Node.js 20+
- pnpm 9+

### Install

```bash
pnpm install
```

### Start development server

```bash
pnpm dev
```

Open http://localhost:3000.

## Scripts

- pnpm dev: Start development server
- pnpm lint: Run ESLint checks
- pnpm generate-registry: Generate public/r JSON files from shader config
- pnpm build: Generate registry, then run production Next.js build
- pnpm start: Start production server

## How Registry Works

Pixel supports shadcn add from a hosted JSON endpoint.

This means users can install a shader component directly from your registry URL, just like any other shadcn-compatible source.

Example:

```bash
npx shadcn add https://pixel.andidelouise.net/r/ocean-wave.json
```

You can also target your local dev server while testing registry output:

```bash
npx shadcn add http://localhost:3000/r/ocean-wave.json
```

Two delivery paths exist:

- Dynamic endpoint: src/app/api/r/[name]/route.ts
- Static files: public/r/\*.json generated at build time

Caching and CORS headers are configured for registry responses.

Registry JSON is generated from a single source of truth in `src/lib/shaders-config.ts`, ensuring docs, gallery metadata, and install artifacts stay aligned.

## shadcn Registry Compatibility

Pixel is designed to work with the shadcn CLI registry model:

- Each shader has a dedicated JSON artifact under `/r/<shader>.json`
- Installation snippets in docs map to the same generated artifact
- Registry generation is automated and repeatable via script
- Dynamic API and static file outputs provide flexibility for hosting strategies

## Add a New Shader

1. Create shader component in src/components/shaders.
2. Register the shader in src/components/shaders/index.tsx.
3. Add metadata and props to src/lib/shaders-config.ts.
4. Ensure registry generation works:

```bash
pnpm generate-registry
```

5. Verify docs route and preview:

```bash
pnpm dev
```

## Deployment Notes

- Built for Next.js deployment targets (Vercel or self-hosted Node runtime)
- Production build includes prebuild registry generation
- App defines robots, sitemap, metadata, and PWA manifest routes

## Performance and Accessibility

- Supports reduced motion preference in global styles
- Uses dynamic shader component loading for heavy visual modules
- Recent hero update prioritizes earlier LCP text paint before shader mount

## Contributing

Contributions are welcome.

Suggested contribution flow:

1. Fork repository
2. Create feature branch
3. Run lint and build locally
4. Open pull request with clear summary and screenshots for UI changes

Before opening PRs, please validate:

```bash
pnpm lint
pnpm build
```

## Open Source Governance Status

This repository includes standard open-source governance files:

- LICENSE
- CONTRIBUTING.md
- CODE_OF_CONDUCT.md
- SECURITY.md

## License

MIT

## Credits

Created by Andi Nugroho.
