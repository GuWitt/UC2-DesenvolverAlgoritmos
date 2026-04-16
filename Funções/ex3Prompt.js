const prompt = require ("prompt-sync")({sigint: true})
function calcularArea(){
    let b = prompt("Qual a base do seu retangulo? ")
    let h = prompt("Qual a altura do seu retangulo? ")
    let Area = b * h
    console.log("A área do seu retangulo é: " + Area)
}
calcularArea()