# OpenTextbook

An open-access academic textbook site built with [Astro](https://astro.build), Tailwind CSS, and TypeScript. Content is styled in APA-7 journal format.

## Architecture

### Content Structure

All chapter content lives in `src/content/chapters/` using a subfolder hierarchy that mirrors the academic structure:

```
src/content/
  config.ts                          ← Astro Content Collection schema
  chapters/
    <topic>/
      <book>/
        <unit>/
          <chapter>.md               ← Chapter document
```

Each chapter `.md` file contains:
- **Frontmatter** with metadata (`title`, `topicSlug`, `bookSlug`, `unitSlug`, `order`, etc.)
- **Markdown body** where headings represent the content hierarchy:
  - `##` H2 — Sections
  - `###` H3 — Subsections
  - `####` H4 — Sub-subsections

Example path: `src/content/chapters/mathematics/calculus/limits-continuity/understanding-limits.md`

To **add a new chapter**, create a new `.md` file in the appropriate subfolder. The site rebuilds automatically and includes it in navigation.

### Navigation

Two navigation systems:
1. **Top navbar** — A fluent dropdown navbar that lets users navigate directly to any chapter. Organized as: Topic → Book → Unit → Chapter.
2. **Left sidebar** — On the chapter reading page, shows the document's headings (H2–H4) for in-page navigation with scroll-aware highlighting.

### Data Layer

`src/data/content.ts` provides TypeScript interfaces and helper utilities:
- `NavChapter`, `NavUnit`, `NavBook`, `NavTopic` — navigation tree types
- `entryToNavChapter()` — converts a Content Collection entry to a `NavChapter`
- `buildNavTree()` — builds the full navigation tree from a list of `NavChapter` entries
- `getChapterNav()` — returns prev/next chapters for pagination

The actual chapter data is loaded at build time in `.astro` files via Astro's `getCollection('chapters')`.

## File Structure

```
src/
  components/
    Navbar.astro        ← Chapter-focused top navigation
    Sidebar.astro       ← In-document heading navigation
    Breadcrumb.astro    ← Breadcrumb trail
    Pagination.astro    ← Prev/next chapter links
  content/
    config.ts           ← Content Collection schema
    chapters/           ← Chapter markdown files (file-based content)
  data/
    content.ts          ← Interfaces and helper functions (no inline data)
  layouts/
    BaseLayout.astro    ← HTML shell with navbar
    ChapterLayout.astro ← Full chapter reading layout with sidebar
  pages/
    index.astro
    [topic]/index.astro
    [topic]/[book]/index.astro
    [topic]/[book]/[unit]/index.astro
    [topic]/[book]/[unit]/[chapter]/index.astro   ← Chapter reading page
    prompt.astro
  styles/
    global.css
```

## Development

```bash
npm install
npm run dev      # start dev server
npm run build    # production build
npm run preview  # preview built site
```
