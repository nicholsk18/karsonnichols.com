// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import alpine from "@astrojs/alpinejs";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://karsonnichols.com",
  integrations: [tailwind(), alpine({ entrypoint: "/src/entrypoint" }), mdx(), sitemap()],
});
