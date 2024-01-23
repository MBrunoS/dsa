# Insertion Sort

[![en](https://img.shields.io/badge/lang-en-red.svg)](./README.md)
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](./README.pt-br.md)

Insertion sort is a simple sorting algorithm that builds the final sorted array one element at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort. However, insertion sort is often used for small datasets or as the building block for more complex sorting algorithms.

The algorithm works by dividing the input array into two parts: a sorted section and an unsorted section. It repeatedly takes the first element from the unsorted section and inserts it into the correct position in the sorted section, shifting the elements as needed.

## Algorithm Steps

1. Start with the second element (assuming the first element is already sorted).
2. Compare the current element with its adjacent element.
3. If the current element is smaller than its adjacent element, swap them.
4. Repeat this process until the element is in its correct sorted position.
5. Move to the next element in the unsorted section and repeat steps 2-4 until the entire array is sorted.

[Source code](./insertion-sort.ts)

## Time Complexity

| Case    | Complexity |
| ------- | ---------- |
| Worst   | O(n^2)     |
| Average | O(n^2)     |
| Best    | O(n)       |

## Space Complexity

| Case    | Complexity |
| ------- | ---------- |
| Worst   | O(1)       |
| Average | O(1)       |
| Best    | O(1)       |

## Stability

The algorithm is stable, as it preserves the order of equal elements.

[Previous section (Selection Sort)](../selection-sort/README.md) \
[Next section (Merge Sort)](../merge-sort/README.md)

[Return to main page](../../../README.md)
