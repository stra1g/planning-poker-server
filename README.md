<p align="center">
  <a href="https://www.typescriptlang.org/" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" width="200" alt="Typescript logo" /></a>
</p>

<p align="center">
  Server-side app providing a real time planning poker
</p>

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/Socket.io-010101?&style=for-the-badge&logo=Socket.io&logoColor=white" />
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" />
  <img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" />
  <img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white" />
</p>

<p align="center">
  <img src="assets/gif_insomnia.gif" width="75%"/>
</p>
<p align="center">
  <img src="assets/gif_socket.gif" width="75%"/>
</p>

## Table of contents

- [Database modeling](#database-modeling)
- [Use Cases](#use-cases)
- [Technologies](#technologies)
- [Installation](#installation)
- [Running the app](#running-the-app)
- [Tests](#tests)

## Database modeling

<p align="center">
  <img src="assets/diagram.png"/>
</p>

## Use Cases

- Users can create a player account;
- Users can create a game;
- Users can edit their game;
- Users can join games from other users;
- Users can pick card and remove cards;
- Users can reveal all cards of the round;

## Technologies

- Typescript
- Node.js
- ExpressJS
- Socket.io
- PostgreSQL
- Docker / Docker Compose
- Jest

## Installation

```bash
$ npm install
$ yarn
```

## Running the app

```bash
$ npm run start:dev
$ yarn start:dev
```

## Tests

```bash
$ npm run test
$ yarn test
```

## License

[MIT licensed](LICENSE).
