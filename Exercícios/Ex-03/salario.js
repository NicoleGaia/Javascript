const { gets, print } = require('./funcoes-auxiliares-03')

const salario = gets()
const beneficio = gets()

if(salario <= 1100){
    const valor = salario * 0.95
    final = valor + beneficio
} else if(salario >1100 && salario <= 2500){
    const valor = salario * 0.90
    final = valor + beneficio
} else{
    const valor = salario * 0.85
    final = valor + beneficio
}

print(final)