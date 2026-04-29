const prompt = require ("prompt-sync")({sigint: true})
function apelido(){ 
    const nome = prompt("Qual o nome? ")  
    const apelid = prompt("Qual animal? ")
    console.log("Uau! " + nome +" "+ apelid)
}
apelido()