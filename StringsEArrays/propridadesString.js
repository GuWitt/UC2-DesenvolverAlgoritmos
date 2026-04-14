// A propriedade length nos diz qual é o tamanho de uma string, incluindo os espaços 

const nome = "João Naosei Cavaaalooo da Silva"
console.log(nome.length) // 31

const nome2 = "Monkey D. Luffy"
console.log(nome2.length) // 15

////////////////////////////////////////////////////////////////////
// Método: ToLowerCase()
// transforma todas as letras em minuscula

const frase = "O DiA EsTa LiNdO dEmAiS!"
const fraseMinuscula = frase.toLocaleLowerCase()
console.log(fraseMinuscula)

////////////////////////////////////////////////////////////////////
// Método: toUpperCase()
// transforma todas as letras em maiuscula

const frase2 = "O DiA EsTa TeRmInAnDo!"
const fraseMinuscula2 = frase2.toLocaleUpperCase()
console.log(fraseMinuscula2)

////////////////////////////////////////////////////////////////////
// Método: Trim()
// retira espaços que existem antes e depois da string

const email = "              sanaquinho@senacrs.edu.br                    "
console.log(email.trim())

////////////////////////////////////////////////////////////////////
// Método: includes()
// diz se no texto existe ou nao a palavra solicitada

const frase3 = "Hoje comi feijão com farinha"
console.log(frase3.includes("cenoura"))
console.log(frase3.includes("feijão"))


const frase4 = "A força de um guerreiro não vem de vencer sozinho, mas de nunca desistir de lutar pelo que acredita."
console.log(frase4.includes("guerreiro"))
console.log(frase4.includes("desiste"))
console.log(frase4.includes("luta"))
console.log(frase4.includes("acreditar"))
////////////////////////////////////////////////////////////////////
// Método: replaceAll(chars1, chars2)
// troca as palavras por outras

const frase5 = "A melhor plataforma para jogar video games é o Switch, sem nem duvidas, o Switch é muito bom"
const novafrase5 = frase5.replaceAll("Switch", "PC")
console.log(novafrase5)