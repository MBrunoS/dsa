# Shuffling Algorithms

[![en](https://img.shields.io/badge/lang-en-red.svg)](./README.md)
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](./README.pt-br.md)

- [Fisher-Yates](./fisher-yates/README.md)

Shuffling algorithms are used to rearrange the elements in an array in a random order.

## Implementation Details

The shuffling algorithms are implemented as functions that take an array of generic elements as a parameter, and return the shuffled array. The functions follow this signature:

```typescript
type ShufflingFunction<T> = (array: T[]) => T[];
```

[Return to main page](../../../README.md)
