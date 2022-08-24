// Função responsável por converter um número do tipo Float p/ valor monetário //
// Exemplo: 9.9 => 9,90 //
export function formatToBRCashString(value: number) {
  const valueFormatted = value
    .toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    })
    .replace('R$', '')

  return valueFormatted
}
