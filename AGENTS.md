# AGENTS.md

Minimal, documentation-style portfolio for Prithvi Pramit. Next.js 15 App Router, MDX-driven content. All pages are statically generated at build time.

## Commands

- `npm run dev` — dev server
- `npm run lint` — ESLint (`next/core-web-vitals` + `next/typescript`)
- `npm run build` — production build; the only typecheck (`next build` runs `tsc`). No test suite exists.
- `npm run start` — serve the production build

## Architecture

- **Content is MDX, not code.** Case studies live in `content/projects/*.mdx` and blog posts in `content/blog/*.mdx`. Each file is YAML frontmatter + MDX. To add a project/post, create a new file there — no code changes needed.
- `lib/content.ts` reads those files with `gray-matter` (build-time, server-side) and exposes `getProjectDocs`/`getProjectDoc`/`getBlogDocs`/`getBlogDoc`. Project frontmatter keys: `title`, `subtitle`, `status`, `year`, `description`, `tech[]`, `github?`, `demo?`, `docs?`, `featured?`, `order` (sorts the index).
- `lib/mdx-components.tsx` registers custom MDX components; their implementations live in `components/mdx/` (`ArchitectureFlow`, `Features`, `Screenshot`, `Challenge`/`Solution`/`Callout`, `OrderBook`, `Chess`). Interactive ones are `"use client"`. Use these tags inside MDX; don't style MDX markup ad hoc — the `.doc` class in `app/globals.css` owns typography.
- Pages are thin shells: `app/projects/[slug]/page.tsx` and `app/blog/[slug]/page.tsx` load a doc, render `<MDXRemote>` in a `.doc` container, and use `generateStaticParams`. Homepage (`app/page.tsx`) shows the `featured: true` docs; `app/projects/page.tsx` shows all.
- `lib/site.ts` is the single source for name, email, GitHub/LinkedIn/Codeforces/LeetCode links, and the `resume` path. Update contact info there, not in components.
- **`public/resume.pdf` does not exist yet.** The Resume buttons/footer link to `/resume.pdf`; the user must drop a real PDF there or the button 404s.
- `data/world.ts`, 3D canvas, WebAudio, and the boot-sequence context were removed in the redesign — do not resurrect them.

## Conventions

- Path alias `@/*` → repo root (e.g. `@/lib/site`, `@/components/ui/button`).
- Design tokens live in `tailwind.config.ts`: `accent` (blue scale), `ink`, `paper`, `up`/`down`. Neutral styling uses the default Tailwind palette. Custom CSS helpers (`mono-label`, `.doc`) are in `app/globals.css`. Renaming a token means updating both files.
- UI primitives (shadcn-style) are in `components/ui/` (`button.tsx`, `badge.tsx`) built on `class-variance-authority` + `clsx` + `tailwind-merge` + `@radix-ui/react-slot`.
- Fonts load via `next/font/google` (`Geist`, `Geist_Mono`) in `app/layout.tsx`; the build downloads them, so `npm run build` requires network access.
- Light/dark theme via `next-themes` (system default, manual toggle). CSS variables (`--ink`, `--paper`, `--card`, `--muted`, `--line`) in `app/globals.css` drive the palette. All components use `text-ink`, `bg-paper`, `bg-card`, `bg-muted`, `border-line` — these adapt automatically. Primary buttons use `text-paper` (white on dark bg, dark on light bg). White text only on colored chips (accent/up/down). Chess board/panels have explicit dark variants. Framer Motion used sparingly. Keep new content/UI in that style.
- TypeScript is `strict`. There is no standalone typecheck script — use `npm run build`.
- `.git/` exists but is an empty, non-functional repo (no `HEAD`); the project is not under working version control.
