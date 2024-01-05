import { Node } from "./Node.js";

/**
 * A linked list is a linear data structure, in which the elements are not
 * stored at contiguous memory locations. It consists of nodes where each node
 * contains a data field and a reference to the next node in the list.
 *
 * The first node of the list is called the head, and the last node of the list
 * is called the tail. We are using the tail to make the append operation O(1).
 *
 * The prepend operation is also O(1) because we are using the head to make the
 * operation.
 *
 * The removeAt operation is O(n) because we need to traverse the list to find
 * the node at the given index.
 *
 * The get operation is O(n) because we need to traverse the list to find the
 * node at the given index.
 *
 * The size operation is O(1) because we are storing the size of the list in a
 * variable.
 *
 * The space complexity of a linked list is O(n) because we are storing n nodes
 * in memory.
 *
 * The linked list is a good choice when we need to insert or remove elements
 * from the beginning of the list. It is also a good choice when we need to
 * insert or remove elements from the end of the list.
 *
 * The linked list is not a good choice when we need to access elements at
 * random indexes. It is also not a good choice when we need to iterate over
 * the list in reverse order.
 */
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
