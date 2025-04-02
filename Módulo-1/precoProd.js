const preco = 500
const pagamento = 'Débito'

if(pagamento == 'Débito'){
   const precoFinal = 0.9 * preco
   console.log(`Preçp Final = R$ ${precoFinal.toFixed(2)}`)
} else if(pagamento == 'Dinheiro ou PIX'){
    const precoFinal = 0.85 * preco
    console.log(`Preço Final = R$ ${precoFinal.toFixed(2)}`)
} else if(pagamento == 'Crédito 2X'){
    console.log(`Preço Final = R$ ${preco.toFixed(2)}`)
} else if(pagamento == 'Crédito > 2X'){
    const precoFinal = 1.1 * preco
    console.log(`Preço Final = R$ ${precoFinal.toFixed(2)}`)
}