// soma
const primeirovalor = 10
const segundoValor = 20

const resultado = primeirovalor + segundoValor + 4
console.log(resultado) // 34 

// subtração

const primeirovalor2 = 10
const segundoValor2 = 20

const resultado2 = primeirovalor2 - segundoValor2
console.log(resultado2) 

//multiplicação

const primeirovalor3 = 10
const segundoValor3 = 25

const resultado3 = primeirovalor3 * segundoValor3
console.log(resultado3) 

//divisão

const primeirovalor4 = 345
const segundoValor4 = 10

const resultado4 = primeirovalor4 / segundoValor4
console.log(resultado4) 

/* comparadores
igual: ===
diferente: !==
maior e maior igual: > e >=
menor e menor igual: < e <= */

"1" === "2" // false, são diferentes
"2" === "2" // true, são iguais
2 === "2" // false, tipo diferente

const condicao = 1 === 2
// o valor que sai da comparação
// pode ser guardado em uma variavel
// nesse caso, condicao === false

"1" !== "2" // true, são diferentes
"2" !== "2" // false, são iguais
2 !== "2" // true, tipo diferente

const condicao2 = 1 !== 2 // true

1 > 2 // false, pq 1<2
2 > 2 // false, pq 2 = 2
3 > 2 // true, pq 3 > 2

1 >= 2 // false, pq 1 > 2
2 >= 2 // true, pq 2 = 2
3 >= 2 // true, pq 3 > 2