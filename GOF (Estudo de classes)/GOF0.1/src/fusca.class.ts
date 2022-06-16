import { CarroManual } from "./carro.manual.abstract";

export class Fusca extends CarroManual {
    private cor: string;

    constructor(cor: string, cambio: string, marcha: string, rodas: string, painel: string) {
        super(cambio, marcha, rodas, painel);

        this.cor = cor;
    }

    public getCor(): string {
        return this.cor;
    }
}