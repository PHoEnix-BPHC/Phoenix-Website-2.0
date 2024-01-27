import React from 'react';
import centralSquiggle from '../assets/centralSquiggle.svg';
import WhatWeDoCard from '../components/WhatWeDoCard';
import whatWeDo from '../data/whatWeDo';
import redBlurSvg from "../assets/redBlur.svg"
import AboutUs from '../components/AboutUs';
import ImageSection from '../components/ImageSection';
import MessageSection from '../components/Messages';

const Home = () => {
  return ( <div className="font-grotesk bg-backgroundCol overflow-hidden relative ">
    <div className='container'>
    <img className="absolute w-[70%] left-[-35%]" src={redBlurSvg} />
    

    <img className="absolute w-[70%] left-[65%]" src={redBlurSvg} />

    <div className=" absolute top-25 left-0 grid grid-rows-[85vh] grid-cols-[98vw] justify-items-center items-center">
      <img className="w-[70%]" src={centralSquiggle} alt="Central Squiggle" />
    </div>

    <div className="grid grid-rows-[90vh_100vh] grid-columns-[100vw] items-center justify-items-center">
      <div className="text-center">
        <p className="text-[1.9vw] text-white">BPHC's Electronics Association</p>
        <h1 className="font-gothic bg-gradient-to-r from-red to-yellow text-transparent bg-clip-text text-[6vw]">PHoEnix</h1>
        <p className="text-[1.3vw] text-lightestgray">Perpetual Hankerers of Electronics</p>
        <p className="text-[1.3vw] text-lightestgray">Present to You</p>
      </div>

      <div className="self-start pt-[10vh]">
        <h1 className="bg-gradient-to-r from-red to-yellow text-transparent bg-clip-text text-[10vh] text-center">What We Do</h1>
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
    <AboutUs/>
    <MessageSection/>
    <ImageSection/>
    </div>
  </div>);
};

export default Home;
