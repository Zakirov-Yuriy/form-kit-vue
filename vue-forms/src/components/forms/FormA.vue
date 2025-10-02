<template>
  <form @submit.prevent="submit">
    <TextField
      id="name"
      label="Имя"
      v-model="formData.name"
      :error="errors.name"
      @blur="validateField('name')"
      @input="validateField('name')"
      placeholder="Иван"
    />
    <TextField
      id="email"
      label="Email"
      type="email"
      v-model="formData.email"
      :error="errors.email"
      @blur="validateField('email')"
      @input="validateField('email')"
      placeholder="example@mail.com"
    />
    <TextField
      id="inn"
      label="ИНН"
      v-model="formData.inn"
      :error="errors.inn"
      @blur="validateField('inn')"
      @input="validateField('inn')"
      placeholder="500100732259"
    />
    <MaskedPhoneField
      id="phone"
      label="Телефон"
      v-model="formData.phone"
      :error="errors.phone"
      @blur="validateField('phone')"
      @input="validateField('phone')"
      placeholder="+7 (XXX) XXX-XX-XX"
    />
    <div v-if="apiError" class="api-error">{{ apiError }}</div>
    <SubmitButton :disabled="!isFormValid" :loading="loading" />
    <router-link to="/" class="home-button">Главный экран</router-link>
  </form>
</template>

<script setup lang="ts">
import { reactive, ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { z } from 'zod'
import { schemaFormA } from '@/lib/validators/schemas'
import { submitFormA } from '@/lib/api/forms'
import { useResultStore } from '@/store/result.store'
import TextField from '@/components/ui/TextField.vue'
import MaskedPhoneField from '@/components/ui/MaskedPhoneField.vue'
import SubmitButton from '@/components/ui/SubmitButton.vue'
import type { FormA } from '@/types/forms'

type FormErrors = z.infer<typeof schemaFormA>

const router = useRouter()
const resultStore = useResultStore()

const formData = reactive<FormA>({
  name: '',
  email: '',
  inn: '',
  phone: '',
})

const errors = reactive<Partial<Record<keyof FormA, string>>>({})
const loading = ref(false)
const apiError = ref<string | null>(null)

const isFormValid = computed(() => schemaFormA.safeParse(formData).success)

function validateField(field: keyof FormA) {
  const fieldSchema = schemaFormA.pick({ [field]: true })
  const value = formData[field]

  if (field === 'email' && value === '') {
    delete errors[field]
    return
  }

  const result = fieldSchema.safeParse({ [field]: value })
  if (!result.success) {
    const fieldErrors = result.error.flatten().fieldErrors
    errors[field] = fieldErrors[field]?.[0]
  } else {
    delete errors[field]
  }
}

async function submit() {
  const result = schemaFormA.safeParse(formData)
  if (!result.success) {
    return
  }

  loading.value = true
  apiError.value = null
  const response = await submitFormA(result.data)

  if ('error' in response) {
    apiError.value = response.error
  } else {
    resultStore.setResult(response.requestId, response.classifier)
    router.push('/result')
  }
  loading.value = false
}
</script>

<style scoped>
form {
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
.api-error {
  color: red;
  margin-bottom: 15px;
}
.home-button {
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-size: 1em;
  transition: background-color 0.3s ease;
  text-align: center;
}
.home-button:hover {
  background-color: #0056b3;
}
</style>
