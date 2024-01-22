# Sorting Algorithms

[![en](https://img.shields.io/badge/lang-en-red.svg)](./README.md)
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](./README.pt-br.md)

- [Selection Sort](./selection-sort)
- [Insertion Sort](./insertion-sort)
- [Merge Sort](./merge-sort)
- [Quick Sort](./quick-sort)

## Implementation Details

To ensure the sorting algorithms are generic, they are implemented as functions that take an array of elements and a comparison function as parameters. The comparison function is used to compare the elements in the array and determine their order.

The comparison function should take two parameters and return a number:

- a negative number if the first element is smaller than the second element
- zero if the first element is equal to the second element
- a positive number if the first element is greater than the second element

```typescript
type CompareFunction<T> = (a: T, b: T) => number;
```

With this approach, the sorting algorithms can be used to sort arrays of any type, as long as the comparison function is implemented correctly.
