# Codebase Concerns

**Analysis Date:** 2026-02-27

## Unused Imports

**Deprecated Next.js Head Component:**
- Issue: The `next/head` component is imported in multiple redirect and page files but is unused. In Next.js App Router (which this project uses), `next/head` is deprecated. Metadata should be defined via `metadata` export or in layout files instead.
- Files:
  - `app/page.tsx`
  - `app/discord/page.tsx`
  - `app/instagram/page.tsx`
  - `app/kofi/page.tsx`
  - `app/steam/page.tsx`
  - `app/twitch/page.tsx`
  - `app/twitter/page.tsx`
  - `app/youtube/page.tsx`
- Impact: Dead imports increase bundle size and create confusion about how metadata is handled. Linting rules may flag these as unused.
- Fix approach: Remove all `import Head from "next/head"` statements. The `app/layout.tsx` already correctly uses the `metadata` export object for SEO and meta tags.

**Unused Image Import in Redirect Pages:**
- Issue: Image component is imported but not rendered in redirect pages that use `redirect()`.
- Files:
  - `app/discord/page.tsx` (imports Image and Link but never renders them)
  - Several other redirect pages likely have same pattern
- Impact: Unused dependencies increase bundle size unnecessarily.
- Fix approach: Remove unused imports from pages that perform server-side redirects. Keep only the imports that are actually used.

## State Management Issues

**Direct DOM Manipulation in Navigation Component:**
- Issue: The Navigation component in `app/components/navigation/index.tsx` directly manipulates `document.body.style.overflow` to prevent scrolling when sidebar is open.
- Files: `app/components/navigation/index.tsx` (lines 11-15)
- Impact: Direct DOM manipulation is fragile and can conflict with other code or CSS solutions. This pattern doesn't work reliably on all browsers/devices and creates tight coupling to browser APIs.
- Fix approach: Use CSS-based solutions (e.g., overflow-hidden Tailwind class on body, or a Tailwind configuration that handles this). Consider using a context provider or state management that CSS can respond to via data attributes or class toggles.

## Data Hardcoding

**Hardcoded Team and Tester Data:**
- Issue: Team member information (names, roles, links, images, testers) is hardcoded directly in page components instead of being externalized to data files or fetched from a configuration.
- Files: `app/about-us/page.tsx` (lines 5-111, 104-111)
- Impact: Updating team information requires code changes and redeployment. No separation of concerns between content and presentation.
- Fix approach: Extract team and tester data to `public/data/team.json` or `app/data/team.ts`. Import and use this data in the component. This makes content updates much easier without touching code.

**Hardcoded Kofi Button ID:**
- Issue: Kofi button ID (`H2H0129IWF`) is hardcoded in component.
- Files: `app/components/KofiButton/index.tsx` (line 7)
- Impact: If this ID changes, code modification is required. No centralized configuration.
- Fix approach: Move to environment variables or configuration file (e.g., `app/config/external-links.ts`).

**Hardcoded Analytics ID:**
- Issue: Google Analytics ID (`G-JJZVQ6H597`) is hardcoded in script tag.
- Files: `app/layout.tsx` (line 54)
- Impact: No environment-based configuration. Cannot easily change tracking ID between environments.
- Fix approach: Move to environment variable: `process.env.NEXT_PUBLIC_GA_ID`.

**Hardcoded Discord, Social, and Redirect Links:**
- Issue: All social media and redirect links are hardcoded throughout navigation components and pages.
- Files: `app/components/navigation/navbar/index.tsx`, `app/components/navigation/sidebar/index.tsx`, `app/discord/page.tsx`, and other redirect pages
- Impact: If links change, multiple files need updating. Maintenance burden increases with each new social platform.
- Fix approach: Create a centralized `app/config/social-links.ts` that exports all external links. Import and use this config throughout the app.

## Code Quality Issues

