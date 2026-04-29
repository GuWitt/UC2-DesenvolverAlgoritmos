const prompt = require ("prompt-sync")({sigint: true})
//função simples para cumprimentar o usuário
function cumprimentarUsuario(){
    let nome = prompt('Digite seu nome cara: ')
    console.log(`Olá, ${nome}! Seja bem-vindo(a) a turma TDS261T!`)
}
cumprimentarUsuario()