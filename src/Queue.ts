import { Node } from "./Node.js";

export class Queue<T> {
  #head: Node<T> | null = null;
  #tail: Node<T> | null = null;
  #size = 0;

  enqueue(value: T): void {
    const item = new Node(value);

    if (this.#tail == null) {
      this.#head = item;
      this.#tail = item;
    } else {
      this.#tail.next = item;
      this.#tail = item;
    }

    this.#size++;
  }

  dequeue(): T | null {
    if (this.#head == null) return null;

    const oldHead = this.#head;

    this.#size--;
    this.#head = oldHead.next;

    return oldHead.value;
  }

  get size(): number {
    return this.#size;
  }
}
