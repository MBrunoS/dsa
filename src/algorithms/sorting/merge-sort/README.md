# Merge Sort

[![en](https://img.shields.io/badge/lang-en-red.svg)](./README.md)
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](./README.pt-br.md)

Merge sort is a popular and efficient sorting algorithm that follows the divide-and-conquer paradigm. It is a comparison-based algorithm that uses recursion to sort a list of elements.

The algorithm divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves. The merge operation is the key process that assumes that the two halves are sorted and merges them to produce a single sorted sub-list.

## Algorithm Steps

1. Divide the unsorted array into two halves, and call the merge sort function for each half, until each half contains only one element.
2. Merge the two sorted halves.
   2.1. Create a temporary array to store the sorted elements.
   2.2. Compare the first element of each half.
   2.3. Add the smallest element to the temporary array.
   2.4. Repeat the process until all elements are sorted.
   2.5. Copy the sorted elements from the temporary array to the original array.
3. Repeat the process until the entire array is sorted.

[Source code](./merge-sort.ts)

## Time Complexity

| Case    | Complexity |
| ------- | ---------- |
| Worst   | O(n log n) |
| Average | O(n log n) |
| Best    | O(n log n) |

## Space Complexity

| Case    | Complexity |
| ------- | ---------- |
| Worst   | O(n)       |
| Average | O(n)       |
| Best    | O(n)       |

## Stability

The algorithm is stable, as it preserves the order of equal elements.

[Previous section (Insertion Sort)](../insertion-sort/README.md) \
[Next section (Quick Sort)](../quick-sort/README.md)

[Return to main page](../../../README.md)
