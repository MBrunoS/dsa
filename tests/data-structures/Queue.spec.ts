import { beforeEach, describe, expect, it } from "vitest";
import { Queue } from "../../src/data-structures/Queue.js";

describe("Queue", () => {
  let queue: Queue<number>;

  beforeEach(() => {
    queue = new Queue();
  });

  it("should initialize properly", () => {
    expect(queue.size).toBe(0);
  });

  it("should enqueue items onto the queue", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.size).toBe(2);
  });

  it("should dequeue items from the queue", () => {
    queue.enqueue(1);
    queue.enqueue(2);

    let dequeuedItem = queue.dequeue();
    expect(dequeuedItem).toBe(1);
    expect(queue.size).toBe(1);

    dequeuedItem = queue.dequeue();
    expect(dequeuedItem).toBe(2);
    expect(queue.size).toBe(0);
  });

  it("should return null when dequeuing from an empty queue", () => {
    const dequeuedItem = queue.dequeue();
    expect(dequeuedItem).toBeNull();
  });

  it("should return the correct size", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.dequeue();
    expect(queue.size).toBe(2);
  });

  it("should add and remove items in the correct order", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
  });
});
