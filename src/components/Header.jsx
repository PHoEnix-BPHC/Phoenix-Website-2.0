import logoSvg from '../assets/phoenix-logo-cropped.svg';
import { NavLink } from "react-router-dom";

const Header = () => {
	const navigationOptions = [
		{ label: 'Home', route: '/'},
		{ label: 'Projects', route: '/projects'},
		{ label: 'Professors', route: '/professors'},
		{ label: 'PORs', route: '/pors'},
		{ label: 'IT Team', route: '/it-team'},
	]

	let navJsx = navigationOptions.map( (option, index) => (
		<NavLink to={option.route} 
			key={`nav option ${index}`}
			className={ ({isActive}) => {
				return `p-[3%] ${isActive ? 'bg-gradient-to-r from-red to-yellow text-transparent bg-clip-text z-1' : 'text-white no-underline z-1'}`
			} }>
			{option.label}
		</NavLink>
	) );

	return (
		<header className="font-grotesk grid grid-rows-[10em] sm:grid-rows-[7em] grid-cols-[1fr_2fr] p-[2%] bg-backgroundCol">
			<img src={logoSvg} alt="Phoenix Logo" className="h-[90%]" />
			<nav className="flex flex-wrap justify-end text-lg"> { navJsx } </nav>
		</header>
	)
}

export default Header;