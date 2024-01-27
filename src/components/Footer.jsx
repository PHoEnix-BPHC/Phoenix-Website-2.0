import React from "react";
import { Link } from "react-router-dom";
import logoSvg from "../assets/phoenix-logo-cropped.svg";
import bottomSquiggle from "../assets/bottomSquiggle.svg";

const Footer = () => {
  return (
    <div className="grid grid-cols-3 items-start justify-items-center p-[1vh] bg-backgroundCol">
      
      <div className="flex flex-col items-center">
        <img src={logoSvg} alt="Phoenix Logo" className="w-[30%]" />
      </div>

      
      <div className="flex flex-col items-center">
        <div>
          <h1 className="text-[3vh] bg-gradient-to-r from-red to-yellow text-transparent bg-clip-text text-center mb-2">Links</h1>
        </div>
        <div className="flex flex-row ">
          <ul className="list-none p-0 mr-10">
            <li><Link className="text-white no-underline" to='/'>Home</Link></li>
            <li><Link className="text-white no-underline" to='/projects'>Projects</Link></li>
            <li><Link className="text-white no-underline" to='/professors'>Professors</Link></li>
            <li><Link className="text-white no-underline" to='/pors'>PORs</Link></li>
          </ul>
          <ul className="list-none p-0 ml-5">
            <li><Link className="text-white no-underline" to='/it-team'>IT Team</Link></li>
            <li><Link className="text-white no-underline" to='/workshops'>Workshops</Link></li>
            <li><Link className="text-white no-underline" to='/guest-talk'>Guest Talks</Link></li>
          </ul>
        </div>
      </div>

      
      <div>
        <h1 className="text-[3vh] bg-gradient-to-r from-red to-yellow text-transparent bg-clip-text text-center mb-2">Contact</h1>
        <p className="text-white">Dr Subhendu Kumar Sahoo <br /> dasjlfdsjfalkdjhfkasdhf</p>
      </div>
    </div>
  );
};

export default Footer;
