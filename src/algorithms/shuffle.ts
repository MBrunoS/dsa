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

    const tmp = array[randIndex];
    array[randIndex] = array[i];
    array[i] = tmp;
  }

  return array;
}

// Generates a random integer between m and n (inclusive)
export function randomIntInRange(m: number, n: number): number {
  return Math.floor(Math.random() * (n - m + 1)) + m;
}
