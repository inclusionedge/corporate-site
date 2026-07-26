import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const insights = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insights' }),
  schema: z.object({
    title: z.string(),
    /** Optional shorter title for search results — keeps SERP titles under ~60 chars. */
    seoTitle: z.string().optional(),
    description: z.string(),
    category: z.enum(['Practice', 'Framework', 'Policy', 'Method']),
    pubDate: z.coerce.date(),
    readingTime: z.string(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { insights };
