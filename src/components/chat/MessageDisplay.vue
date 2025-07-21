<template>
  <div :class="['message-display', message.sender]">
    <div class="message-bubble">
      {{ message.text }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IMessage } from '../../types/chat.d.ts'

defineProps<{
  message: IMessage
}>()
</script>

<style scoped>
.message-display {
  display: flex;
  margin-bottom: 10px;
}

.message-display.user {
  justify-content: flex-end;
}

.message-display.assistant {
  justify-content: flex-start;
}

.message-bubble {
  max-width: 70%;
  padding: 10px 15px;
  border-radius: 15px;
  line-height: 1.4;
  word-wrap: break-word;
}

.message-display.user .message-bubble {
  background-color: #007bff;
  color: white;
  border-bottom-right-radius: 2px;
}

.message-display.assistant .message-bubble {
  background-color: #e0e0e0;
  color: #333;
  border-bottom-left-radius: 2px;
}
</style>
