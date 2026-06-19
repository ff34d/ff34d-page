import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface BoxProps {
   as?: keyof HTMLElementTagNameMap
   children?: ReactNode
   className?: string
}

export function Box({ as: Component = "div", children, className }: BoxProps) {
   // eslint-disable-next-line
   const Tag = Component as any // Astro-react fix type error

   return (
      <Tag
         className={cn(
            className,
            "mx-auto w-full max-w-md px-4 md:max-w-xl lg:max-w-2xl",
         )}>
         {children}
      </Tag>
   )
}
