export function calculateCartValueFee(cartValueInEuros: number): number {
  if (cartValueInEuros < 10) {
    return 10 - cartValueInEuros;
  }
  return 0;
}

export function calculateDistanceFee(distanceInMeters: number): number {
  if (distanceInMeters <= 1000) {
    return 2;
  }
  return Math.ceil(2 + (distanceInMeters - 1000) / 500);
}

export function calculateAmountOfItemsFee(amountOfItems: number): number {
  if (amountOfItems <= 4) {
    return 0;
  }
  if (amountOfItems <= 12) {
    return (amountOfItems - 4) * 0.5;
  }
  return (amountOfItems - 4) * 0.5 + 1.2;
}

export function calculateDeliveredTimeFee(
  totalBeforDeliveryTimeFee: number,
  deliveredTime: Date
): number {
  if (
    deliveredTime.getDay() === 5 && // check Friday? .getDay() return number between 0 - 6 , where 0 is Sunday then 5 is Friday.
    deliveredTime.getHours() >= 15 && // check if time in range 3 - 7 pm
    deliveredTime.getHours() <= 19 &&
    deliveredTime.getMinutes() === 0 &&
    deliveredTime.getSeconds() === 0
  ) {
    return totalBeforDeliveryTimeFee * 1.2 - totalBeforDeliveryTimeFee;
  }
  return 0;
}

export function totalFee(
  cartValue: number,
  smallOrderFee: number,
  distanceFee: number,
  amountOfItemsFee: number,
  deliveredTime: Date
): number {
  if (cartValue >= 200) {
    return 0;
  }
  const totalBeforDeliveryTimeFee =
    smallOrderFee + distanceFee + amountOfItemsFee;
  const deliveryTimeFee = calculateDeliveredTimeFee(
    totalBeforDeliveryTimeFee,
    deliveredTime
  );
  const total = parseFloat(
    (totalBeforDeliveryTimeFee + deliveryTimeFee).toFixed(2)
  );
  if (total > 15) {
    return 15;
  }
  return total;
}

export function calculate(
  cartValueInEuros: number,
  distanceInMeters: number,
  amountOfItems: number,
  deliveredTime: Date
): number {
  return 0;
}
