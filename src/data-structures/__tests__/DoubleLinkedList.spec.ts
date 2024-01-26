import { beforeEach, describe, expect, it } from "vitest";
import { DoubleLinkedList } from "../linked-list/DoubleLinkedList.js";

describe("DoubleLinkedList", () => {
  let list: DoubleLinkedList<number>;

  beforeEach(() => {
    list = new DoubleLinkedList();
  });

  it("should initialize properly", () => {
    expect(list.size).toBe(0);
  });

  it("should append items to the list", () => {
    list.append(1);
    list.append(2);
    expect(list.size).toBe(2);
  });

  it("should prepend items to the list", () => {
    list.prepend(1);
    list.prepend(2);
    expect(list.size).toBe(2);
  });

  it("should remove items from the list", () => {
    list.append(1);
    list.append(2);

    expect(list.removeAt(1)).toBe(2);
    expect(list.size).toBe(1);

    expect(list.removeAt(0)).toBe(1);
    expect(list.size).toBe(0);
  });

  it("should return null when removing an out-of-bounds index", () => {
    list.append(1);
    list.append(2);
    const removedItem = list.removeAt(5);
    expect(removedItem).toBeUndefined();
  });

  it("should return null when removing from an empty list", () => {
    const removedItem = list.removeAt(0);
    expect(removedItem).toBeUndefined();
  });

  it("should get items from the list", () => {
    list.append(1);
    list.append(2);
    expect(list.get(0)?.value).toBe(1);
    expect(list.get(1)?.value).toBe(2);
  });

  it("should return null when getting an out-of-bounds index", () => {
    expect(list.get(0)).toBeUndefined();
    expect(list.get(-1)).toBeUndefined();
    expect(list.get(10)).toBeUndefined();
  });

  it("should return null when getting from an empty list", () => {
    expect(list.get(0)).toBeUndefined();
  });

  it("should correctly insert and remove items", () => {
    list.append(1);
    list.append(2);
    list.append(3);

    expect(list.size).toBe(3);
    expect(list.get(0)?.value).toBe(1);
    expect(list.get(1)?.value).toBe(2);
    expect(list.get(2)?.value).toBe(3);

    list.prepend(0);
    expect(list.size).toBe(4);
    expect(list.get(0)?.value).toBe(0);
    expect(list.get(1)?.value).toBe(1);
    expect(list.get(2)?.value).toBe(2);
    expect(list.get(3)?.value).toBe(3);

    list.removeAt(0);
    expect(list.size).toBe(3);
    expect(list.get(0)?.value).toBe(1);
    expect(list.get(1)?.value).toBe(2);
    expect(list.get(2)?.value).toBe(3);
  });

  it("should correctly reference prev nodes when appending", () => {
    list.append(1);
    list.append(2);
    list.append(3);

    expect(list.get(0)?.prev).toBeUndefined();
    expect(list.get(1)?.prev?.value).toBe(1);
    expect(list.get(2)?.prev?.value).toBe(2);
  });

  it("should correctly reference prev nodes when prepending", () => {
    list.prepend(1);
    list.prepend(2);
    list.prepend(3);

    expect(list.get(0)?.prev).toBeUndefined();
    expect(list.get(1)?.prev?.value).toBe(3);
    expect(list.get(2)?.prev?.value).toBe(2);
  });

  it("should correctly update prev nodes when removing", () => {
    list.append(1);
    list.append(2);
    list.append(3);
    list.removeAt(1);

    expect(list.get(0)?.prev).toBeUndefined();
    expect(list.get(1)?.prev?.value).toBe(1);
    expect(list.get(1)?.value).toBe(3);
  });
});
