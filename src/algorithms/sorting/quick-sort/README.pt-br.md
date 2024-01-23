# Quick Sort

[![en](https://img.shields.io/badge/lang-en-red.svg)](./README.md)

O quick sort é um algoritmo de ordenação amplamente utilizado conhecido por sua eficiência e desempenho. Ele segue a abordagem dividir e conquistar e é particularmente eficaz para conjuntos de dados grandes, especialmente quando implementado in-place.

O algoritmo seleciona um elemento pivô do array e particiona os outros elementos em dois subarrays de acordo com se são menores ou maiores que o pivô. O processo é então aplicado recursivamente aos subarrays.

## Passos do Algoritmo

1. Escolha um elemento pivô do array.
2. Particione o array em dois subarrays: elementos menores que o pivô e elementos maiores que o pivô.
3. Aplique recursivamente o quick sort a cada subarray.
4. Concatene os subarrays ordenados, incluindo o pivô, para produzir o array final ordenado.

[Código-fonte](./quick-sort.ts)

## Complexidade de Tempo

| Caso   | Complexidade |
| ------ | ------------ |
| Pior   | O(n^2)       |
| Médio  | O(n log n)   |
| Melhor | O(n log n)   |

## Complexidade de Espaço

| Caso   | Complexidade |
| ------ | ------------ |
| Pior   | O(log n)     |
| Médio  | O(log n)     |
| Melhor | O(log n)     |

## Estabilidade

O quick sort não é estável, pois pode alterar a ordem relativa de elementos iguais.

## Notas

- Existem diferentes maneiras de escolher o elemento pivô. As mais comuns são:
  - Primeiro elemento
  - Último elemento
  - Elemento aleatório (quick sort randomizado, que é o implementado aqui)
  - Mediana de três
  - Mediana das medianas
- O algoritmo pode ser implementado in-place, ou seja, não requer espaço extra. No entanto, a implementação recursiva requer espaço O(log n) para as chamadas de função.
- O algoritmo pode ser implementado como uma combinação de quick sort e insertion sort. Para arrays pequenos, o insertion sort é mais eficiente que o quick sort. Portanto, o algoritmo pode alternar para o insertion sort para arrays menores que um determinado limiar.
- Um quick sort de 3 vias pode ser usado para lidar com arrays com muitos elementos duplicados.

[Seção anterior (Merge Sort)](../merge-sort/README.pt-br.md) \
[Próxima seção (Embaralhamento)](../../shuffling/README.pt-br.md)

[Retornar à página principal](../../../README.pt-br.md)
