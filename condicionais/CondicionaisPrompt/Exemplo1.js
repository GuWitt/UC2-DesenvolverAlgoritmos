// VERIFICANDO SE UM NUMERO É PAR OU IMPAR
const prompt = require("prompt-sync")()

let numero = Number(prompt("Digite um número: "))

// condicionais if/else
if(numero % 2 === 0){
     console.log("Esse número é par!")
}else{
    console.log("esse número é ímpar!")
}