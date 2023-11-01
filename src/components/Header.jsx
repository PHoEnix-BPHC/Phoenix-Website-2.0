import logoSvg from '../assets/phoenix-logo-cropped.svg';;
import { Link } from "react-router-dom";

const Header = () => {
    return (
		<header className="font-grotesk grid grid-rows-[15vh] grid-cols-2">
			<img src={logoSvg} alt="Phoenix Logo" className="w-[15%]" />
			<nav className="flex justify-end">
				<Link to='/' className="p-[3%]">Home</Link>
				<Link to='/projects' className="p-[3%]">Projects</Link>
				<Link to='/professors' className="p-[3%]">Professors</Link>
				<Link to='/pors' className="p-[3%]">PORs</Link>
				<Link to='/it-team' className="p-[3%]">IT Team</Link>
			</nav>
		</header>
    )
}

export default Header;