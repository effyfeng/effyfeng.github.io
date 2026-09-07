import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// 1. 每篇 md 顶部 frontmatter 的字段。Astro 会在 build 时校验，缺 title 或 date 直接报错
const post = z.object({
  title: z.string(),
  date: z.coerce.date(),
  description: z.string().optional(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
});

// 2. 两个 collection = src/content/ 下的两个文件夹。文件名就是网址的最后一段
const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: post,
});

const journal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/journal' }),
  schema: post,
});

export const collections = { notes, journal };
