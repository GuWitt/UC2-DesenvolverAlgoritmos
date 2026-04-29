let ataques = "  kamehameha, genki-dama, kaioken, spirit bomb "

const ataquese = (ataques.trim())

const ataquesM = (ataquese.toUpperCase())

const ataquesI = ataquesM.replaceAll(",", "|")
const ataquesSB = ataquesI.includes("SPIRIT BOMB")
const numb = (ataquesM.length)

console.log(ataques)
console.log(ataquese)
console.log(ataquesM)
console.log(ataquesI)
console.log(ataquesSB)
console.log(numb)