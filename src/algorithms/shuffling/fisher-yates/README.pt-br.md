# Fisher-Yates Shuffle

[![en](https://img.shields.io/badge/lang-en-red.svg)](./README.md)
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](./README.pt-br.md)

O Fisher-Yates shuffle, também conhecido como Knuth shuffle, é um algoritmo para gerar uma permutação aleatória de uma sequência finita. Ele embaralha eficientemente um array, tornando cada permutação possível igualmente provável.

O algoritmo funciona dividindo o array de entrada em duas partes: uma seção embaralhada e uma seção não embaralhada. Ele repetidamente seleciona um elemento aleatório da seção não embaralhada e o insere na seção embaralhada, trocando os elementos conforme necessário.

## Passos do Algoritmo

1. Comece com o último elemento do array.
2. Troque o elemento atual por um elemento selecionado aleatoriamente antes dele (incluindo ele mesmo).
3. Mova para o elemento anterior e repita o passo 2.
4. Continue este processo até alcançar o primeiro elemento do array.

[Código fonte](./shuffle.ts)

## Complexidade de Tempo

| Caso   | Complexidade |
| ------ | ------------ |
| Pior   | O(n)         |
| Médio  | O(n)         |
| Melhor | O(n)         |

## Complexidade de Espaço

| Caso   | Complexidade |
| ------ | ------------ |
| Pior   | O(1)         |
| Médio  | O(1)         |
| Melhor | O(1)         |

## Viés

O algoritmo em si é imparcial, mas o gerador de números aleatórios usado para selecionar os elementos pode não ser. Nesta implementação, uma vez que a função `Math.random()` do JavaScript é um gerador de números pseudoaleatórios (PRNG), o algoritmo não é verdadeiramente imparcial. No entanto, o viés é tão pequeno que pode ser ignorado na maioria das aplicações.

## Referências

- [Math.random() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

[Retornar à página principal](../../../README.md)
