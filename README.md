# fly-deploy-demo

## Prerequisites

* Create an Account at https://fly.io
* Install and Authenticate the CLI https://fly.io/docs/flyctl/

0. Checkout `thursday-tryout`. main contains the "solution".
1. Run `fly launch` in the repo root.
2. Follow the steps, say YES to a postgres instance and NO to Redis cache
3. Save the connection string that is logged somewhere you'll need it later
4. When everything is up and running follow https://fly.io/docs/postgres/connecting/connecting-external/ to make your DB externally accessible. Do this in the ./fly-deploy-demo-db folder
5. Create a .env file in the repo root put in the public connection string in DATABASE_URL env var.
6. Run `npx prisma db seed` to seed the database
7. Visit the page and look at your ducks.

---
🐣🐣🦆
---

# Next Readme:

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
