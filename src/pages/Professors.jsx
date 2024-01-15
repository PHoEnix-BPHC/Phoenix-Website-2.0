import { useState } from 'react';
import professors from '../data/professors.js';

import {Image, Dropdown, DropdownButton} from 'react-bootstrap';

import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Professors = () => {

	let allKeys = ["faculty", "designation", "qualification", "joinedBits", "experiences", "interests", "coursesTaught", "researchLab"]
	let [currentKey, setCurrentKey] = useState(allKeys[0]);
	let [prevSearchVal, setPrevSearchVal] = useState("");

	function liForEachProfessorData(obj, highlightIndex, highlightLength) {
		let keys = Object.keys(obj);
		let vals = Object.values(obj);
		let lijsx = [];

		for (let i = 2; i < keys.length; ++i) {
			if (keys[i] === currentKey && highlightLength > 0) {
				lijsx.push(<li key={i}>
						<span className="font-bold text-[1.5vw]">{keys[i]}</span>
						<span className="text-[1.2vw]"> : {vals[i].slice(0, highlightIndex)}</span>
						<span className="text-[1.2vw] bg-yellow">{vals[i].slice(highlightIndex, highlightIndex + highlightLength)}</span>
						<span className="text-[1.2vw]">{vals[i].slice(highlightIndex + highlightLength)}</span>
					</li>);
			} else {
				lijsx.push(<li key={i}>
						<span className="font-bold text-[1.5vw]">{keys[i]}</span>
						<span className="text-[1.2vw]"> : {vals[i]}</span>
					</li>);
			}
		}

		return lijsx;
	}

	let allProfDataJsx = professors.map((professor) => {
		let src = "/src/data/professorImages/" + professor.faculty + ".png";

		return (<Accordion className="w-[100%] h-[100%] rounded border-solid border-8">
			<AccordionSummary className="justify-items-center" expandIcon={<ExpandMoreIcon />}>
				<div className="flex flex-col w-full h-full items-center">
					<Image className="w-[10rem] h-[10rem]" src={src}/>
					<p className="block text-lg m-[2%]">{professor.faculty}</p>
				</div>
			</AccordionSummary>
			<AccordionDetails>
				<ul>{liForEachProfessorData(professor)}</ul>
			</AccordionDetails>
		</Accordion>)
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
				return (<Accordion className="w-[100%] h-[100%] rounded border-solid border-8">
					<AccordionSummary className="justify-items-center" expandIcon={<ExpandMoreIcon />}>
						<div className="flex flex-col w-full h-full items-center">
							<Image className="w-[10rem] h-[10rem]" src={src}/>
							<p className="block text-lg m-[2%]">{professor.faculty}</p>
						</div>
					</AccordionSummary>
					<AccordionDetails>
						<ul>{liForEachProfessorData(professor, lowerKey.indexOf(lowerSearch), lowerSearch.length)}</ul>
					</AccordionDetails>
				</Accordion>)
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

		newProfDataJsx = (
			<div className="grid grid-cols-2 grid-rows-16 items-center gap-x-[2em] gap-y-[2em] p-[5%]">
				{newProfDataJsx}
			</div>
		)

		setProfDataJsx(newProfDataJsx);
	}

	function dropdownOptionClick(event, key) {
		setCurrentKey(key);
		// newSearch(prevSearchVal, false);
	}

	let dropdownOptions = allKeys.map((key) => {
		return (
			<Dropdown.Item as="button" className="hover:bg-lightestgray" onClick={(event) => dropdownOptionClick(event, key)}>{key}</Dropdown.Item>
		);
	});

	return (
		<div>
			<div className="m-[5vw] flex flex-col items-center">
				<div>
					<input className="box-border w-[60vw] p-[1vw] rounded bg-lightestgray focus:bg-lightgray outline-none" type="text" placeholder="Search..." onChange={newSearch}></input>
					<DropdownButton className="inline" variant="danger" title={currentKey}>
						{dropdownOptions}
					</DropdownButton>
				</div>
			</div>
			<h1 className="text-[6vw] m-[1vw] text-center bg-gradient-to-r from-red to-yellow text-transparent bg-clip-text">Professors</h1>
			{profDataJsx}
		</div>
	)
}

export default Professors;