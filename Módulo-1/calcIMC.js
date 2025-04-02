const peso = 65.5
const altura = 1.68
const IMC = peso / (altura * altura)

if(IMC < 18.5){
    console.log(`IMC = ${IMC.toFixed(2)} - Abaixo do peso!`)
} else if(IMC >= 18.5 && IMC < 25){
    console.log(`IMC = ${IMC.toFixed(2)} - Peso normal!`)
} else if(IMC >= 25 && IMC < 30){
    console.log(`IMC = ${IMC.toFixed(2)} - Acima do peso!`)
} else if(IMC >= 30 && IMC < 40){
    console.log(`IMC = ${IMC.toFixed(2)} - Obeso!`)
} else {
    console.log(`IMC = ${IMC.toFixed} - Obesidade grave!`)
}