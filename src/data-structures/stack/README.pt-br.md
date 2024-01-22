# Pilha

[![en](https://img.shields.io/badge/lang-en-red.svg)](./README.md)

Uma pilha é uma estrutura de dados que armazena itens de acordo com o princípio Last-In/First-Out (LIFO). Isso significa que o último item inserido em uma pilha é o primeiro a ser removido.

Isso é análogo a uma pilha de livros. O último livro colocado na pilha é o primeiro a ser removido. Os livros são removidos na ordem inversa de sua colocação.

Uma pilha é útil quando a ordem dos itens é importante. Por exemplo, uma pilha pode ser usada para implementar o botão de voltar de um navegador.

## Detalhes de Implementação

Uma pilha pode ser implementada usando uma lista encadeada ou um array. Neste repositório, a pilha é implementada usando uma lista encadeada.

## Complexidade de Tempo

No pior caso, a complexidade de tempo das seguintes operações é:

| Operação | Complexidade de Tempo |
| -------- | --------------------- |
| Inserção | O(1)                  |
| Remoção  | O(1)                  |

## Complexidade de Espaço

A complexidade de espaço de uma pilha é O(n), onde n é o número de elementos na pilha.
