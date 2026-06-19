import { ThemeProvider } from "@/components/providers"
import { Box } from "@/components/ui/box"
import { Footer } from "@/components/widgets/Footer"
import Header from "@/components/widgets/Header"
import "@/shared/styles/index.css"
import type { ReactNode } from "react"

interface AppLayoutProps {
   children: ReactNode
}

function AppLayout({ children }: AppLayoutProps) {
   return (
      <ThemeProvider defaultTheme="dark">
         <Header />
         <Box as="main">{children}</Box>
         <Footer />
      </ThemeProvider>
   )
}
export default AppLayout
