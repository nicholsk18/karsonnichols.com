import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    details: z.string(),
    link: z.string(),
    linkText: z.string(),
    date: z.string(),
    order: z.string(),
    company: z.string().default(""),
    image: z.string(),
    thumbnail: z.string(),
    tools: z.array(
      z.object({
        name: z.string(),
        featured: z.boolean(),
      })
    ),
    features: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        icon: z.string(),
      })
    ),
    images: z.array(
      z.object({
        src: z.string(),
        alt: z.string(),
      })
    ),
    related: z.array(z.string()).default([]),
    slug: z.string(),
    featured: z.boolean().default(false),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    author: z.string().default("Karson Nichols"),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, blog };
