import { expect, test, describe } from "vitest";
import { calculateSurcharge } from "./price_calculator";

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
