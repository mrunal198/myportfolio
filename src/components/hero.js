import './App.css';

import profile from './profile.png';
import React, { useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter as Router
import NavBar from './nav';
import Skills from './skills';
import Projects from './projects';
import Contact from './contact';
import Artwork from './Artworks';
import { usePDF } from 'react-to-pdf';
import resume from './Blockchain_developer_Mrunal_More.pdf'

function Hero() {
  const skillsRef = useRef(null);
  const ProjectsRef = useRef(null);
  const ContactRef = useRef(null);
  
  const [showArtwork, setShowArtwork] = useState(false);

  const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});
  

  return (
    <div className="App">
      <div className='side'></div>
      <div className='profile'></div>
      <div className='navbar'>
        <Router> {/* Wrap Routes in Router */}
          <NavBar
            scrollToSkills={() => skillsRef.current.scrollIntoView({ behavior: 'smooth' })}
            scrollToProjects={() => ProjectsRef.current.scrollIntoView({ behavior: 'smooth' })}
            scrollToContact={() => ContactRef.current.scrollIntoView({ behavior: 'smooth' })}
            toggleArtwork={() => setShowArtwork(!showArtwork)}

          />
          <Routes>
            <Route path="/skills" element={<Skills />} />
            {/* <Route path="/projects" element={<Projects />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}
            {/* <Route path='/Artworks' element={<Artwork/>}/> */}
            {showArtwork?<Route path="/Artworks" element={<Artwork/>} />:<></>}
          </Routes>
        </Router>
      </div>
      <div className='alldetail'>
        <div className='name'>Mrunal More</div>
        <div className='detail'>Blockchain Developer/Digital artist </div>
        <a
        href={resume}
        download="Blockchain_developer_Mrunal_More"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className='hireme'>Hire me</button></a>
        {/* <button className='Resume' onClick={() => toPDF()}>Resume</button> */}
        {/* <div ref={targetRef}>{resume}</div> */}
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={ProjectsRef}>
        <Projects />
      </div>
      <div ref={ContactRef}>
        <Contact />
      </div>
      {showArtwork && <Artwork />}
      <div className='slikdiv'></div>
    </div>
  );
}

export default Hero;
