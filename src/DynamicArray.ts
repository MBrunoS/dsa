/*
 * Amortized (average) time complexity: O(1)
 */
export class DynamicArray<T> {
  #array: Array<T>;
  #size: number;

  constructor(capacity = 1) {
    if (capacity <= 0) throw new Error("Capacity must be greater than zero");

    this.#array = new Array<T>(capacity);
    this.#size = 0;
  }

  get size(): number {
    return this.#size;
  }

  get capacity(): number {
    return this.#array.length;
  }

  push(item: T): void {
    // If the array is full, double its size
    if (this.size == this.capacity) this.#resize(this.capacity * 2);

    this.#array[this.#size++] = item;
  }

  pop(): T {
    if (this.#size == 0) return undefined as T;

    this.#size--;

    // If the array is only one quarter full, shrink to half the size
    if (this.#size <= this.capacity / 4 && this.#size > 0) {
      this.#resize(this.capacity / 2);
    }

    return this.#array[this.#size];
  }

  get(index: number): T {
    if (index < 0 || index >= this.#size)
      throw new Error("Index is out of bounds");

    return this.#array[index];
  }

  #resize(newCapacity: number): void {
    const newArray = new Array<T>(newCapacity);

    // Copy values in the old array to the new one
    for (let i = 0; i < this.#size; i++) {
      newArray[i] = this.#array[i];
    }

    this.#array = newArray;
  }

  toString(): string {
    let res = "";
    for (let i = 0; i < this.#size; i++) {
      const item = this.#array[i];
      res += `${item}`;

      if (i < this.#size - 1) {
        res += ",";
      }
    }

    return res;
  }
}
