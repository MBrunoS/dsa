# Insertion Sort

[![en](https://img.shields.io/badge/lang-en-red.svg)](./README.md)

O Insertion Sort é um algoritmo simples de ordenação que constrói o array ordenado final elemento por elemento. Ele é muito menos eficiente em listas grandes do que algoritmos mais avançados, como quicksort, heapsort ou merge sort. No entanto, o Insertion Sort é frequentemente usado para conjuntos de dados pequenos ou como componente fundamental para algoritmos de ordenação mais complexos.

O algoritmo funciona dividindo o array de entrada em duas partes: uma seção ordenada e uma seção não ordenada. Ele repetidamente pega o primeiro elemento da seção não ordenada e o insere na posição correta na seção ordenada, deslocando os elementos conforme necessário.

## Passos do Algoritmo

1. Comece com o segundo elemento (assumindo que o primeiro elemento já está ordenado).
2. Compare o elemento atual com seu elemento adjacente.
3. Se o elemento atual for menor que seu elemento adjacente, troque-os.
4. Repita esse processo até que o elemento esteja na posição ordenada correta.
5. Mova para o próximo elemento na seção não ordenada e repita os passos 2-4 até que todo o array esteja ordenado.

## Complexidade de Tempo

| Caso   | Complexidade |
| ------ | ------------ |
| Pior   | O(n^2)       |
| Médio  | O(n^2)       |
| Melhor | O(n)         |

## Complexidade de Espaço

| Caso   | Complexidade |
| ------ | ------------ |
| Pior   | O(1)         |
| Médio  | O(1)         |
| Melhor | O(1)         |

## Estabilidade

O algoritmo é estável, pois preserva a ordem de elementos iguais.
