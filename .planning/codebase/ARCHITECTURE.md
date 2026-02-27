# Architecture

**Analysis Date:** 2026-02-27

## Pattern Overview

**Overall:** Next.js App Router with Client-Side State Management

**Key Characteristics:**
- Server-rendered pages with client-side interactive components
- Next.js 14 with App Router (file-based routing in `/app`)
- Component composition pattern for UI reusability
- Redirect-based pages for external links (Discord, YouTube, etc.)
- Client-side state for navigation sidebar toggle

## Layers

**Presentation Layer:**
- Purpose: Render UI components and pages
- Location: `app/components/` and `app/[route]/page.tsx`
- Contains: React components, styled with Tailwind CSS
- Depends on: React hooks, Next.js Image/Link components
- Used by: Layout renders components; pages compose components

**Layout Layer:**
- Purpose: Provide consistent structure across all pages
- Location: `app/layout.tsx`
- Contains: Root HTML structure, metadata, global Navigation component, global Kofi button
- Depends on: Next.js metadata API, Navigation component
- Used by: All pages in app directory inherit layout

**Navigation Layer:**
- Purpose: Handle site navigation and mobile responsiveness
- Location: `app/components/navigation/`
- Contains: Navigation controller, Navbar, Sidebar with toggle state
- Depends on: React useState, Next.js Link
- Used by: Root layout

**Redirect Layer:**
- Purpose: Route external social/commerce links through Next.js
- Location: `app/[service]/page.tsx` (discord, youtube, twitch, steam, instagram, twitter, kofi)
- Contains: Redirect functions using `next/navigation`'s `redirect()`
- Depends on: Next.js `redirect()` function
- Used by: Navigation links

**Content Layer:**
- Purpose: Display specific page content
- Location: `app/page.tsx`, `app/about-us/page.tsx`, `app/abandoned/page.tsx`, `app/privacy/page.tsx`
- Contains: Static content with inline data or component composition
- Depends on: Component imports, Next.js Image
- Used by: Layout wraps these pages

## Data Flow

**User Navigation Flow:**

1. User clicks link in Navbar or Sidebar
2. Next.js router navigates to route
3. Page component in `app/[route]/page.tsx` renders
4. Layout applies global structure (Navigation, Kofi button)
5. Page content displays with background images and Tailwind styling

**State Management Flow (Mobile Navigation):**

1. Navigation controller (`app/components/navigation/index.tsx`) manages `isOpen` state
2. Navbar toggles button visibility based on `isOpen`
3. Sidebar visibility controlled by CSS opacity and position transform
4. Body overflow toggled to prevent scroll when sidebar open
5. Both Navbar and Sidebar receive `isOpen` and `toggle()` props

**External Link Flow:**

1. User clicks social/commerce link in navigation
2. Route navigates to redirect page (e.g., `/discord`)
3. Page component calls `redirect()` to external URL
4. Browser redirected to external service

**State Management:**
- Local component state using `useState()` in Navigation controller
- No global state management (Redux, Zustand, etc.)
- Props drilling for navigation state to Navbar and Sidebar
- CSS-based visibility/positioning for sidebar

## Key Abstractions

**Navigation Component:**
- Purpose: Encapsulates mobile/desktop navigation toggle logic
- Examples: `app/components/navigation/index.tsx`
- Pattern: Container component managing state, passing props to presentational children

**Styled Components:**
- Purpose: Reusable styled UI sections
- Examples: `app/components/KofiButton/index.tsx`, `app/components/meettheteam.tsx`, `app/components/testers.tsx`
- Pattern: Client components using Tailwind classes and TypeScript props

**Redirect Pages:**
- Purpose: Centralized external link routing
- Examples: `app/discord/page.tsx`, `app/youtube/page.tsx`
- Pattern: Simple page components calling `redirect()` immediately

**Layout Composition:**
- Purpose: Consistent wrapper for all pages
- Examples: `app/layout.tsx`
- Pattern: Root layout providing Navigation and metadata to children

## Entry Points

**Root Layout:**
- Location: `app/layout.tsx`
- Triggers: Loads on app initialization, wraps all pages
- Responsibilities: Metadata setup, font loading, Navigation rendering, global styles, Kofi button placement

**Home Page:**
- Location: `app/page.tsx`
- Triggers: Route `/`
- Responsibilities: Display hero section with branding, background image, tagline

**About Us Page:**
- Location: `app/about-us/page.tsx`
- Triggers: Route `/about-us`
- Responsibilities: Compose team data, render MeetTheTeam and Testers components

**Abandoned Page:**
- Location: `app/abandoned/page.tsx`
- Triggers: Route `/abandoned`
- Responsibilities: Display game information, features, system requirements

**Privacy Page:**
- Location: `app/privacy/page.tsx`
- Triggers: Route `/privacy`
- Responsibilities: Render privacy policy text

## Error Handling

**Strategy:** Next.js built-in error handling with custom 404 page

**Patterns:**
- Not-found page: `app/not-found.tsx` displays custom 404 with branding
- Redirect page fallbacks: Each redirect service has `not-found.tsx` (e.g., `app/discord/not-found.tsx`)
- No try-catch blocks in visible code; errors handled by Next.js framework

## Cross-Cutting Concerns

**Logging:** No explicit logging detected; debug info via browser console

**Validation:** TypeScript interfaces used for component props (e.g., `TeamProps` in `meettheteam.tsx`)

**Authentication:** Not applicable; public marketing website with no auth

**Analytics:** Vercel Analytics integrated in `app/layout.tsx` with Google Analytics script

**External Services:**
- Google Analytics: Script loaded in head
- Ko-fi: Button component for donations
- Discord/YouTube/Twitch/Steam/Instagram/Twitter: External redirect links

---

*Architecture analysis: 2026-02-27*
