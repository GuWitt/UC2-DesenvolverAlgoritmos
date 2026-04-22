const prompt = require("prompt-sync")()

let escolha = prompt("escolha uma portal e entre nele sem volta: \n F -> Floresta \n D -> Deserto \n G -> Gelo \n ESCOLHA ESCREVENDO EM MAIUSCULO: ")
switch (escolha){
  case "F":
        console.log("Você entrou no portal da floresta, você caminhou, cortou arvores fez seu acampamento, porem quando chega a noite, é atacado por um urso, VOCÊ SOBREVIVEU 1 DIA!")
     break
  case "D":
        console.log("Você entrou no portal do deserto, você encontrou uma piramide, entrou mas tinha muitas armadilhas, bebeu agua de cacto por 2 dias, porem acabou os cactos, VOCÊ SOBREVIVEU 3 DIAS!")
     break
  case "G":
        console.log("Você parou no alasca, estava sem roupas adequadas e morreu de hipotermia, VOCÊ SOBREVIVEU 3 HORAS")
  default:
    console.log("invalido")
}