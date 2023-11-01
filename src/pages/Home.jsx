import centralSquiggle from '../assets/centralSquiggle.svg';

const Home = () => {
	return (
		<div className="font-grotesk">	
			<div className="absolute top-0 left-0 grid grid-rows-[100vh] grid-cols-[100vw] justify-items-center items-center">
				<img className="h-[80%]" src={centralSquiggle} />
			</div>

			<div className="grid grid-rows-[60vh_100vh] grid-columns-[100vw] items-center justify-items-center">
				<div className="text-center">
					<p>BPHC's Electronics Association</p>
					<h1 className="bg-gradient-to-r from-red-500 to-yellow-500 text-[8vw]">PHoEnix</h1>
					<p>dhfajkhfjdkashfal</p>
				</div>

				<div className="self-start pt-[40vh]">
					<h1 className="bg-gradient-to-r from-red-500 to-yellow-500 text-[5vh]">WhatWeDo</h1>
				</div>
			</div>
		</div>
	);
}

export default Home;