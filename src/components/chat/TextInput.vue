<template>
  <div class="text-input">
    <input
      type="text"
      v-model="inputText"
      @keyup.enter="handleSendMessage"
      :disabled="loading"
      placeholder="Type your message..."
    />
    <button @click="handleSendMessage" :disabled="loading">Send</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const inputText = ref('')

const props = defineProps<{
  loading: boolean
}>()

const emit = defineEmits(['sendMessage'])

const handleSendMessage = () => {
  if (inputText.value.trim() && !props.loading) {
    emit('sendMessage', inputText.value.trim())
    inputText.value = ''
  }
}
</script>

<style scoped>
.text-input {
  display: flex;
  padding: 10px;
  border-top: 1px solid #eee;
  background-color: #f9f9f9;
}

.text-input input {
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-right: 10px;
  font-size: 16px;
}

.text-input button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.text-input button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}
</style>
