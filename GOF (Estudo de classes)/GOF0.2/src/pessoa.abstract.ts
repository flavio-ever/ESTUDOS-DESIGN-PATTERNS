export abstract class Pessoa {
    private primeiroNome: string;
    private segundoNome: string;
    private endereco: string;

    constructor(primeiroNome: string, segundoNome: string, endereco: string) {
        this.primeiroNome = primeiroNome;
        this.segundoNome = segundoNome;
        this.endereco = endereco;
    }

    obterNome(): string{
        return `${this.primeiroNome} ${this.segundoNome}`;
    }

    obterEndereco(): string {
        return this.endereco;
    }

    abstract testeAssinatura(teste: string): string;
}