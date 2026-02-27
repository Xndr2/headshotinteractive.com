# Codebase Structure

**Analysis Date:** 2026-02-27

## Directory Layout

```
headshotinteractive.com/
├── app/                           # Next.js App Router - all pages and components
│   ├── components/                # Reusable React components
│   │   ├── KofiButton/            # Ko-fi donation button wrapper
│   │   ├── navigation/            # Navigation UI (navbar, sidebar, toggle logic)
│   │   ├── update/                # Update/news component section
│   │   ├── meettheteam.tsx        # Team member grid display
│   │   └── testers.tsx            # Tester grid display
│   ├── abandoned/                 # Game page route
│   ├── about-us/                  # Team/studio info route
│   ├── privacy/                   # Privacy policy page route
│   ├── discord/                   # Social link redirect routes
│   ├── instagram/
│   ├── kofi/
│   ├── steam/
│   ├── twitch/
│   ├── twitter/
│   └── youtube/
│   ├── layout.tsx                 # Root layout (header, metadata, global wrapping)
│   ├── page.tsx                   # Home page
│   ├── not-found.tsx              # 404 error page
│   ├── globals.css                # Global Tailwind CSS imports
│   └── default-page.tsx           # Possibly unused old page file
├── public/                        # Static assets (images, logos)
│   ├── HomeImages/                # Background images for pages
│   ├── Logos/                     # Brand logos and text
│   ├── abandoned_pfp/             # Team member profile pictures
│   │   └── testers/               # Tester profile pictures
│   └── BingSiteAuth.xml           # Search engine verification
├── .planning/                     # Documentation and planning
├── package.json                   # Dependencies and scripts
├── package-lock.json              # Locked versions
├── tsconfig.json                  # TypeScript configuration
├── tailwind.config.ts             # Tailwind CSS theme and plugins
├── postcss.config.mjs             # PostCSS configuration (Tailwind processor)
├── next.config.mjs                # Next.js configuration
├── .eslintrc.json                 # ESLint rules
├── .gitignore                     # Git ignore rules
└── README.md                      # Project documentation
```

## Directory Purposes

**app/:**
- Purpose: Next.js App Router directory - contains all routes and components
- Contains: Page components, layout wrappers, reusable components
- Key files: `layout.tsx`, `page.tsx`, individual route directories

**app/components/:**
- Purpose: Reusable UI components shared across pages
- Contains: Navigation, buttons, cards, grids, styled elements
- Key files: `navigation/index.tsx`, `meettheteam.tsx`, `KofiButton/index.tsx`

**app/components/navigation/:**
- Purpose: Navigation UI structure and mobile responsiveness
- Contains: Navigation controller, Navbar, Sidebar, Logo
- Key files: `index.tsx` (controller), `navbar/index.tsx`, `sidebar/index.tsx`

**app/[route]/:**
- Purpose: Individual page routes in Next.js App Router
- Contains: Page components and optional not-found pages
- Examples: `app/about-us/page.tsx`, `app/abandoned/page.tsx`

**public/:**
- Purpose: Static assets served by Next.js
- Contains: Images, logos, favicons, meta files
- Key files: Background images in `HomeImages/`, logos in `Logos/`, team photos in `abandoned_pfp/`

## Key File Locations

**Entry Points:**
- `app/layout.tsx`: Root layout wrapping all pages (loads Navigation, metadata, global styles)
- `app/page.tsx`: Home page hero section (route `/`)
- `next.config.mjs`: Next.js configuration

**Configuration:**
- `tsconfig.json`: TypeScript compiler options (target, strict mode, module resolution)
- `tailwind.config.ts`: Tailwind CSS theme extensions (custom background images)
- `postcss.config.mjs`: PostCSS configuration for Tailwind
- `.eslintrc.json`: ESLint extends `next/core-web-vitals`

**Core Logic:**
- `app/components/navigation/index.tsx`: Navigation state management (sidebar open/close toggle)
- `app/about-us/page.tsx`: Page with inline team/tester data arrays
- `app/components/meettheteam.tsx`: Maps team array to card grid, renders team member details

**Styling:**
- `app/globals.css`: Global imports for Tailwind
- Inline `className` attributes: All component styling uses Tailwind utility classes (no CSS modules or external stylesheets)

## Naming Conventions

**Files:**
- Page files: `page.tsx` (required by Next.js App Router in each route)
- Layout files: `layout.tsx` (required by Next.js App Router)
- Error files: `not-found.tsx` (Next.js error boundary)
- Component files: `{ComponentName}.tsx` or `index.tsx` in folder (PascalCase)
- Config files: Standard names (`tsconfig.json`, `tailwind.config.ts`, `next.config.mjs`)

