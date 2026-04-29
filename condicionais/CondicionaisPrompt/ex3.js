const prompt = require("prompt-sync")()

let escolha = prompt("Fale um numero de 1 a 5 e veja sua comida: ")
switch (escolha){
  case "1":
     console.log("Pizza de sorvete")
     break
  case "2":
     console.log("Hamburger de gelatina")
     break
  case "3":
     console.log("sushi de chocolate")
     break
  case "4":
     console.log("Batata frita com calda de morango")
     break
  case "5":
     console.log("spaghetti de bala")
     break
  default:
    console.log("voce é burro")



}