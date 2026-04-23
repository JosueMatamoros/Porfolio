# Portfolio — Claude Instructions

## Adding a new project

### 1. User drops images into `public/mockups/<projectSlug>/`

Typical input filenames: `iPhone 17 Pro.webp`, `iPhone 17 Pro (1).webp`, `MacBook Pro 16 2021.webp`, etc.

### 2. View every image before renaming

Read each file visually to identify what screen/page it shows, then rename:
- Mobile mockups → `<slug>-mobile-1.webp`, `<slug>-mobile-2.webp`, …
- Desktop mockups → `<slug>-desktop-1.webp`, `<slug>-desktop-2.webp`, …

Use `mv` for each file. Verify with `ls`.

### 3. Compress all images with ImageMagick

```bash
for f in public/mockups/<projectSlug>/*.webp; do
  magick "$f" -quality 70 "$f"
done
```

Skip PDFs or other non-image assets.

### 4. Ask the user for project info

Request the following before writing any code:

- **Title** — display name
- **Description** — what problem it solves and key features
- **Technologies** — full stack list
- **Live URL** — or `null` if private
- **GitHub URL** — or `null` if private
- **PDF sample** — path if a proforma/export sample exists (enables "Sample PDF" button)
- **Period** — start date and end date (or "Present")
- **Home visibility** — should it appear on the home page? (home uses `limit={2}`, only first two projects show)

### 5. Add the project to `ProjectsSection.jsx`

File: `src/components/sections/ProjectsSection.jsx`

Add a new entry to the `projects` array. Fields available:

```js
{
  title: "...",
  description: "...",
  technologies: ["...", "..."],
  mockups: {
    desktop: ["/mockups/<slug>/...", ...],
    mobile:  ["/mockups/<slug>/...", ...],
  },
  liveUrl:   "https://..." | undefined,
  githubUrl: "https://..." | undefined,
  pdfUrl:    "/mockups/<slug>/....pdf" | undefined,
}
```

The home page (`src/app/page.js`) passes `limit={2}` to `ProjectsSection`, so only the first two entries appear there. The full `/projects` page shows all.

### 6. ProjectCard features (do not change unless asked)

- Desktop/mobile toggle button (top-right of card)
- Carousel with prev/next arrows — arrows hidden automatically when only 1 image
- Pagination dots with extra bottom padding so they don't overlap the image
- "View Project" button (liveUrl), "Sample PDF" button (pdfUrl), "GitHub" button (githubUrl)
- Framer Motion fade+scale transition between slides

## Tech stack

- **Framework**: Next.js 14 App Router, `output: "export"` (static, Cloudflare Pages)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Images**: `next/image` with `unoptimized: true` (required for static export)
- **Deployment**: Cloudflare Pages — output directory must be set to `out`

## Key files

| File | Purpose |
|---|---|
| `src/app/page.js` | Home page — renders first `limit={2}` projects |
| `src/app/projects/page.jsx` | Full projects page |
| `src/components/sections/ProjectsSection.jsx` | Project data array + section layout |
| `src/components/common/ProjectCard.jsx` | Individual project card with carousel |
| `src/components/layout/HeaderComponent.jsx` | Navbar (glassmorphism pill desktop, fullscreen overlay mobile) |
| `src/components/common/TechSkillsCard.jsx` | Skills tabs with magic/icon toggle |
| `src/lib/experiences.js` | Experience data (Freelance + Academic) |

## ESLint rules to watch

- Escape apostrophes in JSX: `'` → `&apos;`
- Add all variables used inside `useEffect` to its dependency array
