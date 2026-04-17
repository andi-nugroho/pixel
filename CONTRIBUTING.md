# Contributing to Pixel

Thanks for taking the time to contribute.

## Ground Rules

- Be respectful and constructive.
- Keep pull requests focused and small when possible.
- For behavior expectations, follow the Code of Conduct in CODE_OF_CONDUCT.md.

## Prerequisites

- Node.js 20+
- pnpm 9+

## Local Setup

```bash
pnpm install
pnpm dev
```

## Development Workflow

1. Fork the repository.
2. Create a feature branch from main.
3. Make your changes.
4. Run quality checks.
5. Open a pull request.

## Quality Checks

Run these before opening a PR:

```bash
pnpm lint
pnpm build
```

If you changed shader metadata or registry output, also run:

```bash
pnpm generate-registry
```

## Pull Request Checklist

- Clear title and description.
- Linked issue (if applicable).
- Screenshots or recordings for UI changes.
- Docs updated when behavior changes.
- No unrelated refactors bundled in the same PR.

## Commit Guidance

Use clear, intent-based commit messages. Examples:

- feat: add new shader variant
- fix: correct shader props typing
- docs: update installation instructions

## Reporting Issues

Include:

- Expected behavior
- Actual behavior
- Reproduction steps
- Environment details (OS, Node, pnpm)
- Screenshots/logs when useful
