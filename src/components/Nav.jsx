import NavItem from "./NavItem.jsx";
import NavLogo from "./NavLogo.jsx";

function Nav() {
  return (
    <nav className="container bg-light-green-0 mx-auto mt-5 rounded-3xl px-7 py-2.5">
      <div className="flex justify-between">
        <NavLogo />

        <div className="flex justify-between">
          <NavItem name='Portfolio' link='' />
          <NavItem name='About' link='' />
          <NavItem name='Contact' link='' />
        </div>
      </div>
    </nav>
  )
}

export default Nav