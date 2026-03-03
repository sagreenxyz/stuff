/**
 * content.ts — Interfaces and navigation helpers for the file-based content system.
 *
 * All chapter content lives in src/content/chapters/<topic>/<book>/<unit>/<chapter>.md.
 * The CollectionEntry type from astro:content is the canonical data type; these interfaces
 * model the navigation/hierarchy structures derived from the collection at build time.
 */

export interface NavChapter {
  slug: string;
  title: string;
  topicSlug: string;
  topicTitle: string;
  bookSlug: string;
  bookTitle: string;
  unitSlug: string;
  unitTitle: string;
  unitOrder: number;
  order: number;
  /** Full path segment used in URLs: topic/book/unit/chapter */
  href: string;
}

export interface NavUnit {
  slug: string;
  title: string;
  chapters: NavChapter[];
}

export interface NavBook {
  slug: string;
  title: string;
  units: NavUnit[];
}

export interface NavTopic {
  slug: string;
  title: string;
  books: NavBook[];
}

/**
 * Build a nested navigation tree from a flat list of NavChapter entries.
 * Call this in .astro files after fetching chapters from getCollection('chapters').
 */
export function buildNavTree(chapters: NavChapter[]): NavTopic[] {
  const topicsMap = new Map<string, NavTopic>();

  for (const ch of chapters) {
    // Topic
    if (!topicsMap.has(ch.topicSlug)) {
      topicsMap.set(ch.topicSlug, { slug: ch.topicSlug, title: ch.topicTitle, books: [] });
    }
    const topic = topicsMap.get(ch.topicSlug)!;

    // Book
    let book = topic.books.find((b) => b.slug === ch.bookSlug);
    if (!book) {
      book = { slug: ch.bookSlug, title: ch.bookTitle, units: [] };
      topic.books.push(book);
    }

    // Unit
    let unit = book.units.find((u) => u.slug === ch.unitSlug);
    if (!unit) {
      unit = { slug: ch.unitSlug, title: ch.unitTitle, chapters: [] };
      book.units.push(unit);
    }

    unit.chapters.push(ch);
  }

  // Sort chapters within each unit by order
  for (const topic of topicsMap.values()) {
    for (const book of topic.books) {
      for (const unit of book.units) {
        unit.chapters.sort((a, b) => a.order - b.order);
      }
    }
  }

  return Array.from(topicsMap.values());
}

/**
 * Convert a getCollection('chapters') entry to a NavChapter.
 * Import CollectionEntry from 'astro:content' in the calling .astro file.
 */
export function entryToNavChapter(entry: {
  id: string;
  data: {
    title: string;
    topicSlug: string;
    topicTitle: string;
    bookSlug: string;
    bookTitle: string;
    unitSlug: string;
    unitTitle: string;
    unitOrder: number;
    order: number;
  };
}): NavChapter {
  // entry.id is like "mathematics/calculus/limits-continuity/understanding-limits"
  // The last segment is the chapter slug
  const parts = entry.id.replace(/\.md$/, '').split('/');
  const chapterSlug = parts[parts.length - 1]!;
  const { topicSlug, bookSlug, unitSlug } = entry.data;
  return {
    slug: chapterSlug,
    title: entry.data.title,
    topicSlug,
    topicTitle: entry.data.topicTitle,
    bookSlug,
    bookTitle: entry.data.bookTitle,
    unitSlug,
    unitTitle: entry.data.unitTitle,
    unitOrder: entry.data.unitOrder,
    order: entry.data.order,
    href: `/${topicSlug}/${bookSlug}/${unitSlug}/${chapterSlug}`,
  };
}

/**
 * Get prev/next chapters from a flat ordered list of NavChapters.
 */
export function getChapterNav(
  chapters: NavChapter[],
  currentHref: string
): { prev: NavChapter | null; next: NavChapter | null } {
  const idx = chapters.findIndex((c) => c.href === currentHref);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: idx > 0 ? chapters[idx - 1]! : null,
    next: idx < chapters.length - 1 ? chapters[idx + 1]! : null,
  };
}
