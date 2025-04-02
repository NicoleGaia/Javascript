//para números aleatórios
const numeros = [42, 7, 19, 88, 3, 56, 27, 14, 65, 91, 34, 72, 8, 50, 11]

for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i]
    if(numero % 2 === 0){
        console.log(numero)
}
}

//para número sequenciais

for (let i = 0; i <= 10; i++) {
    const par = i % 2 == 0
    if(par){
        console.log(i)
    }
    
}
