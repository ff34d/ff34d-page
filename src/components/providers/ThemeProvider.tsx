import { _STORAGE_KEY_THEME } from "@/shared/configs"
import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

export type ThemeMode = "dark" | "light"

interface IThemeContext {
   theme: ThemeMode
   toggleTheme: VoidFunction
}

const ThemeContext = createContext<IThemeContext | undefined>(undefined)

interface ThemeProviderProps {
   defaultTheme: ThemeMode
   children: ReactNode
}

export function ThemeProvider({ defaultTheme, children }: ThemeProviderProps) {
   const [theme, setTheme] = useState<ThemeMode>(
      (localStorage?.getItem(_STORAGE_KEY_THEME) as ThemeMode | undefined) ??
         defaultTheme,
   )

   const toggleTheme = () => {
      setTheme((prev) => (prev === "dark" ? "light" : "dark"))
   }

   useEffect(() => {
      const rootEl = window?.document?.documentElement
      rootEl?.classList.remove("dark", "light")
      rootEl?.classList.add(theme)
      localStorage.setItem(_STORAGE_KEY_THEME, theme)
   }, [theme])

   return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
         {children}
      </ThemeContext.Provider>
   )
}

export function useTheme() {
   const context = useContext(ThemeContext)

   if (context === undefined) {
      throw new Error("useTheme must be used within a ThemeProvider")
   }

   return context
}
