// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";

import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://karsonnichols.com",
  integrations: [tailwind(), alpinejs(), mdx()],
  image: {
    service: passthroughImageService(),
  },
});
