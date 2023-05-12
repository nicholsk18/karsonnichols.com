function NavItem ({ name, link }) {
  return (
    <a href={link} className="text-gray-400 px-5">{name}</a>
  )
}

export default NavItem