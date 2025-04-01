var precoAlcool = 5.79
var precoGasolina = 6.66
var tipoCombustivel = 'Gasolina'
var kmlitro = 10
var dist = 60

if(tipoCombustivel == 'Etanol'){
    const valor = (dist / kmlitro) * precoAlcool
    console.log(`O valor gasto para realizar esta viagem é R$ ${valor.toFixed(2)}`)
} else{
    const valor = (dist / kmlitro) * precoGasolina
    console.log(`O valor gasto para realizar esta viagem é R$ ${valor.toFixed(2)}`)
}