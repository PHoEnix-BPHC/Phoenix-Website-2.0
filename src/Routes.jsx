import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from "./components/Header.jsx";
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import Professors from './pages/Professors.jsx';
import Pors from './pages/Pors.jsx';
import ItTeam from './pages/ItTeam.jsx';
import PageNotFound from "./pages/PageNotFound.jsx";

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
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;