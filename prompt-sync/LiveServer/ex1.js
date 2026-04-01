// exercicio 1: combinação de poderes
let poder1 = prompt("Escolha seu primeiro poder (fogo, gelo, raio):")
let poder2 = prompt ("Escolha seu segundo poder para combinar: ")
// cristais
let cristais1 = prompt ("vai usar quantos cristais para ativar o poder " + poder1 + "?")
let cristais2 = prompt ("vai usar quantos cristais para ativar o poder " + poder2 + "?")
//converter para numeros
cristais1 = Number(cristais1)
cristais2 = Number(cristais2)

let totalCR = cristais1 + cristais2

alert("você combinou os poderes " + poder1 + " e " + poder2 + " usando " +totalCR+ " cristais mágicos no total.")