**Incomplete/Default Page Still Active:**
- Issue: `app/default-page.tsx` (113 lines) is likely a copy of the Next.js template boilerplate with example content, marketing copy, and Vercel logo. This appears to be leftover from project scaffolding.
- Files: `app/default-page.tsx`
- Impact: Dead code adds confusion. Unclear if this is active or abandoned.
- Fix approach: Determine if this file is used. If not, delete it. If it is used for something, rename it to clarify purpose (e.g., `app/template-example.tsx`).

**Commented-out Code:**
- Issue: Several commented-out sections and placeholder comments exist throughout the codebase.
- Files:
  - `app/layout.tsx` (lines 22, 35-43) - Commented metadata for Twitter cards
  - `app/about-us/page.tsx` (line 143) - Inline comment "Rework of this section in progress..."
  - `app/components/meettheteam.tsx` (line 24) - Commented border div
- Impact: Creates noise and reduces code clarity. Unclear if these are for future use or can be deleted.
- Fix approach: Remove all commented code. Use git history if reference is needed. If intentional placeholders, convert to explicit TODO comments with context.

**In-Progress UI Note:**
- Issue: Text "Rework of this section in progress..." appears in production UI on about-us page.
- Files: `app/about-us/page.tsx` (line 143)
- Impact: Looks unprofessional to users. Indicates incomplete work shipped to production.
- Fix approach: Either complete the rework or remove the comment entirely. Use a separate staging/draft mechanism if content is incomplete.

## Hardcoded CSS Values

**Tailwind Arbitrary Values:**
- Issue: Multiple arbitrary Tailwind values are hardcoded throughout files instead of extending the theme.
- Examples from codebase:
  - `drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]` (repeated across multiple components)
  - Custom background images referenced by class names like `bg-home-image-4`, `bg-home-image-5`
  - Arbitrary margin/padding values
- Files: Many files including `app/about-us/page.tsx`, `app/components/meettheteam.tsx`, `app/abandoned/page.tsx`
- Impact: Inconsistent styling, difficult to maintain consistent design system, DRY principle violated.
- Fix approach: Extend `tailwind.config.ts` with custom theme values for frequently used shadows and arbitrary values. Create semantic class names instead of repeating arbitrary values.

## Missing Accessibility

**SVG Icons Without Proper Labels:**
- Issue: Social media SVG icons throughout navigation components lack proper accessibility attributes.
- Files: `app/components/navigation/navbar/index.tsx`, `app/components/navigation/sidebar/index.tsx`
- Impact: Screen reader users cannot identify social links. Non-compliant with WCAG 2.1 guidelines.
- Fix approach: Add `aria-label` attributes to SVG elements or wrap in `<span>` elements with accessible text. Example: `<svg aria-label="Discord" ...`

**Images Without Alt Text or With Generic Alt Text:**
- Issue: Some images have minimal or generic alt text that doesn't describe content well.
- Files: `app/components/meettheteam.tsx` (line 36) has good alt text, but should audit all images for quality.
- Impact: Reduced accessibility for vision-impaired users and SEO impact.
- Fix approach: Audit all images and ensure alt text is descriptive and contextual.

## Type Safety Gaps

**Inline Type Objects in Component Props:**
- Issue: Component props are typed inline using `{ prop: type }` syntax instead of creating proper interfaces.
- Files:
  - `app/components/navigation/navbar/index.tsx` (lines 5-7)
  - `app/components/navigation/sidebar/index.tsx` (lines 5-7)
- Impact: Less reusable, harder to maintain, violates DRY principle. If the same type is used elsewhere, it can't be shared.
- Fix approach: Extract inline type definitions to proper interfaces. Create a `types/` directory or `index.ts` file per component with shared types.

**Loose Key Usage in Maps:**
- Issue: Using data values as React keys can cause rendering issues if data changes.
- Files:
  - `app/components/meettheteam.tsx` (line 27) - uses `member.src` as key
  - `app/components/update/updates.tsx` (line 28) - uses `update.title` as key
