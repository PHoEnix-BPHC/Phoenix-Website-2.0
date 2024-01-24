import React from 'react';
import centralSquiggle from '../assets/centralSquiggle.svg';
import WhatWeDoCard from '../components/WhatWeDoCard';
import whatWeDo from '../data/whatWeDo';

const Home = () => {
  return (
    <div className="font-grotesk">
      <div className="z-[-1] absolute top-25 left-0 grid grid-rows-[100vh] grid-cols-[98vw] justify-items-center items-center">
        <img className="w-[60%]" src={centralSquiggle} alt="Central Squiggle" />
      </div>

      <div className="grid grid-rows-[95vh_100vh] grid-columns-[100vw] items-center justify-items-center">
        <div className="text-center">
          <p className="text-[1.9vw]">BPHC's Electronics Association</p>
          <h1 className="font-gothic bg-gradient-to-r from-red to-yellow text-transparent bg-clip-text text-[6vw]">PHoEnix</h1>
          <p className="text-[1.3vw]">dhfajkhfjdkashfal</p>
        </div>

        <div className="self-start pt-[10vh]">
          <h1 className="bg-gradient-to-r from-red to-yellow text-transparent bg-clip-text text-[5vh]">WhatWeDo</h1>
          <div className="grid grid-cols-3 gap-4">
          {whatWeDo.map((item) => (
            <WhatWeDoCard
              key={item.id}
              imageUrl={`src/data/whatwedo/${item.id}.jpg`} // Adjust the path accordingly
              title={item.title}
              description={item.description}
              linkTo={item.linkto}
            />
          ))}
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Home;
