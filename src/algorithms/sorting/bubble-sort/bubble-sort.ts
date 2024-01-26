import { swap } from "../../helpers/swap.js";

export function bubbleSort<T>(
  array: T[],
  compare: (a: T, b: T) => number
): T[] {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (compare(array[j], array[j + 1]) > 0) swap(array, j, j + 1);
    }
  }

  return array;
}
