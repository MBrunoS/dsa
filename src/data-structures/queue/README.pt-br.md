# Fila

[![en](https://img.shields.io/badge/lang-en-red.svg)](./README.md)

Uma fila é uma estrutura de dados que armazena itens de acordo com o princípio First-In/First-Out (FIFO). Isso significa que o primeiro item inserido em uma fila é o primeiro a ser removido.

Isso é análogo a uma fila de pessoas esperando para comprar ingressos. A primeira pessoa a entrar na fila é a primeira a comprar um ingresso. As pessoas são removidas na mesma ordem em que entraram na fila.

Uma fila é útil quando a ordem dos itens é importante. Por exemplo, uma fila pode ser usada para implementar uma fila de impressão.

## Detalhes de Implementação

Uma fila pode ser implementada usando uma lista encadeada ou um array. Neste repositório, a fila é implementada usando uma lista encadeada.

[Código-fonte](./Queue.ts)

## Complexidade de Tempo

No pior caso, a complexidade de tempo das seguintes operações é:

| Operação | Complexidade de Tempo |
| -------- | --------------------- |
| Inserção | O(1)                  |
| Remoção  | O(1)                  |

## Complexidade de Espaço

A complexidade de espaço de uma fila é O(n), onde n é o número de elementos na fila.

[Seção anterior (Pilha)](../stack/README.pt-br.md) \
[Próxima seção (Ordenação)](../../algorithms/sorting/README.pt-br.md)

[Retornar à página principal](../../../README.pt-br.md)
