export class Node<T> {
  value: T;
  next?: Node<T>;

  constructor(value: T) {
    this.value = value;
  }
}

export class Queue<T> {
  #head?: Node<T>;
  #tail?: Node<T>;
  #size = 0;

  enqueue(value: T): void {
    const item = new Node(value);

    if (this.#tail === undefined) {
      this.#head = item;
      this.#tail = item;
    } else {
      this.#tail.next = item;
      this.#tail = item;
    }

    this.#size++;
  }

  dequeue(): T | undefined {
    if (this.#head === undefined) return;

    const oldHead = this.#head;

    this.#size--;
    this.#head = oldHead.next;

    return oldHead.value;
  }

  get size(): number {
    return this.#size;
  }
}
