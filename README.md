# small-talk: AI-Powered Conversation Interface

This Vue 3 application implements a conversational interface using @xenova/transformers for natural language processing capabilities.

## Technology Stack
- **Vue 3** - Progressive JavaScript framework
- **Vite** - Next-generation frontend tooling
- **TypeScript** - Strongly typed JavaScript
- **@xenova/transformers** - NLP library for small talk functionality

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Project Setup

```sh
npm install
```

### Development

```sh
npm run dev
```

### Production Build

```sh
npm run build
```

### Code Quality

```sh
npm run lint     # Run ESLint with auto-fix
npm run format   # Format src/ with Prettier
npm run type-check  # Verify TypeScript
```

## Architecture Overview

- `src/main.ts`: Application entry point
- `src/components/`: Vue components
- `src/App.vue`: Root component implementing conversation interface
- AI processing handled through @xenova/transformers library