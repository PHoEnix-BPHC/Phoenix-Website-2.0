import React from 'react';
import EventCard from '../data/EventCard';

const GuestTalksPage = () => {
  const guestTalksData = [
    {
      title: "Project 1",
      thumbnail: "https://placekitten.com/300/200", // Replace with the actual image URL
      videos: ["https://www.youtube.com/embed/video1", "https://www.youtube.com/embed/video2"],
      images: ["https://placekitten.com/400/300", "https://placekitten.com/500/400"],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title: "Project 2",
      thumbnail: "https://placekitten.com/300/201", // Replace with the actual image URL
      videos: ["https://www.youtube.com/embed/video3", "https://www.youtube.com/embed/video4"],
      images: ["https://placekitten.com/401/301", "https://placekitten.com/501/401"],
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
  ];

  return (
    <div>
      <h1>GuestTalks</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {guestTalksData.map((guestTalks, index) => (
          <EventCard key={index} {...guestTalks} />
        ))}
      </div>
    </div>
  );
};

// Similar components for WorkshopsPage and GuestTalksPage

export default GuestTalksPage;
