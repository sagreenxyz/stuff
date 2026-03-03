import { defineCollection, z } from 'astro:content';

const chapters = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    topicSlug: z.string(),
    topicTitle: z.string(),
    bookSlug: z.string(),
    bookTitle: z.string(),
    unitSlug: z.string(),
    unitTitle: z.string(),
    unitOrder: z.number(),
    order: z.number(),
  }),
});

export const collections = { chapters };
