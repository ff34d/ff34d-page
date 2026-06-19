import Header from "@/components/widgets/Header"
import { ThemeProvider } from "@/providers"
import type { ReactNode } from "react"

interface AppLayoutProps {
   children: ReactNode
}

function AppLayout({ children }: AppLayoutProps) {
   return (
      <ThemeProvider defaultTheme="dark">
         <Header />
         <main className="mx-auto w-full max-w-md px-4 md:max-w-xl lg:max-w-2xl">
            {children}
         </main>
      </ThemeProvider>
   )
}
export default AppLayout
