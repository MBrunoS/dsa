import { randomIntInRange } from "./helpers/random.js";
import { swap } from "./helpers/swap.js";

/**
 * Fisher-Yates or Knuth shuffle algorithm
 *
 * The algorithm works by virtually splitting the array into two parts: the
 * shuffled part and the unshuffled part. Initially, the shuffled part is empty
 * and the unshuffled part is the entire array. The algorithm then picks a random
 * element from the unshuffled part and moves it to the shuffled part. This is
 * repeated until there are no more elements in the unshuffled part.
 *
 * - Time complexity (worst): O(n)
 * - Time complexity (average): O(n)
 * - Time complexity (best): O(n)
 * - Space complexity (worst): O(1)
 */
export function shuffle<T>(array: T[]): T[] {
  for (let i = 0; i < array.length; i++) {
    const randIndex = randomIntInRange(i, array.length - 1);

    swap(array, i, randIndex);
  }

  return array;
}
