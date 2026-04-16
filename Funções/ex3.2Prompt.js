const prompt = require ("prompt-sync")({sigint: true})
function gritar(){
    const a = prompt("Qual seu grito? ")
    let A = a.toUpperCase()
    console.log(A + "!!!!!!!!!!!!!!!!!!!!!")
}
gritar()