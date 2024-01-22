# Merge Sort

[![en](https://img.shields.io/badge/lang-en-red.svg)](./README.md)

O merge sort é um algoritmo de ordenação popular e eficiente que segue o paradigma dividir e conquistar. É um algoritmo de comparação que utiliza recursão para ordenar uma lista de elementos.

O algoritmo divide o array de entrada em duas metades, chama a si mesmo para as duas metades e, em seguida, mescla as duas metades ordenadas. A operação de mesclagem é o processo-chave que pressupõe que as duas metades estão ordenadas e as mescla para produzir uma única sublista ordenada.

## Passos do Algoritmo

1. Divida o array não ordenado em duas metades e chame a função de merge sort para cada metade, até que cada metade contenha apenas um elemento.
2. Mescle as duas metades ordenadas.
   2.1. Crie um array temporário para armazenar os elementos ordenados.
   2.2. Compare o primeiro elemento de cada metade.
   2.3. Adicione o menor elemento ao array temporário.
   2.4. Repita o processo até que todos os elementos estejam ordenados.
   2.5. Copie os elementos ordenados do array temporário para o array original.
3. Repita o processo até que o array inteiro esteja ordenado.

## Complexidade de Tempo

| Caso   | Complexidade |
| ------ | ------------ |
| Pior   | O(n log n)   |
| Médio  | O(n log n)   |
| Melhor | O(n log n)   |

## Complexidade de Espaço

| Caso   | Complexidade |
| ------ | ------------ |
| Pior   | O(n)         |
| Médio  | O(n)         |
| Melhor | O(n)         |

## Estabilidade

O algoritmo é estável, pois preserva a ordem de elementos iguais.
