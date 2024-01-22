# Quick Sort

[![en](https://img.shields.io/badge/lang-en-red.svg)](./README.md)
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](./README.pt-br.md)

Quick sort is a widely used sorting algorithm known for its efficiency and performance. It follows the divide-and-conquer approach and is particularly effective for large datasets, especially when implemented in-place.

The algorithm selects a pivot element from the array and partitions the other elements into two sub-arrays according to whether they are less than or greater than the pivot. The process is then applied recursively to the sub-arrays.

## Algorithm Steps

1. Choose a pivot element from the array.
2. Partition the array into two sub-arrays: elements less than the pivot and elements greater than the pivot.
3. Recursively apply the quick sort to each sub-array.
4. Concatenate the sorted sub-arrays, including the pivot, to produce the final sorted array.

## Time Complexity

| Case    | Complexity |
| ------- | ---------- |
| Worst   | O(n^2)     |
| Average | O(n log n) |
| Best    | O(n log n) |

## Space Complexity

| Case    | Complexity |
| ------- | ---------- |
| Worst   | O(log n)   |
| Average | O(log n)   |
| Best    | O(log n)   |

## Stability

Quick sort is not stable, as it may change the relative order of equal elements.

## Notes

- There are different ways to choose the pivot element. The most common ones are:
  - First element
  - Last element
  - Random element (randomized quick sort, which is the one implemented here)
  - Median of three
  - Median of medians
- The algorithm can be implemented in-place, i.e., it does not require any extra space. However, the recursive implementation requires O(log n) space for the function calls.
- The algorithm can be implemented as a hybrid of quick sort and insertion sort. For small arrays, insertion sort is more efficient than quick sort. Therefore, the algorithm can switch to insertion sort for arrays smaller than a certain threshold.
- A 3-way quick sort can be used to handle arrays with many duplicate elements.
