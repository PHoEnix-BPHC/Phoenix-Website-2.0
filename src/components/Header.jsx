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

	return (
	<header className="font-grotesk grid grid-rows-[15vh] grid-cols-2 p-[3vh]">
		<img src={logoSvg} alt="Phoenix Logo" className="w-[12%]" />
		<nav className="flex justify-end">
		{
		navigationOptions.map( (option, index) => (
			<NavLink to={option.route} 
			key={`nav option ${index}`}
			className={ ({isActive}) => {
				return `p-[3%] ${isActive ? 'bg-gradient-to-r from-red to-yellow text-transparent bg-clip-text' : ''}`
			} }>
				{option.label}
			</NavLink>
		) )
		}
		</nav>
	</header>
	)
}

export default Header;