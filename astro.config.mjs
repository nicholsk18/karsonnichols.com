// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";

import tailwind from "@astrojs/tailwind";
import alpine from "@astrojs/alpinejs";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://karsonnichols.com",
  integrations: [tailwind(), alpine({ entrypoint: "/src/entrypoint" }), mdx()],
  image: {
    service: passthroughImageService(),
  },
});
