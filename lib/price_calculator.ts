export function calculateSurcharge(
  cartValueInEuros: number,
): number {
  if (cartValueInEuros < 10) {
    return 10 - cartValueInEuros;
  }
  return 0
}

export function calculate(
  cartValueInEuros: number,
  distanceInMeters: number,
  amountOfItem: number,
  deliveredTime: Date
): number {
  return 0;
}
