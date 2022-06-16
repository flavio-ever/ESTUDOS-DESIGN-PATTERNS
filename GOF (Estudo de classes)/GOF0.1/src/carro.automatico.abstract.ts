import { Carro } from "./carro.abstract"

export abstract class CarroAutomatico extends Carro {
    protected cambioAutomatico: string
    protected modoDirecao: string

    constructor(cambioAutomatico: string, modoDirecao: string, rodas: string, painel: string) {
        super(rodas, painel)
        this.cambioAutomatico = cambioAutomatico
        this.modoDirecao = modoDirecao
    }

    protected trocarModoDirecao(): void {

    }

    protected trocarMarchaAuto(): void {

    }

    protected trocarMarca(): void {

    }
}