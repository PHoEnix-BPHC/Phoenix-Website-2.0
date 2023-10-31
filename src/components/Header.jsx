import Logo from "./Logo.jsx";
import { Link } from "react-router-dom";

const Header = () => {
  return (
  <header>
    <Logo />
    <nav className="flex justify-end mr-10 mt-3">
      <Link to='/' className='p-4'>
        Home
      </Link>
      <Link to='/projects' className='p-4'>
        Projects
      </Link>
      <Link to='/professors' className='p-4'>
        Professors
      </Link>
      <Link to='/pors' className='p-4'>
        PORs
      </Link>
      <Link to='/it-team' className='p-4'>
        IT Team
      </Link>
    </nav>
  </header>
  )
}

export default Header;