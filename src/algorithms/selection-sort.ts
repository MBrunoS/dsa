/**
 * Selection sort is an in-place comparison sorting algorithm that divides the
 * input list into two parts: the sublist of items already sorted, which is built
 * up from left to right at the front (left) of the list, and the sublist of
 * items remaining to be sorted that occupy the rest of the list. Initially, the
 * sorted sublist is empty and the unsorted sublist is the entire input list.
 * The algorithm proceeds by finding the smallest (or largest, depending on
 * sorting order) element in the unsorted sublist, exchanging (swapping) it with
 * the leftmost unsorted element (putting it in sorted order), and moving the
 * sublist boundaries one element to the right.
 *
 * - Time complexity (worst): O(n^2)
 * - Time complexity (average): O(n^2)
 * - Time complexity (best): O(n^2)
 * - Space complexity (worst): O(1)
 * - Stable: No
 */
export function selectionSort<T>(
  array: T[],
  compareFn: (a: T, b: T) => number
) {
  // Iterate over all the items in the array
  for (let i = 0; i < array.length; i++) {
    let minIndex = i; // Index of the smallest item

    // Iterate over the unsorted items
    for (let j = i + 1; j < array.length; j++) {
      // If the current item is smaller than the smallest item, update the
      // smallest item index
      if (compareFn(array[minIndex], array[j]) > 0) {
        minIndex = j;
      }
    }

    // If the smallest item is not the current item, swap them
    if (minIndex != i) {
      const tmp = array[minIndex];
      array[minIndex] = array[i];
      array[i] = tmp;
    }
  }

  return array;
}
