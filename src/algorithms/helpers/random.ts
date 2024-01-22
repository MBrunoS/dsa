/**
 * Generates a random integer between m and n (inclusive)
 */
export function randomIntInRange(m: number, n: number): number {
  return Math.floor(Math.random() * (n - m + 1)) + m;
}
