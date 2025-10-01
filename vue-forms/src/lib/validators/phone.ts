export function normalizePhone(phone: string): string {
  let digits = phone.replace(/\D/g, '')
  if (digits.startsWith('8')) {
    digits = '7' + digits.substring(1)
  }
  return digits
}

export function isValidPhone(phone: string): boolean {
  const digits = normalizePhone(phone)
  return digits.length === 11 && digits.startsWith('7')
}
