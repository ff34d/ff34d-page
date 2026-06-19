import ThemeSwitch from "../features/ThemeSwitch"
import { Box } from "../ui/box"

function Header() {
   return (
      <header className="sticky top-0 left-0 w-full bg-black/25 backdrop-blur-xs">
         <Box className="flex items-center justify-between py-6">
            <h1>Vladimir Volkov</h1>
            <ThemeSwitch />
         </Box>
      </header>
   )
}

export default Header
