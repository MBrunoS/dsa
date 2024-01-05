import { Node } from "./Node.js";

/**
 * A stack is a data structure that stores items in a Last-In/First-Out (LIFO) manner.
 * This means that the last item inserted into a stack is the first one to be removed.
 * To do this, we are using the top to make the push and pop operations, which are O(1).
 *
 * The size operation is O(1) because we are storing the size of the stack in a variable.
 * The space complexity of a stack is O(n) because we are storing n items in memory.
 *
 * The stack is a good choice when we need to insert and remove items from the same end.
 * The stack is not a good choice when we need to access items at random indexes, unless
 * we are using an array as the underlying data structure. It is also not a
 * good choice when we need to iterate over the items in reverse order.
 *
 * The stack is used in many algorithms such as depth-first search and backtracking, and
 * it is also used in many real-world applications such as:
 *
 * - Undo/Redo functionality in text editors: The last action to be performed is the
 *   first one to be removed.
 * - Call stack: Used by the JavaScript engine to manage function invocations.
 * - Syntax parsing: Used to parse syntax in compilers, interpreters, and regular
 *  expression engines.
 */
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
