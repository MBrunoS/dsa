export function linearSearch<T>(
  array: T[],
  value: T,
  compare: (a: T, b: T) => number
): number {
  for (let i = 0; i < array.length; i++) {
    if (compare(array[i], value) == 0) return i;
  }
  return -1;
}
