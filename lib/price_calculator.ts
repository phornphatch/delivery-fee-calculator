export function calculateCartValueFee(cartValueInEuros: number): number {
  if (cartValueInEuros < 10) {
    return parseFloat((10 - cartValueInEuros).toFixed(2));
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
    return parseFloat(((amountOfItems - 4) * 0.5).toFixed(2));
  }
  return parseFloat(((amountOfItems - 4) * 0.5 + 1.2).toFixed(2));
}

export function calculateDeliveredTimeFee(
  totalBeforeDeliveryTimeFee: number,
  deliveredTime: Date
): number {
  console.log(deliveredTime.getDay());
  console.log(deliveredTime.getHours());
  console.log(deliveredTime.getMinutes());
  if (
    (deliveredTime.getDay() === 5 && // check Friday? .getDay() return number between 0 - 6 , where 0 is Sunday then 5 is Friday.
    deliveredTime.getHours() >= 15 && // check if time in range 3 - 7 pm
    deliveredTime.getHours() < 19)
    || 
  
    (deliveredTime.getHours() === 19 &&
    deliveredTime.getMinutes() === 0 &&
    deliveredTime.getSeconds() === 0)
  ) {
    return parseFloat((totalBeforeDeliveryTimeFee * 1.2 - totalBeforeDeliveryTimeFee).toFixed(2));
  }

  return 0;
}

type FeeWithDiscount = {
  fee: number;
  discount: number;
};

export function summarizeFee(
  cartValue: number,
  smallOrderFee: number,
  distanceFee: number,
  amountOfItemsFee: number,
  deliveredTime: Date
): FeeWithDiscount {
  const totalBeforeDeliveryTimeFee =
    smallOrderFee + distanceFee + amountOfItemsFee;
  const deliveryTimeFee = calculateDeliveredTimeFee(
    totalBeforeDeliveryTimeFee,
    deliveredTime
  );
  console.log(deliveryTimeFee);
  const total = parseFloat(
    (totalBeforeDeliveryTimeFee + deliveryTimeFee).toFixed(2)
  );
  if (cartValue >= 200) {
    return { fee: 0, discount: total };
  }
  if (total > 15) {
    return { fee: 15, discount: parseFloat((total - 15).toFixed(2)) };
  }
  return { fee: total, discount: 0 };
}
