import ThemeSwitch from "../features/ThemeSwitch"

function Header() {
   return (
      <header className="sticky top-0 left-0 flex w-full items-center justify-between gap-2 bg-black/25 px-6 py-4 backdrop-blur-xs">
         <h1>Vladimir Volkov</h1>

         <ThemeSwitch />
      </header>
   )
}

export default Header
