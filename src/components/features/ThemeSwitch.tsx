import { useTheme } from "@/providers/ThemeProvider"
import { MoonIcon, SunMediumIcon } from "lucide-react"
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
      <div className="flex items-center justify-center gap-1">
         <Switch
            size="lg"
            checked={isActive}
            onCheckedChange={handleCheckedChange}>
            {isActive ? (
               <MoonIcon
                  className="absolute top-1/2 left-1/2 -translate-1/2"
                  size={18}
               />
            ) : (
               <SunMediumIcon
                  className="absolute top-1/2 left-1/2 -translate-1/2"
                  size={18}
               />
            )}
         </Switch>
      </div>
   )
}

export default ThemeSwitch
