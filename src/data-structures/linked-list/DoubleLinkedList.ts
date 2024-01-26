class Node<T> {
  value: T;
  next?: Node<T>;
  prev?: Node<T>;

  constructor(value: T) {
    this.value = value;
  }
}

export class DoubleLinkedList<T> {
  #head?: Node<T>;
  #tail?: Node<T>;
  #size = 0;

  append(value: T): void {
    const item = new Node(value);

    if (this.#tail === undefined) {
      this.#head = item;
      this.#tail = item;
    } else {
      item.prev = this.#tail;
      this.#tail.next = item;
      this.#tail = item;
    }

    this.#size++;
  }

  prepend(value: T): void {
    const item = new Node(value);

    if (this.#head === undefined) {
      this.#head = item;
      this.#tail = item;
    } else {
      this.#head.prev = item;
      item.next = this.#head;
      this.#head = item;
    }

    this.#size++;
  }

  removeAt(index: number): T | undefined {
    if (this.#head == null || index < 0 || index >= this.#size) return;

    let value: T;

    if (index == 0) {
      value = this.#head.value;
      this.#head = this.#head.next;
      if (this.#head) {
        this.#head.prev = undefined;
      }
      this.#size--;
      return value;
    }

    const prev = this.get(index - 1)!;
    value = prev.next!.value;
    const nextNode = prev.next!.next;
    prev.next = nextNode;
    if (nextNode) {
      nextNode.prev = prev;
    } else {
      // If there is no next node, then the previous node becomes the tail
      this.#tail = prev;
    }
    this.#size--;
    return value;
  }

  get(index: number): Node<T> | undefined {
    if (index < 0 || index >= this.#size) return;

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
