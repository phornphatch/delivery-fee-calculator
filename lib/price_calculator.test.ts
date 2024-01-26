import { expect, test, describe } from "vitest";
import {
  calculateCartValueFee,
  calculateDistanceFee,
  calculateAmountOfItemsFee,
  totalFee,
} from "./price_calculator";

describe("calculateSurcharge", () => {
  test("If the cart value is less than 10€, a small order surcharge is added to the delivery price", () => {
    expect(calculateCartValueFee(8)).toBe(2);
  });

  test("If the cart value is equal 10€, a small order surcharge is not added to the delivery price", () => {
    expect(calculateCartValueFee(10)).toBe(0);
  });

  test("If the cart value is more than 10€, a small order surcharge is not added to the delivery price", () => {
    expect(calculateCartValueFee(12)).toBe(0);
  });
});

describe("calculateDistanceFee", () => {
  test("If the delivery distance is 999 (<= 1000m), 2€ surcharge is added", () => {
    expect(calculateDistanceFee(999)).toBe(2);
  });

  test("If the delivery distance is 1000 (<= 1000m), 2€ surcharge is added", () => {
    expect(calculateDistanceFee(1000)).toBe(2);
  });

  test("If the delivery distance is 1499 (range 1000m - 1500m), 3€ surcharge (2€ + 1€) is added", () => {
    expect(calculateDistanceFee(1499)).toBe(3);
  });

  test("If the delivery distance is 1500 (range 1000m - 1500m), 3€ surcharge (2€ + 1€) is added", () => {
    expect(calculateDistanceFee(1500)).toBe(3);
  });

  test("If the delivery distance is 1501 (range 1501m - 2000m), 4€ surcharge (2€ + 2€) is adde", () => {
    expect(calculateDistanceFee(1501)).toBe(4);
  });
});

describe("calculateAmountOfItemsFee", () => {
  test("If the number of items is 4 (less than 5), no extra surcharge", () => {
    expect(calculateAmountOfItemsFee(4)).toBe(0);
  });

  test("If the number of items is 5, 50 cents surcharge is added", () => {
    expect(calculateAmountOfItemsFee(5)).toBe(0.5);
  });

  test("If the number of items is 10, 3€ surcharge (6 x 50 cents) is added", () => {
    expect(calculateAmountOfItemsFee(10)).toBe(3);
  });

  test("If the number of items is equal 12, 4€ surcharge (8 x 50 cents) is added", () => {
    expect(calculateAmountOfItemsFee(12)).toBe(4);
  });

  test("If the number of items is 13, 5,70€ surcharge is added ((9 * 50 cents) + 1,20€)", () => {
    expect(calculateAmountOfItemsFee(13)).toBe(5.7);
  });

  test("If the number of items is 14, 6,20€ surcharge is added ((10 * 50 cents) + 1,20€)", () => {
    expect(calculateAmountOfItemsFee(14)).toBe(6.2);
  });
});

describe("totalFee", () => {
  test("cart value > 10 no surcharge fee/ distance < 1000m distance fee 2/ item < 5 no charge", () => {
    expect(totalFee(12, 0, 2, 0, new Date("Jan 26, 2024 03:24:00"))).toBe(2);
  });

  test("6 6 6", () => {
    expect(totalFee(12, 6, 6, 6, new Date("Jan 26, 2024 03:24:00"))).toBe(15);
  });

  test("cart value is equal or more than 200€, 6 6 6 ", () => {
    expect(totalFee(200, 6, 6, 6, new Date("Jan 26, 2024 03:24:00"))).toBe(0);
  });

  test("cart value is equal or more than 200€, 6 6 6, rush hour ", () => {
    expect(totalFee(2, 2, 2, 2, new Date("Jan 26, 2024 15:00:00"))).toBe(7.2);
  });

  test("cart value is equal or more than 200€, 6 6 6, rush hour ", () => {
    expect(totalFee(2, 2, 2, 2, new Date("Jan 26, 2024 16:00:00"))).toBe(7.2);
  });

  test("cart value is equal or more than 200€, 6 6 6, rush hour ", () => {
    expect(totalFee(2, 2, 2, 2, new Date("Jan 26, 2024 19:00:00"))).toBe(7.2);
  });

  test("cart value is equal or more than 200€, 6 6 6, rush hour ", () => {
    expect(totalFee(2, 2, 2, 2, new Date("Jan 26, 2024 19:00:01"))).toBe(6);
  });

  test("cart value is equal or more than 200€, 6 6 6, rush hour ", () => {
    expect(totalFee(2, 2, 2, 2, new Date("Jan 26, 2024 19:01:00"))).toBe(6);
  });
});
