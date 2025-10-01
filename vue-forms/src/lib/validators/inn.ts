function getInnControlSum(digits: number[], coefficients: number[]): number {
  return (
    digits
      .reduce((sum, digit, i) => {
        const coefficient = coefficients[i]
        if (coefficient === undefined) {
          throw new Error('Invalid coefficients length')
        }
        return sum + digit * coefficient
      }, 0) % 11
  ) % 10
}

export function isValidInn(inn: string): boolean {
  const digits = inn.split('').map(Number)

  if (digits.some(isNaN)) {
    return false
  }

  if (digits.length === 10) {
    const controlSum = getInnControlSum(digits.slice(0, 9), [2, 4, 10, 3, 5, 9, 4, 6, 8])
    return controlSum === digits[9]
  }

  if (digits.length === 12) {
    const controlSum1 = getInnControlSum(digits.slice(0, 10), [7, 2, 4, 10, 3, 5, 9, 4, 6, 8])
    if (controlSum1 !== digits[10]) {
      return false
    }
    const controlSum2 = getInnControlSum(digits.slice(0, 11), [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8])
    return controlSum2 === digits[11]
  }

  return false
}

export function detectInnType(inn: string): 'person' | 'company' | null {
  if (!isValidInn(inn)) {
    return null
  }
  if (inn.length === 10) {
    return 'company'
  }
  if (inn.length === 12) {
    return 'person'
  }
  return null
}
