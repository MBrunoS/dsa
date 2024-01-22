# Array Dinâmico

[![en](https://img.shields.io/badge/lang-en-red.svg)](./README.md)

Um array é uma coleção de elementos do mesmo tipo, armazenados em locais de memória contíguos. Os elementos de um array podem ser acessados por seu índice. O índice do primeiro elemento é 0, o índice do segundo elemento é 1, e assim por diante.

Uma desvantagem dos arrays é que seu tamanho é fixo. Isso significa que, uma vez criado um array, seu tamanho não pode ser alterado. É aqui que entram os arrays dinâmicos. Um array dinâmico é um array que pode crescer e diminuir conforme necessário.

Em JavaScript/TypeScript, os arrays são dinâmicos por padrão. Isso significa que eles podem crescer e diminuir conforme necessário, sem a necessidade de especificar seu tamanho antecipadamente. No entanto, isso não ocorre em outras linguagens, como C++ e Java, onde os arrays são estáticos e seu tamanho deve ser especificado antes de usá-los.

## Detalhes de Implementação

Por baixo dos panos, um array dinâmico é implementado usando um array estático. Quando o array está cheio, um novo array é criado com um tamanho maior, e os elementos do array antigo são copiados para o novo array. Esta é uma operação cara, pois requer a alocação de um novo array e a cópia de todos os elementos do array antigo para o novo array. É por isso que é importante escolher um bom fator de crescimento para o array dinâmico.

O mesmo se aplica quando o array é reduzido. Se o array estiver menos de 25% cheio, então seu tamanho é reduzido pela metade. Esta também é uma operação cara, pois requer a alocação de um novo array e a cópia de todos os elementos do array antigo para o novo array.

## Complexidade de Tempo

No pior caso, a complexidade de tempo das seguintes operações é:

| Operação | Complexidade de Tempo |
| -------- | --------------------- |
| Acesso   | O(1)                  |
| Busca    | O(n)                  |
| Inserção | O(n)                  |
| Remoção  | O(n)                  |

Mas considerando a complexidade de tempo amortizada, a complexidade de tempo das seguintes operações é:

| Operação | Complexidade de Tempo |
| -------- | --------------------- |
| Acesso   | O(1)                  |
| Busca    | O(n)                  |
| Inserção | O(1)                  |
| Remoção  | O(1)                  |

Isso ocorre porque a complexidade de tempo amortizada das operações `push` e `pop` é O(1), já que elas só são caras quando o array está cheio ou vazio, respectivamente.

## Complexidade de Espaço

A complexidade de espaço de um array dinâmico é O(n), onde n é o número de elementos no array.
