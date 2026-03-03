import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const sections = defineCollection({
  loader: glob({ pattern: '*/*/*/*/*.{md,mdx}', base: './src/content' }),
  schema: z.object({
    title: z.string(),
    topicSlug: z.string(),
    topicTitle: z.string(),
    bookSlug: z.string(),
    bookTitle: z.string(),
    unitSlug: z.string(),
    unitTitle: z.string(),
    unitOrder: z.number(),
    chapterSlug: z.string(),
    chapterTitle: z.string(),
    chapterOrder: z.number(),
    order: z.number(),
  }),
});

export const collections = { sections };
