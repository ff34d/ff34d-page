import { theme } from "@/react/lib/theme"
import { MoonIcon, SunMediumIcon } from "lucide-react"
import { useState } from "react"
import { Switch } from "./ui/switch"

function ThemeSwitch() {
   const { toggle, getCurrent } = theme()
   const [isActive, setIsActive] = useState<boolean>(getCurrent() === "dark")

   const handleCheckedChange = (value: boolean) => {
      setIsActive(value)
      toggle()
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
