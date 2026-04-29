let heroi1 = " Naruto"
let heroi2 = " Deku"

let heroi11 = (heroi1.trim())
let heroi21 = (heroi2.trim())

let heroi12 = (heroi11.toUpperCase())
let heroi22 = (heroi21.toLowerCase())

let frase = "Naruto encontra deku no mundo ninja!"
let frase1 = frase.replaceAll("deku", heroi21)

let result = (frase.includes("Naruto")) 

console.log(frase1, result)