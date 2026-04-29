const prompt = require("prompt-sync")()

// Mostra o menu e pede para o usuario escolher uma opção
let opcao = prompt("Escolha uma opção: \n 1 - Ver saldo \n 2 - Depositar \n 3 - Sair \n Digite: ")
// O switch compara o valor que o usuario vai fornecer
switch(opcao){
    case "1":
        console.log("Seu saldo é R$ 100 ")
        break
    case "2":
        console.log("Depósito realizado ")
        break
    case "3":
        console.log("Saindo...")
        break
    default:
        console.log("Por favor, selecione uma opção certa")
} 