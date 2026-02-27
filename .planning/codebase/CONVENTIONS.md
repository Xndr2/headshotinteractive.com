# Coding Conventions

**Analysis Date:** 2026-02-27

## Naming Patterns

**Files:**
- Page components: lowercase with hyphens (`page.tsx`) - e.g., `app/about-us/page.tsx`, `app/abandoned/page.tsx`
- Functional components: PascalCase - e.g., `Navigation.tsx`, `MeetTheTeam.tsx`, `Testers.tsx`
- Styled/exported components: camelCase or PascalCase for exports - e.g., `StyledKofiButton` in `app/components/KofiButton/index.tsx`
- Component files use `index.tsx` pattern for directories - e.g., `app/components/navigation/index.tsx`, `app/components/KofiButton/index.tsx`

**Functions:**
- Component functions: PascalCase - e.g., `Navigation()`, `Sidebar()`, `MeetTheTeam()`
- Regular functions: camelCase - e.g., `toggle()` in `app/components/navigation/index.tsx`
- Props interfaces: PascalCase with "Props" suffix - e.g., `TeamProps`, `TesterProps`, `UpdatesProps`

**Variables:**
- State variables: camelCase - e.g., `isOpen`, `setIsOpen`
- Data objects: camelCase - e.g., `team`, `testers`, `updates`
- Constants: camelCase - e.g., `goldman` font object in `app/layout.tsx`

**Types:**
- Interface names: PascalCase with descriptive "Props" suffix - e.g., `interface TeamProps`, `interface TesterProps`, `interface UpdatesProps`
- Type definitions follow object shape - e.g., roles array contains objects with `role: string`, links array contains objects with `name: string` and `link: string`

## Code Style

**Formatting:**
- No dedicated Prettier config detected
- ESLint extends `next/core-web-vitals` configuration
- Indentation: 2 spaces (observed in all source files)
- Lines are generally compact but readable

**Linting:**
- Tool: ESLint with Next.js core-web-vitals configuration (`.eslintrc.json`)
- Config file: `/app/.eslintrc.json` extends `"next/core-web-vitals"`
- Run command: `npm run lint` executes `next lint`

**Line Length:**
- No strict enforcement detected; lines vary from ~50 to ~200+ characters
- Tailwind classes can create very long className strings without line breaks

## Import Organization

**Order:**
1. External packages (React, Next.js APIs) - e.g., `import Image from "next/image"`
2. Local components/utilities - e.g., `import Navigation from "./components/navigation"`
3. Styles (if any) - e.g., `import "./globals.css"`

**Path Aliases:**
- Configured in `tsconfig.json`: `"@/*": ["./*"]`
- Not observed in actual usage; most imports use relative paths
- Example: `import Navigation from "./components/navigation"` instead of `@/components/navigation`

**Example patterns:**
```typescript
// External packages first
import { Analytics } from "@vercel/analytics/react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

// Local imports
import Navigation from "./components/navigation";
import MeetTheTeam from "../components/meettheteam";
import Testers from "../components/testers";

// Styles
import "./globals.css";
```

## Error Handling

**Patterns:**
- No try-catch blocks observed in source files
- No explicit error boundaries detected
- Server components use `redirect()` from `next/navigation` for redirects - e.g., `redirect("https://discord.com/invite/CAhVGsAW7H")`
- No validation layers or custom error classes detected
- Client components rely on React's default error handling

**Redirect pattern:**
```typescript
export default function Discord() {
    redirect("https://discord.com/invite/CAhVGsAW7H");
    return (...); // unreachable after redirect
}
```

## Logging

**Framework:** `console` methods (no structured logging detected)

**Patterns:**
- No logging statements observed in current codebase
- No logging utility helpers created
- Console logging not utilized

## Comments

**When to Comment:**
- Sparse commenting style observed
- Comments mark sections (e.g., `{/* about */}`, `{/* roles */}`, `{/* Text */}`)
- Commented-out code preserved for reference (e.g., privacy policy alternate config in `app/layout.tsx`)

**JSDoc/TSDoc:**
- No JSDoc/TSDoc annotations observed in codebase
- Function and component documentation not enforced

**Example of section comments:**
```typescript
{/* logos and name */}
<div className='flex items-center gap-2 sm:w-1/2'>
    ...
</div>

{/* roles */}
<div className='text-sm sm:w-1/2 flex flex-col gap-1 justify-center'>
    ...
</div>
```

## Function Design

**Size:**
- Small to medium functions preferred
- Page components typically 30-60 lines
- Utility/layout components 20-40 lines
- No obvious function bloat

**Parameters:**
- Props pattern used for component parameters
- Props destructured immediately: `const { team } = props;`
- Type-safe via TypeScript interfaces

```typescript
export default function MeetTheTeam(props: TeamProps) {
    const { team } = props;
    // component logic
}
```

**Return Values:**
- Components return JSX.Element or implicit JSX
- No null/undefined returns in observed files
- Consistent return of single JSX tree (wrapped in fragments when necessary)

## Module Design

**Exports:**
- Page components: `export default function ComponentName()`
- Nested components: `export default ComponentName` or `export const StyledKofiButton`
- Re-exported styled components used in layout - e.g., `StyledKofiButton` imported in `layout.tsx` and `sidebar/index.tsx`

**Barrel Files:**
- Barrel files used minimally
- Index files used primarily for directory organization (`app/components/navigation/index.tsx`)
- No evidence of centralized export files for multiple components

**Pattern:**
```typescript
// Component exports
export default function Navigation() { ... }
export default Navbar;

// Styled component exports
export const StyledKofiButton = () => { ... }
```

## Next.js Specific Patterns

**Server vs Client:**
- Pages are Server Components by default
- Client-side interactivity marked with `"use client"` directive
- Example: `app/components/navigation/index.tsx` uses `"use client"` for useState/event handlers

**Metadata:**
- Page metadata defined as `export const metadata` object in root layout
- Metadata includes title, description, icons, keywords, authors, og tags

**Styling:**
- Tailwind CSS for styling (configured in `tailwind.config.ts`)
- No CSS Modules observed
- Inline className strings with Tailwind utilities
- Custom background images extended in Tailwind config

```typescript
// From tailwind.config.ts
backgroundImage: {
    'home-image-1': "url('/HomeImages/planet.jpg')",
    'home-image-4': "url('/HomeImages/Menu.jpg')",
}
```

---

*Convention analysis: 2026-02-27*
