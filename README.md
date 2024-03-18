# Research React SPA

In this repository I researched React (with TypeScript) for SPA frontend development.

## Tech-Facts

Frontend (client):

- [React](https://react.dev/)
- [React Hooks](https://react.dev/reference/react/hooks)
- [React Router](https://reactrouter.com/en/main)
- [TanStack Query](https://tanstack.com/query/latest) (auto-managed API queries and mutations)
- [JSX](https://react.dev/learn/writing-markup-with-jsx)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) (local development server)
- Authorization Bearer (JWT)
- Auto Signout
- Forms (Signup/Signin, Create and Edit)
- [CSS Modules](https://vitejs.dev/guide/features.html#css-modules)
- [CSS Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)

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

# run database server up/down (optional)
# npm run db:up
# npm run db:down
```

## Prisma Studio (Database Administration)

Run Prisma Studio:

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
  10.3.0

node --version
  v20.11.0

npm --version
  10.4.0

nvm --version
  0.39.7

docker --version
  Docker version 25.0.4, build 1a576c5

code --version
  1.87.2

  Useful extensions:
    dbaeumer.vscode-eslint
    esbenp.prettier-vscode
    editorconfig.editorconfig
    ms-azuretools.vscode-docker
    prisma.prisma
    pkief.material-icon-theme
```
