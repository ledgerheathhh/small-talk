# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands
- `npm run dev`: Start development server
- `npm run build`: Build for production (runs type checking first)
- `npm run build-only`: Build without type checking
- `npm run type-check`: Check TypeScript with vue-tsc
- `npm run lint`: Run ESLint with auto-fix
- `npm run format`: Format src/ with Prettier

## Architecture
- Vue 3 application using Vite
- TypeScript configuration via vue-tsc
- ESLint with @vue/eslint-config-prettier and @vue/eslint-config-typescript
- Project structure follows standard Vue 3 + Vite template with:
  - src/main.ts (entry point)
  - src/components/ (Vue components)
  - src/App.vue (root component)
- Uses @xenova/transformers for AI capabilities