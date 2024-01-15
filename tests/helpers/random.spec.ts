import { describe, expect, it } from "vitest";
import { randomIntInRange } from "../../src/helpers/random.js";

describe("randomIntInRange", () => {
  it("should return a random integer within the specified range", () => {
    const lowerBound = 1;
    const upperBound = 10;
    let randomInt: number;

    for (let i = 0; i < 1000; i++) {
      randomInt = randomIntInRange(lowerBound, upperBound);
      expect(randomInt).toBeGreaterThanOrEqual(lowerBound);
      expect(randomInt).toBeLessThanOrEqual(upperBound);
    }
  });

  it("should return the same number when the range is a single number", () => {
    const singleNumber = 5;
    const randomInt = randomIntInRange(singleNumber, singleNumber);

    expect(randomInt).toEqual(singleNumber);
  });

  it("should handle negative numbers", () => {
    const lowerBound = -10;
    const upperBound = -1;
    let randomInt: number;

    for (let i = 0; i < 1000; i++) {
      randomInt = randomIntInRange(lowerBound, upperBound);
      expect(randomInt).toBeGreaterThanOrEqual(lowerBound);
      expect(randomInt).toBeLessThanOrEqual(upperBound);
    }
  });
});
