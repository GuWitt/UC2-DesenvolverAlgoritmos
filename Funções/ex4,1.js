// toda vez que colocar cl(variavel) ele imprime
function cl(a){
    console.log(a)
}


// ele executa de cima para baixo, ou seja, o cl(a) foi rodado primeiro
function Converter(Reais, Bolivar, dolar, Euro){
    cl("R$"+Reais + " São: ")
    const CB = Reais * Bolivar
    cl("BOLIVAR: ¢"+CB.toFixed(2)) // console.log(CB) = cl(CB)
    const CD = Reais * dolar
    cl("DOLÁR : $"+CD.toFixed(2)) // console.log(CD) = cl(CD)
    const CE = Reais * Euro
    cl("EURO : £" +CE.toFixed(2)) // console.log(CE) = cl(CE)
}
Converter(3000, 95.5, 0.20, 0.17)



