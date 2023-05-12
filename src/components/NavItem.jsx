function NavItem ({ name, link }) {
  return (
    <a href={link} className="px-5 m-auto text-lg text-light-tan-0 hover:text-gray-400">{name}</a>
  )
}

export default NavItem