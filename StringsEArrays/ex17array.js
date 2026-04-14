function GG(){
    console.log(animais)
}


let animais = ["cachorro","gato","coelho"]
GG()

animais.push("elefante")
GG()

animais.unshift("leão")
GG()

animais.shift()
GG()

animais.pop()
GG()

let novosAnimais = ["jaguatirica","capivara"]
let animais2 = animais.concat(novosAnimais)
console.log(animais2)