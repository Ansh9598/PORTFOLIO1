# Ansh Uttam — Portfolio ("Developer OS")

A premium, dark, developer-OS-styled personal portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Updating your information

Everything personal — name, contact info, bio, skills, experience, education,
projects, achievements, and social links — lives in a single file:

```
src/data/portfolio.ts
```

Edit that file and the whole site updates automatically. No component needs
to change.

### Adding your resume

Drop your resume PDF at:

```
public/resume/Ansh_Uttam_Resume.pdf
```

This matches the `resumePath` already set in `src/data/portfolio.ts`. Until
the file exists, the "View/Download Resume" buttons will link to a 404 — add
the PDF to activate them.

### Adding GitHub / LinkedIn links

Fill in `profile.social.github` and `profile.social.linkedin` in
`src/data/portfolio.ts`. Until filled in, those buttons/icons render in a
disabled state rather than pointing to invented URLs.

### Adding real project links

Each project in the `projects` array has `github` and `demo` fields set to
`null` as placeholders. Replace `null` with the real URL string once available.

## Project structure

```
src/
├── components/   Reusable UI: Navbar, FloatingDock, CommandPalette, cards, forms…
├── sections/     One file per homepage section (Hero, About, Skills, …)
├── pages/        Home.tsx (all sections) and RecruiterView.tsx
├── data/
│   └── portfolio.ts   ← all personal data lives here
├── hooks/        useTheme, useScrollSpy, useClock
├── utils/        small helpers (cn)
└── App.tsx       routing, theme, command palette, dock wiring
```

## Features

- Sticky top navigation with search / command palette entry point
- Desktop floating dock with working, hoverable app-style icons
- Command palette (Ctrl/Cmd + K) with keyboard navigation
- Filterable project grid with detail modals
- Dedicated Recruiter View page for fast scanning
- Dark/light theme toggle, persisted to `localStorage`
- Contact form with client-side validation
- Fully responsive from 320px to 1920px+
