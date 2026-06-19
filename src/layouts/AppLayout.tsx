import { Box } from "@/components/ui/box"
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
         <Box as="main">{children}</Box>
      </ThemeProvider>
   )
}
export default AppLayout
