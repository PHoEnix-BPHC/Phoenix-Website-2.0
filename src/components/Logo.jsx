import { Link } from 'react-router-dom';
import logoSvg from '../assets/phoenix-logo-cropped.svg';

const Logo = () => {
  return (
    <Link to='/' className='absolute top-2 left-5 text-decoration-none text-md text-red flex items-center'>
      <img src={logoSvg} alt="Phoenix Logo" className='mr-2 w-15' />
      <div className='flex flex-col items-center'>
        <span>Phoenix</span>
        <span>Association</span>
      </div>
    </Link>
  )
}

export default Logo;