**Directories:**
- Routes: kebab-case (e.g., `about-us/`, `abandoned/`, `privacy/`)
- Component folders: kebab-case (e.g., `KofiButton/`, `navigation/`, `update/`)
- Asset folders: Descriptive names (e.g., `HomeImages/`, `abandoned_pfp/`, `Logos/`)

**Components:**
- File names: PascalCase for components (`MeetTheTeam.tsx` → `meettheteam.tsx` in this codebase, but convention suggests PascalCase)
- Component exports: Named exports or default exports (default used in this codebase)
- Props interfaces: `{ComponentName}Props` (e.g., `TeamProps` in `meettheteam.tsx`)

**Variables/Functions:**
- camelCase for functions and variables (e.g., `toggle()`, `isOpen`, `team`)
- Constants: camelCase (e.g., `goldman` font reference)
- Tailwind classes: Inline as strings (e.g., `"flex flex-col items-center"`)

## Where to Add New Code

**New Feature/Page:**
- Create new directory in `app/` with route name in kebab-case (e.g., `app/news/`)
- Add `page.tsx` component in the directory
- Import `page.tsx` content in Layout (happens automatically)
- Link navigation to new route in `app/components/navigation/navbar/index.tsx` and `app/components/navigation/sidebar/index.tsx`

**New Component/Module:**
- Create file or folder in `app/components/` with PascalCase name (e.g., `app/components/GameCard.tsx` or `app/components/GameCard/index.tsx`)
- Define component with TypeScript and Tailwind classes
- Export component as default or named export
- Import in page or other components

**Shared Utilities:**
- Create `app/lib/` or `app/utils/` directory for helper functions (currently not present; add if needed)
- Export functions from utility files
- Import in components as needed

**Styling/Theme:**
- Global styles: Add to `app/globals.css`
- Component-scoped: Use Tailwind classes inline in `className` attributes
- Theme extensions: Add custom colors/images to `tailwind.config.ts` theme.extend section

**Assets:**
- Images: Place in `public/` subdirectory matching content type (e.g., `public/HomeImages/`, `public/abandoned_pfp/`)
- Logos: Place in `public/Logos/`
- Use Next.js `Image` component from `next/image` with src, alt, width, height

## Special Directories

**app/components/navigation/:**
- Purpose: Handles responsive navigation UI
- Contains: Mobile sidebar (shown/hidden based on state), desktop navbar, logo
- Generated: No
- Committed: Yes
- Special notes: Uses client-side state (`useState`) to toggle sidebar visibility; manages body overflow to prevent scroll when sidebar open

**public/abandoned_pfp/:**
- Purpose: Stores team member and tester profile pictures
- Generated: No (manual uploads)
- Committed: Yes
- Special notes: Used in `app/about-us/page.tsx` team data array; images referenced by relative path

**app/[service]/ (discord/, instagram/, kofi/, etc.):**
- Purpose: Redirect pages for external social/commerce links
- Contains: `page.tsx` with `redirect()` call; optional `not-found.tsx`
- Generated: No
- Committed: Yes
- Special notes: Each has simple redirect() function; if redirect fails, not-found.tsx is shown

**.planning/:**
- Purpose: Project planning and documentation (codebase maps, implementation plans)
- Generated: Yes (by GSD orchestrator)
- Committed: Yes
- Special notes: Read-only documentation; updated by mapper tools

## Implementation Guide for Common Tasks

**Adding a New Page:**
1. Create directory: `app/new-page/`
2. Create file: `app/new-page/page.tsx`
3. Write component with layout and content
4. Add link in navbar: `app/components/navigation/navbar/index.tsx` line 57-72
5. Add link in sidebar: `app/components/navigation/sidebar/index.tsx` line 19-32

**Adding a Team Member:**
1. Add profile image to `public/abandoned_pfp/` (use .webp or .jpg format)
2. Edit `app/about-us/page.tsx` team array (lines 5-102)
3. Add new object with src, name, roles, links
4. Component automatically renders in grid via `map()`

**Creating a Redirect Link:**
1. Create directory: `app/new-service/`
2. Create file: `app/new-service/page.tsx`
3. Import `redirect` from `next/navigation`
4. Call `redirect("https://external-url.com")`
5. Add link in navigation components pointing to `/new-service`

**Updating Navigation Links:**
- Navbar links: `app/components/navigation/navbar/index.tsx` lines 55-127
- Sidebar links: `app/components/navigation/sidebar/index.tsx` lines 18-88

---

*Structure analysis: 2026-02-27*
