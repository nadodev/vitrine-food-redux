# Aplicação de Carrinho de Compras

Esta é uma aplicação de carrinho de compras desenvolvida com React, Vite, TypeScript e Redux Toolkit. A aplicação consiste em um menu onde os itens podem ser adicionados ao carrinho de compras e o estado do carrinho é salvo no local storage do navegador.

## Funcionalidades

- **Menu de Produtos:** Lista de produtos disponíveis para compra.
- **Carrinho de Compras:** Exibe os itens adicionados ao carrinho, permitindo a remoção de itens.
- **Persistência do Estado:** O conteúdo do carrinho de compras é salvo no local storage, permitindo que o estado seja mantido mesmo após a atualização ou fechamento do navegador.

## Tecnologias Utilizadas

- **React:** Biblioteca JavaScript para construção de interfaces de usuário.
- **Vite:** Ferramenta de build rápida para desenvolvimento de front-end.
- **TypeScript:** Superset do JavaScript que adiciona tipos estáticos.
- **Redux Toolkit:** Conjunto de ferramentas para simplificar o uso do Redux na gestão de estados.

## Requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/nadodev/vitrine-food-redux.git
cd vitrine-food-redux
```
## Instale as dependências:
```javascript
npm install
```
ou
```javascript
yarn install
```

## Executando a Aplicação
### Para iniciar a aplicação em modo de desenvolvimento, utilize o comando:

```javascript 
npm run dev
```

### A aplicação estará disponível em http://localhost:3000.

## Estrutura do Projeto
- src/
- components/: Componentes reutilizáveis da aplicação.
- features/: Funcionalidades específicas da aplicação (ex: carrinho de compras).
- app/: Configuração da store do Redux.
- utils/: Utilitários e funções auxiliares.
- App.tsx: Componente principal da aplicação.
- main.tsx: Ponto de entrada da aplicação.
## Scripts Disponíveis
- dev: Inicia a aplicação em modo de desenvolvimento.
- build: Cria a build de produção da aplicação.
- serve: Serve a aplicação em modo de produção.
## Contribuindo
Se você deseja contribuir para o projeto, sinta-se à vontade para abrir issues ou enviar pull requests. Toda ajuda é bem-vinda!

## Licença
Este projeto está licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.

Contato
Se você tiver alguma dúvida ou sugestão, sinta-se à vontade para entrar em contato:

- Email: seu-email@example.com
- GitHub: seu-usuario
