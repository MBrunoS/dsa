# Stack

[![en](https://img.shields.io/badge/lang-en-red.svg)](./README.md)
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](./README.pt-br.md)

A stack is a data structure that stores items in a Last-In/First-Out (LIFO) manner. This means that the last item inserted into a stack is the first one to be removed.

This is analogous to a stack of books. The last book placed on the stack is the first one to be removed. The books are removed in the reverse order of their placement.

A stack is useful when the order of items is important. For example, a stack can be used to implement a browser's back button.

## Implementation Details

A stack can be implemented using a linked list or an array. In this repository, the stack is implemented using a linked list.

[Source code](./Stack.ts)

## Time Complexity

On worst case, the time complexity of the following operations is:

| Operation | Time Complexity |
| --------- | --------------- |
| Insertion | O(1)            |
| Deletion  | O(1)            |

## Space Complexity

The space complexity of a stack is O(n), where n is the number of elements in the stack.

[Previous section (Linked List)](../linked-list/README.md) \
[Next section (Queue)](../queue/README.md)

[Return to main page](../../../README.md)
