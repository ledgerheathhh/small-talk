import { ref } from 'vue'

const isLoading = ref(false)
const isReady = ref(false)

export async function loadModel() {
  isLoading.value = true
  // Simulate model loading
  await new Promise((resolve) => setTimeout(resolve, 1000))
  isReady.value = true
  isLoading.value = false
}

export async function generateResponse(text: string): Promise<string> {
  // Simulate AI response
  await new Promise((resolve) => setTimeout(resolve, 500))
  const responses = [
    `You said: "${text}". That's interesting!`,
    `I'm a simple AI. You asked: "${text}".`,
    `Tell me more about "${text}".`,
    `How does "${text}" relate to your day?`,
    `I'm still learning, but I heard you say: "${text}".`,
  ]
  const randomIndex = Math.floor(Math.random() * responses.length)
  return responses[randomIndex]
}

export { isLoading, isReady }
