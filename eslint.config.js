import eslint from "@eslint/js"
import tseslint from "typescript-eslint"
import eslintPluginAstro from "eslint-plugin-astro"
import astroEslintParser from "astro-eslint-parser"
import globals from "globals"
import eslintConfigPrettier from "eslint-config-prettier"

export default tseslint.config(
   eslint.configs.recommended,

   ...tseslint.configs.recommended,
   ...eslintPluginAstro.configs["flat/recommended"],

   {
      files: ["**/*.astro"],
      languageOptions: {
         parser: astroEslintParser,
         parserOptions: {
            parser: tseslint.parser,
            extraFileExtensions: [".astro"],
            sourceType: "module",
         },
      },
   },

   {
      languageOptions: {
         globals: {
            ...globals.browser,
            ...globals.node,
         },
      },
   },

   {
      ignores: [".astro/", "dist/", "node_modules/"],
   },

   eslintConfigPrettier,
)
