<template>
  <div class="text-field">
    <label v-if="label" :for="id">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      :placeholder="placeholder"
    />
    <div v-if="error" class="error-message">{{ error }}</div>
  </div>
</template>

<script setup lang="ts">


interface Props {
  modelValue: string | number | undefined
  id: string
  label?: string
  type?: string
  placeholder?: string
  error?: string
}

withDefaults(defineProps<Props>(), {
  type: 'text',
})

defineEmits(['update:modelValue'])
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
