# Copilot Instructions for Sandbox React/Next.js Codebase

## Project Overview
- This is a **React/Next.js** template, not a WordPress theme.
- Uses **Next.js**, **Bootstrap 5**, and **SASS/SCSS** for UI and styling.
- The codebase is modular, with reusable blocks, components, and rich page templates for rapid site development.
- Designed for multipurpose use: startup, SaaS, agency, portfolio, blog, shop, etc.

## Directory Structure & Key Files
- **src/app/**: Next.js app directory, with route folders for major site sections (e.g., (blogs), (projects), (auth)).
- **src/components/**: Reusable React components, organized by feature and block type.
- **src/api/**: API integrations (e.g., Firebase, registration logic).
- **public/**: Static assets (CSS, fonts, images, media).
- **src/assets/**: SCSS source files for custom styles.
- **theme/**, **utils/**: Theming and utility helpers.

## Build & Development Workflow
- **Install dependencies:** `npm install`
- **Start dev server:** `npm run dev`
- **Build for production:** `npm run build` (runs `next build`)
- **Export static site:** `npm run export`
- **Compile SCSS to CSS:** `npm run sass` (outputs to `public/css`)
- **Lint code:** `npm run lint`
- **Start production server:** `npm run start`

## Patterns & Conventions
- **Component Organization:** Blocks and features are split into folders; naming follows the UI element or page purpose (e.g., `Hero9.tsx`, `AboutUs/`, `Blogs/`).
- **Routing:** Next.js file-based routing; folders in `src/app/` map to site routes. Parentheses in folder names (e.g., `(blogs)`) indicate route groups.
- **Styling:** SCSS modules are compiled to CSS; custom styles live in `src/assets/scss` and are output to `public/css`.
- **API Integration:** Firebase is set up in `src/api/firebase.js`; other API logic is in `src/api/`.
- **Theming:** Theme logic and customization options are in `src/theme/` and `public/css/colors/`.
- **External Libraries:** Uses Bootstrap, Animate.css, Swiper, Firebase, and others as listed in `package.json`.

## Integration & Data Flow
- **Cross-component communication** is handled via React props/context; no global state manager detected.
- **Authentication** and user flows are managed in `(auth)` and related API files.
- **Static assets** are referenced from `public/` for images, fonts, and media.

## Debugging & Troubleshooting
- **Build errors:** Check SCSS compilation (`npm run sass`) and Next.js build output.
- **Linting:** Use `npm run lint` for code quality.
- **Documentation:** See [online docs](https://sandbox-react.netlify.app/docs) for usage and code examples.

## Example: Adding a New Page
1. Create a folder in `src/app/` (e.g., `NewPage/`).
2. Add `page.tsx` for the route entry.
3. Import and use components from `src/components/`.
4. Add custom styles to `src/assets/scss/` and recompile with `npm run sass`.

---
For questions or unclear patterns, review the README or online documentation, or ask for clarification.
