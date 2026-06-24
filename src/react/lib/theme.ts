export type ThemeMode = keyof typeof ThemeMode
export const ThemeMode = {
   dark: "dark",
   light: "light",
} as const

export function theme() {
   const getCurrent = () => {
      return document?.documentElement?.classList?.contains(ThemeMode.dark)
         ? ThemeMode.dark
         : ThemeMode.light
   }

   const toggle = () => {
      const isDarkStored = document?.documentElement?.classList?.contains(ThemeMode.dark)

      if (isDarkStored) {
         document?.documentElement?.classList?.remove(ThemeMode.dark)
         document?.documentElement?.classList?.add(ThemeMode.light)
      } else {
         document?.documentElement?.classList?.remove(ThemeMode.light)
         document?.documentElement?.classList?.add(ThemeMode.dark)
      }

      window.localStorage.setItem("_theme", getCurrent())
   }

   return { toggle, getCurrent }
}
