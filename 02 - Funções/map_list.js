class Pessoa {
    constructor(nome) {
        this.name = nome
    }
}

const lista = [new Pessoa ('Nicole'), new Pessoa ('Lucas'), new Pessoa ('Ana'), new Pessoa ('João')]

const lista2 = lista.map((pessoa, i) => {
    return `${i + 1} - ${pessoa.name}`
})

console.log(lista2)