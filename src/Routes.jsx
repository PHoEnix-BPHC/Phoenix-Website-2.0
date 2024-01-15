import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import Professors from './pages/Professors.jsx';
import Pors from './pages/Pors.jsx';
import ItTeam from './pages/ItTeam.jsx';
import PageNotFound from "./pages/PageNotFound.jsx";
import GuestTalks from './pages/GuestTalk.jsx';
import Workshops from './pages/Workshops.jsx';

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />}/>
				<Route path="/professors" element={<Professors />}/>
				<Route path="/projects" element={<Projects />}/>
				<Route path="/pors" element={<Pors />}/>
				<Route path="/it-team" element={<ItTeam />}/>
				<Route path="/guest-talk" element={<GuestTalks />}/>
				<Route path="/workshops" element={<Workshops />}/>
				<Route path="/*" element={<PageNotFound />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	)
}

export default App;