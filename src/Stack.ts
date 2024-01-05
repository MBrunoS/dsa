import { Node } from "./Node.js";

export class Stack<T> {
  #top: Node<T> | null = null;
  #size = 0;

  push(value: T) {
    const node = new Node(value); // Create a new node
    node.next = this.#top; // Assign the next to the old top
    this.#top = node; // Point the top to the new node
    this.#size++;
  }

  pop(): T | null {
    if (this.#size == 0) return null;

    const oldTop = this.#top!;

    if (this.#size == 1) {
      this.#top = null;
    } else {
      this.#top = oldTop!.next;
    }

    this.#size--;
    return oldTop.value;
  }

  get size(): number {
    return this.#size;
  }
}
