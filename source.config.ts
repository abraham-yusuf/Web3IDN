import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema,
} from 'fumadocs-mdx/config';
import { z } from 'zod';

// Extended frontmatter schema for blog posts
const blogFrontmatterSchema = frontmatterSchema.extend({
  date: z.string().optional(),
  author: z.string().optional(),
  tags: z.array(z.string()).optional(),
  image: z.string().optional(),
});

// Docs configuration
export const docs = defineDocs({
  dir: 'content/docs',
  docs: {
    schema: frontmatterSchema,
  },
  meta: {
    schema: metaSchema,
  },
});

// Learn configuration
export const learn = defineDocs({
  dir: 'content/learn',
  docs: {
    schema: frontmatterSchema,
  },
  meta: {
    schema: metaSchema,
  },
});

// Blog configuration
export const blog = defineDocs({
  dir: 'content/blog',
  docs: {
    schema: blogFrontmatterSchema,
  },
  meta: {
    schema: metaSchema,
  },
});

export default defineConfig({
  mdxOptions: {
    // MDX options
  },
});
