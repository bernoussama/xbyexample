import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      themes: {
        light: "github-light",
        // dark: "one-dark-pro",
        dark: "github-dark",
      },
    },
  },
});
