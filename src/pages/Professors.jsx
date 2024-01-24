import { useState } from 'react';
import professors from '../data/professors.js';

import { Image, Dropdown, DropdownButton, Modal } from 'react-bootstrap';

import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import redBlurSvg from "../assets/redBlur.svg"

const Professors = () => {
	const allKeys = [
		"faculty", 
		"designation", 
		"qualification", 
		"joinedBits", 
		"experiences", 
		"interests", 
		"coursesTaught", 
		"researchLab"
	];
	let [currentKey, setCurrentKey] = useState(allKeys[0]);
	let [prevSearchVal, setPrevSearchVal] = useState("");

	function liForEachProfessorData(obj, highlightIndex, highlightLength) {
		let keys = Object.keys(obj);
		let vals = Object.values(obj);
		let lijsx = [];

		for (let i = 2; i < keys.length; ++i) {
			if (keys[i] === currentKey && highlightLength > 0) {
				lijsx.push(
					<li key={i}>
						<span className="font-bold text-lg">
							{keys[i]}
							</span>
						<span className="text-base">
							: {vals[i].slice(0, highlightIndex)}
						</span>
						<span className="text-base bg-yellow">
							{vals[i].slice(highlightIndex, highlightIndex + highlightLength)}
						</span>
						<span className="text-base">
							{vals[i].slice(highlightIndex + highlightLength)}
						</span>
					</li>
				);
			} 
			else {
				lijsx.push(
					<li key={i}>
						<span className="font-bold text-base">
							{keys[i]}
						</span>
						<span className="text-base">
							: {vals[i]}
						</span>
					</li>
				);
			}
		}

		return lijsx;
	}

	function ProfCard({ name, src, data }) {
		const [show, setShow] = useState(false);

		const handleShow = () => setShow(true);
		const handleClose = () => setShow(false);

		return (
			<>
				<div className="flex flex-col w-full h-full items-center rounded border-solid border-2 text-white p-[3%] z-1" onClick={handleShow}>
					<Image className="w-[10rem] h-[10rem]" src={src} />
					<p className="block text-lg m-[2%]">
						{name}
					</p>
				</div>

				<Modal show={show} onHide={handleClose}>
					<Modal.Header>
					<Modal.Title>Professor Details</Modal.Title>
					</Modal.Header>
					<Modal.Body>{data}</Modal.Body>
					<Modal.Footer>
					</Modal.Footer>
				</Modal>
			</>
		);
	}

	let allProfDataJsx = professors.map((professor) => {
		let src = "/src/data/professorImages/" + professor.faculty + ".png";

		let professorData = (<ul>
			{liForEachProfessorData(professor)}
		</ul>)
		return < ProfCard name={professor.faculty} src={src} data={professorData}/>
	});

	allProfDataJsx = (
		<div className="grid grid-cols-2 items-center gap-x-[2em] gap-y-[2em] p-[5%]">
			{allProfDataJsx}
		</div>
	)

	const [profDataJsx, setProfDataJsx] = useState(allProfDataJsx);

	function newSearch(event, isEvent = true) {
		let search = isEvent ? event.target.value : event;
		setPrevSearchVal(search);

		// creates new list of professors to display
		let newProfDataJsx = professors.map((professor) => {
			let lowerKey = professor[currentKey].toLowerCase();
			let lowerSearch = search.toLowerCase();
			let src = "/src/data/professorImages/" + professor.faculty + ".png";
			
			if (lowerKey.includes(lowerSearch)) {
				let professorData = (<ul>
					{liForEachProfessorData(professor, lowerKey.indexOf(lowerSearch), lowerSearch.length)}
				</ul>)
				return < ProfCard name={professor.faculty} src={src} data={professorData}/>
			}
		});

		// removes undefined/unmatched entries
		for (let i = newProfDataJsx.length - 1; i > -1; --i) {
			if (!newProfDataJsx[i]) {
				newProfDataJsx.splice(i, 1);
			}
		}
		//checks for empty/no mathces
		if (!newProfDataJsx.length) {
			newProfDataJsx = [
				<p className="font-bold text-[2vw] text-red"
					key={1}
				>
					No Valid Matches...
				</p>
			];
		}

		newProfDataJsx = (
			<div className="grid grid-cols-2 grid-rows-16 items-center gap-x-[2em] gap-y-[2em] p-[5%] ">
				{newProfDataJsx}
			</div>
		)

		setProfDataJsx(newProfDataJsx);
	}

	const dropdownOptions = allKeys.map((key) => {
		return (
			<Dropdown.Item 
				as="button" 
				className="hover:bg-lightestgray" 
				onClick={() => setCurrentKey(key)}
				key={key}
			>
				{key}
			</Dropdown.Item>
		);
	});

	return (
		<div className="bg-backgroundCol overflow-hidden relative">
			<img className="absolute w-[70%] left-[-35%]" src={redBlurSvg} />
			<img className="absolute w-[70%] left-[-35%] top-[30%]" src={redBlurSvg} />
			<img className="absolute w-[70%] left-[-35%] top-[60%]" src={redBlurSvg} />

			<img className="absolute w-[70%] left-[65%] top-[15%]" src={redBlurSvg} />
			<img className="absolute w-[70%] left-[65%] top-[45%]" src={redBlurSvg} />
			<img className="absolute w-[70%] left-[65%] top-[75%]" src={redBlurSvg} />

			<h1 className="text-[7vw] m-[5vw] mt-0 text-center bg-gradient-to-r from-red to-yellow text-transparent bg-clip-text">
				Professors
			</h1>
			<div className="m-[5vw] mt-10 flex items-center gap-2 justify-center">
				<input 
					className="box-border w-[60vw] p-[1vw] rounded bg-lightestgray bg-opacity-70 outline-none
					focus:bg-lightgray focus:bg-opacity-80 focus:border-2 focus:border-red focus:border-opacity-55" 		
					type="text" 
					placeholder="Search..." 
					onChange={newSearch}
				/>
				<DropdownButton className="inline" variant="danger" title={currentKey}>
					{dropdownOptions}
				</DropdownButton>
			</div>
			{profDataJsx}
		</div>
	)
}

export default Professors;