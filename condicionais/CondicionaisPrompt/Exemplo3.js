// maior ou menor de idade
const prompt = require("prompt-sync")()

let idade = prompt("Qual sua idade? ")
let maior = idade >= 18 ? "Maior de idade" : "Menor de idade"
console.log(maior)