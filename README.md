# Small-Talk: AI-Powered Conversational Interface

Small-Talk is a modern Vue 3 application designed to provide an interactive conversational experience. It leverages the power of the `@xenova/transformers` library to run advanced natural language processing (NLP) models directly within your browser, enabling real-time, intelligent interactions with an AI assistant.

## Features

*   **Real-time AI Conversation:** Engage in dynamic text conversations with an AI model running locally in your browser.
*   **Clear Message Display:** User and AI assistant messages are clearly presented for an intuitive chat experience.
*   **Loading Indicator:** A "Assistant is thinking..." prompt provides visual feedback when the AI is processing a response.
*   **Robust Error Handling:** User-friendly error messages are displayed if the AI service encounters any issues.

## Technology Stack

*   **Vue 3:** A progressive JavaScript framework chosen for its reactivity, component-based architecture, and excellent performance, facilitating the creation of a dynamic user interface.
*   **Vite:** A next-generation frontend tooling that offers an incredibly fast development experience, including instant hot module replacement (HMR) and optimized build processes.
*   **TypeScript:** A superset of JavaScript that enhances code quality and maintainability through static type checking, reducing common runtime errors.
*   **@xenova/transformers:** A powerful NLP library that enables the execution of large AI models directly in the browser, eliminating the need for server-side inference and ensuring privacy and speed.

## Quick Start

Follow these steps to get Small-Talk up and running on your local machine.

### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

### Project Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/ledgerheathhh/small-talk.git
    cd small-talk
    ```
2.  **Install dependencies:**
    ```sh
    npm install
    ```

### Development

To run the application in development mode:

```sh
npm run dev
```

This will start a local development server, typically accessible at `http://localhost:5173/`.

### Production Build

To build the application for production deployment:

```sh
npm run build
```

This command compiles the application into static files located in the `dist/` directory, ready for deployment.

### Code Quality

Ensure code quality and consistency with the following commands:

*   **Run ESLint with auto-fix:**
    ```sh
    npm run lint
    ```
*   **Format source code with Prettier:**
    ```sh
    npm run format
    ```
*   **Verify TypeScript types:**
    ```sh
    npm run type-check
    ```

## Architecture Overview

The project is structured to promote modularity and maintainability:

*   `src/main.ts`: The primary entry point of the application, responsible for initializing Vue and mounting the root component.
*   `src/App.vue`: The root Vue component that orchestrates the overall chat interface layout and core application logic.
*   `src/components/`: Houses all reusable Vue components.
    *   `src/components/chat/`: Contains components specific to the chat functionality, including `ChatWindow.vue` (the main chat interface), `MessageDisplay.vue` (for rendering individual messages), and `TextInput.vue` (the user input field).
*   `src/services/transformersService.ts`: This crucial service file encapsulates the logic for loading the AI model (`loadModel`) and generating AI responses (`generateResponse`) using the `@xenova/transformers` library.
*   `src/types/chat.d.ts`: Defines TypeScript interfaces, such as `IMessage`, to ensure type safety and consistency for chat message data structures.

## Usage

Once the development server is running, open your browser to the specified address (e.g., `http://localhost:5173/`). You can then type your messages into the input field and press Enter to send them. The AI assistant will process your input and respond in real-time.

## Contributing

Contributions are welcome! If you'd like to contribute to Small-Talk, please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and ensure they adhere to the project's coding standards.
4.  Write clear, concise commit messages.
5.  Submit a pull request.

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.
