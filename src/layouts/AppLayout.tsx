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
         <main>{children}</main>
      </ThemeProvider>
   )
}

export default AppLayout
