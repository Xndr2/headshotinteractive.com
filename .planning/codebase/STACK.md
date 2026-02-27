# Technology Stack

**Analysis Date:** 2026-02-27

## Languages

**Primary:**
- TypeScript 5 - Entire application codebase (`app/**/*.tsx`, component files)
- JSX/TSX - React component definitions throughout `app/` directory

**Secondary:**
- JavaScript (ES2020+) - Configuration files and build scripts
- CSS - Tailwind utility classes in components

## Runtime

**Environment:**
- Node.js (version not pinned, any compatible with npm 10+)

**Package Manager:**
- npm 10 (as indicated by lockfileVersion 3 in package-lock.json)
- Lockfile: Present at `package-lock.json`

## Frameworks

**Core:**
- Next.js 14.2.2 - Full-stack framework for the application, handles routing, rendering, and deployment
- React 18 - UI framework for component-based interface in `app/**/*.tsx` files

**Styling:**
- Tailwind CSS 3.4.1 - Utility-first CSS framework for styling components
- PostCSS 8 - CSS processing pipeline configured in `postcss.config.mjs`

**UI Components:**
- NextUI 2.3.5 - Component library for React, provides navigation (`@nextui-org/navbar@2.0.30`) and UI elements

**Testing:**
- Not detected

**Build/Dev:**
- TypeScript 5 - Compilation and type-checking
- ESLint 8 - Code linting via `eslint-config-next@14.2.2`
- Next.js Built-in tooling - Development server, production builds, and deployment optimization

## Key Dependencies

**Critical:**
- next@14.2.2 - Framework driving the entire application
- react@18 - Core UI rendering engine
- @nextui-org/react@2.3.5 - UI component library with navbar and layout components
- kofi-button@1.1.1 - External widget for Ko-fi support button integration

**Infrastructure:**
- @vercel/analytics@1.2.2 - Analytics tracking for performance monitoring and user insights
- @types/node@20 - TypeScript types for Node.js APIs
- @types/react@18 - TypeScript type definitions for React
- @types/react-dom@18 - TypeScript types for React DOM

## Configuration Files

**TypeScript:**
- `tsconfig.json` - Compiler options with strict mode enabled, path aliases (`@/*` maps to root directory), and Next.js plugin integration

**Next.js:**
- `next.config.mjs` - Minimal Next.js configuration (empty config, uses defaults)

**Tailwind:**
- `tailwind.config.ts` - Custom background images for homepage (home-image-1 through home-image-5), extends default theme
- `postcss.config.mjs` - PostCSS configuration with Tailwind CSS plugin

**Linting:**
- `.eslintrc.json` - ESLint configuration extending Next.js core-web-vitals rules

**Build Artifacts:**
- `.next/` directory (auto-generated on build, in .gitignore)
- Node modules in `node_modules/` (in .gitignore)

## Environment

**Configuration Method:**
- Environment variables via `.env*.local` files (git-ignored for local development)
- No .env file present in repository root

**Secrets Management:**
- Ko-fi ID: `H2H0129IWF` (hardcoded in `app/components/KofiButton/index.tsx` - public, non-sensitive)
- Google Analytics ID: `G-JJZVQ6H597` (hardcoded in `app/layout.tsx` and `public/googleScript.js` - public tracking)

## Platform Requirements

**Development:**
- Node.js (any current LTS version)
- npm or compatible package manager
- Modern browser with ES2020+ support

**Production:**
- Vercel Platform (as recommended in README and Next.js defaults)
- Or any Node.js-compatible hosting (AWS, Google Cloud, self-hosted)

**Build Process:**
```bash
npm run build    # Compile and optimize for production
npm run dev      # Start development server with hot-reload
npm start        # Start production server
npm run lint     # Run ESLint checks
```

---

*Stack analysis: 2026-02-27*
