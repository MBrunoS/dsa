import { beforeEach, describe, expect, it } from "vitest";
import { Stack } from "../../src/data-structures/Stack.js";

describe("Stack", () => {
  let stack: Stack<number>;

  beforeEach(() => {
    stack = new Stack();
  });
  it("should initialize properly", () => {
    expect(stack.size).toBe(0);
  });

  it("should push items onto the stack", () => {
    stack.push(1);
    stack.push(2);
    expect(stack.size).toBe(2);
  });

  it("should pop items from the stack", () => {
    stack.push(1);
    stack.push(2);
    let poppedItem = stack.pop();
    expect(poppedItem).toBe(2);
    expect(stack.size).toBe(1);
    poppedItem = stack.pop();
    expect(poppedItem).toBe(1);
    expect(stack.size).toBe(0);
  });

  it("should return undefined when popping from an empty stack", () => {
    const poppedItem = stack.pop();
    expect(poppedItem).toBeNull();
  });
});
