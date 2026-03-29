// Vamos verificar se um usuário tem acesso a uma área restrita. Ele precisa estar logado e ter permissão de administrador.
const logado = true 
const pADM = true

const AR = logado && pADM
console.log(AR)