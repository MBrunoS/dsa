import { swap } from "../helpers/swap.js";

/**
 * Insertion sort is a simple sorting algorithm that builds the final sorted
 * array (or list) one item at a time. It works by comparing each item in the
 * list with the items that are next to it. If the two items are not in order,
 * they are swapped.
 *
 * The array is virtually split into a sorted and an unsorted part. Values from
 * the unsorted part are picked and placed at the correct position in the sorted
 * part. This is done by shifting all the elements that are larger than the
 * value to be sorted.
 *
 * - Time complexity (worst): O(n^2)
 * - Time complexity (average): O(n^2)
 * - Time complexity (best): O(n)
 * - Space complexity (worst): O(1)
 * - Stable: Yes
 */
export function insertionSort<T>(
  array: T[],
  compareFn: (a: T, b: T) => number
): void {
  // Iterate over all the items in the array
  // We start from 1 because the first item is already sorted
  for (let i = 1; i < array.length; i++) {
    // Iterate over the sorted items in reverse order
    for (let j = i; j > 0; j--) {
      // If the current item is smaller than the previous one, swap them
      if (compareFn(array[j], array[j - 1]) < 0) {
        swap(array, j, j - 1);
      } else {
        // If the current item is greater than the previous one, it means that
        // the array is sorted and we can stop
        break;
      }
    }
  }
}
