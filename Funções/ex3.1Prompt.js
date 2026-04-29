const prompt = require ("prompt-sync")({sigint: true})
function MDI(){
    let anos = prompt("Quantos anos você tem? ")
    let meses = anos * 12
    console.log(`Se você tem ${anos} anos, você já viveu aproximadamente ${meses} meses!`)
}
MDI()