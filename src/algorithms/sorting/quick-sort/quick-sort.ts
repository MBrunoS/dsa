import { swap } from "../../helpers/swap.js";
import { shuffle } from "../../shuffle.js";

export function quickSort<T>(array: T[], compare: (a: T, b: T) => number): T[] {
  shuffle(array);
  sort(array, compare, 0, array.length - 1);
  return array;
}

function sort<T>(
  array: T[],
  compare: (a: T, b: T) => number,
  left: number,
  right: number
): void {
  if (left >= right) return;

  const j = partition(array, compare, left, right);
  sort(array, compare, left, j - 1);
  sort(array, compare, j + 1, right);
}

function partition<T>(
  array: T[],
  compare: (a: T, b: T) => number,
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
    while (compare(array[i], array[left]) < 0) {
      i++;
      if (i == right) break;
    }

    // Find item on the right to swap
    while (compare(array[j], array[left]) > 0) {
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
