function adicao(x, y){
    return x + y
}

function subtracao(x, y){
    return x - y
}

function multiplicacao(x, y){
    return x * y
}

function divisao(x, y){
    return x / y
}

function calcular(operacao, x, y){
    return operacao(x, y)
}

console.log(calcular(multiplicacao, 5, 3).toFixed(2))