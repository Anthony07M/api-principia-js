# API feita para o desafio Front-end - Princípia

## Stack:

```sh
- Nodejs
- Express
- Cors
```

## Instalação

```sh
git@github.com:Anthony07M/api-principia-js.git
```

```sh
cd api-principia-js
```

```sh
npm install
```

```sh
npm start
```
```sh
localhost:3000
```

## Endpoints:
```sh
 - listando todos os dados
 - método: "GET"
 - rota: "/"
 - Retorna um array de objetos com o mês, total em aberto, total pago, inadimplência, e inadimplência em percentual. Ex:
 
 [
  {
    "month": "2022-01",
    "open": 500,
    "total": 2000,
    "paidOut": 1500,
    "inad": 0.25,
    "percent": "25%"
  },
  {
    "month": "2022-02",
    "open": 1150,
    "total": 4000,
    "paidOut": 2850,
    "inad": 0.2875,
    "percent": "29%"
  },
  {
    "month": "2022-03",
    "open": 2750,
    "total": 6100,
    "paidOut": 3350,
    "inad": 0.45081967213114754,
    "percent": "45%"
  },
  {
    "month": "2022-04",
    "open": 4400,
    "total": 8250,
    "paidOut": 3850,
    "inad": 0.5333333333333333,
    "percent": "53%"
  }
]
```
```sh
 - listando por mês
 - método: "GET"
 - rota: "/list/month/:month"
 - ex: "/list/month/2022-01"

 - Retorna um objeto com os dados do mês pesquisado.
 
 {
  "month": ":2022-01",
  "open": 500,
  "total": 2000,
  "paidOut": 1500,
  "inad": 0.25,
  "percent": "25%"
 }
```
```sh
 - atualizando status de um estudante: "/update"
 - método: "POST"
 - rota: "/update"

 objeto: {
    month,
    mat
 }

 - month: mês para fazer atualiazação e mat (matrícula) para encontrar o aluno.
 - retorna um objeto com uma mensagem ok.
 
 response => {
    msg: "ok"
 }
```
## Melhorias futuras:

```sh
 - Pesistir em um banco de dados (MongoDB, MySQL, Postgres e Etc...).
 - Usar ORM, sugestão: Prisma.
 - Refatorar para TypeScript.
 - Criar testes.
```

## URL Deploy

```sh
   https://api-principia-js.onrender.com
```
