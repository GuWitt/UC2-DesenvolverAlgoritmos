//--------------------------------------------------------
// Switch Case: Alternativa para multiplos if/else, quando comparamos o mesmo valor com vários casos
// 


let diaDaSemana = 3
switch(diaDaSemana){
    case 1:
        console.log("Hoje é segunda-feira!")
        break
    case 2:
        console.log("Hoje é terça-feira!")
        break
    case 3: 
        console.log("Hoje é quarta-feira!")
        break
    case 4:
        console.log("Hoje é quinta-feira!")
        break
    case 5:
        console.log("Hoje é sexta-feira!")
        break
    default:
        console.log("Hoje é algum dia aí!")

}

// Break evita que os proximos cases sejam executados
// o Default é executado quando nenhum case corresponde