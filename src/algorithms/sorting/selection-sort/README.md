# Selection Sort

[![en](https://img.shields.io/badge/lang-en-red.svg)](./README.md)
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](./README.pt-br.md)

Selection sort is a simple and intuitive sorting algorithm that sorts an array by repeatedly selecting the minimum element from the unsorted part and putting it at the beginning. Although not as efficient as more advanced algorithms like quicksort or mergesort, selection sort is easy to understand and is suitable for small datasets.

The algorithm divides the input array into two parts: a sorted section and an unsorted section. It iteratively selects the minimum element from the unsorted section and swaps it with the first element of the unsorted section, extending the sorted section.

## Algorithm Steps

1. Start with the entire array considered as unsorted.
2. Iterate through the unsorted section to find the minimum element.
3. Swap the minimum element with the first element of the unsorted section.
4. Move the boundary between the sorted and unsorted sections to the right.
5. Repeat steps 2-4 until the entire array is sorted.

## Time Complexity

| Case    | Complexity |
| ------- | ---------- |
| Worst   | O(n^2)     |
| Average | O(n^2)     |
| Best    | O(n^2)     |

## Space Complexity

| Case    | Complexity |
| ------- | ---------- |
| Worst   | O(1)       |
| Average | O(1)       |
| Best    | O(1)       |

## Stability

The algorithm is not stable, as it may change the relative order of equal elements.
