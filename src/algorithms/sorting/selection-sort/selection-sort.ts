import { swap } from "../../helpers/swap.js";

export function selectionSort<T>(
  array: T[],
  compare: (a: T, b: T) => number
): T[] {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i; // Index of the smallest item in the unsorted items

    // Iterate over the unsorted items
    for (let j = i + 1; j < array.length; j++) {
      // If the current item is smaller than the smallest item, update the
      // smallest item
      if (compare(array[minIndex], array[j]) > 0) {
        minIndex = j;
      }
    }

    // Place the smallest item in the end of the sorted items
    if (minIndex != i) {
      swap(array, minIndex, i);
    }
  }

  return array;
}
