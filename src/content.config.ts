import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    details: z.string(),
    link: z.string(),
    date: z.string(),
    company: z.string(),
    image: z.string(),
    tools: z.array(
      z.object({
        name: z.string(),
        image: z.string(),
      }),
    ),
    images: z.array(
      z.object({
        src: z.string(),
        alt: z.string(),
      }),
    ),
    slug: z.string(),
    featured: z.boolean(),
  }),
});

export const collections = { projects };
