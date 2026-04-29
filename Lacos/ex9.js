let num = [99, 25, 22, 34, 27, 1]
let i = 0
let number = num[0]

while (i < num.length){
   if(num[i] > number){
    number = num[i]
   }
   i++
}

console.log("O maior tesouro é " +number+ "! Você está rico!!")