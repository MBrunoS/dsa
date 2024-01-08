import { describe, expect, it } from "vitest";
import { randomIntInRange, shuffle } from "../../src/algorithms/shuffle.js";

describe("shuffle", () => {
  it("should return an array with the same elements but in a different order", () => {
    const array = [1, 2, 3, 4, 5];
    const shuffledArray = shuffle([...array]);

    expect(shuffledArray).not.toEqual(array);
    expect(shuffledArray.sort()).toEqual(array);
  });

  it("should handle an empty array", () => {
    const array: number[] = [];
    const shuffledArray = shuffle(array);

    expect(shuffledArray).toEqual([]);
  });

  it("should handle an array with one element", () => {
    const array = [1];
    const shuffledArray = shuffle(array);

    expect(shuffledArray).toEqual([1]);
  });
});

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
