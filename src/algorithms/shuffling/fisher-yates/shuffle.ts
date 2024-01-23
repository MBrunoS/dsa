import { randomIntInRange } from "../../helpers/random.js";
import { swap } from "../../helpers/swap.js";

export function shuffle<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = randomIntInRange(0, i);
    swap(array, i, randomIndex);
  }

  return array;
}
