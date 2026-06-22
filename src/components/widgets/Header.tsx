import ThemeSwitch from "../features/ThemeSwitch"
import { Box } from "../ui/box"

function Header() {
   return (
      <header
         className="sticky top-0 left-0 z-10 w-full border-b backdrop-blur-xs"
         style={{ backgroundColor: "var(--header)" }}>
         <Box className="flex items-center justify-between py-6">
            <h1 className="text-xl">
               <span
                  className="mr-0.5"
                  style={{ color: "var(--accent-green)" }}>
                  ~
               </span>
               <span className="font-medium text-white">VV</span>
            </h1>
            <ThemeSwitch />
         </Box>
      </header>
   )
}

export default Header
