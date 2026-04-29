/////////////////////////////////////////////////////////////////////////
// Arrays são listas de elementos, ou uma estrutura de dados maior

const listaCompras = ["batata", "alface", "queijo"]
console.log(listaCompras)

/////////////////////////////////////////////////////////////////////////
// Arrays armazena elementos de qualquer tipo 

const meuArrayDiverso = ["banana", 15, true]
console.log(meuArrayDiverso)

/////////////////////////////////////////////////////////////////////////
// Arrays em indices para endereçar seus elementos e SEMPRE começa em 0
// const arrayFrutas = ["banana", "maça", "tomate"]
//           índices  ->   0        1         2
// para acessar este elemento, basta informar seu indice/endereço
// const segundoItem = arrayFrutas[2]

const arrayFrutas = ["banana", "maça", "tomate"]
const segundoItem = arrayFrutas[2]
console.log(segundoItem)

//////////////////////////////////////////////////////////////////////////
//  PROPRIEDADES DE ARRAY
//
//  Propriedade length: mos diz qual a quantidade de itens de um array

const pokemons = ["bulbasaur", "squirtle", "charmander"]
const quantidadeItens = pokemons.length
console.log(quantidadeItens)

///////////////////////////////////////////////////////////////////////////
//  Método: Includes 
// determine se no array contem um determinado elemento, retornando um booleando

const seriesBoas = ["Breaking Bad", "Brooklin nine-nine"]
console.log(seriesBoas.includes("Breaking Bad"))
console.log(seriesBoas.includes("Game Of Trones"))

///////////////////////////////////////////////////////////////////////////
//  Método: push
// adiciona um ou mais elementos ao FINAL de uma array

const numeros = [1, 2, 3]
numeros.push(4)
console.log(numeros)
numeros.push(5, 6, 7, 8)
console.log(numeros)

////////////////////////////////////////////////////////////////////////////
//  propriedades ou Método unshift() : adiciona um novo item no começo do array
let cores = ["azul", "verde"]
cores.unshift("vermelho")
console.log(cores)

////////////////////////////////////////////////////////////////////////////
// Método shift() : remove do começo

let frutas = ["maça", "banana","laranja",]
frutas.shift()
console.log(frutas)

////////////////////////////////////////////////////////////////////////////
//Método pop() : remove o último elemento de um array

let meusPeixes = ["palhaça","mandarim","esturjão"]
meusPeixes.pop()
console.log(meusPeixes)

////////////////////////////////////////////////////////////////////////////
// Método splice(i, n): remove n elementos a partir de i
const letras = ["A","B","C","D","E","F","G","H"]
console.log("array completa: ", letras)
let arraySemUm = letras.splice(2, 1)
console.log(arraySemUm)

let letrasSemDois = letras.splice(3, 2)
console.log("array com splice(3,2): ", letrasSemDois)

console.log("Array letras ficou assim: ", letras)

////////////////////////////////////////////////////////////////////////////
// Método concat(): junta duas arrays em uma
let frutas2 = ["maça", "banana"]
let legumes = ["cenoura", "batata"]
let alimentos = frutas2.concat(legumes)
console.log(alimentos)

////////////////////////////////////////////////////////////////////////////
// Método sort(): ordena por ordem alfabetica as strings, e por ordem crescente os numbers

let frutas3 = ["Banana", "Maça", "Bergamota", "Laranja"]
frutas3.sort()
console.log(frutas3)