import type { ApiSuccess, ApiError } from '@/types/forms'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || ''

export async function fakeFetch(
  path: '/form/a' | '/form/b',
  payload: unknown
): Promise<ApiSuccess | ApiError> {
  console.log(`Submitting to ${path}`, payload)

  if (API_BASE_URL) {
    try {
      const response = await fetch(`${API_BASE_URL}${path}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const data = await response.json()

      if (response.ok) {
        return data as ApiSuccess
      } else {
        return data as ApiError
      }
    } catch (error) {
      console.error('API call failed:', error)
      return { error: 'Ошибка сети или сервера' }
    }
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        requestId: new Date().getTime().toString(),
        classifier: 'some-random-string',
      })
    }, 1000 + Math.random() * 200)
  })
}
