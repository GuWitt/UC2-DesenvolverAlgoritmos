const prompt = require("prompt-sync")()

let codigo = Number(prompt("Codigo secreto do laboratorio: "))
let acesso = codigo === 777 ? "Acesso liberado" : "Acesso negado, INICIANDO ALARME DE SEGURANÇA..."
console.log(acesso)