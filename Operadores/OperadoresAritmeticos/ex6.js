const amigos = 3
const pizzas = 40
const refri = 12
const desconto = 10

const total = pizzas *3 + refri *2 
console.log ('total da janta foi ' + total)

const d = total * 0.10
const tComD = total - d
console.log ('com desconto o total da janta foi ' + tComD)

const pPessoa = tComD / amigos
console.log ('ou seja, por pessoa foi ' + pPessoa.toFixed(2))    

// .tofixed(2) -> arredonda as casas decimais