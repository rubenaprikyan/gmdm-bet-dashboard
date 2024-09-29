## Project Overview
The project is a simple REST API for a sport events application. Structured in a way that it can be easily extended to include more features.
[Postman Collection](./docs/gmdm-api.postman_collection.json)

## How to run the project

To work with the back-end project please go to the `/backend` folder in your terminal

```bash
cd backend
```

### Install Dependencies

```bash
pnpm install
```

### Create `.env` file from `.env.example`

```bash
cp .env.example .env
```

### Run database instance

Make sure you have docker installed on your machine and running the daemon, alternatively you can use remote database by changing the connection string in `.env` file.

```bash
pnpm run docker-up
```
Use `docker-down` command to stop the database instance.

### Migrate the Database

```bash
npx prisma db push
```

### Seed the Database
```bash
npx prisma db seed
```
The seed script will create sample events and sample user in the database with predefined password and email.

## To open Postgres Admin, run the following command in your terminal

1. Open the browser and go to `localhost:5050`
2. Run the following command to get the IP address of the docker container
```bash
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' docker-postgres-1
```

And register the IP address in the browser with the port 5050:80

### Run the backend api

To run the backend api, make sure you already have `.env`  file in the root of project, use `.env.example` as reference, find the helper command above.

```bash
pnpm run api-dev
```

### Project Overview

The project uses [Prisma ORM](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/querying-the-database-typescript-postgresql),
All models definitions are inside the `prisma/schema.prisma` file. The same folder has `seed.ts` file which includes samples of data to use during seeding the database.

The project is structured as follows:

`/docker` - includes docker configuration files for database and might have deployment scripts as well

`/config` - includes config files. `route.ts` - config variables object parsed from `.env`

`/middlewares` - includes app level middlewares

`/routes` - includes all the routes

`/database` - includes database  (prisma client)

`/services` - includes all the services

`/controllers` - includes all controllers

`types.ts` - includes all general  types

`index.ts` - the entry point, creates server, database connection, injects app level middlewares, routes


Happy Coding !
