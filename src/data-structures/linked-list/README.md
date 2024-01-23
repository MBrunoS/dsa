# Linked List

[![en](https://img.shields.io/badge/lang-en-red.svg)](./README.md)
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](./README.pt-br.md)

A linked list is a linear data structure, in which the elements are not stored at contiguous memory locations. The elements in a linked list are linked using pointers.

> Pointers are a type of reference that points to another value stored in memory. They are used to store the address of another value in memory. In JavaScript/TypeScript, pointers are implemented using references.

The linked list is a good choice when the number of elements is not known in advance, when the number of elements is expected to change frequently, and when random access is not required. For example, a linked list is a good choice for implementing a queue or a stack.

## Implementation Details

A linked list is implemented using nodes. Each node consists of two parts: data (or value) and a pointer to the next node.

The first node of a linked list is called the head. The last node of a linked list is called the tail. The tail node points to null, indicating the end of the linked list.

[Source code](./LinkedList.ts)

## Time Complexity

On worst case, the time complexity of the following operations is:

| Operation | Time Complexity |
| --------- | --------------- |
| Access    | O(n)            |
| Search    | O(n)            |
| Insertion | O(1)            |
| Deletion  | O(1)            |

## Space Complexity

The space complexity of a linked list is O(n), where n is the number of elements in the linked list.

[Previous section (Dynamic Array)](../dynamic-array/README.md) \
[Next section (Stack)](../stack/README.md)

[Return to main page](../../../README.md)
