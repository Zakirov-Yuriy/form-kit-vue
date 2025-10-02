<template>
  <form @submit.prevent="submit">
    <TextField id="lastName" label="Фамилия" v-model="formData.lastName" :error="errors.lastName" @blur="validateField('lastName')" @input="validateField('lastName')" placeholder="Иванов" />
    <TextField id="firstName" label="Имя" v-model="formData.firstName" :error="errors.firstName" @blur="validateField('firstName')" @input="validateField('firstName')" placeholder="Иван" />
    <TextField id="middleName" label="Отчество" v-model="formData.middleName" :error="errors.middleName" @blur="validateField('middleName')" @input="validateField('middleName')" placeholder="Иванович" />
    <TextField id="birthDate" label="Дата рождения" v-model="formData.birthDate" :error="errors.birthDate" @blur="validateField('birthDate')" @input="validateField('birthDate')" placeholder="ДД.ММ.ГГГГ" />
    <TextField id="login" label="Логин" v-model="formData.login" :error="errors.login" @blur="validateField('login')" @input="validateField('login')" placeholder="login_name" />
    <TextField id="email" label="Email" type="email" v-model="formData.email" :error="errors.email" @blur="validateField('email')" @input="validateField('email')" placeholder="example@mail.com" />
    <div v-if="apiError" class="api-error">{{ apiError }}</div>
    <SubmitButton :disabled="!isFormValid" :loading="loading" />
    <router-link to="/" class="home-button">Главный экран</router-link>
  </form>
</template>

<script setup lang="ts">
import { reactive, ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { schemaFormB } from '@/lib/validators/schemas'
import { submitFormB } from '@/lib/api/forms'
import { useResultStore } from '@/store/result.store'
import TextField from '@/components/ui/TextField.vue'
import SubmitButton from '@/components/ui/SubmitButton.vue'
import type { FormB } from '@/types/forms'

const router = useRouter()
const resultStore = useResultStore()

const formData = reactive<FormB>({
  firstName: '',
  lastName: '',
  middleName: '',
  birthDate: '',
  login: '',
  email: '',
})

const errors = reactive<Partial<Record<keyof FormB, string>>>({})
const loading = ref(false)
const apiError = ref<string | null>(null)

const isFormValid = computed(() => schemaFormB.safeParse(formData).success)

function validateField(field: keyof FormB) {
  const fieldSchema = schemaFormB.pick({ [field]: true })
  const value = formData[field]

  const result = fieldSchema.safeParse({ [field]: value })
  if (!result.success) {
    const fieldErrors = result.error.flatten().fieldErrors
    errors[field] = fieldErrors[field]?.[0]
  } else {
    delete errors[field]
  }
}

async function submit() {
  const result = schemaFormB.safeParse(formData)
  if (!result.success) {
    return
  }

  loading.value = true
  apiError.value = null
  const response = await submitFormB(result.data)

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
