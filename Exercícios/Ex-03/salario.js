const { gets, print } = require('./funcoes-auxiliares-03')

const salario = gets()
const beneficio = gets()

function imposto(porcentagem) {
    if(salario <= 1100){
        return porcentagem = 5/100
    } else if(salario > 1100 && salario <= 2500){
        return porcentagem = 10/100
    } else{
        return porcentagem = 15/100
    }
}

const valorFinal = salario - salario * imposto(salario) + beneficio


print(valorFinal)


/*if(salario <= 1100){
    const valor = salario * 0.95
    final = valor + beneficio
} else if(salario >1100 && salario <= 2500){
    const valor = salario * 0.90
    final = valor + beneficio
} else{
    const valor = salario * 0.85
    final = valor + beneficio
}

print(final)*/