const prompt = require ("prompt-sync")({sigint: true})
function poder(){ 
    const superpoder = prompt("Qual seu superpoder favorito? ")  
     console.log("Uau! Ser capaz de " + superpoder + " seria incrivel! ")
}
poder()