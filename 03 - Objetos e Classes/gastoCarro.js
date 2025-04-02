class Carro {
    marca;
    cor;
    gastoMedioPorKm

    constructor(marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm
    }

    gastoCarro(km, preco){
        return km * this.gastoMedioPorKm * preco
    }
}

const Uno = new Carro('Fiat', 'Prata', 1/12)
console.log((Uno.marca) + ' - ' + (Uno.cor) + ' - ' + 'R$ ' + (Uno.gastoCarro(60, 5.5)).toFixed(2))

const Palio = new Carro('Fiat', 'Preto', 1/10)
console.log((Palio.marca) + ' - ' + (Palio.cor) + ' - ' + 'R$ ' + (Palio.gastoCarro(80, 5.5)).toFixed(2))