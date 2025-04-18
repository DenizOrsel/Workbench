# Nfield Workbench - A Web app built with Next.js

## What is this project for?

If you wish to build prototypes for Nfield platform then this project provides the ground work so that you can immediately focus on what you actually want to build. Especially for hackathons, where time is limited, I believe it will be more useful.

> [!INFO]
> [`Check it out here`](https://workbench-nine.vercel.app/)

## Project's offering

- Equipped with a `/login` route featuring a simple UI to login via the Nfield API.
- Includes a protected `/dashboard` route where users are redirected upon successful login attempt.
- Implements route protection using Next.js middleware.
- Automatically refreshes tokens every 10 minutes after a user logs in.
- Supports Light/Dark Mode for better user experience.

> [!TIP]
> Token refresh is only executed under /dashboard route and in its subordinates. If you wish to change or activate the behavior on a different route ensure the refreshtoken component is added to its layout.

## Getting Started

First, install:

```bash
npm install --legacy-peer-deps
```

and then run the development server:

```bash
npm run dev
```

Open [`http://localhost:3000`](http://localhost:3000) with your browser to see the result.

## Project uses the following

- [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [`Geist`](https://vercel.com/font), a new font family for Vercel.
- [`TypeScript`](https://www.typescriptlang.org/) for type safety.
- [`Tailwind`](https://tailwindcss.com/) for CSS styles.
- [`shadcn`](https://ui.shadcn.com/) for UI component library primitives.
- [`radix-ui`](https://www.radix-ui.com/icons) for icons.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [`Next.js Documentation`](https://nextjs.org/docs) - learn about Next.js features and API.
- [`Learn Next.js`](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [`Next.js GitHub repository`](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [`Vercel Platform`](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

> [!CAUTION]
> If you want to deploy on Vercel make sure you use [`npm i --legacy-peer-deps`] on install command since project uses React 19 and libraries have still been adjusting themselves to comply.

Check out [`Next.js deployment documentation`](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
