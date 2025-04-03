/*const funcoes = require('./funcoes-auxiliares'
)

console.log(funcoes.gets())*/

// Object desctruction

const { gets, print } = require('./maiorNum')

const numSorteados = []

for (let i = 0; i < 5; i++) {
    const numSorteado = gets()
    numSorteados.push(numSorteado)
    
}
let maiorValor = 0

for (let i = 0; i < numSorteados.length; i++) {
    const numSorteado = numSorteados[i]
    if(numSorteado > maiorValor){
        maiorValor = numSorteado
    }
}

print(maiorValor)
print(numSorteados)
