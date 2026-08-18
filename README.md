# Northstar Governance

An enterprise product website for an AI governance and risk operations platform. Built with React, TypeScript, Vite, and the Netlify Vite plugin.

## Development

```sh
npm install
npm run dev
```

## Quality gates

```sh
npm run verify
npm run test:e2e
```

`verify` runs Oxlint, component tests, TypeScript, and a production build. The browser suite covers desktop and mobile interaction paths.

## Deployment

```sh
npx netlify deploy
npx netlify deploy --prod
```
