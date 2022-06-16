
## Recomendado
---
### Eslint + Prettier (disponível no package.json)
```sh
npm i -D eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser prettier eslint-config-prettier eslint-plugin-prettier
```

## Ts-Jode (disponível no package.json)
> Caso esteja fora da pasta do projeto, recomendo instalar globalmente. Já na raiz se encontra o **code-runner** configurado, é mais simples.

```sh
npm i -g ts-node
```

## Auto-save (opcional em settings)
```json
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll": true
}
```