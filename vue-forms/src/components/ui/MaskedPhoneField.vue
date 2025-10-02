<template>
  <div class="text-field">
    <label v-if="label" :for="id">{{ label }}</label>
    <input
      :id="id"
      type="tel"
      :value="modelValue"
      @input="handleInput"
      placeholder="+7 (___) ___-__-__"
    />
    <div v-if="error" class="error-message">{{ error }}</div>
  </div>
</template>

<script setup lang="ts">


interface Props {
  modelValue: string
  id: string
  label?: string
  error?: string
}

defineProps<Props>()
const emit = defineEmits(['update:modelValue'])

const handleInput = (event: Event) => {
  const input = event.target as HTMLInputElement
  let digits = input.value.replace(/\D/g, '')

  if (digits.startsWith('8')) {
    digits = '7' + digits.substring(1)
  }
  if (!digits.startsWith('7')) {
    digits = '7' + digits
  }

  let formatted = '+7'
  if (digits.length > 1) {
    formatted += ` (${digits.substring(1, 4)}`
  }
  if (digits.length >= 5) {
    formatted += `) ${digits.substring(4, 7)}`
  }
  if (digits.length >= 8) {
    formatted += `-${digits.substring(7, 9)}`
  }
  if (digits.length >= 10) {
    formatted += `-${digits.substring(9, 11)}`
  }

  input.value = formatted
  emit('update:modelValue', digits.substring(0, 11))
}
</script>

<style scoped>
.text-field {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}
label {
  margin-bottom: 5px;
  font-weight: bold;
}
input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.error-message {
  color: red;
  font-size: 0.875em;
  margin-top: 5px;
}
</style>
