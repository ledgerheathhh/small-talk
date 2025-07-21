<template>
  <div class="chat-window">
    <div class="messages-container">
      <MessageDisplay v-for="(message, index) in messages" :key="index" :message="message" />
      <div v-if="isLoading" class="loading-indicator">Assistant is thinking...</div>
    </div>
    <TextInput @sendMessage="handleSendMessage" :loading="isLoading" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import MessageDisplay from './MessageDisplay.vue'
import TextInput from './TextInput.vue'
import { loadModel, generateResponse, isLoading, isReady } from '../../services/transformersService'
import type { IMessage } from '../../types/chat.d.ts'

const messages = ref<IMessage[]>([])

onMounted(async () => {
  await loadModel()
  if (isReady.value) {
    messages.value.push({
      text: 'Hello! I am your AI assistant. How can I help you today?',
      sender: 'assistant',
    })
  } else {
    messages.value.push({
      text: 'Error: Failed to load AI model. Please check the console for details.',
      sender: 'assistant',
    })
  }
})

const handleSendMessage = async (text: string) => {
  messages.value.push({ text, sender: 'user' })

  // Simulate typing indicator or direct response
  const assistantResponse = await generateResponse(text)
  messages.value.push({ text: assistantResponse, sender: 'assistant' })
}
</script>

<style scoped>
.chat-window {
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 600px;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.messages-container {
  flex-grow: 1;
  padding: 20px;
  overflow-y: auto;
  background-color: #f0f2f5;
}

.loading-indicator {
  text-align: center;
  padding: 10px;
  color: #666;
  font-style: italic;
}
</style>
