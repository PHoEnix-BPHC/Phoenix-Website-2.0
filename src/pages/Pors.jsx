import React from 'react';
import pors from '../data/pors';

const Card = ({ id, student, designation, contact }) => {
  const imagePath = `src/data/porImages/${id}.jpeg`;

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md" style={{ backgroundColor: '#ffffff', color: '#100606' }}>
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-48 w-full object-cover md:w-48" src={imagePath} alt={`${student}`} />
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
    <>
      <h1 className="text-[6vw] pb-[1em] text-center bg-gradient-to-r from-red-500 to-yellow-500 text-transparent bg-clip-text">PORs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-8">
        {pors.map((por) => (
          <Card key={por.id} {...por} />
        ))}
      </div>
    </>
  );
};

export default Pors;
