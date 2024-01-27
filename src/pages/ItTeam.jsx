import React from 'react';
import itTeam from '../data/itTeam';
import redBlurSvg from "../assets/redBlur.svg"

const ITTeamCard = ({ id, student, designation, contact }) => {
  // Assuming your images are stored in the /data/itTeamImages folder
  const imagePath = `/data/itTeamImages/itTeam${id}.jpg`; // adjust the path accordingly

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md mb-4 z-1" style={{ backgroundColor: '#ffffff', color: '#100606' }}>
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          {/* <img className="h-48 w-full object-cover md:w-48" src={imagePath} alt={`${student}'s IT Team`} /> */}
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

const ITTeam = () => {
  return (
    <div className="bg-backgroundCol overflow-hidden relative">
      <img className="absolute w-[70%] left-[-35%]" src={redBlurSvg} />

      <h1 className="text-[4em] sm:text-[5em] m-[5vw] mt-0 text-center bg-gradient-to-r from-red to-yellow text-transparent bg-clip-text">
        IT Team 
			</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
        {itTeam.slice(0, 3).map((member) => (
          <ITTeamCard key={member.id} {...member} />
        ))}
        {itTeam.slice(3, 5).map((member) => (
          <ITTeamCard key={member.id} {...member} />
        ))}
      </div>
    </div>
  );
};

export default ITTeam;
