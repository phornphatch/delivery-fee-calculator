import { expect, test, describe } from "vitest";
import {
  calculateSurcharge,
  calculateDistanceFee,
  calculateAmountOfItemsFee,
} from "./price_calculator";

describe("calculateSurcharge", () => {
  test("If the cart value is less than 10€, a small order surcharge is added to the delivery price", () => {
    expect(calculateSurcharge(8)).toBe(2);
  });

  test("If the cart value is equal 10€, a small order surcharge is not added to the delivery price", () => {
    expect(calculateSurcharge(10)).toBe(0);
  });

  test("If the cart value is more than 10€, a small order surcharge is not added to the delivery price", () => {
    expect(calculateSurcharge(12)).toBe(0);
  });
});

describe("calculateDistanceFee", () => {
  test("delivery fee for the first 1000 meters (=1km) is 2€", () => {
    expect(calculateDistanceFee(999)).toBe(2);
  });

  test("distance 1000, 2", () => {
    expect(calculateDistanceFee(1000)).toBe(2);
  });

  test("distance 1001 to 1499, 3", () => {
    expect(calculateDistanceFee(1499)).toBe(3);
  });

  test("1500, 3", () => {
    expect(calculateDistanceFee(1500)).toBe(3);
  });

  test("1501, 4", () => {
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
