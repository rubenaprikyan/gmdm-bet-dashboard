This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Steps to run the project

1. Install dependencies
```bash
pnpm dev
```

2. Create `.env` file from `.env.example` and insert the required values
```bash
cp .env.example .env
```

3. Run the development server
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Overview
The project uses next.js app router. Using [shadcn-ui](https://ui.shadcn.com/docs/components/accordion) for the UI components. 
[React Query](https://tanstack.com/query/latest/docs/framework/react/overview) for data fetching and state management. [Tailwind CSS](https://tailwindcss.com/) for styling.


The project is structured as follows:

- `/components` - reusable components
- `/pages` - pages (next based)
- `/utils` - utility functions
- `/containers` - container components (base containers, HOCs - ErrorHandler, ThemeContainer, QueryClientProvider etc.)
- `/api` - api interaction layer, view models
- `/hooks` - custom hooks
  - `/mutations` - hooks for mutations (update, delete, create)
  - `/queries` - hooks for fetching data

