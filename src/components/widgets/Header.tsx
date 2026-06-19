import ThemeSwitch from "../features/ThemeSwitch"

function Header() {
   return (
      <header className="sticky top-0 left-0 w-full bg-black/25 backdrop-blur-xs">
         <div className="mx-auto flex w-full max-w-md items-center justify-between px-4 py-6 md:max-w-xl lg:max-w-2xl">
            <h1>Vladimir Volkov</h1>
            <ThemeSwitch />
         </div>
      </header>
   )
}

export default Header
