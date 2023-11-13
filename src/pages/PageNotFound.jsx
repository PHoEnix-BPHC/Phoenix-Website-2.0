import { Link } from "react-router-dom";
import logoSvg from '../assets/phoenix-logo-cropped.svg';
const PageNotFound = () => {
  return(
<div className="text-center h-screen block">
    <h1 className="mb-4 text-[30vh] bg-gradient-to-r from-red to-yellow text-transparent bg-clip-text">404</h1>
    <p className="mb-4 text-[5vh] text-gray-600">Oops! Looks like you&apos;re lost.</p>
    <div className="animate-bounce">
    <img className = "mx-auto h-[10vh]" src={logoSvg} alt="Phoenix Logo" />
    </div>
    <p className="mt-1 text-gray-600">Let&apos;s get you back <Link href="/" className="text-blue-500">home</Link>.</p>
  </div>
  );
}

export default PageNotFound;