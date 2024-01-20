import { Link } from 'react-router-dom';
import logoSvg from '../assets/phoenix-logo-cropped.svg';

const Footer = () => {
  	return (
		<div className="grid grid-cols-3 items-start justify-items-center p-[3vh] bg-backgroundCol">
			<img src={logoSvg} alt="Phoenix Logo" className="w-[30%]" />
			<span>
				<h1 className="text-[3vh] bg-gradient-to-r from-red to-yellow text-transparent bg-clip-text">Links</h1>
				<ul className="list-none p-0">
					<li><Link className="text-white no-underline" to='/'>Home</Link></li>
					<li><Link className="text-white no-underline" to='/projects'>Projects</Link></li>
					<li><Link className="text-white no-underline" to='/professors'>Professors</Link></li>
					<li><Link className="text-white no-underline" to='/pors'>PORs</Link></li>
					<li><Link className="text-white no-underline" to='/it-team'>IT Team</Link></li>
				</ul>
			</span>
			<span>
				<h1 className="text-[3vh] bg-gradient-to-r from-red to-yellow text-transparent bg-clip-text">Contact</h1>
				<p className="text-white">Dr Subhendu Kumar Sahoo <br /> dasjlfdsjfalkdjhfkasdhf</p>
			</span>
		</div>
  	)
}

export default Footer;