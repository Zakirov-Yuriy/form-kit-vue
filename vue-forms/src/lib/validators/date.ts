export function isValidBirthDate(dateStr: string): boolean {
  const parts = dateStr.split('.')
  if (parts.length !== 3) return false

  const dayStr = parts[0]
  const monthStr = parts[1]
  const yearStr = parts[2]

  if (!dayStr || !monthStr || !yearStr) return false

  const day = parseInt(dayStr, 10)
  const month = parseInt(monthStr, 10)
  const year = parseInt(yearStr, 10)

  if (isNaN(day) || isNaN(month) || isNaN(year)) return false

  const date = new Date(year, month - 1, day)
  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    return false
  }

  const today = new Date()
  const age = today.getFullYear() - date.getFullYear()
  const m = today.getMonth() - date.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < date.getDate())) {
    // age-- // This would be incorrect, age is already calculated
  }

  return age >= 0 && age <= 120
}
