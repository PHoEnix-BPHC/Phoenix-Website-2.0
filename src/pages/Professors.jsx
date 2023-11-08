import { useState } from 'react';

const Professors = () => {

	function liForEachProfessorData(obj, highlightIndex, highlightLength) {
		let keys = Object.keys(obj);
		let vals = Object.values(obj);
		let lijsx = [];

		for (let i = 1; i < keys.length; ++i) {
			if (keys[i] === "faculty" && highlightLength > 0) {
				lijsx.push(<li key={i}><span className="font-bold text-[1.5vw]">{keys[i]}</span><span className="text-[1.2vw]"> : {vals[i].slice(0, highlightIndex)}</span><span className="text-[1.2vw] bg-yellow">{vals[i].slice(highlightIndex, highlightIndex + highlightLength)}</span><span className="text-[1.2vw]">{vals[i].slice(highlightIndex + highlightLength)}</span></li>);
			} else {
				lijsx.push(<li key={i}><span className="font-bold text-[1.5vw]">{keys[i]}</span><span className="text-[1.2vw]"> : {vals[i]}</span></li>);
			}
		}

		return lijsx;
	}

	let allProfDataJsx = professors.map((professor) => 
		<ul>
			<li key={professor.id} className="my-[10vh]"><ul>{liForEachProfessorData(professor)}</ul></li>
		</ul>
	);

	const [profDataJsx, setProfDataJsx] = useState(allProfDataJsx);

	function newSearch(event) {
		let search = event.target.value;

		// creates new list of professors to display
		let newProfDataJsx = professors.map((professor) => {
			let lowerFaculty = professor.faculty.toLowerCase();
			let lowerSearch = search.toLowerCase();
			if (lowerFaculty.includes(lowerSearch)) {
				return (<ul>
					<li key={professor.id} className="my-[10vh]"><ul>{liForEachProfessorData(professor, lowerFaculty.indexOf(lowerSearch), lowerSearch.length)}</ul></li>
				</ul>);
			};
		});
		
		// removes undefined/unmatched entries
		for (let i = newProfDataJsx.length - 1; i > -1; --i) {
			if (!newProfDataJsx[i]) {
				newProfDataJsx.splice(i, 1);
			}
		}
		//checks for empty/no mathces
		if (!newProfDataJsx.length) {
			newProfDataJsx = [<p className="font-bold text-[2vw] text-red">No Valid Matches...</p>]
		}

		setProfDataJsx(newProfDataJsx);
	}

	return (
		<div>
			<input className="box-border m-[5vw] w-[88vw] p-[1vw] rounded bg-lightestgray focus:bg-lightgray outline-none" type="text" placeholder="Search..." onChange={newSearch}></input>

			<h1 className="text-[5vw] m-[1vw]">Professors</h1>

			<ul className="m-[2vw]">{profDataJsx}</ul>
		</div>
	)
}

export default Professors;

