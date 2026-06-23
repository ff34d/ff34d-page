// @ts-check
import mdx from "@astrojs/mdx"
import react from "@astrojs/react"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
   vite: {
      plugins: [tailwindcss()],
   },

   integrations: [react(), mdx()],
   site: "https://ff34d.github.io",
   base: "/ff34d-page",
})
