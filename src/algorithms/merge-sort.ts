/**
 * Merge Sort is a Divide and Conquer algorithm. It divides input array in two
 * halves, calls itself for the two halves and then merges the two sorted halves.
 *
 * - Divide: Divide the n-element sequence to be sorted into two subsequences of
 * n/2 elements each.
 * - Conquer: Sort the two subsequences recursively using merge sort.
 * - Combine: Merge the two sorted subsequences to produce the sorted answer.
 *
 * - Time Complexity: O(n log n)
 * - Space Complexity: O(n)
 */
export function mergeSort<T>(
  array: T[],
  compareFn: (a: T, b: T) => number
): T[] {
  // Create an auxiliary array to avoid creating new arrays in each recursive call
  let aux = new Array(array.length);
  // Call the recursive sort function
  sort(array, aux, compareFn, 0, array.length - 1);
  return array;
}

export function sort<T>(
  array: T[],
  aux: T[],
  compareFn: (a: T, b: T) => number,
  left: number,
  right: number
): void {
  // If the left index is greater than or equal to the right index, the array is
  // sorted and we can stop the recursion
  if (right <= left) return;
  // Calculate the middle index, avoiding overflow
  const middle = left + Math.floor((right - left) / 2);

  // Sort the left half of the array
  sort(array, aux, compareFn, left, middle);
  // Sort the right half of the array
  sort(array, aux, compareFn, middle + 1, right);

  // If the last item of the left half is smaller than the first item of the
  // right half, it means that the array is sorted and we can stop the recursion
  if (compareFn(array[middle], array[middle + 1]) <= 0) return;

  // Merge the two halves
  merge(array, aux, compareFn, left, middle, right);
}

export function merge<T>(
  array: T[],
  aux: T[],
  compareFn: (a: T, b: T) => number,
  left: number,
  middle: number,
  right: number
): void {
  // Copy array to aux
  for (let k = left; k <= right; k++) aux[k] = array[k];

  let i = left;
  let j = middle + 1;

  for (let k = left; k <= right; k++) {
    // If the left part is exhausted, copy the right part to the array
    if (i > middle) {
      array[k] = aux[j++];
    }
    // If the right part is exhausted, copy the left part to the array
    else if (j > right) {
      array[k] = aux[i++];
    }
    // If the current item in the left part is smaller than or equal to the current
    // item in the right part, copy the left item to the array
    else if (compareFn(aux[i], aux[j]) <= 0) {
      array[k] = aux[i++];
    }
    // If the current item in the right part is smaller than the current item in
    // the left part, copy the right item to the array
    else {
      array[k] = aux[j++];
    }
  }
}
