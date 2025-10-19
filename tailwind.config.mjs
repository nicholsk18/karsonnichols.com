/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        blue: { base: "#032759", hero: "#E5EEF7" },
        orange: { base: "#F34605" },
      },
      fontFamily: {
        sans: ["Lato", "sans-serif"],
      },
      dropShadow: {
        card: "10px 10px 0px #FF3344",
      },
      boxShadow: {
        card: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
