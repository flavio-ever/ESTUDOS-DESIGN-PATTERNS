## "Toda **arquitetura** é um **design pattern**, mas todo **design pattern** não pode ser uma arquitetura"

## Objetivo
Reunir todas as minhas pesquisas e conhecimentos sobre engenharia/arquitetura de sofware. Principios e Patterns

## Conteúdo
Typescript, UML e Readme

## Solid Principles
- [S] - Single-responsiblity Principle
- [O] - Open-closed Principle
- [L] - Liskov Substitution Principle
- [I] - Interface Segregation Principle
- [D] - Dependency Inversion Principle

## GoF Patterns

### Criacional
- Singleton: assegura que somente um objeto de uma determinada classe seja criado em todo o projeto
- Abstract Factory: permite que um cliente crie famílias de objetos sem especificar suas classes concretas
- Builder: encapsular a construção de um produto e permitir que ele seja construído em etapas
- Prototype: permite você criar novas instancias simplesmente copiando instancias existentes
- Factory Mathod: as subclasses decidem quais classes concretas serão criadas.

### Estruturais
- Decorator: envelopa um objeto para fornecer novos comportamentos
- Proxy: envelopa um objeto para controlar o acesso a ele
- FlyWeigth: uma instancia de uma classe pode ser usada para fornecer muitas “instancias virtuais”
- Facade: simplifica a interface de um conjunto de classes
- Composite: Os clientes tratam as coleções de objetos e os objetos individuais de maneira uniforme
- Bridge: permite criar uma ponte para variar não apenas a sua implementação, como também as suas abstrações
- Adapter: envelopa um objeto e fornece a ele uma interface diferente

### Comportamental
- Template Method: As subclasses decidem como implementar os passos de um algoritimo
- Visitor: permite acrescentar novos recursos a um composto de objetos e o encapsulamento não é importante
- Command: encapsula uma solicitação como um objeto
- Strategy: encapsula comportamentos intercambiáveis e usa a delegação para decidir qual deles será usado
- Chair of Responsability: permite dar a mais de um objeto a oportunidade de processar uma solicitação
- Iterator: fornece uma maneira de acessar seqüencialmente uma coleção de objetos sem expor a sua implementação
- Mediator: centraliza operações complexas de comunicação e controle entre objetos relacionados
- Memento: permite restaurar um objeto a um dos seus estados prévios, por exemplo, quando o usuário seleciona um “desfazer”
- Interpreter: permite construir um intérprete para uma linguagem
- State: encapsula comportamentos baseados em estados e usa a delegação para alternar comportamentos
- Observer: permite notificar outros objetos quando ocorre uma mudança de estado

## Design system e Design pattern
- **Principle**: We should teach others in order to educate ourselves as well as others, and overall make our nation a progressive nation.
- **Pattern**: In our country, each medical doctor graduate is supposed to teach 6 months in a far-away village to complete his/her degree.

> Note: To some extent, we can refer principles as a set of rules that we can follow in every step of programming, but patterns are a set of structured solutions for some specific problems that we may face during coding -not always happening.

## Links e Créditos
- [Otávio Miranda](https://www.youtube.com/channel/UCORZcu08VQiRCKpVGHTWwAA)
- [Solid POO](https://blog.betrybe.com/linguagem-de-programacao/solid-cinco-principios-poo/)
- [Design Principle Solid POO](https://www.zup.com.br/blog/design-principle-solid)
- [GOF](https://www.devmedia.com.br/design-patterns-padroes-gof/16781)
- [Design Pattern x Design System](https://stackoverflow.com/questions/31317141/whats-the-difference-between-design-patterns-and-design-principles)