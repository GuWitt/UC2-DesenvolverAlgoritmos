let SO = "desligar"

function c(a){
    console.log(a)
}
switch (SO){
   case "desligar":
        c("Desligando o sistema...")
        break
   case "reiniciar":
        c("Reiniciando...")
        break
   case "suspender":
        c("Entrando em modo de economia...")
        break
   default:
     c("Comando invalido. Para ver os comandos /help")
}