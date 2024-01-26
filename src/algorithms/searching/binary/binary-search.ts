export function binarySearch<T>(
  array: T[],
  value: T,
  compare: (a: T, b: T) => number
): number {
  let left = 0,
    right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    const comparation = compare(value, array[mid]);

    // Check if value is present at mid index
    if (comparation == 0) return mid;
    // If value is greater, ignore left half
    else if (comparation > 0) left = mid + 1;
    // If value is smaller, ignore right half
    else right = mid - 1;
  }

  // if we reach here, then element was not present in the array
  return -1;
}
