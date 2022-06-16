# GOF: Prototype

## Intenção
Especificar os tipos de objetos a serem criados usando uma instância-protótipo e criar novos objetos pela cópia desse protótipo.

## Aplicabilidade
- Precisar que seu código não dependa de classes concretas para a criação de novos objetos
- Quiser evitar explosão de subclasses para objetos muito similares
- Quiser evitar a recriação de objetos "caros" ou "complexos"

## Consequencias

| Bom                                            | Rum                                                                                 |
| :--------------------------------------------- | :---------------------------------------------------------------------------------- |
| Oculta classes concretas do código cliente     | Clonar objetos que que tem referências para outros objetos pode ser super complexo\ |
| Ajuda na criação de objetos caros ou complexos |
| Evita a explosão de subclasses                 |