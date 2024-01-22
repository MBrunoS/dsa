# Lista Encadeada

[![en](https://img.shields.io/badge/lang-en-red.svg)](./README.md)

Uma lista encadeada é uma estrutura de dados linear na qual os elementos não são armazenados em locais contíguos na memória. Os elementos em uma lista encadeada são conectados usando ponteiros.

> Ponteiros são um tipo de referência que aponta para outro valor armazenado na memória. Eles são usados para armazenar o endereço de outro valor na memória. Em JavaScript/TypeScript, ponteiros são implementados usando referências.

A lista encadeada é uma boa escolha quando o número de elementos não é conhecido antecipadamente, quando se espera que o número de elementos mude frequentemente e quando o acesso aleatório não é necessário. Por exemplo, uma lista encadeada é uma boa escolha para implementar uma fila ou uma pilha.

## Detalhes de Implementação

Uma lista encadeada é implementada usando nós. Cada nó consiste em duas partes: dado (ou valor) e um ponteiro para o próximo nó.

O primeiro nó de uma lista encadeada é chamado de cabeça. O último nó de uma lista encadeada é chamado de cauda. O nó da cauda aponta para nulo, indicando o final da lista encadeada.

## Complexidade de Tempo

No pior caso, a complexidade de tempo das seguintes operações é:

| Operação | Complexidade de Tempo |
| -------- | --------------------- |
| Acesso   | O(n)                  |
| Busca    | O(n)                  |
| Inserção | O(1)                  |
| Remoção  | O(1)                  |

## Complexidade de Espaço

A complexidade de espaço de uma lista encadeada é O(n), onde n é o número de elementos na lista encadeada.
