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


// FOR (para)
//=============================================
for(let i = 0; i < 10; i++){
    console.log(i)
}
// explicando:
// let i = 0 -> valor inicial
// i < 5 -> condição (enquanto for verdadeira, repete)
// i++ -> incremento (aumenta 1 a cada volta)

//===========================================
// FOR (para) - com condicionais
// verificando numeros pares...e se tem multiplo de 5

// Loop de 0 a 100
for (let i = 0; i <= 100; i++){
    // par ou impar
    if(i % 2 === 0){
        console.log(i + " é par!")
    }else {
        console.log( i + " é ímpar!")
    }

    if( i !== 0 && i % 5 === 0){
        console.log( i + " é multiplo de 5")
    } else{
        console.log( i + " não é multiplo de 5")
    }
}



//===============================================================================================
// usando o for para percorrer array

let numeros5 = [14, 67, 89, 15, 23]
for(let i = 0; i < 5; i++){
    let elemento = numeros5[i]
    console.log(elemento)
}


//==============================================
// for...of...
// Definição: o loop for... of percorre arrays e objetos, alocando o valor de cada posição do array em uma variavel, permitindo executar alguma ação para cada valor distinto

// criamos uma array com alguns numeros
const numeros5 = [14, 67, 89, 15, 23]

// usamos for...of para percorrer cada numero da array 
for( let numero of numeros5){
    // aqui, dentro do loop, 'numero' é cada elemento da array, um por vez
    console.log(numero) // mostra o número no console

}
------------------------------------------------------------------------------------------------------*/
// exemplos:
// exemplo 1: escolhendo aleatoriamente um lanche

// começamos com uma array de lanches
let lanches = ["Pizza", "Arepa", "Hamburger", "Hot-dog", "pastel", "Burritos", "Batata-frita", "Nuggets", "morango", "coxinha", "sushi", "salgadinho", "sorvete"]

// vamos percorrer cada lanche e escolher um aleatorio 
for(let lanche of lanches){
    let chance = Math.random() // número aleatorio entre 0 e 1
    if(chance > 0.5){
        console.log(`vou comer ${lanche} hoje!🍽️`)
    }else{
        console.log(`Hoje não vai dar para ${lanche} 😞`)
    }
}