import { beforeEach, describe, expect, it } from "vitest";
import { LinkedList } from "../linked-list/LinkedList.js";

describe("LinkedList", () => {
  let linkedList: LinkedList<number>;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  it("should initialize properly", () => {
    expect(linkedList.size).toBe(0);
  });

  it("should append items to the list", () => {
    linkedList.append(1);
    linkedList.append(2);
    expect(linkedList.size).toBe(2);
  });

  it("should prepend items to the list", () => {
    linkedList.prepend(1);
    linkedList.prepend(2);
    expect(linkedList.size).toBe(2);
  });

  it("should remove items from the list", () => {
    linkedList.append(1);
    linkedList.append(2);

    expect(linkedList.removeAt(1)).toBe(2);
    expect(linkedList.size).toBe(1);

    expect(linkedList.removeAt(0)).toBe(1);
    expect(linkedList.size).toBe(0);
  });

  it("should return null when removing an out-of-bounds index", () => {
    linkedList.append(1);
    linkedList.append(2);
    const removedItem = linkedList.removeAt(5);
    expect(removedItem).toBeUndefined();
  });

  it("should return null when removing from an empty list", () => {
    const removedItem = linkedList.removeAt(0);
    expect(removedItem).toBeUndefined();
  });

  it("should get items from the list", () => {
    linkedList.append(1);
    linkedList.append(2);
    expect(linkedList.get(0)?.value).toBe(1);
    expect(linkedList.get(1)?.value).toBe(2);
  });

  it("should return null when getting an out-of-bounds index", () => {
    expect(linkedList.get(0)).toBeUndefined();
    expect(linkedList.get(-1)).toBeUndefined();
    expect(linkedList.get(10)).toBeUndefined();
  });

  it("should return null when getting from an empty list", () => {
    expect(linkedList.get(0)).toBeUndefined();
  });

  it("should correctly insert and remove items", () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);

    expect(linkedList.size).toBe(3);
    expect(linkedList.get(0)?.value).toBe(1);
    expect(linkedList.get(1)?.value).toBe(2);
    expect(linkedList.get(2)?.value).toBe(3);

    linkedList.prepend(0);
    expect(linkedList.size).toBe(4);
    expect(linkedList.get(0)?.value).toBe(0);
    expect(linkedList.get(1)?.value).toBe(1);
    expect(linkedList.get(2)?.value).toBe(2);
    expect(linkedList.get(3)?.value).toBe(3);

    linkedList.removeAt(0);
    expect(linkedList.size).toBe(3);
    expect(linkedList.get(0)?.value).toBe(1);
    expect(linkedList.get(1)?.value).toBe(2);
    expect(linkedList.get(2)?.value).toBe(3);
  });
});
