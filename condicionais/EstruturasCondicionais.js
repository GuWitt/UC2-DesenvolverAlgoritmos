// ESTRUTURAS CONDICIONAIS EM JAVASCRIPT
//---------------------------------------
//Definição: Permitem executar códigos diferentes dependendo de certas condições
//---------------------------------------
/*
// IF(se)
let idade = 1
if(idade >= 18){
   console.log("Você é maior de idade.")
}
// o codigo dentro do bloco só será executado se idade for maior ou igual a 18
//---------------------------------------
// ELSE (senão)
let idade2 = 18
if(idade2 >= 18){
   console.log("Você é maior de idade.")
}else{
    console.log("Você é menor de idade!")
}
*/
// O else é executado apenas quando a condição do if é falsa
//---------------------------------------
// ELSE IF (senão se)
let nota = 49
if(nota >= 90){
    console.log("Parabéns! Você não é um cavaloo, e tirou A")
}else if(nota >= 70){
    console.log("Você tirou B.")
}else if (nota >= 50){
    console.log("Você tirou C.")
}else{
    console.log("Como você é burro cara que loucura!! Você tirou D")
}
//--------------------------------------------------------
// OPERADORES LOGICOS
// podemos combinar condições usando operadores:
// && -> E
// || -> OU
// ! -> NÃO
let idade3 = 20
let temCarteira = true
if(idade3 >= 18 && temCarteira){
    console.log("pode dirigir!!")
}else{
    console.log("não pode!!")
}
