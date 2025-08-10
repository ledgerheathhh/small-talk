import { ref } from 'vue'

const isLoading = ref(false)
const isReady = ref(false)

export async function loadModel() {
  isLoading.value = true
  try {
    const { pipeline } = await import('@xenova/transformers')
    // Initialize small-talk model
    await pipeline('text-generation', 'Xenova/gpt-2')
    isReady.value = true
  } catch (error) {
    console.error('Model loading failed:', error)
  } finally {
    isLoading.value = false
  }
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
