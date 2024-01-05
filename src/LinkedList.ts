import { Node } from "./Node.js";

export class LinkedList<T> {
  #head: Node<T> | null = null;
  #tail: Node<T> | null = null;
  #size = 0;

  append(value: T): void {
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

  prepend(value: T): void {
    const node = new Node(value);

    if (!this.#head) {
      this.#head = node;
      this.#tail = node;
    } else {
      node.next = this.#head;
      this.#head = node;
    }

    this.#size++;
  }

  removeAt(index: number): T | null {
    if (this.#head == null || index < 0 || index >= this.#size) return null;

    let value: T;

    if (index == 0) {
      value = this.#head.value;
      this.#head = this.#head.next;
      this.#size--;
      return value;
    }

    const prev = this.get(index - 1)!;
    value = prev.next!.value;
    prev.next = prev.next!.next;
    this.#size--;
    return value;
  }

  get(index: number): Node<T> | null {
    if (index < 0 || index >= this.#size) return null;

    let current = this.#head;

    for (let i = 0; i < index; i++) {
      current = current!.next;
    }

    return current;
  }

  get size(): number {
    return this.#size;
  }
}
