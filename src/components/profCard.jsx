import CourseIcon from "../assets/course-svgrepo-com.svg"
import InterestsIcon from "../assets/star-circle-svgrepo-com.svg"

const ProfCard = () => {
    const data = {
        id: 21,
        faculty: "Dr. Parikshit Sahatiya",
        designation: "Assistant Professor",
        qualification: "Ph.D (IIT Hyderabad)",
        joinedBits: "Dec 2018",
        experiences: "Research Scientist (Redpine Signals), Visiting Professor, Purdue University, USA, Visiting Professor, Tufts University, USA",
        interests: "Flexible and Wearable Electronics, 2D Materials-based Electronics, Broadband Photodetectors, Resistive memories, Transient Electronics, VOC sensing, Papertronics, etc.",
        coursesTaught: "Analog Electronics, Microelectronic Circuits, Electrical Science, and IC Fabrication Technology"
        }

    return (
        <div className="max-w-sm w-full lg:max-w-full lg:flex ml-2">
  <div className="lg:h-auto h-72 lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-center" style={{backgroundImage: "url('../src/data/professor pictures/" + data.faculty + ".png')", }} title="Woman holding a mug">
  </div>
  <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div className="mb-8">
    <p className="text-sm text-gray-600 flex items-center">{data.designation}</p>
      <div className="text-gray-900 font-bold text-xl mb-0">{data.faculty}</div>
      
      <p className="text-gray-700 text-base mb-2">{data.qualification} | {data.experiences}</p>
     {data.interests && <div className="mt-2">
      <img className="h-7 w-7 text-white inline" src = {InterestsIcon}/>
      <p className="text-black inline"> Interests</p>
      <p className="text-gray-700 text-base ml-8">{data.interests}</p>
      </div> }

      { 
        data.coursesTaught && <div className="mt-2">
      <img className="h-7 w-7 text-white inline" src = {CourseIcon}/>
      <p className="text-black inline"> Courses taught</p>
      <p className="text-gray-700 text-base ml-8">{data.coursesTaught}</p>
      </div> }  
    </div>  
    <div className="flex items-center">
      <img className="w-10 h-10 rounded-full mr-4" src="src/assets/png-transparent-birla-institute-of-technology-and-science-pilani-dubai-campus-birla-institute-of-technology-science-pilani-hyderabad-birla-institute-of-technology-science-pilani-goa-student-emblem-people-logo.png" alt="Avatar of Jonathan Reinink" />
      <div className="text-sm">
        <p className="text-gray-900 leading-none">Joined BITS Pilani, Hyderabad Campus</p>
        <p className="text-gray-600">{data.joinedBits}</p>
      </div>
    </div>
  </div>
</div>
    );
}

export default ProfCard;