- Impact: If team members or updates are reordered or duplicated (same profile pic or title), React won't properly track components, causing bugs.
- Fix approach: Add explicit `id` fields to data objects and use those as keys instead of content values.

## Performance Concerns

**Unoptimized Image Assets:**
- Issue: Multiple large background images are referenced as Tailwind classes (e.g., `bg-home-image-4`). No indication of optimization or lazy loading.
- Files: Multiple pages
- Impact: Large image files directly impact page load and performance. No apparent responsive image strategy.
- Fix approach: Optimize images using Next.js Image component where possible or add explicit size constraints and lazy-loading to background images.

**Missing Image Dimensions on Some Images:**
- Issue: Some Image components have explicit width/height, but the optimization isn't consistent across all usage.
- Files: Need audit
- Impact: Layout shift and poor performance metrics.
- Fix approach: Audit all Image components and ensure width/height are set on all static images.

## Testing

**No Test Coverage:**
- Issue: No test files found in the project (no `.test.ts`, `.test.tsx`, `.spec.ts`, `.spec.tsx` files).
- Files: Entire project
- Impact: No automated verification of component behavior. Bug regressions cannot be caught. Refactoring is risky.
- Fix approach: Set up Jest/Vitest testing framework. Start with critical components: Navigation, data rendering, redirect logic. Aim for 50%+ coverage initially.

## Redirect Page Implementation

**Dead Code in Redirect Pages:**
- Issue: Pages that use `redirect()` have fallback JSX that is never reached.
- Files: `app/discord/page.tsx` (lines 10-17), potentially others
- Impact: Confusing code that appears useful but is never executed. Dead code adds maintenance burden.
- Fix approach: For pages that use server-side `redirect()`, remove the JSX return entirely or add a comment explaining why it's there (for fallback if redirect fails).

**Inconsistent Redirect Patterns:**
- Issue: Redirect pages import unused components (Image, Link) and have fallback UI that won't render.
- Files: `app/[social]/page.tsx` files
- Impact: Inconsistency makes codebase harder to reason about. Unnecessary bundle bloat from unused imports.
- Fix approach: Simplify redirect pages to only contain the `redirect()` call. Remove all unused imports.

## Security & Configuration

**Analytics Tracking Without Consent Management:**
- Issue: Google Analytics is loaded and configured without any user consent mechanism or cookie banner.
- Files: `app/layout.tsx` (lines 54-55), `public/googleScript.js`
- Impact: May violate GDPR and CCPA regulations if users are from those regions. Privacy policy states "no data collection" but analytics are running.
- Fix approach: Either remove analytics or implement a proper consent management system (CMP) that requests user permission before loading GA.

**Privacy Policy Outdated:**
- Issue: Privacy policy states "We do not collect any data as of July 21 2024" but Google Analytics is actively collecting data.
- Files: `app/privacy/page.tsx` (line [see file])
- Impact: Misleading users and potential legal/compliance issues.
- Fix approach: Update privacy policy to accurately reflect what data is collected (at minimum: Google Analytics tracking). Or remove Google Analytics entirely to match privacy statement.

## Potential Future Issues

**No Environment Variable Structure:**
- Issue: No `.env.example` or `.env.local.example` file showing what environment variables are available.
- Files: Project root
- Impact: New developers won't know what configuration is available. Secrets could be accidentally committed.
- Fix approach: Create `.env.example` file documenting all environment variables (without values). Add to git.

**Global CSS Not Scoped:**
- Issue: `app/globals.css` contains global styles that could conflict with component styles.
- Files: `app/globals.css`
- Impact: Harder to reason about styling, potential cascading issues.
- Fix approach: Audit globals.css and minimize global rules. Use CSS modules or scoped Tailwind for component-specific styling where needed.

---

*Concerns audit: 2026-02-27*
