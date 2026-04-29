let velocidade = [120, 123, 140, 170, 200, 280, 312]
let i = 0
let velo = velocidade[0]

while (i < velocidade.length){
    if(velocidade[i] > velo){
        velo = velocidade[i]
    }
    i++
}
  console.log("O corredor mais rápido atingiu " + velo + " Km/h!") 