# Queue

[![en](https://img.shields.io/badge/lang-en-red.svg)](./README.md)
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](./README.pt-br.md)

A queue is a data structure that stores items in a First-In/First-Out (FIFO) manner. This means that the first item inserted into a queue is the first one to be removed.

This is analogous to a queue of people waiting in line to buy tickets. The first person to enter the queue is the first one to buy a ticket. The people are removed in the same order they entered the queue.

A queue is useful when the order of items is important. For example, a queue can be used to implement a printer queue.

## Implementation Details

A queue can be implemented using a linked list or an array. In this repository, the queue is implemented using a linked list.

## Time Complexity

On worst case, the time complexity of the following operations is:

| Operation | Time Complexity |
| --------- | --------------- |
| Insertion | O(1)            |
| Deletion  | O(1)            |

## Space Complexity

The space complexity of a queue is O(n), where n is the number of elements in the queue.
