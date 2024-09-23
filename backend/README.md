## How to run the project

To work with the back-end project please go to the /backend folder in your terminal

```bash
cd backend
```

### Install Dependencies

```bash
pnpm install
```

### Run database instance

Make sure you have docker installed on your machine and running the daemon, alternatively you can use remote database by changing the connection string in `.env` file.

```bash
pnpm run docker-up
```
Use `docker-down` command to stop the database instance.

### Migrate the Database

```bash
npx prisma migrate dev
```

### Seed the Database
```bash
npx prisma db seed
```

## To open Postgres Admin, run the following command in your terminal

1. Open the browser and go to `localhost:5050`
2. Run the following command to get the IP address of the docker container
```bash
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' docker-postgres-1
```

And register the IP address in the browser with the port 5050:80

### Run the backend api

To run the backend api, you need to create `.env` folder in the root of project, use `.env.example` as reference and fill actual values.

```bash
pnpm run api-dev
```

### Files Structure

The project uses [Prisma ORM](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/querying-the-database-typescript-postgresql),
All models definitions are inside the `prisma/schema.prisma` file. The same folder has `seed.ts` file which includes samples of data to use during seeding the database.


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
