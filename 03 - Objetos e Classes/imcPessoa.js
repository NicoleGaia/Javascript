class Pessoa{
    nome;
    peso;
    altura

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso
        this.altura = altura
    }
    calcularImc(){
        return this.peso / Math.pow(this.altura,2)
    }
    classificarImc(){
        if(this.calcularImc() < 18.5){
            return 'Abaixo do peso!'
        } else if(this.calcularImc() >= 18.5 && this.calcularImc() < 25){
            return 'Peso Normal!'
        } else if(this.calcularImc() >= 25 && this.calcularImc() < 30){
            return 'Obesidade!'
        } else{
            return 'Obesidade Grave!'
        }
    }
}

const jose = new Pessoa('José', 70, 1.75)
console.log(`O IMC de ${jose.nome} é ` + jose.calcularImc().toFixed(2) +
`, visto que possui ${jose.peso} Kg e ${jose.altura} m`)
console.log(`Portanto, a classificação do IMC de ${jose.nome} é ` + jose.classificarImc())

const nicole = new Pessoa('Nicole', 66, 1.68)
console.log(`\nO IMC de ${nicole.nome} é ` + nicole.calcularImc().toFixed(2) +
`, visto que possui ${nicole.peso} Kg e ${nicole.altura} m`)
console.log(`Portanto, a classificação do IMC de ${nicole.nome} é ` + nicole.classificarImc())