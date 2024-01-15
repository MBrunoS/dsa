export function swap<T>(array: T[], i: number, j: number) {
  const tmp = array[j];
  array[j] = array[i];
  array[i] = tmp;
}
