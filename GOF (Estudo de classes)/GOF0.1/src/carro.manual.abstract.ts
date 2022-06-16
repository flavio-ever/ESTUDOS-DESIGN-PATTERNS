import { Carro } from "./carro.abstract";

export abstract class CarroManual extends Carro {
    protected cambio: string;
    protected marcha: string;

    constructor(cambio: string, marcha: string, rodas: string, painel: string) {
        super(rodas, painel)

        this.cambio = cambio
        this.marcha = marcha
    }

    public trocarMarcha(): void {

    }
}