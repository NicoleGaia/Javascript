class Carro {
    marca;
    cor;
    gastoMedioPorKm

    constructor(marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm
    }
}

function gastoCarro(km, preco, gastoMedioPorKm){
    const precoFinal = gastoMedioPorKm * km * preco
    console.log(precoFinal)
}

const carro1 = new Carro('fiat', 'branco', 2)
gastoCarro(60, 5.5, 2)