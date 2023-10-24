import { Link } from 'react-router-dom'

function NavItem({ name, link }) {
  return (
    <Link
      to={link}
      className="px-5 m-auto text-lg text-light-tan-0 hover:text-gray-400"
    >
      {name}
    </Link>
  )
}
export default NavItem
