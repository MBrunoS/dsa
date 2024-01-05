import { describe, expect, it } from "vitest";
import { insertionSort } from "../../src/algorithms/insertion-sort.js";

describe("insertionSort", () => {
  it("should sort an array of numbers in ascending order", () => {
    const array = [5, -2, 4, -6, 1, 3];
    const compareFn = (a: number, b: number) => a - b;

    insertionSort(array, compareFn);

    expect(array).toEqual([-6, -2, 1, 3, 4, 5]);
  });

  it("should sort an array of numbers in descending order", () => {
    const array = [5, 2, 4, 6, 1, 3];
    const compareFn = (a: number, b: number) => b - a;

    insertionSort(array, compareFn);

    expect(array).toEqual([6, 5, 4, 3, 2, 1]);
  });

  it("should sort an array of strings in alphabetical order", () => {
    const array = ["banana", "apple", "cherry", "date"];
    const compareFn = (a: string, b: string) => a.localeCompare(b);

    insertionSort(array, compareFn);

    expect(array).toEqual(["apple", "banana", "cherry", "date"]);
  });

  it("should sort an array of strings in reverse alphabetical order", () => {
    const array = ["banana", "apple", "cherry", "date"];
    const compareFn = (a: string, b: string) => b.localeCompare(a);

    insertionSort(array, compareFn);

    expect(array).toEqual(["date", "cherry", "banana", "apple"]);
  });

  it("should sort an array of objects", () => {
    const array = [
      { name: "banana", count: 3 },
      { name: "apple", count: 4 },
      { name: "cherry", count: 1 },
      { name: "date", count: 2 },
    ];
    const compareFn = (a: { count: number }, b: { count: number }) =>
      a.count - b.count;

    insertionSort(array, compareFn);

    expect(array).toEqual([
      { name: "cherry", count: 1 },
      { name: "date", count: 2 },
      { name: "banana", count: 3 },
      { name: "apple", count: 4 },
    ]);
  });

  it("should handle an empty array", () => {
    const array: number[] = [];
    const compareFn = (a: number, b: number) => a - b;

    insertionSort(array, compareFn);

    expect(array).toEqual([]);
  });

  it("should handle an array with one element", () => {
    const array = [5];
    const compareFn = (a: number, b: number) => a - b;

    insertionSort(array, compareFn);

    expect(array).toEqual([5]);
  });
});
