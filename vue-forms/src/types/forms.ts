export interface FormA {
  name: string
  email?: string
  inn: string
  phone: string
}

export interface FormB {
  firstName: string
  lastName: string
  middleName: string
  birthDate: string
  login: string
  email: string
}

export interface ApiSuccess {
  requestId: string
  classifier: string
}

export interface ApiError {
  error: string
}
