This is Next.js Sanity CMS Tailwind CSS started template.

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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Page structures

You can start editing the page by modifying `pages/`. The page auto-updates as you edit the file.

```bash
# Components contains all components for project and main Layout.tsx file
components
  -- layout.tsx

# Pages all pages what you are want to use on project
pages/page-name.tsx

# Styles folder includes Tailwind CSS config
styles/globals.css
```

## Integrate Sanity CMS with Next.js

Now, we need to install few plugins which is called next-sanity and nex-sanity-image These plugins are needed so that we can call the API easily and to render images proeprl

```bash
## Run command in terminal
npm install next-sanity
npm install next-sanity-image

# or
yarn add next-sanity
yarn add next-sanity-image

```

Follow this instruction: [https://www.sanity.io/guides/sanity-nextjs-tailwindcss]
