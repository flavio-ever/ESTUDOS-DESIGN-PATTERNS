// Ex de agregação
export class Carro {
    // um atributo referenciando outra classe
    private motor: Motor;

    constructor(motor: Motor) {
        this.motor = motor;
    }
}

export class Motor {
    // Codigo motido
}

// Composicao
const motor = new Motor();
const carro = new Carro(motor);

console.log(carro);