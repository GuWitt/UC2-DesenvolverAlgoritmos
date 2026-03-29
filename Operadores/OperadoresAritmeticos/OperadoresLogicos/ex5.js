//Vamos verificar se uma pessoa pode jogar um jogo de vídeo game. Ela precisa ter um controle ou o console conectado à TV para jogar.
const controle = false
const cHDMI = true

const podejogar = cHDMI && controle

console.log(podejogar)