let professors = [
	{
		id: 1,
		faculty: "Prof. Subhendu Kumar Sahoo",
		designation: "Professor",
		qualification: "Ph.D. (BITS-Pilani, Pilani Campus)",
		joinedBits: "1999",
		interests: "VLSI architecture for Digital Signal Processing",
		coursesTaught: "Digital Signal Processing; Signals and Systems; Communication network; Data communication and Networks; Telecommunication and switching system; Communication Systems; Digital Electronics, FPGA System Design"
	},
	{
		id: 2,
		faculty: "Prof. Sanket Goel",
		designation: "Professor, Dean-SRCD, PIC-CIIE",
		qualification: "BS (H - Delhi University), MS (IIT Delhi), PhD (University of Alberta, Canada), Postdoctoral (Stanford University)",
		joinedBits: "2015",
		experiences: "17 Years (2 years postdoc, 3 years public-funded R&D, 12 years academia)",
		interests: "MEMS, Microfluidics, Nanoelectronics, Flexible, Printed and Wearable Electronics, CyberPhysical Systems, Lab-on-a-chip, Point-of-Care devices, 3D printing, Fuel Cells, Smart sensors",
		coursesTaught: "Analog Electronics, Digital Design, Electrical Science, Electronic Devices, Electronic Instrumentation, IC Fabrication, MEMS, Microfluidics, Transducers & Measurement Systems",
		researchLab: "MEMS, Microfluidics and Nanoelectronics (MMNE) Lab"
	},
	{
		id: 3,
		faculty: "Prof. S Gurunarayanan",
		designation: "Senior Professor",
		qualification: "Ph.D. (BITS-Pilani)",
		joinedBits: "1987",
		experiences: "35 years in Academics",
		interests: "Digital VLSI Design, Processor Architecture",
		coursesTaught: "Electronics, VLSI Design, Digital Design, Microprocessors Programming & Interfacing, VLSI Architecture, Analog Electronics, Embedded System Design, Computer Architecture"
	},
	{
		id: 4,
		faculty: "Prof. Alivelu Manga Parimi",
		designation: "Professor",
		qualification: "PhD (University Technology Petronas, Malaysia)",
		joinedBits: "2012",
		experiences: "21 years in Academics",
		interests: "Renewable Energy Sources, Microgrids, FACTS devices, Power system stability, Power Quality, Reactive power compensation, Modal Analysis, Control Systems, Batteries, Implementation of ML Techniques",
		coursesTaught: "Electrical Machines, Modern Control Systems, Power Systems; Control Systems; Electrical Sciences; Power Systems Engineering(WILP); Electromechanical Energy Conversion, Power System Operation and Control, Transducers and Measurement Systems, Power Electronics"
	},
	{
		id: 5,
		faculty: "Prof. Prasant Kumar Pattnaik",
		designation: "Associate Professor",
		qualification: "Ph.D (Indian Institute of Science, Bangalore)",
		joinedBits: "2012",
		experiences: "14 years Academics, 1 year Industry",
		interests: "Photonics, Optical Communications, Photonic Integrated Circuits, & Ongoing Project Microfluidics and MEMS - DST-SERB (51.42 Lakhs), Microwave Engineering - BRNS (25.5 Lakhs)",
		coursesTaught : "Optical Communications, Fiber Optics and Optoelectronics, Communication Systems, Analog Electronics, Introduction to MEMS Electrical Sciences, Electromagnetic Fields and Microwave Engineering, Electromagnetic Fields and Waves, Integrated Optics, Digital Electronics (Lab), Analog Electronics (Lab), Microwave Engineering (Lab), Communication Systems (Lab), Electrical and Electronics Circuits (Lab)"
	},
	{
		id: 6,
		faculty: "Prof. Runa Kumari",
		designation: "Associate Professor",
		qualification: "Ph.D (NIT-Rourkela)",
		joinedBits: "2014",
		experiences: "4 years",
		interests: "Dielectric Resonator Antenna, Log periodic Antenna, Reconfigurable Antenna, Microstrip antenna, EBG, Metamaterial, Antenna Array",
		coursesTaught: "Electrical Sciences, Communication Systems, Microprocessor Programming and Interfacing, Electromagnetic Fields and Microwave Engineering, Mobile & Personal Communication, RF & Microwave Engg., Coding Theory & Practice, Advanced Digital Communication, Satellite Communication, Communication Networks, Information Theory & Coding"
	},
	{
		id: 7,
		faculty: "Dr. Venkateswaran Rajagopalan",
		designation: "Associate Professor",
		qualification: "D.Eng (Cleveland State University, Cleveland, OH, USA)",
		joinedBits: "2014",
		interests: "Human brain mapping using Magnetic Resonance Imaging (MRI), Transcranial Magnetic Stimulation (TMS), Electroencephalography (EEG), Positron Emission Tomography (PET), Neurological disorders Amyotrophic Lateral Sclerosis (ALS), Multiple Sclerosis (MS), Brain Tumor, Machine Learning, Graph Theory (brain network analysis)",
		coursesTaught: "Signals and Systems, Digital Image Processing, Digital Signal processing, Advanced Digital Signal Processing, Medical Instrumentation, Introduction to Artificial Neural Networks"
	},
	{
		id: 8,
		faculty: "Prof. Surya Shankar Dan",
		designation: "Associate Professor",
		qualification: "Ph.D. (IISc Bangalore)",
		joinedBits: "2016",
		interests: "(1) Development of ML-based data-driven modeling of nanoelectronic devices for their circuit applications; (2) Development of physics-based compact analytical models for nanoelectronic devices and their circuit applications; (3) Design of ultra-low-power and high-performance analog, digital and ternary circuits at the state-of-the-art technology nodes; (4) Development of device and circuit simulators for SPICE applications",
		coursesTaught : "Advanced VLSI Design (HD), Physics & Modeling of Microelectronic Devices (HD), Microelectronic Circuits (FD), Analog & Digital VLSI Design (FD), Electronic Devices (FD)",
		researchLab: "Nanoelectronic Devices and Circuits Laboratory (NDCL)"
	},
	{
		id: 9,
		faculty: "Prof. Sumit Kumar Chatterjee",
		designation: "Associate Professor",
		qualification: "Ph.D (IIT Kharagpur)",
		joinedBits: "2015",
		experiences: "16 years",
		interests: "Digital VLSI Design, Video Compression.",
		coursesTaught: "Digital Signal Processing, Digital Image Processing, Analog & Digital VLSI Design, CAD for IC Design, Advanced VLSI Design"
	},
	{
		id: 10,
		faculty: "Prof. Soumya J",
		designation: "Associate Professor",
		qualification: "Ph.D (IIT-Kharagpur)",
		joinedBits: "2015",
		experiences: "9 months (Industry), 9 years (Academics)",
		interests: "Network-on-Chip (NoC) design, Reconfigurable System design, Fault-Tolerant System Design, Real Time Systems, Verification.",
		coursesTaught: "Microprocessors Programming and Interfacing, Embedded System Design, Real Time systems, Hardware Software Co-design, Digital Electronics, Device Drivers, Software for Embedded Systems"
	},
	{
		id: 11,
		faculty: "Prof. Radhika Sudha",
		designation: "Associate Professor",
		qualification: "Ph.D (Tokyo Polytechnic University, Tokyo, Japan)",
		joinedBits: "2017",
		experiences: "19 years (Teaching and Research)",
		interests: "Power Electronics, Machine Condition Monitoring, Pattern recognition, Renewable Energy, ANN, IoT, Smart Grids, Energy Storage Systems",
		coursesTaught: "Prior BITS: Control systems, Static Drives, Basic Electronics, In BITS : Power Electronics, Electrical Sciences, Transducers and Measurement Systems, Digital Image processing, Electrical Machines"
	},
	{
		id: 12,
		faculty: "Dr. Mithun Mondal",
		designation: "Assistant Professor",
		qualification: "Ph.D (IIT- Roorkee)",
		joinedBits: "2017",
		experiences: "2 years Academics",
		interests: "High Voltage Engineering, Condition Monitoring and Diagnostics of Transformers , High Voltage Engineering.",
		coursesTaught: "Power Systems, Electrical Machines, Electrical Sciences"
	},
	{
		id: 13,
		faculty: "Dr. Harish V Dixit",
		designation: "Assistant Professor",
		qualification: "Ph.D (VJTI)",
		joinedBits: "2017",
		experiences: "9 years",
		interests: "Microwave and RF Engineering (High and Low Power), Multiphysics Analysis, Pulsed Power Technology",
		coursesTaught: "In BITS-Electromagnetic Fields and Microwave Engineering, Control Systems, Control System Lab, RF Microelectronics, Prior to BITSCircuit Theory and Transmission lines, Microwave Engineering, RF Circuit Design, Wave Theory and Propagation, Radio Frequency Modelling and Antennas"
	},
	{
		id: 14,
		faculty: "Dr. Sourav Nandi",
		designation: "Assistant Professor",
		qualification: "Ph.D (IIT Kharagpur)",
		joinedBits: "2018",
		interests: "Microstrip and Substrate Integrated Waveguide Antennas, Flexible Antennas, RF & Microwave Circuits, Antenna based Sensors",
		coursesTaught: "EM Fields & Microwave Engineering, RF & Microwave Engineering, Antenna Theory and Design, Electrical Sciences, Wireles and Mobile Communication (WILP), RF Microelectronics, Microprocessor Programming & Interfacing (Tutorial & Lab), Digital Design(Tutorial)"
	}
];