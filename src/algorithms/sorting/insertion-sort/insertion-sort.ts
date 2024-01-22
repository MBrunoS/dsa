import { swap } from "../../helpers/swap.js";

export function insertionSort<T>(
  array: T[],
  compare: (a: T, b: T) => number
): T[] {
  // We start from 1 because the first item is already sorted
  for (let i = 1; i < array.length; i++) {
    // Iterate over the sorted items in reverse order
    for (let j = i; j > 0; j--) {
      // If the current item is smaller than the previous one, swap them
      if (compare(array[j], array[j - 1]) < 0) {
        swap(array, j, j - 1);
      } else {
        // If the current item is greater than the previous one, it means that
        // the array is sorted and we can stop
        break;
      }
    }
  }

  return array;
}
