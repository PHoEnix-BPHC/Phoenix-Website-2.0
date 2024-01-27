/**import React from 'react';
import pors from '../data/pors';
import redBlurSvg from "../assets/redBlur.svg";

const Card = ({ id, student, designation, contact }) => {
  const imagePath = `src/data/porImages/${id}.jpeg`;

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md mb-4 z-1" style={{ backgroundColor: '#ffffff', color: '#100606' }}>
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <div className="h-48 w-48 overflow-hidden">
            <img className="h-full w-full object-cover" src={imagePath} alt={`${student}'s IT Team`} />
          </div>
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-red-500 font-semibold">{designation}</div>
          <p className="mt-2 text-gray-500">{student}</p>
          <p className="mt-2 text-gray-500">{contact}</p>
        </div>
      </div>
    </div>
  );
};

const Pors = () => {
  return (
    <div className="bg-backgroundCol overflow-hidden relative">
      <img className="absolute w-[70%] left-[-35%]" src={redBlurSvg} />
      <img className="absolute w-[70%] left-[65%] top-[15%]" src={redBlurSvg} />

      <h1 className="text-[7vw] m-[5vw] mt-0 text-center bg-gradient-to-r from-red to-yellow text-transparent bg-clip-text">
        PORs
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
        {pors.map((por) => (
          <Card key={por.id} {...por} />
        ))}
      </div>
    </div>
  );
};

export default Pors;**/
// the following code is a different version and i am confused which to take, because of differences in size of images this is happening and i am unable to do more

import React from 'react';
import pors from '../data/pors';
import redBlurSvg from "../assets/redBlur.svg"

const Card = ({ id, student, designation, contact }) => {
  const imagePath = `src/data/porImages/${id}.jpeg`;

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md mb-4 z-1" style={{ backgroundColor: '#ffffff', color: '#100606' }}>
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-48  w-full" src={imagePath} alt={`${student}'s IT Team`} />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-red-500 font-semibold">{designation}</div>
          <p className="mt-2 text-gray-500">{student}</p>
          <p className="mt-2 text-gray-500">{contact}</p>
        </div>
      </div>
    </div>
  );
};

const Pors = () => {
  return (
    <div className="bg-backgroundCol overflow-hidden relative">
      <img className="absolute w-[70%] left-[-35%]" src={redBlurSvg} />

      <img className="absolute w-[70%] left-[65%] top-[15%]" src={redBlurSvg} />

      <h1 className="text-[4em] sm:text-[5em] m-[5vw] mt-0 text-center bg-gradient-to-r from-red to-yellow text-transparent bg-clip-text">
				PORs
			</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
        {
          pors.map((por) => (
            <Card key={por.id} {...por} />
          ))
        }
      </div>
    </div>
  );
};

export default Pors;
