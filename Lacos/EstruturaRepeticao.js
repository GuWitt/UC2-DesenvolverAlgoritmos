// Estruturas de repetição (loops ou laços)
//======================================================================================================
// Definição: Permitem executar um bloco de código várias vezes enquanto uma condição for verdadeira.
//======================================================================================================
// WHILE (enquanto)
// Variável
//-------------------------------------------------------------------------------------------------------
// let I = 1

/* Estrutura While e a condição para ela executar
while (I < 10){
    console.log(I)
    I++
}  

// Exemplo 2: Lívia comendo coxinha
let estomago = 0
while(estomago < 8){
    console.log(estomago + " e Livía quer mais Coxinhas 🍗")
    estomago++
}


// Exemplo 3: Corbucci vai comer 100 coxinhas
let estomagoCorbucci = 0

while(estomagoCorbucci < 100) {
    console.log ("consigo comer mais coxinhas")
    estomagoCorbucci = estomagoCorbucci + 10
}

// WHILE (decrementar)
// Exemplo 4. Lançamento de foguete...
// contagem regressiva...

let contador = 10

while (contador >= 0 ){
    console.log(contador)
    contador--
}
------------------------------------------------------------------------------------------------------*/

//=================================================
// Percorrendo arrays com while

let alunos = ["Robersvaldo", "Greyck", "AntoniNunes", "Dieberson"]
//criamos uma variavel de controle chamada "i"
// Essa variavel vai representar a posição atual do array e começa no 0
let i = 0
//começamos um loop "while" que vai se repetir enquanto a condição for verdadeira
//a condição aqui é: "i < alunos.length"
// "alunos.length" retorna o tamanho da array
// então, enquanto "i" for mwnos que o número de alunos, o loop continua
while(i < alunos.length){
    //dentro do loop, mostramos no console o aluno da posição atual
    // "alunos[i]" acessa o elemento da array na posição "i"
    console.log(alunos[i])
    i++
}