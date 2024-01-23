# Selection Sort

[![en](https://img.shields.io/badge/lang-en-red.svg)](./README.md)

O Selection Sort é um algoritmo de ordenação simples e intuitivo que ordena um array selecionando repetidamente o elemento mínimo da parte não ordenada e colocando-o no início. Embora não seja tão eficiente quanto algoritmos mais avançados, como quicksort ou mergesort, o selection sort é fácil de entender e é adequado para conjuntos de dados pequenos.

O algoritmo divide o array de entrada em duas partes: uma seção ordenada e uma seção não ordenada. Ele itera selecionando repetidamente o elemento mínimo da seção não ordenada e trocando-o com o primeiro elemento da seção não ordenada, estendendo assim a seção ordenada.

## Passos do Algoritmo

1. Comece considerando todo o array como não ordenado.
2. Itere pela seção não ordenada para encontrar o elemento mínimo.
3. Troque o elemento mínimo com o primeiro elemento da seção não ordenada.
4. Mova a fronteira entre as seções ordenada e não ordenada para a direita.
5. Repita os passos 2-4 até que todo o array esteja ordenado.

[Código-fonte](./selection-sort.ts)

## Complexidade de Tempo

| Caso   | Complexidade |
| ------ | ------------ |
| Pior   | O(n^2)       |
| Médio  | O(n^2)       |
| Melhor | O(n^2)       |

## Complexidade de Espaço

| Caso   | Complexidade |
| ------ | ------------ |
| Pior   | O(1)         |
| Médio  | O(1)         |
| Melhor | O(1)         |

## Estabilidade

O algoritmo não é estável, pois pode alterar a ordem relativa de elementos iguais.

[Próxima seção (Insertion Sort)](../insertion-sort/README.pt-br.md)

[Retornar à página principal](../../../README.pt-br.md)
