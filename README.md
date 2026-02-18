# CVEEEZ Corporate Profile

Professional landing page for CVEEEZ, built with Next.js, TailwindCSS, and multi-language support (AR/EN).

## Project Structure
- `src/app`: Next.js App Router pages.
- `src/components`: UI components (Navbar, Footer, etc.).
- `src/components/context`: Theme and Language context providers.
- `src/lib/translations.ts`: Translation dictionary for AR and EN.

## Local Development
1. Clone the repository.
2. Install dependencies: `npm install`
3. Start dev server: `npm run dev`
4. Visit `http://localhost:9002`

## Deployment (Firebase Hosting)
1. Build the project: `npm run build`
2. Initialize Firebase (if not done): `firebase init hosting`
3. Deploy: `firebase deploy`

## Assets
Place the company logo at `public/logo.png` for use in the Navbar and OG metadata.