import ThemeSwitch from "../features/ThemeSwitch"

function Header() {
   return (
      <header className="w-full flex">
         <h1>Vladimir Volkov</h1>

         <ThemeSwitch />
      </header>
   )
}

export default Header
