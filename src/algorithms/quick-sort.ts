import { swap } from "../helpers/swap.js";
import { shuffle } from "./shuffle.js";

/**
 * Quick sort is a divide-and-conquer algorithm that works by selecting a pivot
 * element from the array and partitioning the other elements into two
 * sub-arrays, according to whether they are less than or greater than the pivot.
 * The sub-arrays are then sorted recursively.
 *
 * - Divide: Partition the array into two subarrays such that each element in the
 * left subarray is less than or equal to any element in the right subarray.
 * - Conquer: Sort the two subarrays recursively using quick sort.
 * - Combine: Because the subarrays are already sorted, no work is needed to
 * combine them.
 *
 * Unless the pivot is chosen randomly, there is a chance that the algorithm will
 * perform poorly on already sorted arrays, or arrays that are sorted in reverse.
 * This can be mitigated by choosing a random pivot/shuffling the array.
 *
 * - Time Complexity (worst case): O(n^2) (in practice, it's O(n log n) because
 * of the random pivot)
 * - Time Complexity (average case): O(n log n)
 * - Time Complexity (best case): O(n log n)
 * - Space Complexity: O(log n)
 *
 * Stable: No
 * In-Place: Yes
 */
export function quickSort<T>(
  array: T[],
  compareFn: (a: T, b: T) => number
): T[] {
  shuffle(array);
  sort(array, compareFn, 0, array.length - 1);
  return array;
}

function sort<T>(
  array: T[],
  compareFn: (a: T, b: T) => number,
  left: number,
  right: number
): void {
  if (left >= right) return;

  const j = partition(array, compareFn, left, right);
  sort(array, compareFn, left, j - 1);
  sort(array, compareFn, j + 1, right);
}

function partition<T>(
  array: T[],
  compareFn: (a: T, b: T) => number,
  left: number,
  right: number
): number {
  let i = left + 1,
    j = right;

  // Since the array is shuffled (randomized), we choose the first element
  // (array[left]) as the pivot. The goal is to put the pivot in its final place
  // in the sorted array. To achieve this, we move all elements smaller than
  // the pivot to the left of the pivot, and all elements greater than the pivot
  // to the right of the pivot. When the left and right pointers cross, we put
  // the pivot in its final place and return its index.
  while (true) {
    // Find item on the left to swap
    while (compareFn(array[i], array[left]) < 0) {
      i++;
      if (i == right) break;
    }

    // Find item on the right to swap
    while (compareFn(array[j], array[left]) > 0) {
      j--;
      if (j == left) break;
    }

    // Check if pointers cross
    if (i >= j) break;

    swap(array, i, j);
  }

  // Put the pivot in its final place (j is the pivot index)
  swap(array, left, j);
  return j;
}
