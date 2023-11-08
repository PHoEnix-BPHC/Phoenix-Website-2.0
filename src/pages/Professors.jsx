import { useState } from 'react';
import professors from '../data/professors.js';

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