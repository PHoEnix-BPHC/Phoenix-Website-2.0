import React from 'react';
import EventCard from '../data/EventCard';
import redBlurSvg from "../assets/redBlur.svg";

const WorkshopsPage = () => {
  const workshopsData = [
    {
      title: "Workshop 1",
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/HONDA_ASIMO.jpg/330px-HONDA_ASIMO.jpg",
      videos: ["https://www.youtube.com/embed/inLh-UAWu_g", "https://www.youtube.com/embed/video2", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/HONDA_ASIMO.jpg/330px-HONDA_ASIMO.jpg"],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title: "Workshop 2",
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/HONDA_ASIMO.jpg/330px-HONDA_ASIMO.jpg",
      videos: ["https://www.youtube.com/embed/video3", "https://www.youtube.com/embed/video4"],
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      title: "Workshop 2",
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/HONDA_ASIMO.jpg/330px-HONDA_ASIMO.jpg",
      videos: ["https://www.youtube.com/embed/video3", "https://www.youtube.com/embed/video4"],
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      title: "Workshop 2",
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/HONDA_ASIMO.jpg/330px-HONDA_ASIMO.jpg",
      videos: ["https://www.youtube.com/embed/video3", "https://www.youtube.com/embed/video4"],
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      title: "Workshop 2",
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/HONDA_ASIMO.jpg/330px-HONDA_ASIMO.jpg",
      videos: ["https://www.youtube.com/embed/video3", "https://www.youtube.com/embed/video4"],
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      title: "Workshop 2",
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/HONDA_ASIMO.jpg/330px-HONDA_ASIMO.jpg",
      videos: ["https://www.youtube.com/embed/video3", "https://www.youtube.com/embed/video4"],
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      title: "Workshop 2",
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/HONDA_ASIMO.jpg/330px-HONDA_ASIMO.jpg",
      videos: ["https://www.youtube.com/embed/video3", "https://www.youtube.com/embed/video4"],
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      title: "Workshop 2",
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/HONDA_ASIMO.jpg/330px-HONDA_ASIMO.jpg",
      videos: ["https://www.youtube.com/embed/video3", "https://www.youtube.com/embed/video4"],
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      title: "Workshop 2",
      thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/HONDA_ASIMO.jpg/330px-HONDA_ASIMO.jpg",
      videos: ["https://www.youtube.com/embed/video3", "https://www.youtube.com/embed/video4"],
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    
  ];

  return (
    <div className="bg-backgroundCol overflow-hidden relative">
      <img className="absolute w-[70%] left-[-35%]" src={redBlurSvg} alt="red blur background" />
      <div className='container'>

      <h1 className="text-[6vw] pb-[1em] text-center bg-gradient-to-r from-red to-yellow text-transparent bg-clip-text">Workshops</h1>
      <div className="flex flex-wrap justify-center">
        {workshopsData.map((workshop, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 mb-8">
            <EventCard {...workshop} />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default WorkshopsPage;
