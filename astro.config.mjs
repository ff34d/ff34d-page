// @ts-check
import mdx from "@astrojs/mdx"
import react from "@astrojs/react"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"

const isDev = process.env.NODE_ENV === "development"

// https://astro.build/config
export default defineConfig({
   vite: {
      plugins: [tailwindcss()],
   },

   integrations: [react(), mdx()],
   site: isDev ? "http://localhost:4321" : "https://ff34d.github.io",
   base: isDev ? undefined : "/ff34d-page",
})
