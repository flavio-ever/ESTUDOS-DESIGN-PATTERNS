import { Pessoa } from "./pessoa.abstract";

export default class PessoaJuridica extends Pessoa {
    testeAssinatura(teste: string): string {
        throw new Error("Method not implemented.");
    }

    private cnpj: number;

    constructor(cnpj: number, primeiroNome: string, segundoNome: string, endereco: string) {
        super(primeiroNome, segundoNome, endereco);
        this.cnpj = cnpj;
    }

    oberCnpj() {
        return this.cnpj;
    }
}