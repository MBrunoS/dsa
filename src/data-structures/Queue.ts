import { Node } from "./Node.js";
/**
 * A queue is a data structure that stores items in a First-In/First-Out (FIFO) manner.
 * This means that the first item inserted into a queue is the first one to be removed.
 * To do this, we are using the head and tail to make the enqueue and dequeue operations,
 * which are O(1).
 *
 * The size operation is O(1) because we are storing the size
 * of the queue in a variable. The space complexity of a queue is O(n) because we are
 * storing n items in memory.
 *
 * The queue is a good choice when we need to insert and remove items from different
 * ends. The queue is not a good choice when we need to access items at random indexes,
 * unless we are using an array as the underlying data structure. It is also not a
 * good choice when we need to iterate over the items in reverse order.
 *
 * The queue is used in many algorithms such as breadth-first search and Dijkstra's
 * algorithm, and it is also used in many real-world applications such as:
 *
 * - Printer queues: The first document to be printed is the first one to be removed.
 * - Call center phone systems: The first call to be answered is the first one to be removed.
 * - Uber/Lyft: The first passenger to request a ride is the first one to be removed.
 */
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
