import { describe, expect, it } from "vitest";
import { binarySearch } from "../binary/binary-search.js";

describe("Binary Search", () => {
  it("should return the index of the element if found", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(binarySearch(array, 3, (a, b) => a - b)).toBe(2);
  });

  it("should return -1 if the element is not found", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(binarySearch(array, 11, (a, b) => a - b)).toBe(-1);
  });

  it("should return the index of the element if found (using objects)", () => {
    const array = [
      { key: 1, value: "a" },
      { key: 2, value: "b" },
      { key: 3, value: "c" },
    ];
    expect(
      binarySearch(array, { key: 3, value: "c" }, (a, b) =>
        a.value.localeCompare(b.value)
      )
    ).toBe(2);
  });

  it("should return -1 if the element is not found (using objects)", () => {
    const array = [
      { key: 1, value: "a" },
      { key: 2, value: "b" },
      { key: 3, value: "c" },
    ];
    expect(
      binarySearch(array, { key: 4, value: "d" }, (a, b) =>
        a.value.localeCompare(b.value)
      )
    ).toBe(-1);
  });
});
