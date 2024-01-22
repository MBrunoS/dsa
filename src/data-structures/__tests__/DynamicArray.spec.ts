import { beforeEach, describe, expect, it } from "vitest";
import { DynamicArray } from "../dynamic-array/DynamicArray.js";

describe("DynamicArray", () => {
  let array: DynamicArray<number>;

  beforeEach(() => {
    array = new DynamicArray();
  });

  it("should initialize properly", () => {
    expect(array.size).toEqual(0);
    expect(array.capacity).toEqual(1);

    array = new DynamicArray(10);

    expect(array.size).toEqual(0);
    expect(array.capacity).toEqual(10);
  });

  it("should throw an error when initialized with capacity less than or equal to zero", () => {
    expect(() => new DynamicArray(0)).toThrow(
      "Capacity must be greater than zero"
    );
    expect(() => new DynamicArray(-1)).toThrow(
      "Capacity must be greater than zero"
    );
  });

  it("should add elements correctly", () => {
    array.push(1);
    array.push(2);
    expect(array.size).toEqual(2);
  });

  it("should pop itens correctly", () => {
    array.push(1);
    array.push(2);

    let item = array.pop();
    expect(item).toEqual(2);
    expect(array.size).toEqual(1);

    item = array.pop();
    expect(item).toEqual(1);
    expect(array.size).toEqual(0);

    item = array.pop();
    expect(item).toBeUndefined();
    expect(array.size).toEqual(0);
  });

  it("should resize when capacity is full", () => {
    array.push(1);
    expect(array.capacity).toEqual(1);
    array.push(2);
    expect(array.capacity).toEqual(2);
    array.push(3);
    expect(array.capacity).toEqual(4);
  });

  it("should not resize when popping an empty array", () => {
    expect(array.capacity).toEqual(1);
    array.pop();
    expect(array.capacity).toEqual(1);
  });

  it("should shrink when it's one quarter full", () => {
    array.push(1);
    array.push(2);
    array.push(3);
    array.push(4);
    array.push(5);
    array.push(6);
    array.push(7);
    array.push(8);
    expect(array.capacity).toEqual(8);
    array.pop();
    array.pop();
    array.pop();
    array.pop();
    array.pop();
    expect(array.capacity).toEqual(8);
    array.pop();
    expect(array.capacity).toEqual(4);
  });

  it("should return the correct item when get(index) is called", () => {
    array.push(1);
    array.push(2);
    array.push(3);
    expect(array.get(0)).toEqual(1);
    expect(array.get(1)).toEqual(2);
    expect(array.get(2)).toEqual(3);
  });

  it("should throw an error when get(index) is called with an out of bounds index", () => {
    expect(() => array.get(0)).toThrow("Index is out of bounds");
    array.push(1);
    array.push(2);
    array.push(3);
    expect(() => array.get(3)).toThrow("Index is out of bounds");
    expect(() => array.get(-1)).toThrow("Index is out of bounds");
  });

  it("should correctly convert the array to a string", () => {
    expect(`${array}`).toEqual("");
    array.push(1);
    expect(`${array}`).toEqual("1");
    array.push(2);
    array.push(3);
    expect(`${array}`).toEqual("1,2,3");
  });
});
