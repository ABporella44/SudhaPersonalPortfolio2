# Hexafolio

A fully responsive developer portfolio built with **React + Vite + Tailwind CSS**, featuring five
switchable color themes, a sticky pill navbar with a mobile menu, and eight sections wired up with
dummy content: Home, Projects, About, Tech, Services, Education, Testimonials, and Get In Touch.

## Getting started

Requires Node.js 18+.

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview   # preview the production build locally
```

## Project structure

```
hexafolio/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx              # app entry, wraps App in ThemeProvider
    ├── App.jsx                # assembles all sections in order
    ├── index.css              # Tailwind layers + theme CSS variables
    ├── context/
    │   └── ThemeContext.jsx   # theme state, persisted to localStorage
    ├── data/
    │   └── data.js            # all dummy content lives here — edit freely
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx           # Home section
        ├── About.jsx
        ├── Projects.jsx       # also exports shared <SectionHeading>
        ├── Tech.jsx
        ├── Services.jsx
        ├── Education.jsx
        ├── Testimonials.jsx
        ├── Contact.jsx        # functional form (client-side only)
        ├── Footer.jsx
        ├── ThemeSwitcher.jsx  # floating palette picker (bottom right)
        └── ScrollToTop.jsx    # floating scroll-to-top button
```

## Editing content

Everything text-based — your name, bio, projects, tech stack, services, education, testimonials,
and contact details — lives in **`src/data/data.js`**. Update the exported objects/arrays there;
every section reads from this one file, so you never need to touch component markup just to swap
copy.

## Theming

Five built-in themes — **Ocean, Nebula, Ember, Forest, and Graphite** — are defined as CSS custom
properties in `src/index.css` under `[data-theme='...']` blocks. The palette icon in the
bottom-right corner opens a picker that swaps the `data-theme` attribute on `<html>` and persists
the choice in `localStorage`.

To add a new theme:

1. Copy one of the existing `[data-theme='...']` blocks in `src/index.css` and give it a new name.
2. Adjust the variable values (`--bg-primary`, `--accent`, etc.).
3. Add `{ id: 'your-id', name: 'Your Theme', swatch: '#hex' }` to the `THEMES` array in
   `src/context/ThemeContext.jsx`.

All components consume colors via Tailwind utility classes like `bg-bg-card`, `text-ink-muted`,
`text-accent`, and `border-line` (mapped to the CSS variables in `tailwind.config.js`), so a new
theme automatically applies everywhere with no component changes.

## Wiring up the contact form

The contact form in `src/components/Contact.jsx` currently simulates a successful submission on
the client. To send real messages, replace the body of `handleSubmit` with a call to your backend,
form service (e.g. Formspree, Resend), or serverless function.

## Notes

- Profile photo is a placeholder (initials avatar) — drop your own image into `src/assets/` and
  swap it into `About.jsx`.
- Icons are from [lucide-react](https://lucide.dev/).
- Fonts: Space Grotesk (display) and Inter (body), loaded via Google Fonts in `index.html`.


##Amazon AWS Bucket
porella.abhilash@techmahindra.com
Pradhyumna@6202
https://sudharesume.s3.eu-north-1.amazonaws.com/Resume_4.pdf
