class Pessoa {
    nome;
    idade;

    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
}

function compararPessoas(p1, p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho que ${p2.nome}`)
    } else if(p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho que ${p1.nome}`)
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`)
    }
}
function diferencaIdade(p1,p2){
    if(p1.idade - p2.idade > 0){
        console.log(`A diferença de idade entre ${p1.nome} e ${p2.nome} é ${p1.idade - p2.idade}`)
    } else if(p2.idade - p1.idade > 0){
        console.log(`A diferença de idade entre ${p2.nome} e ${p1.nome} é ${p2.idade - p1.idade}`)
    } else {
        console.log(`A diferença de idade entre ${p2.nome} e ${p1.nome} é 0`)
    }
}

const Nicole = new Pessoa('Nicole', 40)
const Abner = new Pessoa('Abner', 22)

compararPessoas(Nicole, Abner)
diferencaIdade(Nicole, Abner)