import { useState } from 'react';
import professors from '../data/professors.js';

const Professors = () => {

	let allKeys = ["faculty", "designation", "qualification", "joinedBits", "experiences", "interests", "coursesTaught", "researchLab"]
	let [currentKey, setCurrentKey] = useState(allKeys[0]);

	function liForEachProfessorData(obj, highlightIndex, highlightLength) {
		let keys = Object.keys(obj);
		let vals = Object.values(obj);
		let lijsx = [];

		for (let i = 1; i < keys.length; ++i) {
			if (keys[i] === currentKey && highlightLength > 0) {
				lijsx.push(<li key={i}><span className="font-bold text-[1.5vw]">{keys[i]}</span><span className="text-[1.2vw]"> : {vals[i].slice(0, highlightIndex)}</span><span className="text-[1.2vw] bg-yellow">{vals[i].slice(highlightIndex, highlightIndex + highlightLength)}</span><span className="text-[1.2vw]">{vals[i].slice(highlightIndex + highlightLength)}</span></li>);
			} else {
				lijsx.push(<li key={i}><span className="font-bold text-[1.5vw]">{keys[i]}</span><span className="text-[1.2vw]"> : {vals[i]}</span></li>);
			}
		}

		return lijsx;
	}

	let allProfDataJsx = professors.map((professor) => 
		<ul>
			<li key={professor.id} className="my-[10vh]"><img src={"../data/professorImages/" + professor.faculty + ".png"}/><ul>{liForEachProfessorData(professor)}</ul></li>
		</ul>
	);

	const [profDataJsx, setProfDataJsx] = useState(allProfDataJsx);

	function newSearch(event) {
		let search = event.target ? event.target.value : event;

		// creates new list of professors to display
		let newProfDataJsx = professors.map((professor) => {
			let lowerKey = professor[currentKey].toLowerCase();
			let lowerSearch = search.toLowerCase();
			if (lowerKey.includes(lowerSearch)) {
				return (<ul>
					<li key={professor.id} className="my-[10vh]"><ul>{liForEachProfessorData(professor, lowerKey.indexOf(lowerSearch), lowerSearch.length)}</ul></li>
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

	function dropdownOptionClick(event, key) {
		setCurrentKey(key);
		// newSearch(searchVal);
	}

	let dropdownOptions = allKeys.map((key) => {
		return (
			<li className="border-solid border-2 w-[10vw] text-center hover:bg-lightestgray py-[1vh] text-[1vw]" onClick={(event) => dropdownOptionClick(event, key)}>{key}</li>
		);
	});

	return (
		<div>
			<div className="m-[5vw]">
				<input className="box-border w-[60vw] h-[7vh] p-[1vw] rounded bg-lightestgray focus:bg-lightgray outline-none" type="text" placeholder="Search..." onChange={newSearch}></input>
				<span className="group">
					<button className="relative h-[7vh] w-[10vw] top-[0.2vh] rounded text-white bg-red hover:bg-lightgray text-[1.5vw]">{currentKey}</button>
					<div className="hidden group-hover:inline-block absolute">
						<ul>{dropdownOptions}</ul>
					</div>
				</span>
			</div>
			<h1 className="text-[5vw] m-[1vw]">Professors</h1>

			<ul className="m-[2vw]">{profDataJsx}</ul>
		</div>
	)
}

export default Professors;