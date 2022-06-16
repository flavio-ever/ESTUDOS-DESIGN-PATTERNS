import PessoaFisica from "./pessoaFisica.class";
import PessoaJuridica from "./pessoaJuridica.class";

const pessoaFisica = new PessoaFisica(44192850877, "Flavio", "Everton", "R. Jupara");
const pessoaJuridica = new PessoaJuridica(108232334242, "Flavio", "Corp", "R. Jupara");

console.log(pessoaFisica, pessoaFisica.obterNome());
console.log(pessoaJuridica, pessoaJuridica.obterNome());