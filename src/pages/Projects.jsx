import React from 'react';
import EventCard from '../data/EventCard';
import redBlurSvg from "../assets/redBlur.svg"

const ProjectsPage = () => {
	const projectsData = [
		{
		title: "Project 1",
		thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/HONDA_ASIMO.jpg/330px-HONDA_ASIMO.jpg", // Replace with the actual image URL
		videos: ["https://www.youtube.com/embed/video1", "https://www.youtube.com/embed/video2"],
		images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/HONDA_ASIMO.jpg/330px-HONDA_ASIMO.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/HONDA_ASIMO.jpg/330px-HONDA_ASIMO.jpg"],
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
		},
		{
		title: "Project 2",
		thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/HONDA_ASIMO.jpg/330px-HONDA_ASIMO.jpg", // Replace with the actual image URL
		videos: ["https://www.youtube.com/embed/video3", "https://www.youtube.com/embed/video4"],
		images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/HONDA_ASIMO.jpg/330px-HONDA_ASIMO.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/HONDA_ASIMO.jpg/330px-HONDA_ASIMO.jpg"],
		description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
		}
	];

	return (
		<div className="bg-backgroundCol overflow-hidden relative">
			<img className="absolute w-[70%] left-[-35%]" src={redBlurSvg} />

			{/* <img className="absolute w-[70%] left-[65%] top-[15%]" src={redBlurSvg} /> */}

			<h1 className="text-[6vw] pb-[1em] text-center bg-gradient-to-r from-red to-yellow text-transparent bg-clip-text">Projects</h1>
			<div className="flex flex-wrap justify-center">
				{
					projectsData.map((project, index) => (
						<EventCard key={index} {...project} />
					))
				}
			</div>
		</div>
	);
};

// Similar components for WorkshopsPage and GuestTalksPage

export default ProjectsPage;
