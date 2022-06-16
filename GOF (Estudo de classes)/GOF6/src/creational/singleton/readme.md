# GOF: Singleton

## Intenção
Garantir que uma classe tenha somente uma instância no programa e fornecer um ponto de acesso global para a mesma.

## Aplicabilidade
- Use o singleton quando uma classe precisa ter somente uma instância disponivel em todo o seu programa
- Use singleton quando perceber que está usando variáveis globais para manter partes importantes do programa, como variáveis de configuração que são usadas por toda a aplicação

## Consequencias

| Bom                                                                  | Rum                                           |
| :------------------------------------------------------------------- | :-------------------------------------------- |
| Acesso controlado à instancia única                                  | É mais difícil de testar                      |
| É fácil de permitir um número maior de instâncias caso mude de ideia | Viola os principios de responsabilidade única |
| Usa lazy instantiation, o singleton só é criado no momento do uso | Requer tratamento especial em caso de concorrência
Substitui variáveis globais | Erich Gamma (autor) descreveu que este seria o único padrão que ele removeria se fosse refatorar o livro [bit.ly/nosingleton](https://bityli.com/IvinJ)