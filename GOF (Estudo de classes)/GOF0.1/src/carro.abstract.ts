export abstract class Carro {
    protected rodas: string
    protected painel: string

    constructor(rodas: string, painel: string) {
        this.rodas = rodas
        this.painel = painel
    }

    public getRodas(): string {
        return this.rodas
    }

    public getPainel(): string {
        return this.painel
    }

    public setAcelerar(): void {
    }

    public setFreiar(): void {
    }
}