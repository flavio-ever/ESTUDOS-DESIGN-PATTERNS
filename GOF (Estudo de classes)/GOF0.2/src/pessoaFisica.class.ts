import { Pessoa } from "./pessoa.abstract";

export default class PessoaFisica extends Pessoa {
    testeAssinatura(teste: string): string {
        throw new Error("Method not implemented.");
    }

    private cpf: number;

    constructor(cpf: number, primeiroNome: string, segundoNome: string, endereco: string) {
        super(primeiroNome, segundoNome, endereco);
        this.cpf = cpf;
    }

    oberCpf() {
        return this.cpf;
    }
}