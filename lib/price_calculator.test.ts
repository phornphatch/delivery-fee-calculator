import { expect, test, describe } from "vitest";
import { calculateSurcharge, calculateDistanceFee } from "./price_calculator";

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
