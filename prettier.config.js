/** @type {import("prettier").Config} */
export default {
   printWidth: 90,
   semi: false,
   singleQuote: false,
   tabWidth: 3,
   singleAttributePerLine: true,
   bracketSameLine: true,
   bracketSpacing: true,

   plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],

   overrides: [
      {
         files: "*.astro",
         options: {
            parser: "astro",
         },
      },
   ],
}
