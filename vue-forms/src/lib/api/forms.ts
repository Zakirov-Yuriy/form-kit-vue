import type { FormA, FormB } from '@/types/forms'
import { fakeFetch } from './client'

export function submitFormA(data: FormA) {
  return fakeFetch('/form/a', data)
}

export function submitFormB(data: FormB) {
  return fakeFetch('/form/b', data)
}
