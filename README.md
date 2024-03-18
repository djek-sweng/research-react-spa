# Research React SPA

In this repository I researched React (with TypeScript) for SPA frontend development.

## Tech-Facts

Frontend (client):

- [React](https://react.dev/)
- [ReactRouter](https://reactrouter.com/en/main)
- [TanStack Query](https://tanstack.com/query/latest) (auto-managed API queries and mutations)
- [JSX](https://react.dev/learn/writing-markup-with-jsx)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) (local development server)
- [CSS Modules](https://vitejs.dev/guide/features.html#css-modules)
- [CSS Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
- Authorization Bearer (JWT)
- Signup/Signin Forms
- Auto Signout

Backend (server):

- [NestJS API](./src/server/)

Database (docker):

- [PostgreSQL](./src/server/docker/postgres/docker-compose.yml)

## Start React SPA

Install modules and start application:

```sh
cd ./src/client

# clean
rm -rf dist node_modules

# install
npm install

# run spa
npm run dev
```

## Start NestJS API

Install modules, run database and start application:

```sh
cd ./src/server

# clean
rm -rf dist node_modules

# install
npm install

# run database server
npm run db:restart

# run api server
npm run start
```

## PostgreSQL inside Docker

```sh
cd ./src/server

# docker compose up/down
npm run db:up
npm run db:down

npm run db:restart
```

## Prisma Studio (Database Administration)

```sh
cd ./src/server

# run prisma studio
npm run prisma:studio
```

Open Prisma web UI: [Prisma Studio](http://localhost:5555/)

## Adminer (Database Administration)

Open Adminer web UI: [Adminer](http://localhost:4200/)

Login:

- System: PostgreSQL
- Server: db-dev
- Username: root
- Password: pasSworD
- Database: nestjs-api

## Swagger (OpenAPI interface)

Open Swagger web UI: [Swagger](http://localhost:5000/swagger/)

## Toolchain Requirements and Versions

```sh
nest --version
  xx

node --version
  xx

npm --version
  xx

nvm --version
  xx

docker --version
  xx

code --version
  xx

  Useful extensions:
    archsense.architecture-view-nestjs
    prisma.prisma
    ms-azuretools.vscode-docker
    esbenp.prettier-vscode
    editorconfig.editorconfig
    pkief.material-icon-theme
```
