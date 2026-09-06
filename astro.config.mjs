// @ts-check
import { defineConfig } from "astro/config";
import path from "path";
import solidJs from "@astrojs/solid-js";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import project from './src/config/project';

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  site: project.url,
  output: "static",
  integrations: [
    solidJs(),
    mdx(),
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      dedupe: ["solid-js", "solid-js/web"],
      alias: {
        "@": path.resolve("./src"),
      },
    },
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: "min-light",
        dark: "min-dark",
      },
    },
  },
});