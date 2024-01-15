import { describe, expect, it } from "vitest";
import { shuffle } from "../../src/algorithms/shuffle.js";

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
