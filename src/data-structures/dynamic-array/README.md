# Dynamic Array

[![en](https://img.shields.io/badge/lang-en-red.svg)](./README.md)
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](./README.pt-br.md)

An array is a collection of elements of the same type, stored in contiguous memory locations. The elements of an array can be accessed by their index. The index of the first element is 0, the index of the second element is 1, and so on.

A disadvantage of arrays is that their size is fixed. This means that once an array is created, its size cannot be changed. This is where dynamic arrays come in. A dynamic array is an array that can grow and shrink as needed.

In JavaScript/TypeScript, arrays are dynamic by default. This means that they can grow and shrink as needed, without the need to specify their size beforehand. However, this is not the case in other languages, such as C++ and Java, where arrays are static and their size must be specified before using them.

## Implementation Details

Under the hood, a dynamic array is implemented using a static array. When the array is full, a new array is created with a larger size, and the elements of the old array are copied to the new array. This is an expensive operation, as it requires allocating a new array and copying all the elements from the old array to the new array. This is why it is important to choose a good growth factor for the dynamic array.

The same applies when the array is shrunk. If the array is less than 25% full, then its size is reduced by a factor of 2. This is also an expensive operation, as it requires allocating a new array and copying all the elements from the old array to the new array.

## Time Complexity

On worst case, the time complexity of the following operations is:

| Operation | Time Complexity |
| --------- | --------------- |
| Access    | O(1)            |
| Search    | O(n)            |
| Insertion | O(n)            |
| Deletion  | O(n)            |

But considering the amortized time complexity, the time complexity of the following operations is:

| Operation | Time Complexity |
| --------- | --------------- |
| Access    | O(1)            |
| Search    | O(n)            |
| Insertion | O(1)            |
| Deletion  | O(1)            |

This is because the amortized time complexity of the `push` and `pop` operations is O(1), since they are only expensive when the array is full or empty, respectively.

## Space Complexity

The space complexity of a dynamic array is O(n), where n is the number of elements in the array.
