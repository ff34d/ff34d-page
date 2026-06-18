import { useTheme } from "@/providers/ThemeProvider"
import { useState } from "react"
import { Switch } from "../ui/switch"

function ThemeSwitch() {
   const themeContext = useTheme()
   const [isActive, setIsActive] = useState<boolean>(themeContext.theme === "dark")

   const handleCheckedChange = (value: boolean) => {
      setIsActive(value)
      themeContext.toggleTheme()
   }

   return (
      <Switch
         checked={isActive}
         onCheckedChange={handleCheckedChange}
      />
   )
}

export default ThemeSwitch
