const {gets, print} = require('./funcoes-auxiliares-ex02')

const nums = gets()
let maior = 0
let menor = 0

for (let i = 0; i < nums; i++) {
    const n = gets()

    if(n % 2 === 0){
        if(n > maior){
        maior = n
        }
    } else if(!n % 2 === 0) {
        if(menor === 0){
        menor = n
        } else if(n < menor){
            menor = n
        }
    }

}

print('Maior número par: ' + maior)
print('Menor número ímpar: ' + menor)