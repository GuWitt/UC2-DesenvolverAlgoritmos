const prompt = require ("prompt-sync")({sigint: true})



function calculo(){
    const a = Number(prompt("digite o primeiro número: "))  
    const b = Number(prompt("digite o segundo número: "))  

    soma = a + b
    subtraca = a - b
    multiplicacao = a * b
    divisao = a / b
    modulo = a % b
    console.log("Resultados: ")
    console.log("Soma: ", soma.toFixed(2))
        console.log("Subtração: ", subtraca.toFixed(2))
        console.log("Multiplicação: ", multiplicacao.toFixed(2))
        console.log("Divisão: ", divisao.toFixed(2))
        console.log("Modulo: ", modulo.toFixed(2))
}

calculo()