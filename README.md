# Neutral Advisory — Premium Corporate Website Homepage

A premium, founder-led executive advisory homepage built with React, TypeScript, Vite, and Tailwind CSS v4.

## Getting started

Requires [Node.js](https://nodejs.org) 18+ installed.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

The production build is output to `dist/`, ready to deploy to any static host (Vercel, Netlify, Cloudflare Pages, S3, etc.).

## Project structure

```
├── index.html              # HTML entry point
├── src/
│   ├── main.tsx             # React entry point
│   ├── index.css            # Imports Tailwind + fonts + theme
│   ├── app/
│   │   └── App.tsx          # Main homepage component (all sections)
│   └── styles/
│       ├── fonts.css        # Google Fonts (Inter, Manrope)
│       └── theme.css        # Design tokens / CSS variables (Tailwind v4 theme)
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## Notes

- Images are pulled live from Unsplash via URL — no local image assets required.
- Icons come from [lucide-react](https://lucide.dev).
- Color palette: Navy `#0B1F3A` / `#06101E`, White, Soft Gray `#E5E7EB`, Muted Gold `#A88E4B`.
