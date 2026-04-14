// Funções :
// Uma função é um bloco de código que executa uma tarefa expecifica.
// 
// Recebe algo(entrada ou parâmetros)
// Processa algo
// Entrega um resultado (saída ou retorno)

////////////////////////////////////////////////////////////////////
// 1. Função Declarada (sem parametro)
//Declarando a função
function imprimirOlaMundo(){
    console.log("Olá Mundo!!") // ação da função
}

//chamada da função para executar
imprimirOlaMundo()
////////////////////////////////////////////////////////////////////
// 2. Função com parametros
// Podemos passar informações para a função. Essas informações são os parametros que ela vai precisar para executar sua tarefa.
//////////
// Função que soma dois numeros
function somar(a,b){
    return a + b
}
// chamada da função
let resultado = somar(5,3)
console.log(resultado)

let resultado2 = somar(3256,4839)
console.log(resultado2)
