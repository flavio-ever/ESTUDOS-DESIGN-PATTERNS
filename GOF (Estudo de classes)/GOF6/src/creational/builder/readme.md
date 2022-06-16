# GOF: Builder

## Intenção
Separar a construção de um objeto complexo da sua representação de modo que o mesmo processo de construção possa criar diferentes representações.

## Uso
Se você precisa instanciar ex. 3...5 objetos para criar um final é porque esse objeto precisa de um builder e/ou factory.

## Aplicabilidade
- Use o Builder quando a criação do objeto se torna complexa
- Use o Builder quando quiser que o código seja capaz de gerar diferentes representações do mesmo objeto

## Consequencias

| Bom                                              | Rum                                          |
| :----------------------------------------------- | :------------------------------------------- |
| O cliente não precisa criar objetos diretamente  | O código final pode se tornar muito complexo |
| O mesmo código pode construir objetos diferentes |
| Ajuda na aplicação dos princípios SRP e OCP      |