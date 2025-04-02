function aplicarDesconto(preco, desconto){
    return preco * desconto
}
function aplicarJuros(preco, juros){
    return preco * juros
}

const preco = 100
const pagamento = 'Crédito > 2X'

if(pagamento == 'Débito'){
   console.log(aplicarDesconto(preco, 0.9).toFixed(2))
} else if(pagamento == 'Dinheiro ou PIX'){
    console.log(aplicarDesconto(preco, 0.85).toFixed(2))
} else if(pagamento == 'Crédito 2X'){
    console.log(preco)
} else if(pagamento == 'Crédito > 2X'){
    console.log(aplicarJuros(preco, 1.1).toFixed(2))
}