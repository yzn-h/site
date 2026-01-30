// @ts-check

import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://yznh.dev",
  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },

  experimental: {
    fonts: [
      {
        name: "IBM Plex Sans Arabic",
        cssVariable: "--font-ibm-plex-sans-arabic",
        provider: fontProviders.google(),
        weights: [700],
        subsets: ["arabic"],
      },
    ],
  },

  // adapter: cloudflare({
  //  imageService: "compile",
  // }),
  build: {
    inlineStylesheets: "always",
  },
});
