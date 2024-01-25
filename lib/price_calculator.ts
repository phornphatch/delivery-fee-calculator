export function calculateSurcharge(
  cartValueInEuros: number,
): number {
  if (cartValueInEuros < 10) {
    return 10 - cartValueInEuros;
  }
  return 0
}

export function calculateDistanceFee(
  distanceInMeters: number,
): number {
  if (distanceInMeters <= 1000) {
    return 2;
  }
  return Math.ceil(2 + ((distanceInMeters - 1000) / 500));
}

export function calculate(
  cartValueInEuros: number,
  distanceInMeters: number,
  amountOfItem: number,
  deliveredTime: Date
): number {
  return 0;
}
