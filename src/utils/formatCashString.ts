export function formatToBRCashString(value: number) {
  const valueFormatted = value
    .toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    })
    .replace('R$', '')

  return valueFormatted
}
export function formatToCashNumber(value: string) {
  const valueFormatted = Number(value)

  return valueFormatted
}
