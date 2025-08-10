# small-talk: AI-Powered Conversation Interface

This Vue 3 application implements an interactive conversational interface that leverages the `@xenova/transformers` library to bring powerful natural language processing (NLP) capabilities directly to the browser. Users can engage in real-time conversations with an AI assistant, experiencing smooth and intelligent interactions.

## Technology Stack
- **Vue 3** - A progressive JavaScript framework for building user interfaces.
- **Vite** - A next-generation frontend tooling that provides an extremely fast development experience.
- **TypeScript** - A superset of JavaScript that provides type safety and improved maintainability.
- **@xenova/transformers** - A powerful NLP library that enables running AI models directly in the browser for conversation generation.

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

- `src/main.ts`: The application's entry point.
- `src/App.vue`: The root component responsible for the overall chat interface layout and logic.
- `src/components/`: Contains reusable Vue components.
  - `src/components/chat/`: Chat-related components, such as `ChatWindow.vue` (the main chat window), `MessageDisplay.vue` (for displaying individual messages), and `TextInput.vue` (the user input field).
- `src/services/transformersService.ts`: The core service file responsible for loading the AI model (`loadModel`) and generating AI responses (`generateResponse`).
- `src/types/chat.d.ts`: Defines the TypeScript interface (`IMessage`) for chat messages.

## Features

- **Real-time AI Conversation:** Users can interact with a locally running AI model through real-time text conversations.
- **Message Display:** Clearly displays both user and AI assistant messages.
- **Loading Indicator:** Shows an "Assistant is thinking..." prompt when the AI is processing.
- **Error Handling:** Provides a user-friendly error message if the AI service encounters an issue.
