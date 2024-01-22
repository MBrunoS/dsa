# Algoritmos de Ordenação

[![en](https://img.shields.io/badge/lang-en-red.svg)](./README.md)

- [Selection Sort](./selection-sort/README.pt-br.md)
- [Insertion Sort](./insertion-sort/README.pt-br.md)
- [Merge Sort](./merge-sort/README.pt-br.md)
- [Quick Sort](./quick-sort/README.pt-br.md)

## Detalhes de Implementação

Para garantir que os algoritmos de ordenação sejam genéricos, eles são implementados como funções que recebem um array de elementos e uma função de comparação como parâmetros. A função de comparação é usada para comparar os elementos no array e determinar sua ordem.

A função de comparação deve receber dois parâmetros e retornar um número:

- um número negativo se o primeiro elemento for menor que o segundo elemento
- zero se o primeiro elemento for igual ao segundo elemento
- um número positivo se o primeiro elemento for maior que o segundo elemento

```typescript
type CompareFunction<T> = (a: T, b: T) => number;
```

Com essa abordagem, os algoritmos de ordenação podem ser usados para ordenar arrays de qualquer tipo, desde que a função de comparação seja implementada corretamente.
