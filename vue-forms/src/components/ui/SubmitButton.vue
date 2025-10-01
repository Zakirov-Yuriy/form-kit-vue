<template>
  <button :disabled="disabled || loading">
    <span v-if="loading">Отправка...</span>
    <span v-else><slot>Отправить</slot></span>
  </button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

interface Props {
  disabled?: boolean
  loading?: boolean
}

defineProps<Props>()
</script>

<style scoped>
button {
  padding: 10px 15px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
}
button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}
</style>
