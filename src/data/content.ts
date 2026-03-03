/**
 * content.ts — Interfaces and navigation helpers for the file-based content system.
 *
 * All section content lives in src/content/<topic>/<book>/<unit>/<chapter>/<section>.mdx.
 * The CollectionEntry type from astro:content is the canonical data type; these interfaces
 * model the navigation/hierarchy structures derived from the collection at build time.
 */

export interface NavSection {
  slug: string;
  title: string;
  topicSlug: string;
  topicTitle: string;
  bookSlug: string;
  bookTitle: string;
  unitSlug: string;
  unitTitle: string;
  unitOrder: number;
  chapterSlug: string;
  chapterTitle: string;
  chapterOrder: number;
  order: number;
  /** Full path segment used in URLs: /topic/book/unit/chapter/section */
  href: string;
}

export interface NavChapter {
  slug: string;
  title: string;
  sections: NavSection[];
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
 * Build a nested navigation tree from a flat list of NavSection entries.
 * Call this in .astro files after fetching sections from getCollection('sections').
 */
export function buildNavTree(sections: NavSection[]): NavTopic[] {
  const topicsMap = new Map<string, NavTopic>();

  for (const sec of sections) {
    // Topic
    if (!topicsMap.has(sec.topicSlug)) {
      topicsMap.set(sec.topicSlug, { slug: sec.topicSlug, title: sec.topicTitle, books: [] });
    }
    const topic = topicsMap.get(sec.topicSlug)!;

    // Book
    let book = topic.books.find((b) => b.slug === sec.bookSlug);
    if (!book) {
      book = { slug: sec.bookSlug, title: sec.bookTitle, units: [] };
      topic.books.push(book);
    }

    // Unit
    let unit = book.units.find((u) => u.slug === sec.unitSlug);
    if (!unit) {
      unit = { slug: sec.unitSlug, title: sec.unitTitle, chapters: [] };
      book.units.push(unit);
    }

    // Chapter
    let chapter = unit.chapters.find((c) => c.slug === sec.chapterSlug);
    if (!chapter) {
      chapter = { slug: sec.chapterSlug, title: sec.chapterTitle, sections: [] };
      unit.chapters.push(chapter);
    }

    chapter.sections.push(sec);
  }

  // Sort within each level
  for (const topic of topicsMap.values()) {
    for (const book of topic.books) {
      book.units.sort((a, b) => {
        const aUnit = a.chapters[0]?.sections[0];
        const bUnit = b.chapters[0]?.sections[0];
        if (!aUnit || !bUnit) return 0;
        return aUnit.unitOrder - bUnit.unitOrder;
      });
      for (const unit of book.units) {
        unit.chapters.sort((a, b) => {
          const aSec = a.sections[0];
          const bSec = b.sections[0];
          if (!aSec || !bSec) return 0;
          return aSec.chapterOrder - bSec.chapterOrder;
        });
        for (const chapter of unit.chapters) {
          chapter.sections.sort((a, b) => a.order - b.order);
        }
      }
    }
  }

  return Array.from(topicsMap.values());
}

/**
 * Convert a getCollection('sections') entry to a NavSection.
 */
export function entryToNavSection(entry: {
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
    chapterSlug: string;
    chapterTitle: string;
    chapterOrder: number;
    order: number;
  };
}): NavSection {
  // entry.id is like "mathematics/calculus/limits-continuity/understanding-limits/introduction-to-limits"
  const parts = entry.id.replace(/\.(md|mdx)$/, '').split('/');
  const sectionSlug = parts[parts.length - 1]!;
  const { topicSlug, bookSlug, unitSlug, chapterSlug } = entry.data;
  return {
    slug: sectionSlug,
    title: entry.data.title,
    topicSlug,
    topicTitle: entry.data.topicTitle,
    bookSlug,
    bookTitle: entry.data.bookTitle,
    unitSlug,
    unitTitle: entry.data.unitTitle,
    unitOrder: entry.data.unitOrder,
    chapterSlug,
    chapterTitle: entry.data.chapterTitle,
    chapterOrder: entry.data.chapterOrder,
    order: entry.data.order,
    href: `/${topicSlug}/${bookSlug}/${unitSlug}/${chapterSlug}/${sectionSlug}`,
  };
}

/**
 * Get prev/next sections from a flat ordered list of NavSections.
 */
export function getSectionNav(
  sections: NavSection[],
  currentHref: string
): { prev: NavSection | null; next: NavSection | null } {
  const idx = sections.findIndex((s) => s.href === currentHref);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: idx > 0 ? sections[idx - 1]! : null,
    next: idx < sections.length - 1 ? sections[idx + 1]! : null,
  };
}
