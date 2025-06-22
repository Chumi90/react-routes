import React from 'react';
//npm i react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'
import Projects from './projects'
import Resume from './resume'


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
    </>
  );
}
export default App;