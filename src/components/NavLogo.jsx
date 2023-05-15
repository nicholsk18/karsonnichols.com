import { Link } from "react-router-dom";

export default function NavLogo () {
  return (
    <div className="">
      <Link to="/">
        <img src='/logo.svg' alt="logo" className="w-10 px-2" />
      </Link>
    </div>
  )
}