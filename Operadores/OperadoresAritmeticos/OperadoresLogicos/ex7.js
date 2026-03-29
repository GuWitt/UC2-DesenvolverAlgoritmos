// nota sem recuperação 
const NF = 6
const Passado = NF >= 7
console.log("O aluno foi passado direto? " + Passado )

// como o aluno reprovou ele fez recuperção
const NR = 8
const T1 = 6.5
const T2 = 7
const T3 = 6.2

// se o aluno passou na prova de recuperação
const PassouRF = NR >= 8
console.log("O aluno foi passado na recuperação? " + PassouRF )

// se o aluno passou com trabalhos
const Tsoma = T1 + T2 + T3
const PassouT = Tsoma >= 18
console.log("O aluno foi passado nos trabalhos? " + PassouT )

// passado = true, ignora os outros

// True 
    // deve ser os dois true
    // passou com prova de recuperação = true, porque reprovou normal
    // passou com o trabalho = true, esse e com a prova deve ser true se ele nao passou direto
const AlunoPassado = Passado || PassouRF && PassouT
console.log("O aluno foi passado ? " + AlunoPassado )

// ||= ou
// &&= os dois
// passado ou passouRF com passouT