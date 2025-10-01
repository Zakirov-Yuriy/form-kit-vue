import { z } from 'zod'
import { isValidInn } from './inn'
import { isValidPhone } from './phone'
import { isValidBirthDate } from './date'

export const schemaFormA = z.object({
  name: z.string().min(1, 'Имя обязательно'),
  email: z.string().email('Неверный формат email').optional().or(z.literal('')),
  inn: z.string().refine(isValidInn, 'Неверный ИНН'),
  phone: z.string().refine(isValidPhone, 'Неверный номер телефона'),
})

export const schemaFormB = z.object({
  firstName: z.string().min(1, 'Имя обязательно'),
  lastName: z.string().min(1, 'Фамилия обязательна'),
  middleName: z.string().min(1, 'Отчество обязательно'),
  birthDate: z.string().refine(isValidBirthDate, 'Неверная дата рождения'),
  login: z.string().min(6, 'Логин должен быть не менее 6 символов').regex(/^[a-zA-Z][a-zA-Z0-9_]*$/, 'Неверный формат логина'),
  email: z.string().email('Неверный формат email'),
})
