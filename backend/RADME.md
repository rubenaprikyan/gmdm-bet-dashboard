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

Make sure you have docker installed on your machine and running the daemon

```bash
pnpm run docker-up
```

To run the backend api, you need to create `.env` folder in the root of project, use `.env.example` as reference and fill actual values.

### Run the backend api

```bash
pnpm run api-dev
```

### Files Structure

`/docker` - includes docker configuration files for database and might have deployment scripts as well

`/config` - includes config files. `route.ts` - config variables object parsed from `.env`

`route.ts` - the entry point, creates server, database connection, injects app level middlewares, routes
